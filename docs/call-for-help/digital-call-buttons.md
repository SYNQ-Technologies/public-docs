---
sidebar_position: 4
---

# Digital Call Buttons
SYNQ digital call buttons are easy to deploy QR codes that link customers with smart phones to a friendly web interface where they can request assistance from a variety of configurable prompts. These requests are relayed to associates via the notification channel of your choosing.

## Create a Digital Call Button display
To create a new digital call button QR Code:
1. Sign into MyStore https://dcio.synqtech.com
2. Select "Call for Help"
3. Select "Settings"
4. Scroll down to "Call for Help Displays"
5. Click "Create a new Call for Help display"
6. Enter the following information:
   - Display Name
   - Notification Channel
   - Escalations Channel
7. Select the desired "Display Options" to present to the customer. You can include between one and four options.
8. Check the "Enable QR Code" checkbox
9. Click "Submit Options"

## Test a QR Code Display
To test a QR Code display:
1. Sign into MyStore https://dcio.synqtech.com
2. Select "Call for Help"
3. Select "Settings"
4. Scroll down to "Call for Help Buttons"
2. Click "Download Display QRCode"
3. To test the display from your PC, click the "Try it Out" button.
4. A popup window open (emulating the customer's experience on their smart phone)
5. Select an option
6. Validate that the call for help request appears as a notification in the expected Teams channel

## Branding
Digital call buttons provide a web interface for customers so it is important to provide your store's branding to them so that they feel like a natural part of your store.

To update the branding of your digital call buttons:
1. Sign into MyStore https://dcio.synqtech.com
2. Select "Call for Help"
3. Select "Settings"
4. Scroll down to "Custom Style"

To set the logo:
1. Provide the URL to a SVG or PNG image of your brand logo
   - The image's size will be adjusted automatically:
     - Maximum height: 100 pixels
     - Maximum width: 150 pixels
   - We recommend using an image with a transparent background
2. Click "Apply"

To set brand fonts and colors:
1. Provide valid CSS definitions in the "Custom CSS" editor.
2. Click "Update Custom CSS"

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