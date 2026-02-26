---
sidebar_position: 15
---

# Troubleshooting

This section documents some common issues and solutions.

## I don't see the checkbox to enable a Call for Help Display as a QR code
Your store may not be licensed for Digital Call Buttons. Contact SYNQ Support and we can assist you.

## I didn't get a Teams notification after testing a QR code 
- Check that you're signed into Microsoft Teams and have access to the channel. 
- Confirm that the QR display is active and correctly configured to the right Teams channel. 
- Ensure you haven't muted notifications for the Teams channel. 

## I claimed a request but it disappeared 
- It may have already been claimed by another associate – check the Teams channel for activity. 
- If the issue repeats, check the request expiry settings __MyStore > Call for Help > Settings > Request Expiry__ to verify requests aren't expiring too quickly. 

## A QR code scans, but leads to an error or blank screen 
- Verify that the URL that the QR code opens is actually a SYNQ Call for Help URL. The URL should look something like `https://callforhelp.synqtech.com/callforhelp/v1/display/CFH.<random-value>`.

- The Digital Call Button display may not be enabled for QR code use.
  1. Go to __MyStore > Call for Help > Settings > Call for Help Displays__
  2. Click the __⋮__ menu on the desired display and select __Edit__
  3. Ensure that __Enable QR Code__ is checked.

## Escalation alerts aren't triggering 
- Check that escalations are enabled. 
  1. Go to __MyStore > Call for Help > Settings > Escalation Notifications__
  2. Confirm that escalations are enabled and verify the number of minutes before expiry. 
- Check which channel escalations are sent to. 
  1. Go to __MyStore > Call for Help > Settings > Call for Help Displays__
  2. Click the __⋮__ menu on the display and select __Edit__
  3. Verify which __Escalations Channel__ is selected
  4. Check in Microsoft Teams that you (or your staff) are a member of the team containing the selected __Escalations Channel__, that the channel is visible, and that notifications are enabled for that channel. 
