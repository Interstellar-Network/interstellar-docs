---
title: Threat Model
description: How Proof of Human Intent protects critical digital actions — even when the session, agent, or device has already been compromised.
sidebar_position: 2
---

# Threat Model

**Proof of Human Intent** does not try to detect threats on the device or network level. It **protects the human intent itself, all the way to the screen, so what the human approves is exactly what executes** — even when the session, agent, or device has already been compromised. PoHI was designed to protect against sophisticated threats, such as:

## Scams and Social Engineering

**An estimated $17 billion was lost globally to crypto scams and fraud in 2025 alone.**

- AI-generated scams are overtaking cyberattacks as criminals' main way to steal funds
- Impersonation and AI-enabled scams are up 1,400% and are 4.5x more profitable than traditional ones
- Average scam payment grew 253% year-over-year to about $2,764
- Binance's $6.3 billion hack in 2026 used a fake job interview to exploit employee hardware and internal AI tools

**No credential to steal or reuse:** the human must approve the exact action shown on the screen.

## Prompt Injection

**57% of all web traffic is now non-human, and the fastest-growing part of it is AI agents acting on behalf of users.**

- Hidden instructions in websites, emails and documents can hijack AI agents into sending payments
- Ranked #1 on the OWASP Top 10 for LLM Applications, with direct attacks succeeding 79%+ of the time in 2026 testing
- Live campaigns have already tricked agents into crypto transfers
- Cloudflare measured this agent traffic growing more than 15x in 2025 alone

**Agents cannot execute important payments:** [critical actions stay under human control](/deployments/agents)

## Clipper Malware

**Warned about by Binance and others, clipper malware swaps a wallet address you copy for one the attacker controls.**

- Microsoft has tracked a Windows clipper campaign active since February 2026
- In November 2026, attackers hijacked 178 websites, including BBC, Zoom and HSBC, to plant clipboard-swapping code
- One bad paste is permanent: a trader lost $50 million in USDT after copy-pasting a fake address

**Address has to appear on the approval screen**, so the human sees the destination that will actually execute.

## Interface Manipulation

**Compromised front-ends trick the user into "confirming" one thing while the system signs and executes another.**

- Bybit lost ~$1.5 billion in 2025 after attackers tampered with the Safe{'{Wallet}'} interface
- Signers approved what looked like a normal transaction
- When what you see isn't what you sign, even multi-signature setups give no protection

**[Secure intent screen](/proof-of-human-intent/dynamic-visual-cryptography) cannot be silently altered**, so what the human approves is what gets signed.
