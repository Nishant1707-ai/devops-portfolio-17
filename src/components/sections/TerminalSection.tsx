import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, RotateCcw } from 'lucide-react';
import { TERMINAL_COMMANDS } from '../../data/portfolioData';

interface HistoryItem {
  command: string;
  output: string;
}

export const TerminalSection: React.FC = () => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: 'welcome',
      output: `Welcome to Nishant's DevOps Interactive Terminal.
Type 'help' to view all available commands.`
    }
  ]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [cmdHistoryList, setCmdHistoryList] = useState<string[]>([]);

  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const handleCommand = (rawCmd: string) => {
    const trimmed = rawCmd.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    let outputResponse = TERMINAL_COMMANDS[trimmed];

    if (!outputResponse) {
      outputResponse = `zsh: command not found: ${trimmed}. Type 'help' for available commands.`;
    }

    setHistory((prev) => [...prev, { command: rawCmd, output: outputResponse }]);
    setCmdHistoryList((prev) => [...prev, rawCmd]);
    setHistoryIndex(-1);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistoryList.length > 0) {
        const nextIdx = historyIndex + 1;
        if (nextIdx < cmdHistoryList.length) {
          setHistoryIndex(nextIdx);
          setInputVal(cmdHistoryList[cmdHistoryList.length - 1 - nextIdx]);
        }
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInputVal(cmdHistoryList[cmdHistoryList.length - 1 - nextIdx]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputVal('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const possibleCmds = Object.keys(TERMINAL_COMMANDS);
      const match = possibleCmds.find((c) => c.startsWith(inputVal.toLowerCase()));
      if (match) {
        setInputVal(match);
      }
    }
  };

  return (
    <section id="terminal" className="py-20 bg-[#07090e] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase tracking-widest">
            <TerminalIcon className="w-3.5 h-3.5" />
            <span>Interactive CLI Shell</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            DevOps Browser Terminal
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-mono">
            Execute safe interactive shell commands to query engineer details, skills, and repos.
          </p>
        </div>

        {/* Quick Command Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6 font-mono text-xs">
          <span className="text-slate-500 mr-2">Quick Commands:</span>
          {['help', 'about', 'skills', 'projects', 'github', 'contact', 'clear'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-cyan-400 hover:border-cyan-500/50 hover:bg-slate-850 transition-all"
            >
              ${cmd}
            </button>
          ))}
        </div>

        {/* Terminal Window */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-[#090d16] border border-slate-800 shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
          {/* Header */}
          <div className="px-4 py-3 bg-[#0d121f] border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
            </div>
            <div className="text-slate-400 text-xs flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
              <span>nishant@portfolio-cli:~</span>
            </div>
            <button
              onClick={() => setHistory([])}
              className="text-slate-500 hover:text-cyan-400 transition-colors"
              title="Clear Terminal"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Terminal Screen Body */}
          <div
            onClick={() => inputRef.current?.focus()}
            className="p-6 space-y-4 min-h-[300px] max-h-[450px] overflow-y-auto bg-[#060a12]/95 cursor-text"
          >
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1.5">
                {item.command !== 'welcome' && (
                  <div className="flex items-center gap-2 text-cyan-400 font-bold">
                    <span className="text-emerald-400">$</span>
                    <span className="text-slate-200">{item.command}</span>
                  </div>
                )}
                <pre className="text-slate-300 font-mono whitespace-pre-wrap leading-relaxed text-xs sm:text-sm">
                  {item.output}
                </pre>
              </div>
            ))}

            {/* Input Line */}
            <div className="flex items-center gap-2 text-cyan-400 pt-2">
              <span className="text-emerald-400 font-bold">$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type 'help' or command..."
                className="flex-1 bg-transparent border-none outline-none text-slate-100 font-mono text-xs sm:text-sm focus:ring-0 p-0"
              />
            </div>
            <div ref={terminalEndRef} />
          </div>

          {/* Terminal Footer */}
          <div className="px-4 py-2 bg-[#0d121f] border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
            <span>Press Enter to submit command | Use Up/Down arrows for history</span>
            <span className="text-cyan-400">zsh 5.9</span>
          </div>
        </div>
      </div>
    </section>
  );
};
