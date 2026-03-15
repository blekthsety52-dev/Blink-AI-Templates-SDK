import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const CodeBlock = ({ code, language = 'typescript', title }: { code: string; language?: string; title?: string }) => {
  return (
    <div className="rounded-lg border border-zinc-800 bg-zinc-950 overflow-hidden font-mono text-sm">
      {title && (
        <div className="border-b border-zinc-800 bg-zinc-900/50 px-4 py-2 text-zinc-400 flex justify-between items-center">
          <span>{title}</span>
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
          </div>
        </div>
      )}
      <pre className="p-4 overflow-x-auto text-zinc-300">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export const Badge = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <span className={cn("px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border border-current", className)}>
    {children}
  </span>
);
