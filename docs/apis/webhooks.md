---
sidebar_position: 10
---

# Webhooks
Webhooks provide a way for notifications to be delivered to an external web server whenever certain events occur in SYNQ.

SYNQ supports webhooks for a variety of events.

## Enable Webhooks
To enable webhooks:
1. Sign into __MyStore__ as a Location Administrator
1. Select __Location Config__
1. Scroll down to __Webhooks__
1. Set the __Webhook URL__ setting to the URL of your application that will receive the webhook request
1. Enable webhooks for the desired applications:
    - [x] Call for Help
    - [x] Curbside
1. Click __Update Location Settings__

## Event Payloads
SYNQ provides the following webhook event payloads as `application/json` data.
### Call for Help
```json
{
    "type": "callforhelp",
    "created_at": "2024-11-13T17:42:44Z",
    "status": "created|escalated|claimed|on_the_way|completed|timed_out|cancelled",
    "details": {
        "type": "display|call_button",
        "name": "Call button 1",
        "option_text": "Request to speak to a manager",
        "option_prompt": "A customer would like to speak with a manager",
    },
    "internal_location_id": 1,
    "internal_id": 999,
    "store_number": "001",
    "message": "A new Call for Help Request has been created.",
    "uuid": "00000000-0000-0000-0000-000000000000"
}
```

### Curbside
```json
{
    "type": "curbside",
    "created_at": "2024-11-13T17:42:44Z",
    "status": "created|claimed|completed|unreviewed_escalation|undelivered_escalation",
    "details": {
        "order_number": "1234",
        "order_pin": "4321",
    },
    "internal_location_id": 1,
    "internal_id": 999,
    "store_number": "001",
    "message": "A Curbside Customer has arrived to pick up Order <order_number> at <pickup_zone>"
}
```

### OrderUp
Coming soon!
```json
{
    "type": "orderup",
    "created_at": "2024-11-13T17:42:44Z",
    "status": "created|reviewed|claimed|picking|fulfilled|completed|cancelled",
    "details": {
        "order_number": "1234",
        "order_uid": "4321",
        "customer_number": "9876",
    },
    "internal_location_id": 1,
    "internal_id": 999,
    "store_number": "001",
    "message": "A Picking Utility Order has been created (Order#: <order_number>)"
}
```

### Radio
```json
{
    "type": "radio",
    "created_at": "2024-11-13T17:42:44Z",
    "status": "speech-detected",
    "details": {
        "edge_id": "6803a571-8904-441d-b2ec-6886e9307635",
        "text": "Cleanup on aisle 4.",
    }
}
```

## Validating webhook deliveries
You can use a webhook Verification Token to verify that a webhook delivery came from SYNQ and has not been tampered with.

When enabled, each webhook request is signed with your secret verification token. The server that receives the webhook request can then use the same secret verification token to confirm the authenticity of the request.

### Enable Signed Webhook Requests
To enable signed webhook requests:
1. Sign into __MyStore__ as a Location Administrator
2. Select __Location Config__
3. Scroll down to __Webhooks__
4. Provide a strong secret value for the the __Verification Token__
5. Click __Update Location Settings__

### Validate Signed Webhook Requests
To verify the signature of a webhook request received by your application:
1. Securely make the __Verification Token__ secret value available to your server application.
   - For example, using a environment variable or a key vault.
2. In your request pipeline extract the `x-signature` and `x-timestamp` headers.
3. Verify that the `x-timestamp` matches the current time (within an acceptable tolerance).
4. Verify that the SHA256 HMAC of the `x-timestamp` combined with the raw request body matches the `x-signature`.

The following is an example implementation that validates a signed request in a NodeJS Express application.
```javascript
import { createHmac, timingSafeEqual } from "crypto";
import express, { json } from "express";

const app = express();
app.use(json({
    verify: (req, res, buf, encoding) => {
        const currentTime = Date.now();
        const maxTimeDifference = 60 * 1000;
        const secretKey = process.env.secretKey;
        if (!secretKey) {
            throw new Error("Missing secretKey");
        }
        const signature = req.headers["x-signature"] as string;
        if (!signature) {
            throw new Error("Missing signature");
        }
        const timestamp = req.headers["x-timestamp"];
        if (!timestamp) {
            throw new Error("Missing timestamp");
        }
        if (Math.abs(currentTime - parseInt(timestamp)) > maxTimeDifference) {
            throw new Error("Expired timestamp");
        }
        const body = buf.toString();
        const message = timestamp + body;
        const serverSignature = createHmac("sha256", secretKey)
            .update(message)
            .digest("hex");
        if (timingSafeEqual(
            Buffer.from(signature, "hex"), 
            Buffer.from(serverSignature, "hex"))
        ) {
            console.log("Valid signature");
        } else {
            throw new Error("Invalid signature");
        }
    },
}));
```