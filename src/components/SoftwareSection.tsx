import React, { useState } from 'react';
import { Zap, Terminal, Server, Globe } from 'lucide-react';

export const SoftwareSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'cluster' | 'crdt' | 'edge'>('cluster');

  return (
    <section className="py-24 sm:py-32 px-6 sm:px-10 lg:px-16 xl:px-20 bg-[#fafaf7] text-[#111216] border-t border-black/[0.06]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Editorial Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-black/[0.08]">
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-gray-500 block">
              Distributed Systems Practice
            </span>
            <h2 className="font-headline text-4xl sm:text-6xl font-semibold text-[#111216] tracking-[-0.03em]">
              High-performance <br />
              <span className="font-serif italic font-normal text-gray-600">software platforms.</span>
            </h2>
          </div>
          <p className="text-base text-gray-600 max-w-md leading-relaxed font-normal">
            Built with Rust, Go, and kernel-bypass I/O, our distributed platforms deliver deterministic resilience and sub-millisecond execution.
          </p>
        </div>

        {/* Asymmetric Composition: Large Architecture Console + Supporting Tenets */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Architectural Workbench (Span 7 cols) */}
          <div className="lg:col-span-7 rounded-3xl bg-white border border-black/[0.08] p-8 sm:p-10 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block">
                    Execution SLA
                  </span>
                  <h3 className="font-headline text-2xl font-semibold text-[#111216]">
                    Low-Latency Ingestion Core
                  </h3>
                </div>
                <span className="text-xs font-mono font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded">
                  &lt; 0.42ms P99
                </span>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed font-normal">
                Memory-mapped ring buffers and zero-copy deserialization ensure zero garbage collection spikes in high-volume enterprise pipelines.
              </p>

              {/* Console */}
              <div className="bg-[#111216] rounded-2xl p-6 text-white font-mono text-xs space-y-3 border border-white/10">
                <div className="flex items-center gap-4 pb-3 border-b border-white/10 text-[11px]">
                  <button
                    onClick={() => setActiveTab('cluster')}
                    className={`transition-colors cursor-pointer ${activeTab === 'cluster' ? 'text-white font-bold border-b border-white' : 'text-gray-400 hover:text-white'}`}
                  >
                    cluster.yaml
                  </button>
                  <button
                    onClick={() => setActiveTab('crdt')}
                    className={`transition-colors cursor-pointer ${activeTab === 'crdt' ? 'text-white font-bold border-b border-white' : 'text-gray-400 hover:text-white'}`}
                  >
                    state_sync.rs
                  </button>
                  <button
                    onClick={() => setActiveTab('edge')}
                    className={`transition-colors cursor-pointer ${activeTab === 'edge' ? 'text-white font-bold border-b border-white' : 'text-gray-400 hover:text-white'}`}
                  >
                    ingress.wasm
                  </button>
                </div>

                {activeTab === 'cluster' && (
                  <div className="space-y-1 text-gray-300 text-[11px] leading-relaxed">
                    <div className="text-emerald-400"># Autonomous Multi-Region Pod Autoscaler</div>
                    <div>replicas: dynamic [min: 12, max: 240]</div>
                    <div>failover_latency: 18ms (Zero Dropped Packets)</div>
                    <div>health_probe: gRPC stream bi-directional</div>
                  </div>
                )}

                {activeTab === 'crdt' && (
                  <div className="space-y-1 text-gray-300 text-[11px] leading-relaxed">
                    <div className="text-emerald-400">// Conflict-Free Replicated Data Types (CRDT)</div>
                    <div>impl LWWRegister for DistributedState &#123;</div>
                    <div className="pl-3">fn reconcile(local, remote) -&gt; Result&lt;State&gt;</div>
                    <div>&#125; // Deterministic convergence guarantee</div>
                  </div>
                )}

                {activeTab === 'edge' && (
                  <div className="space-y-1 text-gray-300 text-[11px] leading-relaxed">
                    <div className="text-emerald-400">// WebAssembly Edge Dispatcher</div>
                    <div>router.route(req).then(|res| res.with_cache_ttl(0));</div>
                    <div>geo_closest: true | ssl_handshake: 1.2ms</div>
                  </div>
                )}
              </div>
            </div>

            <div className="pt-4 border-t border-black/[0.06] flex items-center justify-between text-xs font-mono text-gray-500">
              <span>Docker &amp; Kubernetes Native</span>
              <span className="text-[#111216] font-semibold">Zero-Downtime Deployment</span>
            </div>
          </div>

          {/* Right Column: 2 Clean Architectural Panels (Span 5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="p-8 rounded-3xl bg-[#111216] text-white space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-gray-400">INFRASTRUCTURE</span>
                <span className="text-xs font-mono text-emerald-400">99.999% SLA</span>
              </div>
              <h3 className="font-headline text-2xl font-medium">
                Cloud Native Elastic Mesh
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-normal">
                Autonomous clusters that scale horizontally without manual provisioning, maintaining sub-millisecond responsiveness under peak load.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-black/[0.08] space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-gray-400">STATE PROTOCOL</span>
                <span className="text-xs font-mono text-gray-600">CRDT Sync</span>
              </div>
              <h3 className="font-headline text-2xl font-semibold text-[#111216]">
                Deterministic State Convergence
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                Bi-directional synchronization between edge devices, mobile clients, and central databases with mathematical guarantee against merge collisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
