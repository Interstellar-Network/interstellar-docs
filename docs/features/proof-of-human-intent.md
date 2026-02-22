---
sidebar_position: 1
---

# Proof of Human Intent

When a user initiates an intent — **transaction/backup/recovery/other**; there are **two options for validating the operation**:

### 1. Instant Validation

- Intent is validated via **device biometrics**;
  - Provided intent sensitivity/transaction amount is below a customizable threshhold

### 2. Screen Validation

- Intent is validated via **device biometrics + [PoHI screen](/authentication/visual-simulation)** — prompting the user to input a randomly generated [one-time code](/authentication/dynamic-visual-cryptography)
  - e.g. high-amount transaction/backup/recovery/confirming sensitive autonomous agent operation

## Intent Logic

While non-sensitive operations are handled by 'Instant Validations' — **sensitive operations e.g. critical transactions are handled by an additional 'Screen Validation'**.

![Proof of Human Intents](/img/Proof_Of_Human_Intents_Slide.png)
