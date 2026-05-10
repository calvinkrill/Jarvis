import React from 'react';
import { motion } from 'motion/react';
import { Terminal, Code, Cpu, Database, Globe, Layers, Zap, Activity } from 'lucide-react';
import { useLiveAPI } from '../hooks/useLiveAPI';

export const WorkshopDashboard: React.FC = () => {
  const { isSpeaking, isProcessing, isListening } = useLiveAPI();

  return (
    <div className="w-full h-full p-4 md:p-6 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 font-mono overflow-y-auto scrollbar-hide">
      {/* Left Column: System Stats */}
      <div className="col-span-1 md:col-span-3 flex flex-col gap-4">
        <div className="glass-panel p-4 border-jarvis-blue/30 bg-jarvis-blue/5">
          <h3 className="text-jarvis-blue text-xs mb-4 uppercase tracking-tighter flex items-center gap-2">
            <Cpu size={14} /> System Resources
          </h3>
          <div className="space-y-3">
            <StatBar label="Neural Load" value={isProcessing ? 85 : 12} color="bg-jarvis-blue" />
            <StatBar label="Energy Sync" value={92} color="bg-jarvis-blue" />
            <StatBar label="OS Stability" value={99} color="bg-jarvis-blue" />
          </div>
        </div>

        <div className="glass-panel p-4 border-jarvis-blue/30 flex-1 bg-jarvis-blue/5">
          <h3 className="text-jarvis-blue text-xs mb-4 uppercase tracking-tighter flex items-center gap-2">
            <Activity size={14} /> Neural Status
          </h3>
          <div className="space-y-4 py-2">
            <StatusRow label="Voice Input" active={isListening && !isSpeaking && !isProcessing} />
            <StatusRow label="Cognition" active={isProcessing} />
            <StatusRow label="Synthesis" active={isSpeaking} />
            <div className="pt-4 border-t border-jarvis-blue/10">
              <div className="flex items-center justify-between">
                <span className="text-[9px] uppercase tracking-widest text-jarvis-blue/40">Neural Pulse</span>
                <div className="flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ 
                        opacity: [0.2, 1, 0.2],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{ 
                        duration: 1, 
                        repeat: Infinity, 
                        delay: i * 0.3 
                      }}
                      className="w-1 h-1 rounded-full bg-jarvis-blue shadow-[0_0_5px_rgba(0,242,255,0.5)]"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Center Column: Code Editor View */}
      <div className="col-span-1 md:col-span-6 flex flex-col gap-4">
        <div className="glass-panel p-0 border-jarvis-blue/30 flex-1 flex flex-col overflow-hidden bg-black/40">
          <div className="bg-jarvis-blue/10 p-2 border-b border-jarvis-blue/30 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Code size={14} className="text-jarvis-blue" />
              <span className="text-[10px] text-jarvis-blue uppercase">stark_os_core.sys</span>
            </div>
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-red-500/50" />
              <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
              <div className="w-2 h-2 rounded-full bg-jarvis-blue/50" />
            </div>
          </div>
          <div className="p-4 text-xs text-jarvis-blue/80 overflow-y-auto font-mono leading-relaxed bg-black/20">
            <pre className="whitespace-pre-wrap">
{`import { NeuralCore } from '@stark-os/neural';

/** 
 * JARVIS System Initialization
 * Ported to Modern Neural Web Interface
 */
async function bootSystem() {
  const jarvis = new NeuralCore({
    identity: 'JARVIS',
    version: '2.0.1-Neural'
  });

  await jarvis.initialize();
  
  // Connect to Spotify Neural Link
  await jarvis.link('SPOTIFY', { 
    streaming: true, 
    quality: 'LOSSLESS' 
  });

  jarvis.on('ready', () => {
    console.log('JARVIS: Ready for your command, Sir.');
  });
}`}
            </pre>
          </div>
        </div>

        <div className="glass-panel p-4 border-jarvis-blue/30 h-32 bg-jarvis-blue/5">
          <h3 className="text-jarvis-blue text-xs mb-2 uppercase tracking-tighter flex items-center gap-2">
            <Terminal size={14} /> Output Console
          </h3>
          <div className="text-[10px] text-jarvis-blue/60 font-mono">
            <div className="flex gap-2">
              <span className="text-white/20">16:42:01</span>
              <span>[OK] Core systems synchronized.</span>
            </div>
            <div className="flex gap-2">
              <span className="text-white/20">16:42:05</span>
              <span className="text-jarvis-blue">[ACTIVE] Voice recognition calibrated.</span>
            </div>
            <div className="flex gap-2">
              <span className="text-white/20">16:42:10</span>
              <span className="text-emerald-400">[READY] Neural Link Stable.</span>
            </div>
            <div className="animate-pulse">_</div>
          </div>
        </div>
      </div>

      {/* Right Column: Network & Global */}
      <div className="col-span-1 md:col-span-3 flex flex-col gap-4">
        <div className="glass-panel p-4 border-jarvis-blue/30 bg-jarvis-blue/5">
          <h3 className="text-jarvis-blue text-xs mb-4 uppercase tracking-tighter flex items-center gap-2">
            <Globe size={14} /> Global Link
          </h3>
          <div className="aspect-square rounded-full border border-jarvis-blue/20 flex items-center justify-center relative overflow-hidden bg-black/40">
            <div className="absolute inset-0 border border-jarvis-blue/10 rounded-full animate-ping" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="relative"
            >
              <Globe size={48} className="text-jarvis-blue/40" />
            </motion.div>
          </div>
        </div>

        <div className="glass-panel p-4 border-jarvis-blue/30 flex-1 bg-jarvis-blue/5">
          <h3 className="text-jarvis-blue text-xs mb-4 uppercase tracking-tighter flex items-center gap-2">
            <Layers size={14} /> Architecture
          </h3>
          <div className="space-y-2">
            <div className="p-2 bg-jarvis-blue/10 border border-jarvis-blue/10 rounded text-[9px] text-jarvis-blue/80 flex justify-between">
              <span>INTERFACE</span>
              <span className="font-bold">REACT 19</span>
            </div>
            <div className="p-2 bg-jarvis-blue/10 border border-jarvis-blue/10 rounded text-[9px] text-jarvis-blue/80 flex justify-between">
              <span>COGNITION</span>
              <span className="font-bold">GEMINI 3.1</span>
            </div>
            <div className="p-2 bg-jarvis-blue/10 border border-jarvis-blue/10 rounded text-[9px] text-jarvis-blue/80 flex justify-between">
              <span>STYLE</span>
              <span className="font-bold">TAILWIND 4</span>
            </div>
            <div className="p-2 bg-jarvis-blue/10 border border-jarvis-blue/10 rounded text-[9px] text-jarvis-blue/80 flex justify-between">
              <span>ANIMATION</span>
              <span className="font-bold">MOTION 12</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatusRow = ({ label, active }: { label: string, active: boolean }) => (
  <div className="flex items-center justify-between">
    <span className={`text-[10px] uppercase tracking-widest ${active ? 'text-jarvis-blue' : 'text-jarvis-blue/20'}`}>{label}</span>
    <div className={`w-1.5 h-1.5 rounded-full ${active ? 'bg-jarvis-blue shadow-[0_0_8px_rgba(0,242,255,0.6)] animate-pulse' : 'bg-white/5 border border-white/10'}`} />
  </div>
);

const StatBar = ({ label, value, color }: { label: string, value: number, color: string }) => (
  <div className="space-y-1">
    <div className="flex justify-between text-[9px] uppercase tracking-widest text-jarvis-blue/40">
      <span>{label}</span>
      <span>{value}%</span>
    </div>
    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        className={`h-full ${color} shadow-[0_0_10px_rgba(0,242,255,0.4)]`}
      />
    </div>
  </div>
);
