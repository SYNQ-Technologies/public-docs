---
sidebar_position: 15
---

# Troubleshooting

This section documents some common issues and solutions.

## General
Check whether the radio kit is reachable.
1. Sign into __MyStore__ as a Location Administrator.
2. Select __Radio__.
3. [Check the device status](./settings.md#checking-device-status). If the device reports its version and network information it is online.

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
3. Verify that the volume of the donor radio is set to approximately 50%.
4. Verify that the channel the donor radio is tuned to matches your other radios.
   1. If necessary, disconnect the donor radio and test that it can communicate with your other radios.

Power cycle the radio kit.
1. Unplug the radio kit from wall power. 
2. Wait 20 seconds.
3. Plug it back in again.
4. The kit should come online after about 20 seconds. This will announce "SYNQ Radio (Channel #) is online" over the radios.
   :::note 
   In some deployments this announcement feature may be disabled.
   :::

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
   :::note
   Every donor radio model is different, so the ideal volume setting varies from one radio to the next. Treat 50% as a starting point and adjust in small increments, testing a phrase after each change.

   The goal is audio that is loud enough for SYNQ Radio to hear clearly, but not so loud that it distorts. When audio is too loud it becomes "clipped", meaning the loudest parts of the sound are cut off flat because they are louder than the equipment can carry. It sounds much like a car stereo turned up past its limit: harsh and muddy rather than clearer, with words becoming harder to make out.

   Clipped audio is more difficult to transcribe than audio that is slightly too quiet, so if you are unsure, err on the quieter side.
   :::
2. Use [Audio Analysis](./settings.md#audio-analysis) to hear and see exactly what SYNQ Radio captured. This takes the guesswork out of setting volume levels: you can play back the capture and look at its waveform to confirm whether the audio is clipped, too quiet, or clean.
3. Check that the __Microphone Volume__ on the __Audio__ tab is appropriate. See [Adjusting Volume](./settings.md#adjusting-volume).
