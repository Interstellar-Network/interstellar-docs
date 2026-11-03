---
title: Threat Model
description: How Proof of Human Intent stops scams, clipper malware, overlay attacks, and prompt injection — even after login.
sidebar_position: 2
---

# Threat Model

Proof of Human Intent does not try to detect every threat on the device. **It protects the human intent itself — even when the session, screen, or agent has already been compromised.**

This approach is far more effective than traditional models, designed to protect against sophisticated threats, such as:

## Scams and Social Engineering

An estimated $17 billion was lost globally to crypto scams and fraud in 2025, with the average scam payment growing 253% year-over-year to about $2,764. Impersonation tactics and **AI-generated scams are overtaking cyberattacks as the primary method criminals use to steal funds**, with a reported 1,400% increase in impersonation scams and AI-enabled scams **proving 4.5 times more profitable than traditional ones**.

- No credentials to steal or reuse
- Screen always shows the real action to be executed

## Prompt Injection

Hidden instructions in websites, emails, and documents can **hijack AI agents into sending payments**. Prompt injection is ranked **#1 on the OWASP Top 10 for LLM Applications**, with direct attacks succeeding more than **79% of the time** in 2026 testing — and **live campaigns have already tricked agents into crypto transfers**. Interstellar keeps the [human in the loop](/deployments/agents):

- Critical actions require cryptographically proven human confirmations
- The screen shows the real destination and amount, not the injected instruction
- Visual one-time codes are designed so that agents cannot auto-approve them

## Clipper Malware

Warned about by Binance and others, **these attacks change legitimate transaction details** like destination addresses and transaction amounts via clipboard manipulation and replaces them by illegitimate ones. Interstellar makes this ineffective because:

- Transaction data is cryptographically secured — enshrined into the approval screen

## Interface Manipulations

Financial interfaces are often tricked with **fake UI overlays and overlay attacks**. This leads users to confirm one thing; but the system executing another. Interstellar’s [dynamic visual cryptography](/proof-of-human-intent/dynamic-visual-cryptography) prevents this:

- Randomly generated and dynamic 60–120 fps action interface is economically infeasible to manipulate
