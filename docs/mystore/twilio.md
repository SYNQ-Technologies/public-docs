---
sidebar_position: 8
---

# Twilio
SYNQ uses [Twilio](https://www.twilio.com/) for SMS related messaging capabilities. 

:::tip
You can find Twilio account and phone number information on your [Twilio Console](https://console.twilio.com/).
:::

## Phone Number Requirements
The Curbside and Text for Help applications require a Twilio phone number that is configured to work with SYNQ services.

1. Sign into the [Twilio Console](https://console.twilio.com/)
2. Select an existing number or create a new one
    - The number must have the `SMS` capability
3. Select the __Configure__ tab
4. Scroll down to __Messaging Configuration__
5. Configure:
   - __A call comes in__: `Webhook`
   - __URL__: `https://text-for-help.synqtech.com:5000/api/sms`
   - __HTTP__: `HTTP Post`

:::tip
Alternatively you can define these settings in a reusable __Messaging Service__ and assign it to the number.
:::

## Organization Configuration
To configure the Twilio account at the organization level for all locations to use:
1. Sign into __MyStore__ as an Organization Administrator
2. Select __Org/Branding__
3. Scroll down to __Twilio Account SID__
4. Configure the __Twilio Account SID__ and __Twilio Account Token__
5. Click __Update Organization Settings__
:::note
This is optional. Each store location may provide its own Twilio account.
:::

## Location/Store Configuration
Each location/store must be configured with its own Twilio phone number, even if the Twilio account is managed by the organization.

To configure Twilio at the store level:
1. Sign into __MyStore__ as a Location Administrator
1. Select __Location Config__
1. Scroll down to __SMS__
1. Configure the __Twilio Phone Number__
1. If you wish to override the organization's Twilio account
   1. Check the __Use the location's Twilio account instead of the organization's__ checkbox
   1. Configure the __Twilio Account SID__ and __Twilio Account Token__
1. Click __Update Location Settings__

