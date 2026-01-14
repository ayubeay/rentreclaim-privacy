# RentReclaim + Private Send

🏆 **Solana Hackathon Submission** - Open Track & Private Payments Track

## Live Demo
- **Main App**: https://www.rentreclaim.xyz
- **Private Send**: https://www.rentreclaim.xyz/send
- **Decrypt Tool**: https://www.rentreclaim.xyz/decrypt

## What We Built

### 1. RentReclaim (Open Track)
Recover SOL locked in empty token accounts. Every empty token account holds ~0.002 SOL in rent - we help you reclaim it.

**Features:**
- 🔍 Free wallet scan
- ⚡ One-click batch recovery
- 🔒 Non-custodial (no seed phrase needed)
- 💰 20% fee only on successful recovery

### 2. Private Send (Private Payments Track)
Privacy-enhanced transfers for SOL and SPL tokens (USDC, USDT, BONK, JUP).

**Privacy Features:**
- 🔀 **Split Transfers** - Payment divided into randomized smaller amounts
- ⏱️ **Time Jitter** - Randomized intervals break timing patterns  
- 🎭 **Decoy Reads** - Random RPC queries mask your activity
- 🔐 **Encrypted Memos** - AES-GCM encrypted notes (optional)
- 🪙 **SPL Token Support** - USDC, USDT, BONK, JUP, or any mint

**How it works:**
1. Connect wallet (Phantom/Solflare)
2. Select SOL or SPL token
3. Enter destination and amount
4. Set splits (1-25) and time window
5. Enable privacy mode
6. Send privately

### 3. Offline Decrypt Tool
Decrypt encrypted memo payloads without internet connection.

**Features:**
- 🌐 Works completely offline
- 🔑 Passphrase-protected decryption (v1)
- 📋 Demo payload generator for testing

## Tech Stack
- React + Vite
- Solana Web3.js
- SPL Token
- Wallet Adapter (Phantom, Solflare)
- WebCrypto API (AES-GCM encryption)
- Vercel hosting

## Privacy Disclaimer
⚠️ **Obfuscation only** - amounts and addresses are still visible on-chain. This is NOT a mixer or tumbler. It adds privacy through timing obfuscation and transaction splitting.

## Roadmap
- [ ] Token-2022 full support
- [ ] Recipient-key encryption (v2 notes)
- [ ] Multi-destination batching
- [ ] Mobile app

## Local Development
```bash
npm install
npm run dev
```

## Environment Variables
```
VITE_RPC_URL=your_helius_rpc_url
```

## License
MIT

---

Built with ❤️ for the Solana ecosystem
