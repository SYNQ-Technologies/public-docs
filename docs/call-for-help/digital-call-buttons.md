---
sidebar_position: 4
---

# Digital Call Buttons
SYNQ digital call buttons are easy to deploy QR codes that link customers with smart phones to a friendly web interface where they can request assistance from a variety of configurable prompts. These requests are relayed to associates via the notification channel of your choosing.

## Create a Digital Call Button display
To create a new digital call button QR Code:
1. Sign into __MyStore__
2. Select __Call for Help__
3. Select __Settings__
4. Scroll down to __Call for Help Displays__
5. Click the __＋__ button
6. Enter the following information:
   - Display Name
   - Notification Channel
   - Escalations Channel
7. Select the desired __Display Options__ to present to the customer. 
   - You can include between one and four options.
   - The list of available options come from your configured list of Call for Help Prompts. See [Prompts](./settings.md#prompts) for more information.
8. Check the __Enable QR Code__ checkbox
9. Click __Create Display__

## Test a QR Code Display
To test a QR Code display:
1. Sign into __MyStore__
2. Select __Call for Help__
3. Select __Settings__
4. Scroll down to __Call for Help Buttons__
5. Click the __⋮__ menu on the desired display and select __Download QR Code__
6. To test the display from your PC, click the __Try it Out__ button.
7. A popup window opens (emulating the customer's experience on their smart phone)
8. Select an option
9. Validate that the call for help request appears as a notification in the expected Teams channel

## Customer Experience
### Select an option
The customer selects from a list of options the type of help they desire.
<img src="/img/call-for-help/digital-call-button-options.png" alt="Digital call button options" style={{width: 400, border: '1px solid var(--ifm-toc-border-color)'}} />

### Request received
After submitting their request the customer sees a progress tracker page that showing that their request has been received.
<img src="/img/call-for-help/digital-call-button-notified.png" alt="Digital call button request received" style={{width: 400, border: '1px solid var(--ifm-toc-border-color)'}} />

### Request escalated
If the request is not claimed within the configured escalation timeout the progress tracker page can optionally show the customer that their request has been escalated.
<img src="/img/call-for-help/digital-call-button-escalated.png" alt="Digital call button request escalated" style={{width: 400, border: '1px solid var(--ifm-toc-border-color)'}} />

### Request claimed
Once the request is claimed by a staff member the progress tracker page updates to show that someone will be there soon.
<img src="/img/call-for-help/digital-call-button-claimed.png" alt="Digital call button request claimed" style={{width: 400, border: '1px solid var(--ifm-toc-border-color)'}} />

### Request done
Once a staff member indicates that they are on their way the progress tracker page updates to show that the staff member is arriving.
<img src="/img/call-for-help/digital-call-button-here.png" alt="Digital call button request here" style={{width: 400, border: '1px solid var(--ifm-toc-border-color)'}} />

## Settings

### Staff Display Name Format
When staff claim a request the system knows who did it. By default the full name of the staff member is displayed in the notification presented to staff and the customer facing tracking page of digital call buttons. You can use the __Staff Display Name Format__ setting to limit the name shown to just the first name, or provide something generic like "An Associate".

### Custom Input
By default, digital call buttons only allow the customer to select from a set of predefined prompts. If you would like the customer to be able to provide their own request by typing it in or using their web browser's microphone, you can enable the __Allow custom input__ setting.

:::note
Customer supplied inputs are limited to 200 characters and will be rejected if they fail to pass a profanity filter.
:::

<img src="/img/call-for-help/digital-call-button-text.png" alt="Digital call button text input" style={{width: 400, border: '1px solid var(--ifm-toc-border-color)'}} />


### Mascot Image
The customer facing status page of a digital call button shows the progress of the request. This page shows a set of friendly mascots that aim to represent staff hard at work trying to service the customer request. If you don't want to see these mascot images you can disable them with the __Display mascot image on tracking page__ setting.

<img src="/img/call-for-help/digital-call-button-mascot.png" alt="Digital call button mascot" />

### Customer Facing Escalations
Customers hate waiting. But they are more willing to wait if they see that there is some urgency on the part of your staff. You can choose to expose the escalated state of a digital call button request to your customer with the __Display escalated state on tracking page__ setting.

<img src="/img/call-for-help/digital-call-button-escalated.png" alt="Digital call button request escalated" style={{width: 400, border: '1px solid var(--ifm-toc-border-color)'}} />

## Branding
Digital call buttons provide a web interface for customers so it is important to provide your store's branding to them so that they feel like a natural part of your store.

To update the branding of your digital call buttons:
1. Sign into __MyStore__
2. Select __Call for Help__
3. Select __Settings__
4. Scroll down to __Custom Style__
5. Click __Open Style Editor__
6. Provide the __Logo URL__ to a SVG or PNG image of your brand logo
   - The image's size will be adjusted automatically:
     - Maximum height: 100 pixels
     - Maximum width: 150 pixels
   - We recommend using an image with a transparent background
7. Use the __Color Pickers__ to select your brand colors
8. Click __Save Logo and Colors__

For more advanced branding control you may also update the __Component Stylings__.
