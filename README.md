# RentReclaim - Privacy-First Wallet Hygiene for Solana

> Reclaim stranded SOL from empty token accounts without sharing keys or telemetry. Everything runs locally.

## 🔒 Privacy Hackathon Submission

**Track:** Privacy Tooling  
**Problem:** Users lose funds to scammers posing as "recovery helpers" who ask for private keys  
**Solution:** A 100% client-side tool that proves you can recover locked SOL without ever exposing keys

## 🎯 The Problem

Every Solana token account holds ~0.002 SOL in rent. When you sell or transfer all tokens, that SOL stays locked. Scammers exploit this by offering "recovery services" that require your private key.

**I was one of those victims.** After getting rugged, someone in Discord offered to help "recover" my funds. I gave them an old private key. They drained everything.

RentReclaim exists so no one ever has to hand over keys again.

## ✨ Features

- **100% Non-Custodial** - Keys never leave your wallet
- **Local-First** - All scanning and TX building in your browser
- **Zero Telemetry** - No analytics, tracking, or data collection
- **Instant Recovery** - Sign and get SOL back immediately
- **Open Source** - Verify the code yourself

## 🛡️ Privacy Architecture
```
[Your Wallet] <--public key only--> [Browser UI]
                                         |
                                  [Build TX locally]
                                         |
                                  [Sign in wallet popup]
                                         |
                                  [Direct to Solana RPC]
```

No servers. No databases. No keys exposed. Ever.

## 🚀 Live Demo

**https://www.rentreclaim.xyz**

## 📖 How It Works

1. **Connect Wallet** - Standard wallet adapter (read-only)
2. **Scan Accounts** - Find empty token accounts holding rent
3. **Select & Close** - Choose which accounts to reclaim
4. **Sign & Receive** - Approve in your wallet, SOL returns instantly

## 🔧 Tech Stack

- React + Vite
- @solana/web3.js
- Solana Wallet Adapter
- Token Program & Token-2022 support

## 📄 Privacy Statement

See [PRIVACY.md](./PRIVACY.md) for our full privacy commitment.

## 🏗️ Local Development
```bash
npm install
npm run dev
```

## 📜 License

MIT

---

Built with 💚 by a scam survivor, for the Solana community.
