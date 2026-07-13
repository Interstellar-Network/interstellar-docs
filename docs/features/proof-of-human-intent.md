---
sidebar_position: 1
---

# Proof of Human Intent

Interstellar ensures that no critical digital action — i.e., transaction, smart-contract call, or agent delegation — is executed unless a **human has cryptographically approved that exact action**, even on a compromised device.

### 1. Instant Validation

- For **non-critical actions** — validation happens instantly via **device biometrics**.

### 2. Proof of Human Intent

- For **critical actions** — validation requires a secure [**PoHI Screen**](/proof-of-human-intent/visual-simulation) — prompting the user to input a randomly generated [**one-time code**](/proof-of-human-intent/dynamic-visual-cryptography) which is displayed alongside the intended action.

## Intent Logic

 Users/service providers can customize which actions require stronger verification — with exceptions like recovery and high-value transactions for which strong verification is always required.
 
 **Proof of Human Intent triggers automatically if a user unknowingly initiates a critical action** (blind signing, phishing...), alerting them to the true intent behind the action.

![Proof of Human Intent](/img/Proof_Of_Human_Intent_Slide.png)
