"use client";
import React, { useState } from 'react';
import { Share2, Twitter, Facebook, RefreshCw, Smartphone, Globe, ChevronDown } from 'lucide-react';

export default function SpeedTest() {
  const [isTesting, setIsTesting] = useState(false);
  const [data, setData] = useState({
    ping: 4,
    jitter: 1,
    download: 76.8,
    upload: 85.8
  });

  // স্পিড টেস্ট শুরু করার সিমুলেশন
  const startTest = () => {
    setIsTesting(true);
    let count = 0;
    const interval = setInterval(() => {
      count++;
      setData({
        ping: Math.floor(Math.random() * 10) + 2,
        jitter: Math.floor(Math.random() * 5),
        download: Number((Math.random() * (90 - 40) + 40).toFixed(1)),
        upload: Number((Math.random() * (95 - 50) + 50).toFixed(1))
      });
      if (count > 30) {
        clearInterval(interval);
        setIsTesting(false);
        setData({ ping: 4, jitter: 1, download: 76.8, upload: 85.8 });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white text-[#444] font-sans selection:bg-blue-100">
      <div className="max-w-3xl mx-auto px-6 py-8">
        
        {/* Logo Section */}
        <header className="mb-12">
          <div className="flex items-center gap-1">
            <div className="relative w-9 h-9">
               <div className="absolute inset-0 bg-[#1c75bc] transform rotate-45 flex items-center justify-center">
                  <div className="w-4 h-4 bg-white transform -rotate-45"></div>
               </div>
            </div>
            <h1 className="text-4xl font-bold text-[#1c75bc] tracking-tighter italic ml-2">evozi</h1>
            <div className="ml-auto flex items-center text-gray-500 gap-1 text-sm font-bold tracking-widest uppercase">
              <RefreshCw size={20} className="text-gray-400" /> SPEEDTEST
            </div>
          </div>
        </header>

        {/* Metrics Grid */}
        <main className="grid grid-cols-2 gap-x-12 gap-y-16 mb-20">
          {/* PING */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-xs font-bold text-gray-500 tracking-wider">
              <RefreshCw size={14} className="rotate-90" /> PING
            </div>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="text-6xl font-extralight tracking-tighter text-gray-700">{data.ping}</span>
              <span className="text-lg text-gray-400 font-light">ms</span>
            </div>
          </div>

          {/* DOWNLOAD */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-xs font-bold text-gray-500 tracking-wider">
              <div className="w-4 h-4 border-[1.5px] border-gray-400 rounded-full flex items-center justify-center text-[8px]">↓</div> DOWNLOAD
            </div>
            <div className="flex items-end gap-4 mt-2">
              <div className="flex items-baseline gap-2">
                <span className="text-6xl font-extralight tracking-tighter text-gray-700">{data.download}</span>
                <span className="text-lg text-gray-400 font-light">Mbps</span>
              </div>
              <div className="flex-1 h-12 bg-gray-50 rounded-sm relative overflow-hidden mb-2 hidden sm:block">
                 <div className={`absolute bottom-0 left-0 w-full bg-[#90cdf4] transition-all duration-500`} style={{height: isTesting ? '70%' : '60%', clipPath: 'polygon(0 40%, 20% 20%, 40% 35%, 60% 10%, 80% 30%, 100% 20%, 100% 100%, 0% 100%)'}}></div>
              </div>
            </div>
          </div>

          {/* JITTER */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-xs font-bold text-gray-500 tracking-wider">
              <RefreshCw size={14} /> JITTER
            </div>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="text-6xl font-extralight tracking-tighter text-gray-700">{data.jitter}</span>
              <span className="text-lg text-gray-400 font-light">ms</span>
            </div>
          </div>

          {/* UPLOAD */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-xs font-bold text-gray-500 tracking-wider">
              <div className="w-4 h-4 border-[1.5px] border-gray-400 rounded-full flex items-center justify-center text-[8px]">↑</div> UPLOAD
            </div>
            <div className="flex items-end gap-4 mt-2">
              <div className="flex items-baseline gap-2">
                <span className="text-6xl font-extralight tracking-tighter text-gray-700">{data.upload}</span>
                <span className="text-lg text-gray-400 font-light">Mbps</span>
              </div>
              <div className="flex-1 h-12 bg-gray-50 rounded-sm relative overflow-hidden mb-2 hidden sm:block">
                <div className="absolute bottom-0 left-0 w-full bg-[#bee3f8] h-3/4 opacity-60"></div>
              </div>
            </div>
          </div>
        </main>

        {/* Info Section */}
        <section className="border-l-[3px] border-gray-100 pl-6 mb-16 space-y-6">
          <div className="flex gap-4">
            <div className="mt-1"><Smartphone size={22} className="text-gray-300" /></div>
            <div>
              <p className="text-lg font-medium text-gray-700 leading-tight">Orange Communication</p>
              <p className="text-sm text-gray-400">103.167.209.65</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="mt-1"><Globe size={22} className="text-gray-300" /></div>
            <div>
              <p className="text-lg font-medium text-gray-700 leading-tight">DDN</p>
              <p className="text-sm text-gray-400">Chattogram</p>
            </div>
          </div>
        </section>

        {/* Control Button */}
        <div className="flex flex-col items-center justify-center space-y-12">
          <button 
            onClick={startTest}
            disabled={isTesting}
            className="w-36 h-36 rounded-full border-[3px] border-[#1c75bc] flex items-center justify-center text-[#1c75bc] font-bold text-xl hover:bg-blue-50 active:scale-95 transition-all outline-none"
          >
            {isTesting ? "..." : "AGAIN"}
          </button>

          {/* Server Selector */}
          <div className="flex flex-col items-center gap-8">
            <div className="flex items-center gap-2 text-[#1c75bc] font-semibold cursor-pointer group">
              <Globe size={22} /> 
              <span>DDN</span>
              <ChevronDown size={22} />
              <span className="text-gray-400 font-normal italic ml-1">Chattogram</span>
            </div>

            <div className="flex items-center gap-3 text-[#1c75bc] text-sm font-bold bg-blue-50/50 px-4 py-2 rounded-lg cursor-pointer">
              <Smartphone size={18} />
              Download our free Speedtest app for Android.
            </div>

            {/* Social & Sharing */}
            <div className="flex items-center gap-4">
              <button className="px-10 py-3 border border-gray-300 rounded-full text-sm font-bold text-gray-600 hover:bg-gray-50 transition-colors">
                COPY LINK
              </button>
              <div className="w-11 h-11 border border-gray-300 rounded-full flex items-center justify-center text-gray-500 hover:text-blue-400 transition-colors cursor-pointer">
                <Twitter size={20} fill="currentColor" strokeWidth={0} />
              </div>
              <div className="w-11 h-11 border border-gray-300 rounded-full flex items-center justify-center text-gray-500 hover:text-blue-700 transition-colors cursor-pointer">
                <Facebook size={20} fill="currentColor" strokeWidth={0} />
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-24 text-center">
           <a href="#" className="text-xs text-blue-400 underline underline-offset-4 decoration-blue-200">Ookla Privacy Policy</a>
        </footer>
      </div>
    </div>
  );
}
