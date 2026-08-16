---
title: Mobile Devices
description: How Interstellar turns everyday smartphones into hardware-wallet-grade intent surfaces.
sidebar_position: 1
---

# Mobile Devices

Mobile devices play a crucial role in Interstellar's architecture. They are the **interaction surface for every human intent**.

![World-Leading Mobile Security](/img/World-Leading_Mobile_Security_Slide.png)

## Interstellar's Mobile Security Innovation

### Making Your Phone as Secure as a Hardware Wallet

This technology **equips your everyday smartphone with next-generation mobile device security** by combining multiple layers of protection in a unique way. Unlike traditional solutions that try to detect malware — which is particularly difficult on mobile devices — this approach **creates a secure environment for critical digital actions that remains effective even if your device is compromised**.

## How It Works

The system uses **4 strong authentication factors**, all working together:

### 1. Your Device's Hardware Security

Your phone's built-in **Secure Element (SE)** stores a special key that's activated by your biometrics — fingerprint or face. This provides hardware-level security similar to what's found in hardware wallets — but **conveniently integrated into your daily device**.

### 2. The Intent Message

When initiating an intent, [you see exactly what you're approving](/proof-of-human-intent/dynamic-visual-cryptography) — the amount and destination. While this may seem basic, it's **presented in a way that malware cannot tamper with or hide**, making it a crucial security factor.

### 3. Dynamic Visual Authorization

This is where it gets innovative. **The system creates a unique cryptographic "movie"** that only human eyes can properly see:

- The “movie” is [generated on-chain](/design/interstellar-blockchain) and contains a one-time code
- Each frame is **protected by advanced cryptography** called [garbled circuits](/proof-of-human-intent/garbled-circuits)
- The code is only visible to humans, not to screen-capturing malware

### 4. Your Personal Interaction Pattern

:::info
**Upcoming Feature:** The system will be able to learn how you naturally interact with these visual challenges, creating an anonymous behavioral profile that cannot be stolen or replicated by an AI.
:::

## Protection Against Advanced Threats

This **multi-layered security** is effective against sophisticated threats. The [threat model](/proof-of-human-intent/threat-model) covers how Proof of Human Intent stops each of them:

- Scams and Social Engineering
- Clipper Malware
- Overlay Attacks
- Prompt Injection

## Breakthrough

Unlike [traditional EDRs](/advantages/vs-edr-mtd-security), which struggle on mobile, this approach:

- Is delivered through a **simple [SDK](/mobile-sdk) integration**
- Requires **no additional hardware** or seed phrases
- Focuses **protection on critical operations**
- Provides **security equivalent to hardware wallets**
- Works **even on compromised devices**

It’s a new paradigm: rather than detecting every threat, it creates a **sealed, verifiable environment for sensitive operations** that remains trustworthy regardless of device integrity.
