---
sidebar_position: 4
---

# AI and Data Flows

This page describes what data SYNQ Radio captures, where that data goes, how long it is kept, and which parts of the system you control. It is intended for the people responsible for reviewing how SYNQ Radio handles your data.

## Summary

| Data flow | Enabled by default | Destination | Retained at destination |
| --- | --- | --- | --- |
| Radio audio to speech-to-text | Yes | Speech provider you select | No |
| Generated speech from text-to-speech | Yes | Speech provider you select | No |
| Transcripts to SYNQ storage | Yes | SYNQ cloud (Azure) | 1 year by default |
| Radio audio to SYNQ storage | No, opt in | SYNQ cloud (Azure) | 2 weeks by default |
| Transcripts to an AI agent, after a wake word | No, you enable and configure the agent | Agent endpoint you configure | Per that provider |

All data flows are encrypted in transit using HTTPS or WSS. All data stored by SYNQ is encrypted at rest.

Every destination above is a setting. SYNQ typically configures these with you, and they remain yours to review and change. If you would rather all of it ran against services your own organization operates, see [Using Your Own Services](#using-your-own-services).

## Speech Services

SYNQ Radio uses off-the-shelf speech-to-text and text-to-speech services. Audio heard on the donor radio is sent to a speech-to-text service and converted to text; text that SYNQ Radio needs to speak is sent to a text-to-speech service and converted to audio. Both are stateless conversions. The audio and text pass through and are not retained by the speech provider.

You choose the provider and supply its connection settings, including the endpoint and API key. See [Speech Providers](./settings.md#speech-providers) for the full list of supported providers and their configuration.

## Transcripts

Transcripts of radio traffic are written to SYNQ's cloud storage. This includes speech heard on the donor radio and messages SYNQ Radio plays over it, such as call button announcements and agent responses.

Transcripts are retained for **1 year** by default. This retention period can be adjusted for your organization.

## Radio Audio

SYNQ Radio does not store radio audio by default. Audio is converted to text and discarded.

You can opt in to having audio stored, for either of two reasons:

- **System diagnostics.** Stored audio lets us investigate audio quality, transcription accuracy, and hardware issues on your deployment.
- **Speech-to-text fine tuning.** If you have engaged us to build a fine-tuned speech-to-text model, audio capture is how the training data is collected. See [Fine-Tuned Speech-to-Text Models](#fine-tuned-speech-to-text-models).

Stored audio is retained for **2 weeks** by default and then deleted. This retention period can be adjusted for your organization.

## Deletion

Transcripts and stored audio are deleted automatically once they reach the end of their retention period. This is enforced by the retention period itself and requires no action from you.

Data can also be deleted on request, ahead of its retention period.

## Access Controls

Within your organization, you control who can see radio data. Transcripts are visible only to Location Administrators and Organization Administrators, and you decide who holds those roles. See [Transcript Viewer](./intro.md#transcript-viewer) and [User Management](../mystore/user-management.md).

Within SYNQ, access is limited to staff whose role requires it: those responsible for maintaining the production environment, and those supporting your organization.

## AI Agents

AI agents are off until you enable and configure one.

An agent does not receive all radio traffic. Each agent is configured with a name and a set of aliases, which act as its wake words. Transcriptions are sent to the agent only after it has been woken by one of those words, and only for as long as it stays awake. How long an agent remains awake after the last transmission is also configurable. Traffic outside of those windows is transcribed and stored, but is not sent to the agent.

When an agent is awake, SYNQ Radio sends the transcribed text of the request to that agent's endpoint and speaks the response over the radio.

How the agent behaves is under your control:

- The name and aliases that wake the agent, and how long it stays awake.
- The agent type, its endpoint, and its credentials.
- The system prompts.
- Which Model Context Protocol (MCP) servers the agent can reach, and therefore what data and systems it can act on.

See [Agents](./settings.md#agents) for configuration details.

Where SYNQ operates the agent service on your behalf, it runs on Azure OpenAI. You can also point SYNQ Radio at an agent endpoint your own organization runs. See [Using Your Own Services](#using-your-own-services).

## Where SYNQ-Managed Services Run

By default, all AI services that SYNQ operates on your behalf run on Azure. Where an OpenAI model is used, it is an OpenAI model hosted by Azure through Azure OpenAI, not OpenAI's own services.

Our agreements with Microsoft and our other service providers state that data we send to these services is not used to train their models and is not shared with third parties.

If you ask us to, SYNQ can operate services on your behalf with providers other than Microsoft. In that case the data flows and terms depend on the provider you select.

## Our Commitments

- We do not use your data to train AI models or voice models.
- We do not sell your data.
- We do not share your data with third parties.
- We do not use your data for any purpose other than providing and supporting the SYNQ Radio service for your organization.

## Fine-Tuned Speech-to-Text Models

This is the one exception to the commitments above, and it happens only if you specifically ask us for it.

We are able to build a speech-to-text model fine tuned on audio captured from your radios, paired with ground-truth transcriptions. This improves transcription accuracy for your store environments, vocabulary, and accents.

This is not a built-in feature of the product. It is a separate service, delivered under a separate agreement that you engage us on specifically. It does not happen as part of normal operation, and it requires you to opt in to [audio capture](#radio-audio).

## Using Your Own Services

Every AI service SYNQ Radio uses is configurable, and each one can be pointed at a service your own organization operates and controls:

- **Speech services**: configure a provider under your own subscription.
- **AI agents**: configure an Azure OpenAI or OpenAI agent under your own subscription, or implement a [generic agent](./settings.md#implementing-a-generic-agent) against your own service.

When you configure SYNQ Radio this way, the data flows to your services and the governance of that data is under your control.
