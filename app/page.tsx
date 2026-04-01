"use client";
import React, { useState, useEffect } from 'react';
import { RefreshCw, HelpCircle } from 'lucide-react';

export default function FastClone() {
  const [speed, setSpeed] = useState(0);
  const [isTesting, setIsTesting] = useState(true);

  useEffect(() => {
    if (isTesting) {
      let current = 0;
      const interval = setInterval(() => {
        current += Math.random() * 8;
        if (current >= 76.8) {
          setSpeed(76.8);
          setIsTesting(false);
          clearInterval(interval);
        } else {
          setSpeed(parseFloat(current.toFixed(1)));
        }
      }, 100);
      return () => clearInterval(interval);
    }
  }, [isTesting]);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-between p-10 font-sans text-[#222]">
      <div className="w-full max-w-4xl flex justify-start">
        <div className="text-3xl font-black tracking-tighter">
          FAST<span className="text-gray-300 font-light">.com</span>
        </div>
      </div>

      <main className="flex flex-col items-center justify-center flex-1">
        <div className="flex items-baseline leading-none">
          <span className="text-[10rem] md:text-[18rem] font-medium tracking-tighter">
            {speed}
          </span>
          <div className="flex flex-col ml-4">
            <span className="text-3xl md:text-5xl font-light text-gray-400">Mbps</span>
            <button onClick={() => setIsTesting(true)} className="mt-4 text-gray-300 hover:text-black transition-colors">
              <RefreshCw size={45} strokeWidth={1} className={isTesting ? 'animate-spin' : ''} />
            </button>
          </div>
        </div>
      </main>

      <footer className="w-full max-w-4xl border-t border-gray-100 pt-8 flex justify-between items-center text-gray-400 text-sm tracking-wide">
        <div className="flex items-center gap-2">
          POWERED BY <span className="font-bold text-gray-600">NETFLIX</span>
        </div>
        <div className="flex gap-6 items-center">
          <HelpCircle size={24} strokeWidth={1.5} className="cursor-pointer hover:text-gray-900" />
        </div>
      </footer>
    </div>
  );
}
