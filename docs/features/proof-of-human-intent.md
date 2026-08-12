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

For **critical actions**, **execution requires a** [**secure PoHI screen**](/proof-of-human-intent/visual-simulation) — prompting the user to input a randomly generated one-time code, enshrined and displayed alongside the intended action.

## Intent Logic

**Customize which actions require PoHI verification** — with a minimum advised requirement for high-value transactions and account recovery, where strong security is crucial.

If a user **unknowingly initiated a critical action** (due to phishing, blind signing, a rogue agent request, and so on), **PoHI triggers automatically**, alerting them to the true intent behind the action.

![Proof of Human Intent](/img/Proof_Of_Human_Intent_Slide.png)

:::tip
Deep Dive: For the cryptography and threat model, see the [Proof of Human Intent](/proof-of-human-intent/overview) section under Interstellar Network.
:::
