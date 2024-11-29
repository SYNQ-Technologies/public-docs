---
sidebar_position: 2
---

# Requirements

SYNQ’s platform is architected in a way to make it as lightweight as possible for
deployment and scalability. Interactions with the platform leverage a customer device and
an associated web app. On the associate side, notification routing is configurable and new
alerts are presented/posted as adaptive cards to the relevant groups in-store to support the
customer requests. Therefore, the technical requirements to deploy the SYNQ platform are
not onerous.

## SYNQ Subscription
All SYNQ products require a subscription.

## Communication Platform
SYNQ leverages the existing communcation platform that your frontline workers already use every day to deliver alerts and notifications.

SYNQ supports the following platforms:
- Microsoft Teams
- BlueFletch Messaging
- RingCentral

## Associate Devices
SYNQ products are used on a range of associate devices, including organizations using
shared devices, dedicated devices, or BYOD (bring your own device).
The key requirement is that the device is able to download, install, and run the latest
version of Microsoft Teams. The most common devices we see SYNQ and Teams deployed
to for associates are on mobile devices and tablets from Zebra, Samsung, and Apple.
A core consideration when it comes to devices is the sign-on process being used. Some
retailers use shared devices with personal logins, some use shared devices with shared
logins, some use dedicated devices with personal logins, and some use associate-owned
devices.

Each of these approaches has different considerations for retailers. In a following section,
we get into details on these approaches with tactical advice for deploying SYNQ alongside
your existing device and identity process.

## Operating System
SYNQ’s platform is supported on any operating system that supports Microsoft Teams.

## Web Browser
SYNQ’s web interfaces are supported on the following web browsers.
- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari

## Third-Party Licensing
Along with the required licenses to SYNQ modules, there are additional licenses for third party services that may be required.

- Microsoft
    - When using Microsoft Teams for notifications, all end-users (associates) require frontline worker "F" SKUs for Microsoft O365 so that they can access Microsoft Teams. You
can find more information [here](https://www.microsoft.com/en-ca/microsoft-365/enterprise/frontline).
- Twilio
    - Customers using the SYNQ Text for Help module also require a subscription to [Twilio](https://www.twilio.com/).