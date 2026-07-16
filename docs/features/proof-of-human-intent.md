---
sidebar_position: 1
---

# Proof of Human Intent

Interstellar ensures that no critical digital action — transaction, agent delegation, smart-contract call, account recovery... — is executed unless a **human has cryptographically approved that exact action**, even when the device is compromised.

### 1. Instant Validation

- For **non-critical actions** — validation happens instantly via **device biometrics**.

### 2. Proof of Human Intent

- For **critical actions** — validation requires a secure [**PoHI screen**](/proof-of-human-intent/visual-simulation) — prompting the user to input a randomly generated [**one-time code**](/proof-of-human-intent/dynamic-visual-cryptography) which is displayed alongside the intended action.

## Intent Logic

 Users/service providers can **customize which actions require strong verification** — with exceptions like recovery and high-value transactions for which strong verification is always required.
 
 **PoHI triggers automatically if a user unknowingly initiates a critical action** (blind signing, phishing...), alerting them to the true intent behind the action.

![Proof of Human Intent](/img/Proof_Of_Human_Intent_Slide.png)
