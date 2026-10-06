import React, { useState } from 'react';
import { ShieldCheck, Lock, ArrowRight } from 'lucide-react';

export const CybersecuritySection: React.FC = () => {
  const [identityLevel, setIdentityLevel] = useState<'mfa' | 'standard' | 'single'>('mfa');
  const [devicePosture, setDevicePosture] = useState<'compliant' | 'unmanaged' | 'compromised'>('compliant');
  const [anomalyScore, setAnomalyScore] = useState<number>(12);

  // Compute calculated risk
  let risk = anomalyScore;
  if (identityLevel === 'mfa') risk -= 15;
  if (identityLevel === 'single') risk += 35;
  if (devicePosture === 'compliant') risk -= 10;
  if (devicePosture === 'compromised') risk += 55;
  risk = Math.max(1, Math.min(99, risk));

  const isGranted = risk < 25;
  const isQuarantine = risk > 50;

  return (
    <section className="py-24 sm:py-32 px-6 sm:px-10 lg:px-16 xl:px-20 bg-[#0d0e12] text-white overflow-hidden relative">
      {/* Subtle restrained violet glow */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#5b45d9]/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        {/* Editorial Headline Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-b border-white/10 pb-16">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#a393d8] block">
              Cryptographic Engineering &amp; Defense
            </span>
            <h2 className="font-headline text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-[-0.035em] text-white leading-[1.02]">
              Security isn't an add-on. <br />
              <span className="font-serif italic font-normal text-gray-400">It's architecture.</span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-base text-gray-400 leading-relaxed font-normal">
              Perimeter firewalls are obsolete. We engineer zero-trust boundaries into every microservice, database transaction, and API gateway from day zero.
            </p>
          </div>
        </div>

        {/* Singular Architectural Instrument: Zero-Trust Access Evaluator */}
        <div className="rounded-3xl bg-white/[0.03] border border-white/10 p-8 sm:p-12 backdrop-blur-xl shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Interactive policy simulation controls */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-mono text-[#a393d8] uppercase tracking-wider block">
                Verification Instrument
              </span>
              <h3 className="font-headline text-2xl font-medium text-white">
                Zero-Trust Dynamic Evaluator
              </h3>
              <p className="text-xs text-gray-400">
                Simulate how our policy engine deterministically enforces access boundaries without human intervention.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <div>
                <label className="block text-xs font-mono text-gray-300 mb-1.5">
                  Identity Verification Tier
                </label>
                <select
                  value={identityLevel}
                  onChange={(e) => setIdentityLevel(e.target.value as any)}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-[#5b45d9] cursor-pointer"
                >
                  <option value="mfa" className="bg-[#111216]">Hardware FIDO2 Token (Cryptographic)</option>
                  <option value="standard" className="bg-[#111216]">Standard Time-Based OTP</option>
                  <option value="single" className="bg-[#111216]">Static Password (Legacy Risk)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-gray-300 mb-1.5">
                  Device Hardware Posture
                </label>
                <select
                  value={devicePosture}
                  onChange={(e) => setDevicePosture(e.target.value as any)}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-[#5b45d9] cursor-pointer"
                >
                  <option value="compliant" className="bg-[#111216]">Encrypted Secure Enclave Verified</option>
                  <option value="unmanaged" className="bg-[#111216]">Unmanaged BYOD Endpoint</option>
                  <option value="compromised" className="bg-[#111216]">Compromised / Rooted Kernel</option>
                </select>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono text-gray-300 mb-1.5">
                  <span>Network Anomaly Delta</span>
                  <span className="text-[#a393d8]">{anomalyScore}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={anomalyScore}
                  onChange={(e) => setAnomalyScore(Number(e.target.value))}
                  className="w-full accent-[#a393d8] cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Right: Deterministic evaluation response */}
          <div className="lg:col-span-6 rounded-2xl bg-black/60 p-6 sm:p-8 border border-white/10 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="text-xs font-mono text-gray-400">ENGINE VERDICT</span>
              <span className={`px-3 py-1 rounded-full text-xs font-mono font-semibold ${
                isQuarantine
                  ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                  : isGranted
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                  : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
              }`}>
                {isQuarantine
                  ? 'Access Quarantined'
                  : isGranted
                  ? 'Boundary Ratified'
                  : 'Step-Up Challenge'}
              </span>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="flex justify-between text-gray-400">
                <span>Calculated Risk Delta:</span>
                <span className="text-white font-semibold">{risk}%</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Cipher Corridor:</span>
                <span className="text-white">AES-256-GCM / Post-Quantum</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Handshake SLA:</span>
                <span className="text-emerald-400">&lt; 1.8ms</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 text-[11px] font-mono text-gray-300 leading-relaxed">
              {isQuarantine
                ? 'Anomaly threshold violated. Ephemeral token revoked. Sandboxed isolation containment executed.'
                : isGranted
                ? 'Zero-trust perimeter attested. Cryptographic session granted with 15-minute rolling re-validation.'
                : 'Elevated anomaly signature detected. Hardware biometric challenge dispatched to endpoint.'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
