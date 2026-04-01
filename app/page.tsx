"use client";
import React, { useState } from 'react';
import { Twitter, Facebook, RefreshCw, Smartphone, Globe, ChevronDown } from 'lucide-react';

export default function SpeedTest() {
  const [isTesting, setIsTesting] = useState(false);
  const [data, setData] = useState({ ping: 4, jitter: 1, download: 76.8, upload: 85.8 });

  const startTest = () => {
    setIsTesting(true);
    let count = 0;
    const interval = setInterval(() => {
      count++;
      setData({
        ping: Math.floor(Math.random() * 5) + 2,
        jitter: Math.floor(Math.random() * 3),
        download: Number((Math.random() * (85 - 65) + 65).toFixed(1)),
        upload: Number((Math.random() * (90 - 75) + 75).toFixed(1))
      });
      if (count > 25) {
        clearInterval(interval);
        setIsTesting(false);
        setData({ ping: 4, jitter: 1, download: 76.8, upload: 85.8 });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white text-[#333] font-sans antialiased p-6">
      <div className="max-w-3xl mx-auto">
        
        {/* Header Logo */}
        <div className="flex items-center gap-2 mb-12">
          <div className="relative w-8 h-8">
            <div className="absolute inset-0 bg-[#1c75bc] transform rotate-45 flex items-center justify-center">
              <div className="w-3.5 h-3.5 bg-white transform -rotate-45"></div>
            </div>
          </div>
          <span className="text-3xl font-bold text-[#1c75bc] tracking-tighter italic">evozi</span>
          <div className="ml-auto flex items-center gap-1.5 text-gray-500 font-bold text-[10px] tracking-[0.2em]">
            <RefreshCw size={18} className="text-gray-400" /> SPEEDTEST<sup>®</sup>
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-2 gap-x-12 gap-y-12 mb-16">
          <div>
            <p className="flex items-center gap-1.5 text-xs font-bold text-gray-500 tracking-wider">
              <RefreshCw size={14} className="rotate-90" /> PING
            </p>
            <p className="text-6xl font-light mt-1 tracking-tighter">{data.ping} <span className="text-lg text-gray-400">ms</span></p>
          </div>

          <div>
            <p className="flex items-center gap-1.5 text-xs font-bold text-gray-500 tracking-wider">
              <span className="w-3.5 h-3.5 border border-gray-400 rounded-full flex items-center justify-center text-[8px]">↓</span> DOWNLOAD
            </p>
            <div className="flex items-end gap-3">
              <p className="text-6xl font-light mt-1 tracking-tighter">{data.download} <span className="text-lg text-gray-400">Mbps</span></p>
              <div className="flex-1 h-10 bg-blue-50/50 rounded overflow-hidden mb-2 relative min-w-[80px]">
                <div className="absolute bottom-0 left-0 w-full bg-[#90cdf4] h-2/3" style={{ clipPath: 'polygon(0 40%, 20% 20%, 40% 50%, 70% 10%, 100% 30%, 100% 100%, 0% 100%)' }}></div>
              </div>
            </div>
          </div>

          <div>
            <p className="flex items-center gap-1.5 text-xs font-bold text-gray-500 tracking-wider">
              <RefreshCw size={14} /> JITTER
            </p>
            <p className="text-6xl font-light mt-1 tracking-tighter">{data.jitter} <span className="text-lg text-gray-400">ms</span></p>
          </div>

          <div>
            <p className="flex items-center gap-1.5 text-xs font-bold text-gray-500 tracking-wider">
              <span className="w-3.5 h-3.5 border border-gray-400 rounded-full flex items-center justify-center text-[8px]">↑</span> UPLOAD
            </p>
            <div className="flex items-end gap-3">
              <p className="text-6xl font-light mt-1 tracking-tighter">{data.upload} <span className="text-lg text-gray-400">Mbps</span></p>
              <div className="flex-1 h-10 bg-blue-50/50 rounded overflow-hidden mb-2 relative min-w-[80px]">
                <div className="absolute bottom-0 left-0 w-full bg-[#bee3f8] h-3/4 opacity-70"></div>
              </div>
            </div>
          </div>
        </div>

        {/* IP & Location */}
        <div className="border-l-2 border-gray-100 pl-4 space-y-6 mb-12">
          <div className="flex items-start gap-3">
            <Smartphone className="text-gray-300 mt-1" size={20} />
            <div>
              <p className="font-semibold text-gray-700">Orange Communication</p>
              <p className="text-sm text-gray-400">103.167.209.65</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Globe className="text-gray-300 mt-1" size={20} />
            <div>
              <p className="font-semibold text-gray-700">DDN</p>
              <p className="text-sm text-gray-400">Chattogram</p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col items-center">
          <button 
            onClick={startTest}
            disabled={isTesting}
            className="w-32 h-32 rounded-full border-2 border-[#1c75bc] text-[#1c75bc] font-bold text-lg hover:bg-blue-50 transition-all flex items-center justify-center mb-10"
          >
            {isTesting ? '...' : 'AGAIN'}
          </button>

          <div className="flex items-center gap-1 text-[#1c75bc] font-semibold cursor-pointer mb-8">
            <Globe size={18} /> DDN <ChevronDown size={18} /> <span className="text-gray-400 font-normal italic ml-1">Chattogram</span>
          </div>

          <p className="text-[#1c75bc] text-[13px] font-semibold flex items-center gap-2 mb-8 cursor-pointer">
            <Smartphone size={16} /> Download our free Speedtest app for Android.
          </p>

          <div className="flex items-center gap-4">
            <button className="px-8 py-2.5 border border-gray-300 rounded-full text-xs font-bold text-gray-600 hover:bg-gray-50 tracking-wider">COPY LINK</button>
            <div className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center text-gray-500 cursor-pointer hover:bg-gray-50 transition-all">
              <Twitter size={18} fill="currentColor" strokeWidth={0} />
            </div>
            <div className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center text-gray-500 cursor-pointer hover:bg-gray-50 transition-all">
              <Facebook size={18} fill="currentColor" strokeWidth={0} />
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <a href="#" className="text-[10px] text-blue-400 underline uppercase tracking-widest font-bold opacity-70">Ookla Privacy Policy</a>
        </div>
      </div>
    </div>
  );
}
