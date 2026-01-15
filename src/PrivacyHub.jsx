import React, { useState } from "react";

const tracks = [
  { track: "Private Payments", prize: "$15,000", focus: "Confidential transfers on Solana" },
  { track: "Privacy Tooling", prize: "$15,000", focus: "Tools for developers to build with privacy" },
  { track: "Open Track", prize: "$18,000", focus: "Privacy applications (Light Protocol)" },
];

const sponsors = [
  { name: "Arcium", prize: "$10,000", url: "https://arcium.com/" },
  { name: "Aztec (Noir)", prize: "$10,000", url: "https://noir-lang.org/docs/" },
  { name: "Radr Labs", prize: "$15,000", url: "https://radr.fun/" },
  { name: "Inco", prize: "$6,000", url: "https://docs.inco.org/svm/home" },
  { name: "Privacy Cash", prize: "$6,000", url: "https://github.com/Privacy-Cash/privacy-cash" },
  { name: "Helius", prize: "$5,000", url: "https://helius.dev/" },
  { name: "Range", prize: "$1,500", url: "https://www.range.org/" },
  { name: "Encrypt.trade", prize: "$1,000", url: "https://encrypt.trade/" },
];

const submissions = [
  { emoji: "🔒", title: "Private Send", blurb: "Private Payments", href: "/send", bg: "bg-purple-500/10 border-purple-500/30" },
  { emoji: "🪄", title: "Stealth Launch", blurb: "Private Launchpads", href: "/launch", bg: "bg-emerald-500/10 border-emerald-500/30" },
  { emoji: "🧹", title: "RentReclaim", blurb: "Open Track", href: "/app", bg: "bg-blue-500/10 border-blue-500/30" },
];

const resources = [
  { name: "Noir on Solana", url: "https://github.com/solana-foundation/noir-examples" },
  { name: "Confidential Transfers", url: "https://solana.com/docs/tokens/extensions/confidential-transfer" },
  { name: "Light Protocol", url: "https://github.com/Lightprotocol/light-protocol" },
  { name: "Sunspot Verifier", url: "https://github.com/reilabs/sunspot" },
];

export default function PrivacyHub() {
  const [q, setQ] = useState("");
  const filtered = sponsors.filter(s => s.name.toLowerCase().includes(q.toLowerCase()));

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <a href="/" className="text-white/60 hover:text-white">← Back</a>

        <h1 className="text-3xl font-bold mt-6">🔐 Privacy Ecosystem</h1>
        <p className="text-white/70 mt-2">Bounties, projects, and resources for the Solana Privacy Hackathon</p>
        <a href="https://solana.com/privacyhack" target="_blank" rel="noreferrer" className="mt-4 inline-block px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold rounded-lg">Privacy Hack →</a>

        <h2 className="text-xl font-semibold mt-10 mb-4">Main Tracks</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="text-left text-white/60"><th className="py-2">Track</th><th className="py-2">Prize</th><th className="py-2">Focus</th></tr></thead>
            <tbody>
              {tracks.map(t => <tr key={t.track} className="border-t border-white/10"><td className="py-2">{t.track}</td><td className="py-2 text-emerald-400">{t.prize}</td><td className="py-2 text-white/70">{t.focus}</td></tr>)}
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-semibold mt-10 mb-4">Sponsor Bounties</h2>
        <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search sponsors..." className="mb-4 px-3 py-2 rounded-lg bg-white/5 border border-white/10 w-full md:w-64" />
        <div className="grid md:grid-cols-3 gap-3">
          {filtered.map(s => (
            <a key={s.name} href={s.url} target="_blank" rel="noreferrer" className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10">
              <div className="font-semibold">{s.name}</div>
              <div className="text-emerald-400 text-sm">{s.prize}</div>
            </a>
          ))}
        </div>

        <h2 className="text-xl font-semibold mt-10 mb-4">Our Submissions</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {submissions.map(s => (
            <a key={s.title} href={s.href} className={`p-4 rounded-xl border ${s.bg} hover:scale-105 transition`}>
              <div className="text-2xl">{s.emoji}</div>
              <div className="font-semibold mt-2">{s.title}</div>
              <div className="text-white/60 text-sm">{s.blurb}</div>
            </a>
          ))}
        </div>

        <h2 className="text-xl font-semibold mt-10 mb-4">Developer Resources</h2>
        <div className="grid md:grid-cols-2 gap-3">
          {resources.map(r => (
            <a key={r.name} href={r.url} target="_blank" rel="noreferrer" className="p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10">
              <div className="font-medium">{r.name}</div>
            </a>
          ))}
        </div>

        <h2 className="text-xl font-semibold mt-10 mb-4">Submission Requirements</h2>
        <ul className="list-disc ml-5 text-white/80 space-y-1">
          <li>Open source code mandatory</li>
          <li>Deploy to Solana devnet or mainnet</li>
          <li>Include demo video (max 3 minutes)</li>
          <li>Provide documentation</li>
        </ul>

        <p className="mt-10 text-center text-white/40 text-sm">No analytics. No tracking. Just privacy.</p>
      </div>
    </div>
  );
}
