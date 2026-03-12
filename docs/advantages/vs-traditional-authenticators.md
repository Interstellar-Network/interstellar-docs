---
sidebar_position: 3
---

# vs Traditional Authenticators

| Aspect | Traditional Authenticators | Interstellar |
|--------|----------------------------|--------------|
| **UX: Setup** | Additional app to install; backup codes to store and potential new account to create. | Natively embedded; no seperate authenticator app.
| **UX: Validation** | Open seperate app, copy or type 6-digit code; 2+ screens. | Single screen approval with embedded intent message.
| **UX: Recovery** | Requires finding and re-entering complex backup codes; losing device can lock you out. | Seamless one-tap recovery.
| **Security: Validation** | TOTP not bound to intent; easily compromisable. | Intent cryptographically bound and embedded into single approval screen. 
| **Security: Centralization** | Provider can hold centralized recovery and sync; provider breach, policy, or account breach affects access. | Recovery and sync manager lives onchain.
| **Security: Exposure** | Backup codes and seeded secrets become critical recovery material. | No backup codes or secrets to store.
| **Security: Phishing** | TOTP codes and shared-secret factors can be phished, keylogged, or exfiltrated. | Resistant to advanced malware.
