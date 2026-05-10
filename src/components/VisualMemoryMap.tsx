import React from 'react';
import { motion } from 'motion/react';
import { Database, User, Zap, Target, BookOpen, Settings } from 'lucide-react';

interface Memory {
  id: number;
  content: string;
  category: string;
  timestamp: string;
}

interface VisualMemoryMapProps {
  memories: Memory[];
}

export const VisualMemoryMap: React.FC<VisualMemoryMapProps> = ({ memories }) => {
  const categories: Record<string, { icon: any, color: string, label: string }> = {
    profile: { icon: User, color: 'text-jarvis-blue', label: 'User Profile' },
    project: { icon: Zap, color: 'text-amber-400', label: 'Projects' },
    preference: { icon: Settings, color: 'text-emerald-400', label: 'Preferences' },
    goal: { icon: Target, color: 'text-purple-400', label: 'Goals' },
    learning: { icon: BookOpen, color: 'text-pink-400', label: 'Learning' },
    general: { icon: Database, color: 'text-white/40', label: 'General' },
  };

  return (
    <div className="glass-panel p-4 md:p-6 h-full overflow-y-auto scrollbar-hide">
      <div className="flex items-center gap-3 mb-6 md:mb-8">
        <Database className="text-jarvis-blue" size={20} />
        <h2 className="font-display text-xs md:text-sm uppercase tracking-widest text-jarvis-blue">Neural Memory Patterns</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {memories.length > 0 ? (
          memories.map((memory, i) => {
            const cat = categories[memory.category] || categories.general;
            return (
              <motion.div
                key={memory.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-jarvis-blue/30 transition-all group flex flex-col gap-2"
              >
                <div className="flex items-center gap-3">
                  <cat.icon size={12} className={cat.color} />
                  <span className={`text-[9px] font-mono uppercase tracking-widest ${cat.color}`}>{cat.label}</span>
                  <span className="ml-auto text-[7px] text-white/20 font-mono italic">
                    {new Date(memory.timestamp).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-[11px] text-white/60 leading-relaxed group-hover:text-white/90 transition-colors line-clamp-4">
                  {memory.content}
                </p>
              </motion.div>
            );
          })
        ) : (
          <div className="col-span-1 sm:col-span-2 lg:col-span-3 py-20 flex flex-col items-center justify-center gap-4 text-white/10">
            <div className="w-16 h-16 rounded-full border border-dashed border-white/10 flex items-center justify-center animate-pulse">
              <Database size={32} />
            </div>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Neural Database Empty</span>
          </div>
        )}
      </div>
    </div>
  );
};
