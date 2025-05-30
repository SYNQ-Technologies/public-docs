---
sidebar_position: 2
---

# Radio Air Traffic Control

Turn your existing analog radios into modern devices that enable bidirectional communication, allowing digital inputs to trigger voice notifications and vice versa - supporting real-time notifications and task management. 

## Key Features
Convert digital help requests into audio notifications for associates, who can update request statuses with voice commands.
- Turn digital inputs into voice notifications.
- Manage tasks with voice prompts.
- Push real-time updates to customer devices.
- Integration with Call for Help and Curbside.

## Call for Help Integration

To enable Call for Help over the radio:
1. Sign into __MyStore__ as a Location Administrator
1. Select __Location Config__
1. Scroll down to __Webhooks__
1. Configure the __Webhook URL__ to point to your instance. For example:
   - `https://your-synq-radio-instance.domain.com/webhooks/incoming/frontline-hero`
1. Check the __Enable Call for Help Webhooks__ checkbox

By default the following Call for Help events get announced over the radio:
- `created` New request
- `escalated` Escalated request
- `cancelled` Customer cancelled request

The full list of available Call for Help events that can be announced are:
- `created` New request
- `escalated` Escalated request
- `claimed` An associate claimed the request
- `on_the_way` An associate is on the way to service the request
- `completed` An associate completed the request
- `cancelled` Customer cancelled request
- `timed_out` A request was not serviced and has timed out

### Associate Voice Actions
An associate can claim a Call for Help request by speaking numerous variations of the following into their radio:
- I'm on it
- I've got it
- I'll do it

An associate can indicate that they are on their way to service a Call for Help request by speaking numerous variations of the following into their radio:
- I'm on my way
- I'm heading there now

## Curbside Integration

To enable Curbside over the radio:
1. Sign into __MyStore__ as a Location Administrator
2. Select __Location Config__
3. Scroll down to __Webhooks__
4. Configure the __Webhook URL__ to point to your instance. For example:
   - `https://your-synq-radio-instance.domain.com/webhooks/incoming/frontline-hero`
5. Check the __Enable Curbside Webhooks__ checkbox

By default the following Curbside events get announced over the radio:
- `created` New request
