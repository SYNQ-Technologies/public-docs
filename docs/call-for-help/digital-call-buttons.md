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
5. Click __Create a new Call for Help display__
6. Enter the following information:
   - Display Name
   - Notification Channel
   - Escalations Channel
7. Select the desired __Display Options__ to present to the customer. 
   - You can include between one and four options.
   - The list of available options come from your configured list of Call for Help Prompts. See [Prompts](./settings.md#prompts) for more information.
8. Check the __Enable QR Code__ checkbox
9. Click __Submit Options__

## Test a QR Code Display
To test a QR Code display:
1. Sign into __MyStore__
2. Select __Call for Help__
3. Select __Settings__
4. Scroll down to __Call for Help Buttons__
5. Click __Download Display QRCode__
6. To test the display from your PC, click the __Try it Out__ button.
7. A popup window open (emulating the customer's experience on their smart phone)
8. Select an option
9. Validate that the call for help request appears as a notification in the expected Teams channel

## Branding
Digital call buttons provide a web interface for customers so it is important to provide your store's branding to them so that they feel like a natural part of your store.

To update the branding of your digital call buttons:
1. Sign into __MyStore__
2. Select __Call for Help__
3. Select __Settings__
4. Scroll down to __Custom Style__

To set the logo:
1. Provide the URL to a SVG or PNG image of your brand logo
   - The image's size will be adjusted automatically:
     - Maximum height: 100 pixels
     - Maximum width: 150 pixels
   - We recommend using an image with a transparent background
2. Click __Apply__

To set brand fonts and colors:
1. Provide valid CSS definitions in the "Custom CSS" editor.
2. Click __Update Custom CSS__

For example:
```css
:root {
  /*Page Style*/
  --branding-bar-background: black;
  --branding-page-background: white;
  --display-name-text-color: white;

  /*Button Style*/
  --button-color: white;
  --button-color-pressed: black;
  --button-border-color: black;
  --button-text-color: black;
  --button-text-color-pressed: white;

  /*Progress Modal Style*/
  --progress-circle-color: black;
}
```