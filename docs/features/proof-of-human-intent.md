---
title: Proof of Human Intent
description: Require cryptographic human approval for critical actions — with instant execution for everything else.
sidebar_position: 1
---

# Proof of Human Intent

Interstellar ensures that no critical digital action — **transaction, agent delegation, smart-contract call, account recovery** — is executed unless a **human has cryptographically approved that exact action**, even when the device is compromised.

## 1. Instant Execution

For **non-critical actions**, execution happens **instantly or via simple device biometrics**.

## 2. Proof of Human Intent

For **critical actions**, execution requires a **[secure PoHI screen](/proof-of-human-intent/dynamic-visual-cryptography)** — prompting the user to input a randomly generated one-time code, enshrined and displayed alongside the intended action.

### Try the Secure PoHI Screen

Open a live simulation of the approval flow:

- [Desktop simulation](https://simu.interstellar.gg/3F60)
- [Mobile simulation](https://simu.interstellar.gg/3F60M)

1. Choose the device you're currently using
2. Press **Ok** — you can leave the participant field empty
3. Take a screenshot
4. Look at your screenshot

For the full walkthrough, see [visual simulation](/proof-of-human-intent/visual-simulation).

## Intent Logic

**Customize which actions require PoHI verification** — with a minimum advised requirement for high-value transactions and account recovery, where strong security is crucial.

If a user **unknowingly initiated a critical action** (due to phishing, blind signing, a rogue agent request, and so on), **PoHI triggers automatically**, alerting them to the true intent behind the action.

![Proof of Human Intent](/img/Proof_Of_Human_Intent_Slide.png)

:::tip
Dive into the [threat model](/proof-of-human-intent/threat-model) and explore how [Proof of Human Intent](/proof-of-human-intent/overview) counters each threat.
:::
