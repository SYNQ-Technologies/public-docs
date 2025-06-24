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
  - Power (120V)
  - Ethernet connectivity
- SYNQ Radio Hardware Adapter
- Donor Radio (see [Supported Radio Models](#supported-radio-models))
  - Power for donor radio (typically via a docking charger)

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
- Azure AI Services
- IBM Watsonx

## Installation

### Prepare donor radio
- Disable "Roger Beep".
- Turn on radio and select the desired channel.
- Set radio volume to approximately 1/3rd.

### Connect Devices
- Connect radio speaker/mic jack to the hardware adapter.
- Connect radio to power (typically a charging dock or USB cable).
- Connect Ethernet to PC.
- Connect power to PC.

### Verify
- Verify that the PC power light is illuminated.
- You should hear a "SYNQ Radio (Channel #) is online." announcement after approximately 10 seconds.
- Verify that the donor radio is properly seated on the charging dock.
