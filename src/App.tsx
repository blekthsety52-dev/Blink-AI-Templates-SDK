/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Terminal, 
  Cpu, 
  Zap, 
  Layers, 
  Globe, 
  ChevronRight, 
  Github, 
  ExternalLink,
  Search,
  Settings,
  Rocket,
  Code2,
  CheckCircle2
} from 'lucide-react';
import { cn, CodeBlock, Badge } from './components/ui';

const FEATURES = [
  {
    icon: Search,
    title: "Programmatic Discovery",
    description: "Sub-50ms template metadata resolution with intelligent filtering and category-based search.",
    id: "01"
  },
  {
    icon: Settings,
    title: "Type-safe Customization",
    description: "Modify ASTs and templates dynamically based on user config with full Zod validation.",
    id: "02"
  },
  {
    icon: Cpu,
    title: "AI Integration Engine",
    description: "Extensible engine designed to plug into any LLM for dynamic template generation.",
    id: "03"
  },
  {
    icon: Rocket,
    title: "Deployment Hooks",
    description: "Seamless Vercel & Expo deployment hooks for instant production-ready output.",
    id: "04"
  },
  {
    icon: Terminal,
    title: "CLI Scaffolding",
    description: "Rapidly scaffold new projects with a powerful command-line interface.",
    id: "05"
  }
];

const SNIPPETS = [
  {
    title: "Blink Client Initialization",
    code: `import { BlinkClient } from '@blink/core';
import { VercelAdapter } from '@blink/adapters';

const blink = new BlinkClient({
  apiKey: process.env.BLINK_API_KEY,
  adapter: new VercelAdapter(),
});

export default blink;`
  },
  {
    title: "Template Customization Pipeline",
    code: `import { CustomizationEngine } from '@blink/core';

const userConfig = { theme: 'dark', branding: { primary: '#FF5733' } };
const engine = new CustomizationEngine();

const generateSite = async (templateId: string) => {
  const template = await blink.templates.get(templateId);
  return engine.apply(template, userConfig);
};`
  },
  {
    title: "Zod Schema for Template Metadata",
    code: `import { z } from 'zod';

export const TemplateSchema = z.object({
  id: z.string(),
  name: z.string(),
  category: z.enum(['Landing Pages', 'Portfolio', 'Online Store', 'Dashboard', 'SaaS', 'AI Apps', 'Mobile Apps']),
  framework: z.string(),
  features: z.array(z.string())
});

export type Template = z.infer<typeof TemplateSchema>;`
  }
];

