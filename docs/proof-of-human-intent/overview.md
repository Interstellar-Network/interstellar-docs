---
sidebar_position: 1
---

# Overview

## The Authorization Layer for Wallets, Agents & Payments

Interstellar ensures that no critical transaction, smart-contract call, or agent action is executed unless a **human has cryptographically approved that exact action** — even on a compromised device.

![Human-Centric Intents](/img/Human-Intent_Verification_Slide.png)

## Authentication ≠ Intent

**Malware and AI agents now act after login** — draining wallets and triggering irreversible payments while security still trusts the authenticated session:

- Overlay attacks mean the user “confirms” one thing, the system executes another
- Instant settlement (Web3, real-time payments) means there is no rollback window
- Existing MFAs, biometrics, and passkeys all assume: *“If the device is authenticated, the action is legitimate.”*

## Proof of Human Intent

A new trust layer that **cryptographically binds a specific action to a human validation** and produces a cryptographic proof that malware and AI cannot fake:

- Secure intent screen that overlay attacks cannot silently alter
- Short cognitive interaction only a human can solve — embedded into the screen
- Proof of execution — exact action at a given time is verified by a decentralized signer network
