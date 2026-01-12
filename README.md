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

## 🧠 Threat Model & Limitations

**What Privacy Mode protects against**
- Correlation of your *scan/cleanup workflow* by RPC observers
- Simple timing analysis (batchy patterns) via randomized delays
- Fingerprinting your cleanup traffic by mixing in popular mint reads

**What it does *not* hide**
- On-chain facts: your wallet still signs transactions; closes are public
- Sophisticated multi-signal correlation (e.g., IP + timing + mempool)
- Your identity if you reuse a publicly-known wallet

**Best practices**
- Use a reputable RPC; consider rotating endpoints
- Consider a privacy-friendly network path (VPN; avoid public Wi-Fi)
- Review every transaction in the wallet popup before signing

---

## 💵 Pricing Details

**Instant Clean-Up (recommended)**
- We cover network fees
- You keep **80%** of recovered rent (20% fee)

**Advanced Clean-Up**
- You pay network fees directly
- Lower per-account fee (flat rate shown in-app)
- Best for power users optimizing cost

> Rent per empty token account is ~0.002 SOL. Final recovery shown in preview before signing.

---

## ✅ Supported Wallets & Browsers

- **Wallets:** Phantom, Solflare, Backpack (any Wallet Adapter-compatible)
- **Browsers:** Chrome, Brave, Edge, Firefox (desktop)
- *Note:* Mobile in-app browsers may have wallet popup issues

---

## 🧪 Safety Checklist

- ✅ Only **zero-balance** accounts targeted
- ✅ Exact accounts & expected SOL shown before signing
- ✅ Transactions built **locally**, signed in wallet popup
- ✅ We **never** ask for seed phrase or private key
- ⚠️ If any site asks for your seed phrase = **SCAM**

---

## 📦 Submission Checklist

- [x] README updated with privacy features
- [x] Live demo: https://www.rentreclaim.xyz
- [x] Privacy Mode with explainer modal
- [x] SIMD-0436 educational banner
- [x] No affiliate links (neutral security tip only)
- [x] `PRIVACY.md` linked
- [ ] 60-sec demo video
- [ ] Screenshots in `docs/`
- [ ] Version tag (e.g., `v0.1.0-hackathon`)
