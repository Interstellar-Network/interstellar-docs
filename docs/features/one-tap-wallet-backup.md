---
sidebar_position: 2
---

# One-Tap Wallet Backup

The mobile SDK comes with a **new recovery solution** — leveraging Interstellar's next-gen account abstraction to create secure and simple to use backups.

- Users can **choose between two main backup options** after wallet generation:

![One-Tap Backup](/img/One-Tap_Backup_Slide.png)

### 1. Backup File

Save your freshly generated [**garbled circuit**](/authentication/garbled-circuits) '**Backup File**' to iCloud / Google Drive / Password Manager / Self-Hosted ... or send it to a friend via Whatsapp / Telegram / Signal / Messanger Apps ...

- It is **NOT critical if your wallet backup file gets exposed (trusted or untrusted party)** — as long as you still have access to your phone, or any other backup items

### 2. Backup Item

Hold a day-to-day **NFC enabled Item** close to your mobile device (within your app) to register this item as you backup.

- If your NFC item is lost, simply remove it from your backup options

## Backup Logic

![Polkadot Mobile Onboarding Demo](/img/Polkadot_Mobile_Onboarding_Demo.gif)

Every user can decide to have:

- **A** — **Single Item Recovery** — 1 Backup File / 1 Backup Item
- **B** — **Multisignature Recovery** — a combination of Backup File/s and/or Backup Item/s
  - e.g. 1/2 - 2/3 - 3/5 or any other threshhold/item combination

## Recovery Logic

If you cannot access your phone (lost/stolen/damaged); **simply recover your wallet on another mobile device**:

- **Upload your Backup File**/s +/or **touch mobile device with Backup Item**/s

  - After successful recovery;
  - The previous mobile device will be removed from your wallet;
  - The new mobile will be added added to your wallet
