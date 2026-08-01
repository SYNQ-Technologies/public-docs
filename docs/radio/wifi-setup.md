---
sidebar_position: 12
---

# Wi-Fi Setup

The SYNQ Radio Edge Compute connects to your network over Ethernet. For demo kits, labs, and other non-production deployments where Ethernet is not available, the device can instead join a wireless network using a configuration file supplied on a USB drive.

:::warning
Wi-Fi is intended for demo and evaluation use only. Production deployments must use Ethernet. Wireless connections introduce variability in latency and reliability that can degrade audio quality and transcription accuracy.
:::

## Before You Begin

You will need:
- A USB drive formatted as FAT32.
- The SSID (network name) and password of the wireless network you want to join.
- Physical access to the inside of the radio kit.

The device supports password-protected WPA and WPA2 Personal wireless networks. It does not support:
- Networks with a hidden SSID.
- WPA3-only networks. Networks running WPA2/WPA3 in transition mode are supported.
- Open networks that have no password.
- Enterprise networks that require a username and certificate (802.1X).
- Networks behind a captive portal that requires sign-in through a browser.

## Creating the Configuration File

1. Create a file named `wifi.conf` in the root directory of the USB drive.
2. Add the SSID and password in the following format:
   ```
   SSID=your_wifi_name
   PASSWORD=your_wifi_password
   ```
   For example:
   ```
   SSID=synq-demo
   PASSWORD=secret
   ```
3. Save the file and eject the USB drive.

:::note
Enter the SSID and password exactly as they appear, with no quotation marks or spaces around them. Both values are case sensitive.
:::

## Connecting the Device

1. Open the radio kit by squeezing the two tabs on the right.
2. Plug the USB drive into any USB port on the PC inside the kit.
3. The device reads `wifi.conf` and connects to the wireless network immediately.
4. Remove the USB drive.
5. Close the case.

The wireless network is saved to the device and is used again automatically each time the device restarts.

:::note
If the SSID and password are unchanged from the last time a `wifi.conf` was applied, the device makes no change and remains on its current configuration.
:::

## Verifying the Connection

To confirm the device is online:

1. Sign into __MyStore__ as a Location Administrator.
2. Select __Radio__. The Transcript Viewer opens to the first channel and current date.
3. Speak a test phrase into a radio tuned to the same channel as the donor radio. For example, "testing-testing 1-2-3".
4. You should see the transcription of your test phrase appear.

Alternatively, you can [check the status of the device](./settings.md#checking-device-status) directly:

1. Select the __Settings__ tab from the sidebar, then select the device.
2. Select the __General__ tab.
3. Click the __Check Status__ button.

The device responds with its edge version, MAC address, and IP address. The active IP address is shown in **bold**. Confirm that the active address is the one assigned by your wireless network.

If no transcription appears, or the device does not report a status, see [Troubleshooting](./troubleshooting.md).

## Changing or Removing a Wireless Network

To move the device to a different wireless network, repeat the steps above with a `wifi.conf` file for the new network.

:::warning
Previously configured networks are retained. If the device is later within range of a network it was configured with in the past, it may rejoin that network automatically. This is worth keeping in mind for demo kits that move between sites.
:::

Wireless networks cannot be removed from the device using the USB drive method. To have a network removed, contact helpdesk@synqtech.com.

## Security Considerations

- The `wifi.conf` file stores your network password in plain text. Anyone with the USB drive can read it.
- Remove the USB drive once the device has connected. Do not leave it inside the radio kit.
- Delete the `wifi.conf` file from the USB drive when you are finished with it.
- Consider using a guest or isolated network for demo kits rather than your primary network. See [Networking Requirements](./intro.md#networking-requirements) for the outbound access the device needs.
