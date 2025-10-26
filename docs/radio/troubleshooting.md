---
sidebar_position: 15
---

# Troubleshooting

This section documents some common issues and solutions.

## Battery is dead on donor radio
If the radio is not properly seated in the charging dock it will not charge, and the battery will die after approximately 1 day. 

If your donor radio's battery is dead:
1. Open the kit.
2. Take note of the color and blink pattern of the indicator LED on the charging dock (if applicable).
3. Power off the donor radio.
4. Ensure the radio is properly seated in the charging dock.
5. Wait at least 15 minutes for the radio to charge up a bit.
6. Power on the radio (to ~50% volume).

## Call buttons are not announced
1. Check that Call for Help webhooks are enabled for you store location and that the URL is correct.
2. Check whether the webhook validation secret is set.
3. Check whether call buttons notifications are being delivered to Microsoft Teams or your notification provider.

## Transcriptions are "Inaudible"
When the speech to text model is not able to transcribe the captured audio it reports in the transaction log a message like "Inaudible (2000ms)" that indicated there was an inaudible message with the specified duration (in milliseconds).
1. Check that the volume on the donor radio is set to approximately 50%.
 
