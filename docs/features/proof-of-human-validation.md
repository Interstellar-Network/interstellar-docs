---
sidebar_position: 3
---

# Proof of Human Validation

When a user initiates an intent — **transaction** / **backup** / **recovery** / **...** —  there are **two options for validating the operation**:

### 1. Instant Validation

- Intent is validated **with device biometrics** — provided the transaction amount or sensitivity of the operation is **below a customizable threshhold**

### 2. Validation Screen

- Intent is validated **with device biometrics + [dynamic visual cryptographic screen](/authentication/dynamic-visual-cryptography)** — prompting the user to input a randomly generated one-time code **if threshold is reached**
- Examples: **high-amount transaction** / **backup** / **recovery** / **before confirming autonomous agent operation**

### Intent Logic

While smaller transactions and non-sensitive operations are handled by Instant Validations — bigger transactions and sensitive operations are handled with an additional Validation Screen.

![Proof of Human Validation](/img/Proof_Of_Human_Validation_Slide.png)