export default function App() {
  const [activeSnippet, setActiveSnippet] = useState(0);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-emerald-500/30">
      {/* Grid Background */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-500 rounded flex items-center justify-center">
              <Zap className="w-5 h-5 text-zinc-950 fill-current" />
            </div>
            <span className="font-bold tracking-tight text-lg">BLINK SDK</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#" className="hover:text-emerald-400 transition-colors">Documentation</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Templates</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">CLI</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Pricing</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-zinc-400 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </button>
            <button className="bg-emerald-500 hover:bg-emerald-400 text-zinc-950 px-4 py-1.5 rounded-md text-sm font-bold transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)]">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-32 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="text-emerald-400 mb-6">v2.4.0 Available Now</Badge>
              <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
                PREMIUM AI TEMPLATES<br />
                <span className="text-emerald-500">PROGRAMMATICALLY</span>
              </h1>
              <p className="max-w-2xl mx-auto text-zinc-400 text-lg md:text-xl mb-12 leading-relaxed">
                A robust TypeScript framework for discovering, customizing, and deploying premium AI-generated website and mobile app templates.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="w-full sm:w-auto bg-white text-zinc-950 px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 hover:bg-zinc-200 transition-all group">
                  Start Building <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="w-full sm:w-auto bg-zinc-900 border border-zinc-800 text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 hover:bg-zinc-800 transition-all">
                  <Terminal className="w-5 h-5" /> npm i @blink/core
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 border-y border-zinc-800 bg-zinc-900/30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {FEATURES.map((feature, idx) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="text-xs font-mono text-zinc-600 mb-4">{feature.id}</div>
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/5 transition-all">
                    <feature.icon className="w-6 h-6 text-emerald-500" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 group-hover:text-emerald-400 transition-colors">{feature.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Performance Stats */}
        <section className="py-24 px-4 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-8 tracking-tight">Built for <span className="italic serif">Extreme</span> Performance</h2>
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="text-5xl font-mono font-light text-emerald-500">&lt;50ms</div>
                    <div>
                      <h4 className="font-bold mb-1">Metadata Resolution</h4>
                      <p className="text-zinc-500 text-sm">Lightning fast template discovery even with thousands of options.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="text-5xl font-mono font-light text-emerald-500">&lt;50KB</div>
                    <div>
                      <h4 className="font-bold mb-1">Core Footprint</h4>
                      <p className="text-zinc-500 text-sm">Minimal gzipped size for rapid installation and execution.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="text-5xl font-mono font-light text-emerald-500">100%</div>
                    <div>
                      <h4 className="font-bold mb-1">Type Safety</h4>
                      <p className="text-zinc-500 text-sm">Full Zod integration ensures your customization pipeline never breaks.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-emerald-500/10 blur-3xl rounded-full" />
                <div className="relative bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 backdrop-blur-sm">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="ml-2 text-xs font-mono text-zinc-500">performance_audit.sh</span>
                  </div>
                  <div className="space-y-4 font-mono text-sm">
                    <div className="flex justify-between text-zinc-400">
                      <span>Template Registry Sync</span>
                      <span className="text-emerald-400">12ms</span>
                    </div>
                    <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full w-[12%]" />
                    </div>
                    <div className="flex justify-between text-zinc-400">
                      <span>AST Transformation</span>
                      <span className="text-emerald-400">28ms</span>
                    </div>
                    <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full w-[28%]" />
                    </div>
                    <div className="flex justify-between text-zinc-400">
                      <span>Deployment Hook Init</span>
                      <span className="text-emerald-400">8ms</span>
                    </div>
                    <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full w-[8%]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Code Showcase */}
        <section className="py-24 bg-zinc-900/20 border-t border-zinc-800">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 tracking-tight">Developer Experience First</h2>
              <p className="text-zinc-500">Intuitive APIs designed for rapid integration and type-safe customization.</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1 space-y-2">
                {SNIPPETS.map((snippet, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSnippet(idx)}
                    className={cn(
                      "w-full text-left px-6 py-4 rounded-xl transition-all border",
                      activeSnippet === idx 
                        ? "bg-zinc-900 border-zinc-700 text-white shadow-lg" 
                        : "bg-transparent border-transparent text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900/50"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <div className={cn(
                        "w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold",
                        activeSnippet === idx ? "bg-emerald-500 text-zinc-950" : "bg-zinc-800 text-zinc-500"
                      )}>
                        {idx + 1}
                      </div>
                      <span className="font-bold">{snippet.title}</span>
                    </div>
                  </button>
                ))}
              </div>
              <div className="lg:col-span-2">
                <motion.div
                  key={activeSnippet}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <CodeBlock 
                    title={SNIPPETS[activeSnippet].title}
                    code={SNIPPETS[activeSnippet].code}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Architecture Section */}
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Layers className="w-64 h-64" />
              </div>
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-12">Modular Architecture</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="p-6 bg-zinc-950 border border-zinc-800 rounded-2xl">
                    <h4 className="font-bold text-emerald-500 mb-2">BlinkClient</h4>
                    <p className="text-xs text-zinc-500">Primary facade for all SDK operations.</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <ChevronRight className="w-6 h-6 text-zinc-700 hidden md:block" />
                  </div>
                  <div className="p-6 bg-zinc-950 border border-zinc-800 rounded-2xl">
                    <h4 className="font-bold text-emerald-500 mb-2">CustomizationEngine</h4>
                    <p className="text-xs text-zinc-500">AST-level template modification engine.</p>
                  </div>
                  <div className="p-6 bg-zinc-950 border border-zinc-800 rounded-2xl">
                    <h4 className="font-bold text-emerald-500 mb-2">DeploymentAdapter</h4>
                    <p className="text-xs text-zinc-500">Pluggable hooks for Vercel, Expo, etc.</p>
                  </div>
                </div>
                <div className="mt-12 pt-12 border-t border-zinc-800 grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="flex gap-4">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <div>
                      <h5 className="font-bold text-sm mb-1">Pluggable Adapters</h5>
                      <p className="text-xs text-zinc-500">Easily extend the SDK to support any deployment target.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <div>
                      <h5 className="font-bold text-sm mb-1">AST Transformations</h5>
                      <p className="text-xs text-zinc-500">Deep template modification without breaking code structure.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <div>
                      <h5 className="font-bold text-sm mb-1">Registry Sync</h5>
                      <p className="text-xs text-zinc-500">Always-up-to-date template metadata from the Blink cloud.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">Ready to build the future of AI apps?</h2>
            <p className="text-zinc-400 text-lg mb-12">Join 5,000+ developers building premium experiences with the Blink AI Templates SDK.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto bg-emerald-500 text-zinc-950 px-10 py-4 rounded-xl font-bold text-lg hover:bg-emerald-400 transition-all shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                Get Started for Free
              </button>
              <button className="w-full sm:w-auto bg-zinc-900 border border-zinc-800 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-zinc-800 transition-all">
                Talk to Sales
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-emerald-500 fill-current" />
            <span className="font-bold tracking-tight">BLINK SDK</span>
          </div>
          <div className="flex gap-8 text-sm text-zinc-500">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Status</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
          <div className="text-sm text-zinc-600 font-mono">
            &copy; 2026 BLINK AI TECHNOLOGIES. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </div>
  );
}
