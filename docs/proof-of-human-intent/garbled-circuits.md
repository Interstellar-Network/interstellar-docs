---
title: Garbled Circuits
description: Cryptographic obfuscation that executes without leaking circuit logic, inputs, or embedded intent data.
sidebar_position: 5
---

# Garbled Circuits

## Basic Garbled Circuit Structure

A garbled circuit is a **cryptographic obfuscation technique** and algorithm that **ensures computation privacy** — protecting a boolean circuit that **can be executed without leaking information**. Neither the semantics of boolean operators (AND, OR, XOR, etc.) that make up the circuit nor the semantics of inputs and outputs will be revealed to attackers through reverse-engineering or brute-force attacks. — [Foundation of Garbled Circuits, Viet Tung Hoang, B.S.](https://eprint.iacr.org/2012/265.pdf)

![GC Structure Overview](/img/GC_Structure_Overview.png)

- Inputs and outputs are garbled values — 128-bit tokens indistinguishable from random, with a secret semantic value of 0 or 1 known only by the nodes
- Each boolean operator is implemented in the circuit by an encrypted truth table, decrypted by its respective garbled-value inputs

## Interstellar Garbled Circuits

**Interstellar has developed a new garbling scheme implementation from scratch**, based on the following whitepapers:

- [A New Framework for Garbled Circuits](https://cosicdatabase.esat.kuleuven.be/backend/publications/files/journal/3351)
- [A New Approach to Garbled Circuits](https://eprint.iacr.org/2021/739.pdf)

This new scheme, proven secure against a PPT adversary, achieves a **major performance improvement** compared to previous methods (Fancy Garble and JustGarble), **while still incorporating the transaction message within the circuit**. Our optimizations — including parallelization, free gates, and especially tight memory management — contribute to this significant boost in performance.

## Learn More

- [Dynamic Visual Cryptography](/proof-of-human-intent/dynamic-visual-cryptography) — how the secure visual channel works
- [Interstellar Blockchain](/design/interstellar-blockchain) — where one-time circuits are generated
- [Mobile Devices](/design/mobile-devices) — how the phone becomes the intent surface
