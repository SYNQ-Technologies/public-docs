---
sidebar_position: 21
---

# Troubleshooting

This section documents some common issues and solutions.

## Can't see Teams channels in MyStore configuration
The SYNQ Frontline Hero app registration is not complete. 
1. Go to the default __General__ channel of your team
2. Click __Start a post__
3. In the message input start typing `@⁠SYNQ Frontline Hero` and select the bot from the list of suggestions
4. Select `update` from the list of suggested actions
5. Click __Post__

## Sign in with a Microsoft account says "you don't have permission to complete this action"
Your organization's Microsoft Entra ID policies prevent you from granting SYNQ the necessary permissions to sign you in. 
1. Contact your Microsoft Entra ID administrator
2. Have them visit the following URL https://login.microsoftonline.com/organizations/adminconsent?client_id=d3a6e6fb-d2b6-4285-9096-75a7ef6301b3
3. Once they sign in they will be able to approve access for all users in your organization

## Can sign in to MyStore, but waiting for approval
A location administrator for your requested store location has not yet approved your request.

## I forgot my password
See [Password Reset](./mystore/user-management.md#password-reset) for instructions.

:::note
If you sign in using a Microsoft account, you will need to follow your organization's password recovery process instead.
:::

## [Call for Help Troubleshooting](/docs/call-for-help/troubleshooting.md)