---
sidebar_position: 11
---

# Settings

Configuration of your SYNQ radio device is managed through the transcript viewer application.

## Signing In
To access the transcript viewer:
1. Sign into __MyStore__ as a Location Administrator.
2. Select __Radio__.

## Making Changes
1. Select the __Settings__ tab. 
2. Select the desired device. 
3. This loads a read only view of the current settings.
4. Click the __⋮__ menu and select __Edit__
5. The settings are now editable.
6. Make the desired changes.
7. Click the __Save__ button to commit your changes.

## Adjusting Volume
Setting appropriate volume levels is critical to a well performing system. You want levels to be loud enough to hear, but no so loud that it causes distortion or clipping of the audio signal.

To make volume adjustments:
1. Select the __Audio__ tab. 
2. __Speaker Volume__ controls the output volume of the audio played over the donor radio.
3. __Microphone Volume__ controls the capture volume of the audio received by the donor radio.
:::note
The donor radio also has physical volume controls (knobs or buttons). In most cases the volume of the donor radio should be set to 50% or lower.
:::

## Frontline Hero
To enable SYNQ Radio to work with Frontline Hero applications like Call for Help and Curbside:
1. Sign into __MyStore__ as Location Administrator.
2. Select __Configure Store__ from the sidebar.
3. Scroll down to the __Webhooks__ section.
4. Provide the __Webhook URL__ with your SYNQ Radio instance URL. For example, 
   - `https://synq-voice.lemonhill-4dfb2d3c.canadacentral.azurecontainerapps.io/webhooks/incoming/frontline-hero`
5. Provide a secret random value for the __Webhook Secret__.
6. Check the desired checkboxes to enable sending webhook requests for the following applications:
   - Call for Help
   - Curbside
   - Picking Utility/Order Up
7. Click __Update Location Settings__ at the bottom of the page.
8. Select __Manage Users__ from the sidebar and follow the instructions to [create a service account](../mystore/user-management.md#service-accounts) and generate a [Personal Access Token](../mystore/user-management.md#personal-access-tokens).
9. Select __Radio__ from the sidebar.
10. Select __Settings__.
11. Select the desired edge device.
12. Click the __⋮__ menu and select __Edit__.
13. Select the __Frontline Hero__ tab.
14. Toggle on/off announcements for Call for Help.
    1.  Optionally check the desired __States to Announce__.
        - By default it announces when Call for Help requests are created, escalated, and cancelled.
    2.  Optionally check the desired __Repeat Alerts to Announce__.
        - By default no repeat alerts are announced.
15. Toggle on/off announcements for Curbside.
    1.  Optionally check the desired __States to Announce__.
        - By default it announces when Curbside requests are created, and unreviewed.
16. Toggle on/off announcements for Order Up.
    - Order Up only announces when new Order Up orders are created.
17. Enter the __Personal Access Token__ from above as the __User Access Token__.
18. Enter the __Verification Token__ from above as the __Webhook Validation Secret__.
19. Click __Save__.

## Push-to-talk
Integration with push-to-talk systems is managed via the __Secondary Transports__ tab.

### Zello PTT
To enable Zello PTT:
1. Select the __Secondary Transports__ tab. 
2. Click the __Add Transport__ button.
3. Configure the following settings:
   - __Type__: `Zello`
   - __Endpoint__: The Zello API entry point. One of:
     - Zello Friends and Family: `wss://zello.io/ws`
     - Zello Work: `wss://zellowork.io/ws/<network-name>`
     - Zello Enterprise Server: `wss://<your-server-domain>/ws/mesh`
   - __Username__: The username of the Zello user to logon with.
   - __Password__: The password of the Zello user to logon with.
   - __Auth Token__: The Zello API authentication token to authenticate with. This is an alternative to providing Username and Password that is only used with "Zello Friends and Family".
4. Click __Add Channel__
5. Configure the following settings:
   - __Channel Name__: The name of the Zello channel to connect to.
6. If desired, configure additional channels.
7. Click the __Save__ button on the dialog.
8. Click the __Save__ button on the form to commit your changes.
9. Click the __⋮__ menu and select __Restart Edge__.
11. Wait two minutes for the SYNQ Radio device to reload.
12. Test communication between the radios and Zello PTT users.

For more detail on Zello connection properties see the [Zello Channel API specification](https://github.com/zelloptt/zello-channel-api/blob/main/API.md).

### PTT Wake Phrases
Conversations initiated from the PTT application in the radio channel are always delivered immediately to the radios. However, not all radio traffic warrants delivery to the same PTT channel. Wake phrases allow you to configure a required phrase, like "Call supervisor channel", to initiate the connection to the PTT channel.

To enable a wake phrase for a PTT channel:
1. Select the __Secondary Transports__ tab. 
2. Click the __Edit__ button of the desired PTT transport.
3. Configure the following settings:
   - __Wake Phrase__: The phrase a radio user must say to initiate a call to the PTT application.
   - __Wake Response__: The system's response to the wake phrase indicating that the PTT call can begin.
   - __Wake Timeout (ms)__: The time in milliseconds after the last transmission that radio-to-PTT calling will return to sleep mode.

## Webhooks
Webhooks provide a way to deliver transcriptions to external applications. An external application could simply log the transcripts, or it could interpret what is said and make decisions and even API calls back to SYNQ radio.

To enable a webhook to send radio transcriptions to an external application:
1. Select the __Webhooks__ tab.
2. Click __Add Webhook__.
3. Specify the __URL__ of webhook endpoint to send to.
   - The URL must use `https://` with a valid certificate and must be reachable from SYNQ's cloud hosted servers. 
4. Specify a __Secret__ value that will be used to cryptographically sign all webhook requests. Your application can use this same secret to verify that incoming webhook requests came from SYNQ Radio. See [Validate Signed Webhook Requests](../apis/webhooks.md#validate-signed-webhook-requests) for more details.
5. Click __Save__.
6. See [Radio Webhooks API](../apis/webhooks.md#radio) for more details on the webhook payload.