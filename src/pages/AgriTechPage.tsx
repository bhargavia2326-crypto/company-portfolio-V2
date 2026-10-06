import React, { useState } from 'react';
import { PageRoute } from '../types';
import { 
  Sprout, 
  Droplets, 
  Cpu, 
  Scan, 
  BarChart3, 
  Layers, 
  Sun, 
  Wind, 
  CheckCircle2, 
  ArrowRight, 
  Activity, 
  AlertTriangle,
  Compass,
  Radio
} from 'lucide-react';

interface AgriTechPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenContact: () => void;
}

export const AgriTechPage: React.FC<AgriTechPageProps> = ({ onNavigate, onOpenContact }) => {
  const [activeZone, setActiveZone] = useState<number>(1);
  const [irrigationStatus, setIrrigationStatus] = useState<Record<number, boolean>>({
    1: true,
    2: false,
    3: false,
    4: true,
  });
  const [targetMoisture, setTargetMoisture] = useState<number>(68);

  const zones = [
    { id: 1, name: 'North Orchard Block A', crop: 'Alphonso Mango', moisture: 64, ph: 6.5, n: '142 ppm', temp: '28°C', health: 'Optimal' },
    { id: 2, name: 'Valley Row Plot 4B', crop: 'Pomegranate & Citrus', moisture: 49, ph: 6.8, n: '118 ppm', temp: '29°C', health: 'Irrigation Needed' },
    { id: 3, name: 'East Terraced Ridge', crop: 'Soybean & Pulses', moisture: 72, ph: 6.2, n: '160 ppm', temp: '26°C', health: 'Optimal' },
    { id: 4, name: 'Hydroponic Nursery Bay 2', crop: 'Seedling Propagation', moisture: 81, ph: 5.9, n: '190 ppm', temp: '24°C', health: 'High Moisture' },
  ];

  const currentZoneData = zones.find(z => z.id === activeZone) || zones[0];

  const toggleZoneIrrigation = (zoneId: number) => {
    setIrrigationStatus(prev => ({ ...prev, [zoneId]: !prev[zoneId] }));
  };

  return (
    <div className="pt-24 pb-20 bg-[#f9f9f6] min-h-screen text-[#1b1c19]">
      {/* Hero Section */}
      <section className="px-6 lg:px-12 pt-12 pb-16 max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-mono font-semibold rounded-full tracking-wider uppercase">
            AGRITECH INTELLIGENCE
          </span>
          <span className="px-3 py-1 bg-black/5 text-gray-700 text-xs font-mono rounded-full">
            Autonomous Precision Agriculture
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-[#1b1c19] leading-[1.1]">
              Bridging rural soil and <br />
              <span className="text-[#65558f] italic">deep learning</span> algorithms.
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
              SOUICE combines aerial multispectral imaging, IoT sub-surface moisture telemetry, and computer vision 
              models to deliver actionable agronomic intelligence — reducing water waste by up to 34% while increasing crop yield.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={onOpenContact}
                className="px-7 py-3.5 bg-[#65558f] hover:bg-[#524479] text-white rounded-xl font-medium shadow-sm transition-colors flex items-center gap-2"
              >
                Deploy Farm Intelligence
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('solutions')}
                className="px-7 py-3.5 border border-gray-300 hover:bg-gray-100 rounded-xl font-medium transition-colors text-gray-700"
              >
                Explore Neural Models
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-mono font-semibold text-gray-700 uppercase tracking-wider">
                  Field Sensor Grid #AG-942
                </span>
              </div>
              <span className="text-xs font-mono text-gray-400">Live Telemetry</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#f9f9f6] p-4 rounded-xl border border-gray-100">
                <div className="text-xs text-gray-500 flex items-center gap-1.5 mb-1">
                  <Droplets className="w-3.5 h-3.5 text-blue-500" />
                  Water Reduction
                </div>
                <div className="text-2xl font-semibold text-emerald-600 font-mono">-34.2%</div>
                <div className="text-[11px] text-gray-400 mt-1">Algorithmic closed loop</div>
              </div>

              <div className="bg-[#f9f9f6] p-4 rounded-xl border border-gray-100">
                <div className="text-xs text-gray-500 flex items-center gap-1.5 mb-1">
                  <BarChart3 className="w-3.5 h-3.5 text-purple-500" />
                  Yield Increment
                </div>
                <div className="text-2xl font-semibold text-[#65558f] font-mono">+21.8%</div>
                <div className="text-[11px] text-gray-400 mt-1">NDVI targeted spray</div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200/50 flex items-start gap-3">
              <Sprout className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
              <div className="text-xs text-emerald-900 leading-relaxed">
                <strong>Real-time Detection Active:</strong> 18 autonomous drone flights synced today. 
                Zero fungal pathogens flagged in monitored acre blocks.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Agronomic Telemetry Dashboard Simulator */}
      <section className="px-6 lg:px-12 py-16 max-w-7xl mx-auto">
        <div className="bg-[#12131a] rounded-3xl p-6 sm:p-10 text-white shadow-xl border border-white/10 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <div className="text-xs font-mono text-[#a393d8] uppercase tracking-wider mb-1 flex items-center gap-2">
                <Radio className="w-3.5 h-3.5 text-emerald-400" />
                Autonomous Field Management Console
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif text-white">
                Live Field Sensor Matrix
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-gray-400">Target Moisture: {targetMoisture}%</span>
              <input
                type="range"
                min="40"
                max="85"
                value={targetMoisture}
                onChange={(e) => setTargetMoisture(Number(e.target.value))}
                className="w-28 accent-[#a393d8] cursor-pointer"
              />
            </div>
          </div>

          {/* Zone Selector Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {zones.map((zone) => {
              const isSelected = zone.id === activeZone;
              const isIrrigating = irrigationStatus[zone.id];
              return (
                <button
                  key={zone.id}
                  onClick={() => setActiveZone(zone.id)}
                  className={`text-left p-4 rounded-xl border transition-all ${
                    isSelected 
                      ? 'bg-white/10 border-[#a393d8] text-white shadow-inner' 
                      : 'bg-white/5 border-white/10 text-gray-400 hover:text-white hover:bg-white/8'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono font-semibold uppercase">Zone 0{zone.id}</span>
                    <span className={`w-2 h-2 rounded-full ${isIrrigating ? 'bg-cyan-400 animate-ping' : 'bg-gray-500'}`} />
                  </div>
                  <div className="text-sm font-medium text-white truncate">{zone.crop}</div>
                  <div className="text-xs font-mono text-gray-400 mt-2 flex items-center justify-between">
                    <span>{zone.moisture}% moist</span>
                    <span className={zone.moisture < 55 ? 'text-amber-400' : 'text-emerald-400'}>
                      {zone.health}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Zone Detail Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-medium text-white">{currentZoneData.name}</h3>
                  <p className="text-sm text-gray-400 font-mono">Telemetry Node SOU-LORA-{currentZoneData.id}93</p>
                </div>
                <button
                  onClick={() => toggleZoneIrrigation(currentZoneData.id)}
                  className={`px-4 py-2 rounded-lg text-xs font-mono font-semibold transition-all flex items-center gap-2 ${
                    irrigationStatus[currentZoneData.id]
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/30'
                      : 'bg-white/10 text-gray-300 border border-white/20 hover:bg-white/20'
                  }`}
                >
                  <Droplets className="w-3.5 h-3.5" />
                  {irrigationStatus[currentZoneData.id] ? 'Valve OPEN (Pumping)' : 'Valve CLOSED'}
                </button>
              </div>

              {/* Moisture Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-gray-400">Sub-soil Moisture (15cm - 45cm)</span>
                  <span className="text-white font-semibold">{currentZoneData.moisture}% (Target: {targetMoisture}%)</span>
                </div>
                <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-500"
                    style={{ width: `${currentZoneData.moisture}%` }}
                  />
                </div>
              </div>

              {/* Data Grid */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                  <div className="text-[11px] text-gray-400">Soil pH</div>
                  <div className="text-lg font-mono font-semibold text-white">{currentZoneData.ph}</div>
                </div>
                <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                  <div className="text-[11px] text-gray-400">Available Nitrogen</div>
                  <div className="text-lg font-mono font-semibold text-emerald-400">{currentZoneData.n}</div>
                </div>
                <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                  <div className="text-[11px] text-gray-400">Root Temp</div>
                  <div className="text-lg font-mono font-semibold text-amber-300">{currentZoneData.temp}</div>
                </div>
              </div>
            </div>

            {/* Simulated Satellite/Drone Thermal Map */}
            <div className="lg:col-span-5 bg-black/40 p-5 rounded-2xl border border-white/10 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-gray-400 pb-2 border-b border-white/10">
                <span className="flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-[#a393d8]" />
                  Multispectral NDVI Scan
                </span>
                <span className="text-emerald-400">97.4% Resolution</span>
              </div>

              {/* Visual simulated canvas for drone NDVI */}
              <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#1a3a2a] via-[#102a1d] to-[#0c1f15] flex items-center justify-center">
                {/* Simulated contour lines */}
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#4ade80_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="absolute inset-4 border border-dashed border-emerald-400/40 rounded-lg flex items-center justify-center">
                  <div className="text-center space-y-1">
                    <Scan className="w-8 h-8 text-emerald-400 mx-auto animate-pulse" />
                    <div className="text-xs font-mono text-emerald-200">NDVI Vigour Index: 0.84</div>
                    <div className="text-[10px] text-emerald-400/70">No chlorosis detected in plot boundary</div>
                  </div>
                </div>

                <div className="absolute bottom-2 left-2 px-2 py-1 bg-black/70 backdrop-blur rounded text-[10px] font-mono text-gray-300">
                  LAT: 17.3850° N | LONG: 78.4867° E
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core AgriTech Pillars */}
      <section className="px-6 lg:px-12 py-16 max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-[#65558f] font-semibold">
            SOLUTIONS ARCHITECTURE
          </span>
          <h2 className="text-3xl font-serif text-[#1b1c19]">
            Full-Spectrum Farm Modernization
          </h2>
          <p className="text-sm text-gray-600">
            From low-bandwidth village solar gateways to high-performance neural vision classifiers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-7 rounded-2xl border border-gray-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-[#65558f]">
              <Scan className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-medium text-[#1b1c19]">Computer Vision Crop Diagnostic</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Mobile edge models capable of offline inferencing. Farmers take a photo with any Android smartphone 
              to detect fungal blight, leaf spot, or pest infestations with 97%+ accuracy.
            </p>
            <ul className="text-xs text-gray-500 space-y-2 pt-2 border-t border-gray-100">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                Runs offline on low-end devices
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                Multi-lingual regional voice synthesis
              </li>
            </ul>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-gray-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700">
              <Droplets className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-medium text-[#1b1c19]">Intelligent Irrigation Mesh</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Long-range LoRaWAN telemetry communicating with solar-powered valve controllers. 
              Dynamically calculates evapotranspiration based on soil matrix and hyper-local weather.
            </p>
            <ul className="text-xs text-gray-500 space-y-2 pt-2 border-t border-gray-100">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                Zero manual valve opening needed
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                10km wireless LoRa range
              </li>
            </ul>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-gray-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700">
              <BarChart3 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-medium text-[#1b1c19]">Predictive Fair-Price Marketplace</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Time-series price forecasting across wholesale Mandis and terminal markets, giving growers 
              transparency and direct algorithmic connection to buyers, eliminating predatory middle layers.
            </p>
            <ul className="text-xs text-gray-500 space-y-2 pt-2 border-t border-gray-100">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                14-day price trend projection
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                Direct cold storage logistics match
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 lg:px-12 pt-8 pb-12 max-w-5xl mx-auto text-center space-y-6">
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-gray-200 shadow-sm space-y-4">
          <h2 className="text-3xl font-serif text-[#1b1c19]">
            Ready to deploy digital intelligence to your fields?
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base">
            Consult with Bhargavi and the SOUICE engineering team on your enterprise agronomy, 
            IoT hardware deployment, or AI vision model requirements.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenContact}
              className="px-8 py-3.5 bg-[#65558f] hover:bg-[#524479] text-white rounded-xl font-medium shadow-sm transition-colors"
            >
              Contact Agritech Division
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
