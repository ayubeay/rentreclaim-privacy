import React, { useMemo, useState } from "react";
import { tracks, sponsors, submissionReqs, projects, education, tooling } from "./privacyResources";

function Section({ title, children }) {
  return (
    <section className="bg-white/5 border border-white/10 rounded-xl p-4 md:p-6">
      <h2 className="text-lg md:text-xl font-semibold mb-3">{title}</h2>
      {children}
    </section>
  );
}

function SponsorCard({ s }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-lg border border-white/10 bg-white/5">
      <button className="w-full text-left px-4 py-3 flex items-center justify-between" onClick={() => setOpen(!open)}>
        <div>
          <div className="font-semibold">{s.name}</div>
          <div className="text-white/60 text-sm">{s.prize}</div>
        </div>
        <div className="text-white/60">{open ? "−" : "+"}</div>
      </button>
      {open && (
        <div className="px-4 pb-4 text-sm text-white/80 space-y-2">
          <p className="text-white/70">{s.blurb}</p>
          <div className="flex flex-wrap gap-2">
            {s.links?.map((l) => (
              <a key={l.url} href={l.url} target="_blank" rel="noreferrer" className="px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/20 text-sm">
                ↗ {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function PrivacyHub() {
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    if (!q.trim()) return sponsors;
    return sponsors.filter((x) => (x.name + x.blurb).toLowerCase().includes(q.toLowerCase()));
  }, [q]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="mb-6">
          <a href="/" className="text-white/60 hover:text-white">← Back</a>
        </div>

        <div className="mb-6">
          <h1 className="text-3xl font-bold">🔐 Privacy Ecosystem</h1>
          <p className="text-white/70 mt-2">Bounties, projects, and resources for the Solana Privacy Hackathon</p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <a href="https://solana.com/privacyhack" target="_blank" rel="noreferrer" className="px-3 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 font-semibold text-black">
              Privacy Hack →
            </a>
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search sponsors..." className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 w-full md:w-64" />
          </div>
        </div>

        <div className="grid gap-4 md:gap-6">
          <Section title="Main Tracks">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-white/60">
                    <th className="py-2 pr-3">Track</th>
                    <th className="py-2 pr-3">Prize</th>
                    <th className="py-2">Focus</th>
                  </tr>
                </thead>
                <tbody>
                  {tracks.map((t) => (
                    <tr key={t.track} className="border-t border-white/10">
                      <td className="py-2 pr-3 font-medium">{t.track}</td>
                      <td className="py-2 pr-3 text-emerald-400">{t.prize}</td>
                      <td className="py-2 text-white/70">{t.focus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          <Section title="Sponsor Bounties">
            <div className="grid md:grid-cols-2 gap-3">
              {filtered.map((s) => <SponsorCard key={s.name} s={s} />)}
            </div>
          </Section>

          <Section title="Our Submissions">
            <div className="grid md:grid-cols-3 gap-3">
              <a href="/send" className="p-4 rounded-lg border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20">
                <div className="font-semibold">🔒 Private Send</div>
                <div className="text-sm text-white/60">Private Payments Track</div>
              </a>
              <a href="/launch" className="p-4 rounded-lg border border-purple-500/30 bg-purple-500/10 hover:bg-purple-500/20">
                <div className="font-semibold">🪄 Stealth Launch</div>
                <div className="text-sm text-white/60">Private Launchpads Track</div>
              </a>
              <a href="/app" className="p-4 rounded-lg border border-blue-500/30 bg-blue-500/10 hover:bg-blue-500/20">
                <div className="font-semibold">🧹 RentReclaim</div>
                <div className="text-sm text-white/60">Open Track</div>
              </a>
            </div>
          </Section>

          <Section title="Ecosystem Projects">
            <div className="grid md:grid-cols-2 gap-3">
              {projects.map((p) => (
                <a key={p.url} href={p.url} target="_blank" rel="noreferrer" className="p-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10">
                  <div className="font-medium">{p.name}</div>
                  <div className="text-sm text-white/60">{p.blurb}</div>
                </a>
              ))}
            </div>
          </Section>

          <Section title="Developer Resources">
            <div className="grid md:grid-cols-2 gap-3">
              {[...education, ...tooling].map((r) => (
                <a key={r.url} href={r.url} target="_blank" rel="noreferrer" className="p-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10">
                  <div className="font-medium">{r.label}</div>
                  <div className="text-sm text-white/60">{r.note}</div>
                </a>
              ))}
            </div>
          </Section>

          <Section title="Submission Requirements">
            <ul className="list-disc ml-5 space-y-1 text-white/80">
              {submissionReqs.map((r, i) => <li key={i}>{r}</li>)}
            </ul>
          </Section>
        </div>

        <p className="mt-6 text-xs text-white/40 text-center">No analytics. No tracking. Just privacy.</p>
      </div>
    </div>
  );
}
