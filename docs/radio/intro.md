---
sidebar_position: 1
---

# Introduction
Most stores have a communication gap — mobile compute can't connect to radios and radios can't interact with customers. This fragmentation negatively impacts efficiency and customer experience. 

SYNQ Radio connects your existing radios to the modern digital world. This bridges the gap between your radios and all your other digital in-store comms and systems.

## How It Works
You connect one of your in-store radios to the SYNQ Radio Edge Compute using our adapter. Now everything that radio receives gets captured, logged, and analyzed. SYNQ Radio can also broadcast voice messages to your staff using that radio.

Any event observed by SYNQ modules, like a call button press or curbside pickup arrival, can be announced over the radio, and claimed by staff on radios using voice commands. 

Enable AI agents and your staff can interact with those agents directly over the radio using natural language. They can look up product inventory and store information, or ask an agent to perform any task that agent understands. 

## Architecture
![SYNQ Radio Architecture](/img/radio/synq-radio-high-level-architecture.png)
- The SYNQ Radio Edge hears all in-store radio traffic and relays it to the SYNQ Radio Cloud.
- The SYNQ Radio Cloud logs transcripts of the traffic and delegates conversations to configurable AI agents.
- The SYNQ Radio Cloud delivers responses from AI agents to the SYNQ Radio Edge when they are broadcast over the radio and heard by associates.

## Requirements
What you need to get up and running with SYNQ Radio AI:
- SYNQ Radio Edge Compute
  - Power (110V)
  - Ethernet connectivity
- SYNQ Radio Hardware Adapter
- Donor Radio (see [Supported Radio Models](#supported-radio-models))
  - Power for donor radio (typically via a docking charger)

### Networking Requirements
The radio kit needs to make outbound requests to the internet via the Ethernet connection it gets plugged into.
- DHCP enabled.
- Outbound protocols: HTTPS and WSS.
- Outbound ports: 443.
- The radio kit does not require any inbound network access.

## Supported Radio Models
Our growing list of tested and supported radio models:
- Dewalt
  - DXFRS300
  - DXFRS800
- ICOM
  - IC-F1000 
  - IC-F2000 
  - IC-M37
- Motorola
  - CLP1043
  - CLP1083
  - CLS1410
  - CLS1413
  - CLS1810
  - DLR110 (Curve)
  - DLR1020
  - DLR1060
- Retevis
  - RT17
  - RT19
  - RT22
  - RT27
  - RT68

We can accommodate additional radio models so long as the model supports some form of external headset jack. Get in touch with us at contact@synqtech.com and let us know what radio models you use.

## Supported Voice Providers
SYNQ Radio allows you to select your preferred cloud provider for speech-to-text and text-to-speech services.
- Azure AI Services
- Cartesia
- Deepgram
- Google Gemini
- Groq
- IBM Watsonx

## Installation
Installation of SYNQ Radio involves deployment of the edge radio kit into your premises. Typically this will be in or near a networking room. 

See the full [installation procedure](./installation.md).

### Radio Kit
The radio kit houses your donor radio and the necessary hardware to connect it to SYNQ's cloud services. 

#### Dimensions
- Height: 15.75"
- Width: 15.5"
- Depth: 5.5"

## Public Address Systems
SYNQ Radio can also interface with public address systems. The SYNQ Radio kit supports a 3.5mm TRRS audio connection for microphone input and speaker output.

Every PA system and deployment can be different, so the exact cabling and connections will vary, but conceptually it is simple:

A typical commercial PA receiver has:
- Input `Auxiliary 1` is connected to music. This plays in the background when there are no other priority inputs.
- Input `Microphone 1` is connected to the phone system. When `Microphone 1` has audio it gets priority and mutes `Auxiliary 1`. This serves the paging function.
- Input `Microphone 2` behaves the same as `Microphone 1`, but is unused.

To connect SYNQ Radio to a PA receiver:
1. Connect the speaker output of the radio kit to the `Microphone 2` input of the PA receiver. 
   - Audio messages that SYNQ Radio plays will be heard over the PA. 
2. Connect the microphone input of the radio kit to the same audio source that is connected to the `Microphone 1` input of the PA receiver. 
   - Audio messages from other sources that will be heard over the PA will also be delivered to SYNQ Radio.

## Transcript Viewer
SYNQ Radio provides a transcript of all the radio traffic it receives. This transcript also includes all messages played over the radios (like call button announcements, or responses to agentic queries). 

To access the transcript viewer:
1. Sign into __MyStore__ as a Location Administrator.
2. Select __Radio__.
3. Select the desired channel and date. 

:::note
Only Location and Organization Administrators are able to view radio transcripts.
:::