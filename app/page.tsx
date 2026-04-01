"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RefreshCw, Info, HelpCircle } from 'lucide-react';

export default function FastClone() {
  const [speed, setSpeed] = useState(0);
  const [isTesting, setIsTesting] = useState(true);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    if (isTesting) {
      let current = 0;
      const target = 76.8;
      const interval = setInterval(() => {
        current += Math.random() * 5;
        if (current >= target) {
          setSpeed(target);
          setIsTesting(false);
          clearInterval(interval);
        } else {
          setSpeed(Number(current.toFixed(1)));
        }
      }, 100);
      return () => clearInterval(interval);
    }
  }, [isTesting]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-between p-8 md:p-12">
      {/* Top Logo Section */}
      <div className="w-full max-w-4xl flex justify-start items-center gap-2">
        <div className="text-2xl font-black tracking-tighter text-[#222]">
          FAST<span className="text-gray-400 font-light">.com</span>
        </div>
      </div>

      {/* Main Speed Display */}
      <main className="flex flex-col items-center justify-center flex-1 w-full">
        <div className="relative flex flex-col items-center">
          <div className="flex items-baseline leading-none">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[12rem] md:text-[18rem] font-medium tracking-tighter speed-number text-[#222]"
            >
              {speed % 1 === 0 ? speed : speed}
            </motion.span>
            <div className="flex flex-col ml-4">
              <span className="text-3xl md:text-5xl font-light text-gray-500">Mbps</span>
              <button 
                onClick={() => setIsTesting(true)}
                className="mt-4 text-gray-400 hover:text-black transition-colors"
              >
                <RefreshCw size={40} strokeWidth={1.5} className={isTesting ? 'animate-spin' : ''} />
              </button>
            </div>
          </div>

          {/* Testing Progress Ring (Simplified) */}
          {isTesting && (
            <div className="absolute -inset-10 border-4 border-gray-100 border-t-gray-400 rounded-full animate-spin opacity-20"></div>
          )}
        </div>

        {/* More Info Section */}
        <div className="mt-20 w-full max-w-lg">
          {!showDetails ? (
            <button 
              onClick={() => setShowDetails(true)}
              className="mx-auto flex items-center gap-2 px-8 py-3 border border-gray-300 rounded-md text-gray-600 hover:border-gray-900 transition-all text-lg"
            >
              Show more info
            </button>
          ) : (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-2 gap-8 border-t border-gray-200 pt-8"
            >
              <div className="space-y-1">
                <p className="text-gray-400 text-sm uppercase tracking-widest">Latency</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-medium">14</span>
                  <span className="text-gray-400">ms</span>
                </div>
                <p className="text-xs text-gray-400 mt-2">Unloaded: 12ms</p>
              </div>
              <div className="space-y-1">
                <p className="text-gray-400 text-sm uppercase tracking-widest">Upload</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-medium">85</span>
                  <span className="text-gray-400">Mbps</span>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full max-w-4xl flex flex-wrap justify-center md:justify-between items-center gap-6 pt-10 text-gray-400 text-sm border-t border-gray-100">
        <div className="flex items-center gap-8">
            <span className="hover:text-gray-900 cursor-pointer">POWERED BY <span className="font-bold">NETFLIX</span></span>
        </div>
        <div className="flex gap-6 items-center">
          <TwitterIcon />
          <FacebookIcon />
          <div className="w-[1px] h-4 bg-gray-200"></div>
          <HelpCircle size={20} className="cursor-pointer hover:text-gray-900" />
        </div>
      </footer>
    </div>
  );
}

// Simple Icons
function TwitterIcon() {
  return <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="cursor-pointer hover:text-gray-900"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>;
}

function FacebookIcon() {
  return <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="cursor-pointer hover:text-gray-900"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>;
}
