---
title: Threat Model
description: How Proof of Human Intent stops scams, clipper malware, overlay attacks, and prompt injection — even after login.
sidebar_position: 2
---

# Threat Model

Proof of Human Intent does not try to detect every threat on the device. It **binds a specific action to a human validation** and produces a cryptographic proof that malware and AI cannot fake — even when the session, screen, or agent has already been compromised.

This **multi-layered security** is effective against sophisticated threats, such as:

## Scams and Social Engineering

An estimated $17 billion was lost globally to crypto scams and fraud in 2025, with the average scam payment growing 253% year-over-year to about $2,764. Impersonation tactics and **AI-generated scams are overtaking cyberattacks as the primary method criminals use to steal funds**, with a reported 1,400% increase in impersonation scams and AI-enabled scams **proving 4.5 times more profitable than traditional ones**.

- No credentials to steal or reuse
- Screen always shows the real action to be executed
- Human-only readable confirmations

## Clipper Malware

Warned about by Binance and others, these attacks **change transaction details** via clipboard manipulation. Interstellar makes this ineffective because:

- Transaction data is cryptographically secured
- Approval requires decoding a visual one-time code

## Overlay Attacks

Banking and financial apps are often tricked with **fake UI overlays**. Interstellar’s [dynamic visual cryptography](/proof-of-human-intent/dynamic-visual-cryptography) prevents this:

- An attacker would need to mimic 60–120 fps image changes in sync
- Computationally infeasible and human-only decipherable

## Prompt Injection

Hidden instructions in websites, emails, and documents can **hijack AI agents into sending payments**. Prompt injection is ranked **#1 on the OWASP Top 10 for LLM Applications**, with direct attacks succeeding more than **79% of the time** in 2026 testing — and **live campaigns have already tricked agents into crypto transfers**. Interstellar keeps the [human in the loop](/multichain/agents):

- Critical actions still require cryptographic human approval
- The screen shows the real destination and amount, not the injected instruction
- Visual one-time codes are human-only readable — agents cannot decode or auto-approve them
