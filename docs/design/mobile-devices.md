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

When initiating an intent, **you see exactly what you're approving** — the amount and destination. While this may seem basic, it's **presented in a way that malware cannot tamper with or hide**, making it a crucial security factor.

### 3. Dynamic Visual Authorization

This is where it gets innovative. **The system creates a unique cryptographic image "movie"** that only human eyes can properly see:

- The “movie” is **generated on-chain** and contains a one-time code
- Each frame is **protected by advanced cryptography** called [garbled circuits](/proof-of-human-intent/garbled-circuits)
- The code is only visible to humans, not to screen-capturing malware

### 4. Your Personal Interaction Pattern

:::info
**Upcoming Feature:** The system will be able to learn how you naturally interact with these visual challenges, creating an anonymous behavioral profile that cannot be stolen or replicated by an AI.
:::

## Protection Against Advanced Threats

This **multi-layered security** is effective against sophisticated threats, such as:

### Scams and Social Engineering

An estimated $17 billion was lost globally to crypto scams and fraud in 2025, with the average scam payment growing 253% year-over-year to about $2,764. Impersonation tactics and **AI-generated scams are overtaking cyberattacks as the primary method criminals use to steal funds**, with a reported 1,400% increase in impersonation scams and AI-enabled scams **proving 4.5 times more profitable than traditional ones**.

- No credentials to steal or reuse
- Screen always shows the real action to be executed
- Human-only readable confirmations

### Clipper Malware

Warned about by Binance and others, these attacks **change transaction details** via clipboard manipulation. Interstellar makes this ineffective because:

- Transaction data is cryptographically secured
- Approval requires decoding a visual one-time code

### Overlay Attacks

Banking and financial apps are often tricked with **fake UI overlays**. Interstellar’s [dynamic visual cryptography](/proof-of-human-intent/dynamic-visual-cryptography) prevents this:

- An attacker would need to mimic 60–120 fps image changes in sync
- Computationally infeasible and human-only decipherable

### Prompt Injection

Hidden instructions in websites, emails, and documents can **hijack AI agents into sending payments**. Prompt injection is ranked **#1 on the OWASP Top 10 for LLM Applications**, with direct attacks succeeding more than **79% of the time** in 2026 testing — and **live campaigns have already tricked agents into crypto transfers**. Interstellar keeps the human in the loop:

- Critical actions still require cryptographic human approval
- The screen shows the real destination and amount, not the injected instruction
- Visual one-time codes are human-only readable — agents cannot decode or auto-approve them

## Breakthrough

Unlike traditional EDRs, which struggle on mobile, this approach:

- Is delivered through a **simple SDK integration**
- Requires **no additional hardware**
- Focuses **protection on critical operations**
- Provides **security equivalent to hardware wallets**
- Works **even on compromised devices**

It’s a new paradigm: rather than detecting every threat, it creates a **sealed, verifiable environment for sensitive operations** that remains trustworthy regardless of device integrity.

## Summary

This is not just an incremental improvement — it’s a **new mobile security category**:

- Hardware-wallet grade protection on your phone
- No seed phrases or extra devices to buy
- Resistant to trojans, overlays, prompt injection, and advanced malware
- Simple and user-friendly
