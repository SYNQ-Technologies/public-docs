---
sidebar_position: 15
---

# Troubleshooting

This section documents some common issues and solutions.

## General
Check whether the radio kit has power.
1. Verify that the radio kit is plugged in to power.
2. Open the radio kit.
3. Verify that the blue power indicator is lit on the PC.
4. Verify that the red power indicator is lit on the adapter.

Check whether the radio kit has internet.
1. Verify that the radio kit is plugged in to Ethernet.
2. Open the radio kit.
3. Verify that the Ethernet activity indicator lights are flashing on the Ethernet port of the PC.

Check cables for any loose connections.
1. Open the radio kit.
2. Verify that the audio cable connections to the donor radio of properly seated.
3. Verify that all other cable connection are properly seated.

Check donor radio.
1. Open the radio kit.
2. Verify that the donor radio is turned on.
3. Verify that the volume of the donor radio is approximately 50%.
4. Verify that the channel the donor radio is tuned to matches your other radios.
   1. If necessary, disconnect the donor radio and test that it can communicate with your other radios.

## Battery is dead on donor radio
If the donor radio is not properly seated in the charging dock it will not charge, and the battery will die after approximately 1 day. 

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
 
