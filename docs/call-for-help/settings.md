---
sidebar_position: 10
---

# Settings

## Request Expiry
If a call for help request goes unanswered for an extended period of time it is unlikely that the customer is still waiting. These requests represent a failure to help a customer. They should be archived, because they contribute to important metrics, but we want to remove them from the list of active notifications so they don't create a bunch of noise for associates. How long a call for help request can remain active is up to you.

To set the request expiry timeout:
1. Sign into __MyStore__.
2. Select __Call for Help__.
3. Select __Settings__.
4. Scroll down to __Request Expiry__.
5. Select the number of minutes to allow a call for help request to remain active.
6. Click __Save__.

## Escalations
Escalations allow managers and supervisors to receive notifications when call for help requests are not claimed in a timely manner by associates.

To enable escalations:
1. Sign into __MyStore__.
2. Select __Call for Help__.
3. Select __Settings__.
4. Scroll down to __Escalation Notifications__.
5. Check the __Send escalation notifications__ checkbox.
6. Select the number of minutes to allow a call for help request to go unclaimed before triggering an escalation.
7. Click __Save__.

## Channels
Channels determine where call for help requests are routed. 

Defaults:
- Default Call for Help Channel: The default channel for all call for help requests.
- Default Management Channel: The default channel for all call for help escalations.

Each call button or display you create can override these default channels.

## Prompts
Prompts are simple sentences that provide context to a call for help request. These prompts assist both the customer and the associate.

For call buttons, the a prompt is only a message to the associate. It provides a sentence describing what the call for help request is related to. This message appears in the Microsoft Teams channel (or selected notification channel).

For digital call buttons, where the customer interacts with a web interface, the prompts provide choices for the customer so that they can communicate what type of help they are looking for. The customer's choice appears in the Microsoft Teams channel.

A prompt can be saved to an individual store location, or it can be saved to the organization for use in all store locations.
For example, the following prompts are general and can apply to many stores:
- I would like to speak to a manager.
- I need help with a locking showcase.
- I need help finding a size.
- I would like to report a cleanliness issue.
The following prompts may be quite specific and only apply to one store location:
- Need assistance with live bait.

### Staff Actions
Prompts also define the action buttons presented to your staff. There are several options and which one you select depends on how your Call for Help Call Button or Display is deployed.
    - __Claim & On the Way__
      - Staff see separate __Claim__ and __On the Way__ buttons. 
      - The customer receives status updates when each of these buttons are pressed. 
      - This is the default option.
    - __On the Way__
      - Staff see a single __On the Way__ button.
      - The customer receives a status update when this button is pressed.
    - __Acknowledge__
      - Staff see a single __Acknowledge__ button.
      - This option is often useful for IoT sensor use cases, like a door sensor, where staff don't need to claim or go to the location, but someone does need to acknowledge that they have seen the alert.
    - __Done__
      - Staff see a single __Done__ button. 
      - This option is often useful in staff-facing scenarios where the request represents a task, like collecting shopping carts.
    - __None__
      - Staff do not see any buttons. 
      - This option is often useful for IoT sensor use cases, like a door sensor, where staff don't need to take any actions, but you do want the event recorded.

### Create Prompts
To create a new prompt:
1. Sign into __MyStore__.
2. Select __Call for Help__.
3. Select __Settings__.
4. Scroll down to __Call for Help Prompts__.
5. Click __Create a new prompt__.
6. Check the __Save Option to Organization__ checkbox if you want to make this prompt available to all stores in your organization, otherwise it will only be available to the current store location.
7. Provide the text (__Customer Text__) that will appear for the customer on digital call buttons.
8. Provide the text (__Staff Prompt__) that will appear on the notification presented to staff.
9. Select the buttons (__Staff Actions__) that you want to appear on the notification presented to staff.
10. Click __Create Call For Help Display Option__.

## Displays
See [Digital Call Buttons](./digital-call-buttons.md).

## Outcomes
Outcomes are simple options presented to store associates to have them indicate how a call for help request was completed.

After the associate indicates they are on the way to help a customer the interface updates to show radio buttons listing the configured outcome options.

If no outcomes are configured, the associate will still have the option to mark a call for help as __Complete__, but they won't be prompted to select an outcome.

### Create Outcomes
To create a new outcome:
1. Sign into __MyStore__.
2. Select __Call for Help__.
3. Select __Settings__.
4. Scroll down to __Call for Help Outcomes__.
5. Click __Create a new Outcome__.
7. Provide the text that will appear for the associate.
8. Click __Submit Options__.
9. Repeat as needed to create the desired list of outcomes.

:::tip
You can click and drag to update the presentation order of the outcomes.
:::