---
title: vs Authenticators Apps
description: How Interstellar compares to TOTP authenticators on setup, validation, recovery, and phishing resistance.
sidebar_position: 3
---

# vs Authenticators Apps

| Aspect | Authenticators Apps | Interstellar |
|--------|----------------------------|--------------|
| **UX: Setup** | Additional app to install; potential new account to create and backup codes to store and remember. | Natively embeddeded into application. |
| **UX: Validation** | Open a separate app, copy or remember a 6-digit code; re-enter the code within the original screen. 2+ screens. | Single approval screen; enshrined within the original application itself. |
| **Security: Validation** | TOTP is not bound to intent; easily compromisable. | Intent [cryptographically bound](/proof-of-human-intent/garbled-circuits) to approval screen. |
| **Security: Centralization** | Provider can hold centralized recovery and sync; provider breach, policy, or account breach affects access. | Recovery and sync lives onchain. |
| **Security: Phishing** | TOTP codes and shared-secret factors can be [phished](/proof-of-human-intent/threat-model), keylogged, or exfiltrated. | No backup codes or secrets to store. |
