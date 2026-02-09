---
sidebar_position: 2
---

# One-Tap Wallet Backup

The mobile SDK comes with a new recovery solution — leveraging Interstellar's **next-gen account abstraction** to create secure and simple to use backups and recovery logic. Users can **choose between two main backup items** after wallet generation:

### 1. Backup File

Save a freshly generated [**garbled circuit**](/authentication/garbled-circuits) as a 'wallet backup file' to your iCloud / Google Drive / Password Manager, ... or send it to a friend via Whatsapp / Telegram / Singal / ...

- It is **NOT critical if your file is exposed**, as long as you have access to your phone, or other backup items

### 2. Backup Item

Hold a **day-to-day NFC Item** close to your mobile device to register this item as you backup.

- If your NFC item is lost, simply remove it from the backup

### Backup Logic

Every user can decide to have:

- **Single Item Recovery** — 1 Backup File / 1 NFC Item
- **Multisignature Recovery** — a combination of multiple Backup Files and/or NFC Items
  - 1/2 - 2/3 - 3/5 or any threshhold and item combinations needed for recovery

### Recovery Logic

If you cannot access your phone because it has been lost/stolen/damaged, **simply recover your wallet on a new mobile device**:

- **Upload your Backup File/s** and/or **tap your NFC Item**/s on the new mobile device
  - Previous mobile device will be removed and your new mobile device will serve as your wallet again

![One-Tap Backup](/img/One-Tap_Backup_Slide.png)
