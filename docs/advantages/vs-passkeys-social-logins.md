---
sidebar_position: 2
---

# vs Passkeys & Social Logins

| Aspect | Passkeys & Social Logins | Interstellar |
|--------|--------------------------|--------------|
| **UX: Setup** | Requires account with email, password, or phone number. Most passkeys & social logins bind auth to that account. | Passkey-like onboarding with no pre-existing account requirement.
| **UX: Cross-platform** | Tied to provider's domain/ecosystem/cloud; switching platforms or devices can be painful. | Neutral, cross-platform, and WebAuthn compatible without vendor lock-in.
| **UX: Recovery** | Account recovery via provider (Apple/Google/Microsoft). | Recovery fully under your control; no single provider gate.
| **Security: Centralization** | Provider holds centralized recovery and sync; provider breach, policy, or account breach affects access. | Recovery and sync manager lives onchain.
| **Security: Phishing** | Prone to phishing, malicious connections/approvals, malware... | Secure, even if wallet or device is fully compromised; no credentials to steal.
