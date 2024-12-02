---
sidebar_position: 10
---

# Webhooks
Webhooks provide a way for notifications to be delivered to an external web server whenever certain events occur in SYNQ.

SYNQ supports webhooks for a variety of events.

## Enable Webhooks
To enable webhooks:
1. Sign into __MyStore__
1. Select __Org/Branding__
1. Scroll down to __Webhooks Settings__
1. Enable webhooks for the desired applications:
    - [x] Call for Help
    - [x] Curbside
1. Set the __Event Webhook URL__ setting to the URL of your application that will receive the webhook request

## Event Payloads
SYNQ provides the following webhook event payloads as `application/json` data.
### Call for Help
```
{
    "type": "callforhelp",
    "created_at": "2024-11-13T17:42:44Z",
    "status": "created|claimed|completed|timed_out|cancelled",
    "details": {
        "type": "display|call_button",
        "name": "Call button 1",
        "option_text": "Request to speak to a manager",
        "option_prompt": "A customer would like to speak with a manager",
    },
    "internal_location_id": 1,
    "internal_id": 999,
    "store_number": "001",
    "message": "A new Call for Help Request has been created."
}
```

### Curbside
```
{
    "type": "curbside",
    "created_at": "2024-11-13T17:42:44Z",
    "status": "created|claimed|completed",
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

