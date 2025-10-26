---
sidebar_position: 19
---

# What's New

### Coming Soon
- Support Zebra Workcloud Sync as a communication platform provider.
- Support Webex as a communication platform provider.
- Support for Baofeng radios.

### 2025-10-23
- Expand list of claim phrases for answering call for help requests over the radio.
- Allow explicit configuration of microphone capture volume for radios.

### 2025-10-20
- Support for ongoing "nag" alerts for unanswered Call for Help requests and escalations.

### 2025-10-19
#### Fixes
- 843 Applications should gracefully degrade when third party cloud providers like Pusher are offline.

### 2025-10-18
#### Fixes
- 844 OrderUp links from Teams adaptive card do not select the preferred worker role.

### 2025-10-13
- MyStore user interface update and modernization.

### 2025-10-07
#### Features
- Support for Motorola Curve radios.
#### Fixes
- 812: Support BlueFletch browser variants.

### 2025-09-29
#### Features
- Administrators can now export the QR code URLs for all QR code enabled Call for Help displays.
- Administrators can now see dashboards of Locker activity in MyStore.
#### Fixes
- 768: Prevent selection of private Teams channels that are not bot-enabled.
- 798: Prevent error when staff reply to the customer before claiming the Text for Help request.

### 2025-09-25
#### Features
- Support for configurable header background and text colors on web-based Call for Help user interface.

### 2025-09-19
#### Fixes
- 774: Customer facing call for help progress indicator is misaligned when mascot is not enabled.
- 765: Ensure sufficient delay between last radio capture before sending transmission.
- 711: Adaptive card should distinguish between resolved and expired escalations.

### 2025-09-10
#### Features
- Preserve selected signage color for QR Code displays.

### 2025-08-21
#### Features
- Support for Motorola CLS radios. [Learn more](/docs/radio/intro.md#supported-radio-models).

### 2025-08-13
#### Fixes
- 713: When a Call for Help request comes from a OrderUp tablet the Adaptive Card is missing the staff action buttons.

### 2025-07-10
#### Features
- The user management page in MyStore now shows the last logged in time of each user.
- Weekly report now includes a link to the detailed Call for Help report.
- Weekly report now only shows metrics for the apps enabled for your location.

### 2025-06-24
#### Features
- Updated documentation to include resources and videos for each product.

### 2025-06-18
#### Features
- Support for Retevis radios. [Learn more](/docs/radio/intro.md#supported-radio-models).
- Radios are now able to receive webhook requests from Twilio.
#### Fixes
- 640: Radio transcript viewer action buttons overflow on small devices.

### 2025-06-04
#### Features
- Configurable staff actions on Call for Help prompts. 
   - Now when you create a Call for Help prompt you can determine the action buttons presented to your staff. See [Staff Actions](./call-for-help/settings#staff-actions) for more information.
#### Fixes
- 575: Intermittent refresh issues on Curbside pickup control.
- 617: Standardize on helpdesk@synqtech.com email address.

### 2025-05-30
#### Features
- Improved radio latency. 
- Automatic updates of radio edge devices.
- Configure which Call for Help events get announced over the radios.
#### Fixes
- 612/613: Call for Help escalations cannot be claimed over the radio.

### 2025-05-15
#### Features
- Expose Call for Help escalation events via webhooks. [Learn more](/docs/apis/webhooks.md#call-for-help).
- Announce the following events over radios:
  - Call for Help escalations
  - Curbside arrivals

### 2025-05-13
#### Features
- Show escalations to customer on digital call buttons. [Learn more](/docs/call-for-help/digital-call-buttons.md#customer-facing-escalations).

### 2025-05-12
#### Features
- Tabular Call for Help report.

### 2025-05-01
#### Features
- Support for IBM Watson with SYNQ Radio.
- Support for Dewalt DXFRS300/800 radios.

### 2025-04-25
#### Features
- Improve sign in flow for new users when using Microsoft accounts.
  - You can add users to a store in advance using their Microsoft email addresses so that then don't need to request to join the store the first time they sign in.
  - You can configure a list of email domains that a user must belong to for them to be able to request to join a store.
- Administrator configurable verification tokens for webhooks. 
  - When configured, all webhook requests will be signed using a verification token. Your application that receives the webhook request is then able to validate the signature of the request and know that the request is from SYNQ.

### 2025-04-16

#### Features
- Customer facing user interface updates for digital call buttons.
- Customer supplied voice and text prompts for digital call buttons.
- Spanish translations for digital call buttons.

### 2025-04-07

#### Fixes
- 118: Unable to add new locker in MyStore.
- 483: Error when editing OrderUp drop zones.

### 2025-03-11

#### Fixes
- 28: Clicking "Delivered" on a Curbside order before clicking "Claim" does not set the `reviewed_at` time and alerts can continue.

### 2025-03-05

#### Features
- The Call for Help dashboard now allows you to export the raw data to CSV.
- The Call for Help dashboard now includes the following additional charts:
  - Outcomes
  - User Performance
- A new __Weekly Store Report__ that includes the store's performance metrics with links to detailed dashboards for Call for Help, Curbside, and OrderUp.

#### Fixes
- SSD-371: Unable to clear Twilio phone number in location settings.
- SSD-407: Fix chart when Call for Help call buttons and displays share the same name.

### 2025-01-28

#### Features
- Configuration of Call for Help outcomes. 
   - Each store location can now configure their own list of Call for Help outcomes to present to the associate to allow them to indicate how each help request was handled. 
   - These outcomes are only visible to staff, so the customer experience remains unchanged.
   - If you don't configure any outcomes, the associate will still have the option to mark a call for help as __Complete__, but they won't be prompted to select an outcome.
   - __Configuration in Mystore__ \
  ![Call for Help Outcomes MyStore Configuration](/img/whats-new/2025-01-28-cfh-outcomes-mystore.png)
   - __Associate view in Microsoft Teams__ \
  ![Call for Help Outcomes Staff View](/img/whats-new/2025-01-28-cfh-outcomes-teams.png)


### 2025-01-23

#### Features
- Show the battery level for each call button in MyStore.
  ![Call Button Battery Level](/img/whats-new/2025-01-23-battery-level.png)

### 2025-01-22

#### Features
- Configuration of staff display name format.
  - On the Call for Help settings page you can now configure how staff names will appear in adaptive cards.
  ![Staff Display Name Format](/img/whats-new/2025-01-22-cfh-display-name-format.png)

#### Fixes
- SSD-318: Location Administrators are unable to see Call for Help dashboard for current store.

### 2025-01-09

#### Fixes
- SSD-363: BlueFletch notifications should use `useHeadsUp: true`.

### 2024-12-05

#### Features
- Call for Help Outcomes
   - After an associate selects __On the Way__ for a Call for Help request they are prompted to record how the request was resolved. Did they find the customer? Were they able to help the customer? Did the assistance result in a positive sales outcome? These are valuable metrics. If no outcome is specified the request automatically completes after a short interval as having "no associate feedback".
- Support for BlueFletch messaging for Curbside and OrderUp.

#### Fixes
- SSD-213: Call For Help Web Admin does not show display name of call buttons.

### 2024-09-17

#### Features
- Support for BlueFletch messaging for Call For Help.
- Add webhooks support to Call for Help.