---
sidebar_position: 2
---

# Microsoft Teams
SYNQ supports [Microsoft Teams](https://teams.microsoft.com) as a communication platform provider. 
This means that all staff-facing notifications generated by SYNQ will be delivered to configurable Microsoft Teams channels as Adaptive Cards.

To configure SYNQ to use Microsoft Teams for your store location you need to:
1. Deploy Microsoft Teams
2. Create a team within Microsoft Teams.
3. Add channels to those teams that represent the groups of workers that should receive notifications.
4. Add users to the team.
5. Add the Frontline Hero App to Teams.
6. Configure SYNQ apps and devices to send their notifications to your Teams channels.

## Deploy Microsoft Teams
This is a prerequisite that is typically already in place at most organizations. For organizations or store locations that are new to Microsoft Teams your'll need to talk to you corporate system administrators to get onboarded.
:::note
Canadian Tire stores should contact "Canadian Tire Corporate" to enable Teams for their store location.
::: 

:::note
In order for your frontline workers to use Microsoft Teams they must have frontline worker SKUs for Microsoft O365. You can find more info [here](https://www.microsoft.com/en-ca/microsoft-365/enterprise/frontline).
::: 

## Create Teams and Channels
:::tip
Microsoft provides detailed instructions on how to create teams and channels [here](https://support.microsoft.com/en-au/office/create-a-team-from-scratch-in-microsoft-teams-174adf5f-846b-4780-b765-de1a0a737e2b).
:::

### Create a Team
1. Open Microsoft Teams
2. Select the __Teams__ tab
3. Click the `+` icon and select __Create team__.
4. Provide the following:
   - Team name
   - Description
   - Team type: Private, Public, or Org-wide
   - Name the first channel: General
5. Click __Create__

### Add Channels to the team
1. On the __Teams__ tab
2. Click the `...` menu of the desired team and select __Add channel__
3. Provide the following:
   - Team name
   - Description
   - Channel type: Standard, Shared, or Private
4. Click __Create__
5. Repeat for all the channels you want to add
:::note
If you are just getting started you may not know all the channels you plan to create. Channels can always be added and reconfigured later.
:::
:::tip
We recommend that you create a "Testing" channel. This can serve as a staging area for any devices or apps that you enable. It gives you the ability to verify everything is working without spamming your staff with test notifications.
:::

### Add Users to the team
1. On the __Teams__ tab
2. Click the `...` menu of the desired team and select __Add member__
3. Enter the name or email of the desired user or security group to add
   - You can add multiple users at once
4. Click __Add__
:::note
If you are just getting started you may not yet have a complete list of all users that should be added. This fine because team members can easily be added/removed later.
We recommend you get started by only adding a few users that will be involved with the initial testing of the system.
:::

## Add the Frontline Hero App to Microsoft Teams
Once your Team is created, channels are added, and relevant users are added, you’ll need to add the SYNQ Frontline Hero to the Team.
1. On the __Teams__ tab
2. Click the `...` menu of the desired team and select __Manage team__
3. Select the __Apps__ tab at the top of the screen
4. Click __+ Get more apps__
5. Search for "SYNQ Frontline Hero"
    :::note
    Canadian Tire stores should contact "Canadian Tire Corporate" to add the "MyStore by SYNQ" app instead for their location.
    ::: 
6. Click __Add__ on the SYNQ Frontline Hero app
7. Follow the instructions to add Frontline Hero to your team.
8. Once you’ve added the SYNQ Frontline Hero to your team, it will generate a post in the default/General channel of the team prompting you to complete the registration. 
9.  Click the __Complete Registration__ button. This will take you to the SYNQ Frontline Hero admin portal.
10. Sign in here with your Microsoft Account and it will link your Microsoft Teams instance to SYNQ Frontline Hero’s administrative portal.