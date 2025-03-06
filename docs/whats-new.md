---
sidebar_position: 19
---

# What's New

### Coming Soon
- Customer facing user interface updates for digital call buttons.
- Support Webex as a communication platform provider.

### 2025-03-05

#### Features
- The Call for Help dashboard now allows you to export the raw data to CSV.
- The Call for Help dashboard now includes the following additional charts:
  - Outcomes
  - User Performance
- A new __Weekly Store Report__ that includes the store's performance metrics with links to detailed dashboards for Call for Help, Curbside, and OrderUp.

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