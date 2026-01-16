---
sidebar_position: 10
---

# Installation

## Exterior Front View
![Front View](/img/radio/radio-kit-front.webp)

## Interior Front View
![Inside View](/img/radio/radio-kit-interior.webp)

This kit features a Motorola DLR1020.

## Exterior Right Side View
![Right Side View](/img/radio/radio-kit-side.webp)

Jacks:
- Top: Ethernet 
- Bottom: Power

## Pre-Installation Checklist

### Donor Radios
1. Confirm the location uses a SYNQ [supported radio model](./intro.md#supported-radio-models).
2. You will need two radios to complete the installation.
   - **Radio #1** is the "donor" radio that remains permanently docked/connected inside the radio kit.
   - **Radio #2** is for testing the system and can be returned when installation completes.
3. Verify that the radios are on the channel, frequency, and privacy code used at this location.
4. Verify that the radios are able to communicate with each other.
   1. Turn both radios on.
   2. Press the push-to-talk button on **Radio #1** and say a test phrase like "testing-testing 1-2-3". You should be able to hear the message on **Radio #2**.
   3. Repeat from **Radio #2** to confirm it can communicate with **Radio #1**.
5. Disable the "Roger Beep" feature on the **Radio #1** (if applicable).

:::important
The donor radio needs to be in good working condition.
:::

### Location
It is important to select a suitable install location for the radio kit.
1. Test that radios operate normally with good reception and transmission from this location.
2. Does the location have Ethernet accessible?
3. Does the location have 110V power?
4. Does the location have a wall to mount the radio kit to, or a shelf that it can sit on?
5. Is the location secure so that the kit will not be tampered with?

:::important
The install location needs to be in an area with good radio reception. Do not sacrifice radio reception quality, for ease of installation.
:::

### Network
When the device is plugged into Ethernet will it be able to reach the internet? Or are there special networking requirements that must be satisfied?
- Does the device need to be pre-assigned to a specific VLAN?
  - We can provide the MAC Address and host name of the device.
- If your network uses a security appliance that requires devices to use a specific Root CA certificate, contact us to ensure the device is pre-provisioned with the necessary certificates.

### Tools and Supplies Needed
- Pencil
- Bubble level
- Screwdriver
- Screws
- Wall anchors
- Ethernet patch cable


## Wall Mounting
The case is equipped with four keyhole anchor points for wall/surface mount applications. 

![keyhole anchor points](/img/radio/radio-kit-wall-mount.webp)

The kit includes a paper [mounting template](../../static/img/radio/radio-kit-mounting-template.pdf) that you can use to mark the locations for the anchor screws.

:::note
The mounting hardware (screws and wall anchors) are not included.
:::
 

## Installation Procedure
1. Open the radio kit by squeezing the two tabs on the right.
   1. Remove the power adapter plug from the kit. 
   2. Remove the paper wall mounting template from the kit.
2. Mounting the kit.
   1. Position the paper wall mounting template on the desired wall location.
   2. Ensure the template is level.
   3. Mark the four hole locations.
   4. Install screws/wall anchors.
   5. Hang the kit on the wall anchors using the four keyhole anchor points.
3. Turn on **Radio #1** (the one to be mounted inside the kit) to ~50%. 
4. Verify that the radio is on the channel, frequency, and privacy code used at the location.
5. Connect the donor radio speaker/mic jack(s) to the hardware adapter. This step can vary depending on your radio model.
   1. For most radio this means connecting the 3.5mm (speaker) and 2.5mm (microphone) audio cables from the hardware adapter to the corresponding speaker and microphone jacks on the radio. \
   ![Radio speaker/mic jacks](/img/radio/motorola-cls1410.webp)
   :::note
   You may need to open an accessory cover to access the speaker/mic jack(s).
   :::
6. Place the radio in the charging the dock inside the kit. 
   1. Ensure it is properly seated in the dock and clipped in.
   2. Use the supplied Velcro strap to secure the radio.
7. Connect Ethernet
   1. Connect Ethernet to the jack on the lower right-hand side on the outside of the kit.
   2. Connect other end of Ethernet cable to your network switch.
8. Turn on **Radio #2**.
9. Connect Power
   1. Connect the power adapter to the lower right-hand side on the outside of the kit.
   2. Plug the power adapter into a 110V power outlet.
   3. The radio kit will start up automatically.
   4. Verify that the blue LED power indicator illuminates on the PC within the case.
   5. Verify that the red LED power indicator illuminates on radio adapter.
10. Wait one minute.
    1.  Depending on your settings you may hear a "SYNQ Radio (Channel #) is online." announcement after approximately 10 seconds.
11. Speak a test phrase into **Radio #2**. For example, "testing-testing 1-2-3".
12. If applicable, verify that the LED indicator on the charging dock is illuminated. Different charging docks provide different indicators, but typically:
    - Solid red means charging.
    - Solid green means fully charged.
    - Flashing red means an error state.
13. Verify that the **Radio #1** is firmly seated the charging the dock inside the kit. 
14. Close the case.

## Radio Adapter LEDs
The Radio Adapter provides three indicator LEDs.
- Red: Power
- Green: Push-to-talk (PTT) enabled
- Blue: Charging enabled 

![Radio adapter LEDs](/img/radio/radio-adapter.webp)
