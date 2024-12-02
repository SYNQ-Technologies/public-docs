---
sidebar_position: 3
---

# Call Buttons
SYNQ call buttons provide a friendly easy to use button that relays a customer's request for assistance to the notification channel of your choosing.

## Getting Started
1. Ensure you have Microsoft Teams (or an alternative messaging platform) configured. See [Microsoft Teams](../getting-started/microsoft-teams.md) for complete details.
2. Verify that your buttons are registered in Call For Help 
   1. Sign into MyStore https://dcio.synqtech.com
   2. Select "Call for Help"
   3. Select "Settings"
   4. Scroll down to "Call for Help Buttons"
   5. You should see all your buttons listed
      :::note
      When you purchase call buttons from SYNQ we typically import them into your store location before they are shipped to you. However, they will have default values for most settings.
      :::
   6. Edit each button to set appropriate names, prompts, and notification channels
      :::tip
      During initial setup we recommend setting the notification channel of each button to a "Test" channel. This makes testing easier and avoids sending unwanted test notifications to other staff.
      :::
   7. See [Add a new Call Button](#add-a-new-call-button) if you need to add buttons.
3. Install the Button Base
   1. The Button Base requires an Ethernet connection to provide both power and network connectivity
   2. Deploy the button base high up in a central location that is free from obstructions (for example, escalators) to maximize coverage.
      :::note
      Multiple base units may be required in very large locations, or in locations with Wi-Fi interference.
      :::
4. Test Buttons
   1. Ensure each button contains batteries
   2. Bring the button close to the button base
   3. Press the button
   4. Verify in Microsoft Teams that the expected notification appears
   5. Once the button has been verified move the button to the desired location within your store
   6. Test again
      :::note
      To avoid abuse, call buttons will only process one request every 120 seconds. Keep this in mind as you test. You may have to wait a moment before pressing the button again.
      :::
   7. If a button does not raise a notification, try moving the button to a location nearer to the base and testing again. 
5. Update each button in MyStore to set the desired notification channels.
6. Test buttons again to ensure messages are delivered to the desired channels.

## Add a new Call Button
To add a new call button to your Call for Help system:
1. Sign into MyStore https://dcio.synqtech.com
2. Select "Call for Help"
3. Select "Settings"
4. Scroll down to "Call for Help Buttons"
5. Click "Create a new Call for Help Button"
6. Enter the following information:
   - Name
   - In Store Location Label
   - Mac Addr. 
     :::tip
     The MAC Address is printed on a label on the back of the button.
     :::
   - Prompt Notification Channel
   - Escalations Channel
7. Click "Submit Options"


## Modify Call Button Properties
To change properties of a call button, such as the Name, Location, or Notification Channel:
1. Sign into MyStore https://dcio.synqtech.com
2. Select "Call for Help"
3. Select "Settings"
4. Scroll down to "Call for Help Buttons"
5. Click "Edit" on the desired call button
6. Update the button settings as desired
7. Click "Submit Options"

## Battery Level
Every time a call button communicates with the SYNQ cloud it reports its battery level. The last reported battery level of each button is shown in the "Call for Help Buttons" section.

## Mounting Buttons
SYNQ Call For Help Buttons are versatile and intended to support a number of mounting situations.
Before deploying your buttons you should give some though to where each button will be placed and what type of mounting application they will need.

### Common Mounting Applications
- Velcro
- Double sided tape

## Dimensions
- Call Button
  - Height: 6.5"
  - Width: 3"
  - Depth: 2.5"
- Hub
  - Height: 5.5"
  - Width: 3.355"
  - Depth: 1.357"

## Button Label
A label is applied to the front face of the call button. This label provides instructions and feedback to the customer, but it can also include your store's branding.
- [Example Generic Label](../../static/img/call-for-help/call-button-label-generic.png)
- [Label Cut Dimensions](../../static/img/call-for-help/call-button-label-cut-dimensions.png)

## Button Signage
Before deploying your buttons it is a good idea to consider if you want to apply signage to or near your button to draw your customer's attention to it. This can increase the likelihood that customers will use the button.

### Signage Examples
- [8.5x11 Right Arrow](../../static/img/call-for-help/pulse-signage-85x11-right.png)
- [8.5x11 Left Arrow](../../static/img/call-for-help/pulse-signage-85x11-left.png)
- [8x18 Down Arrow](../../static/img/call-for-help/pulse-signage-8x18-down.png)


## Common Deployments
Retailers and individual store locations are diverse so there is no one-size-fits all pattern for deploying call buttons and Teams channels. However, we've seen a lot of these and have some suggestions that work for most locations.
- Create channels that represent logical groups of staff that should receive a certain type of message. 
  - Departments like  Automotive, Deli, Floral, or Paint tend to have specialized/dedicated staff. These often warrant dedicated channels.
  - Create a general purpose "General" channel.
  - Create one or more channels to be used for escalations. These channels should include managers or staff in supervisory roles.
- Strategically place buttons throughout your store in areas where customers may require assistance.
- Deploy buttons in consistent locations
  - If you are going to put a button is every aisle, place it is the same location (center, end) of every aisle to provide consistency 
- Button naming
  - The "In Store Location Label" you configure for a button in MyStore is what your staff will see in Teams notifications. Make sure you use unambiguous names that will make sense for your staff.
- Signage
  - Use signage to draw attention to your call buttons

## Example button deployments
What does a recommended Teams deployment look like for 5, 10, 20, 50 buttons? Where do you put the buttons? What Teams channels should you create? What buttons notify on what channels?

For all deployments we recommend you create a "Manager" or "Escalations" channel to direct all escalations for call button presses that go unanswered.

### Hardware Store with 5 buttons

| Button Location | Teams Channel |
|-----------------|---------------|
|Customer Service Desk|General|
|Aisle 4 - Housewares|General|
|Automotive Desk|Automotive|
|Aisle 24 - Oil/Air Filters|Automotive|
|Paint Desk|Paint|

### Hardware Store with 10 buttons

| Button Location | Teams Channel |
|-----------------|---------------|
|Customer Service Desk|General|
|Aisle 2 - Seasonal|General|
|Aisle 4 - Housewares|General|
|Aisle 31 - Stuff|General|
|Aisle 32 - Stuff|General|
|Aisle 33 - Stuff|General|
|Automotive Desk|Automotive|
|Aisle 24 - Oil/Air Filters|Automotive|
|Aisle 7 - Electrical|Hardware|
|Aisle 9 - Plumbing|Hardware|

### Grocery Store with 5 buttons

| Button Location | Teams Channel |
|-----------------|---------------|
|Customer Service Desk|General|
|Aisle 4 - Stuff|General|
|Produce - Seasonal|Produce|
|Bakery|Bakery|
|Meats/Deli|Meats/Deli|

### Grocery Store with 10 buttons
| Button Location | Teams Channel |
|-----------------|---------------|
|Customer Service Desk|General|
|Aisle 4 - Stuff|General|
|Aisle 5 - Stuff|General|
|Aisle 6 - Stuff|General|
|Aisle 7 - Stuff|General|
|Restrooms|General|
|Produce - Seasonal|Produce|
|Bakery|Bakery|
|Deli|Deli|
|Meats|Meats|

## Troubleshooting
### Button can't communicate with the base
If a button press does not result in a Teams notification the button may be having trouble connecting to the base due to Wi-Fi interference.
1. Try moving the button closer to the base and testing again. If the button works closer to the base you can wander around with the button (keep in mind the 120 second throttle) to try to identify areas of interference. You may need to relocate the base, or add another base.

### Message doesn't arrive in Teams
The configured notification channel of the button my be incorrect. 
1. [Edit the button in MyStore](#modify-call-button-properties)
2. Verify that button is configured to with the the expected Teams channel.

### Message arrives in Teams, but does not notify
Notifications may be disabled in the channel in Teams.
1. Click the `...` menu on the channel in Teams
2. Select "Channel notifications"
3. Modify the notification setting
4. Click "Save"

## Advanced Button Press Actions
- Long press releasing after the first flash of the LEDs. Cancels/completes the current request.
- Long press releasing after the second flash of the LEDs. The LEDs blink out the firmware version number. For example: `1.2.3`.
- Long press releasing after the fifth flash of the LEDs. Hard reset of the button.

