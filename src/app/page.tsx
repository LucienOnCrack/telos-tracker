"use client";

import Image from "next/image";
import vice from "../../assets/vicenews.svg";
import slush from "../../assets/slush.svg";
import supercell from "../../assets/supercell.svg";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="min-h-screen bg-black text-red-400 font-mono p-4 sm:p-6 md:p-8 lg:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="border-4 border-red-500 bg-black p-4 sm:p-6 md:p-8 lg:p-10 shadow-[0_0_50px_rgba(255,0,0,0.3)]">
          <div className="border-2 border-red-500 bg-red-500 text-black text-center py-3 sm:py-4 mb-6 sm:mb-8">
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-widest">
              /// Restricted ///
            </div>
            <div className="text-xs sm:text-sm md:text-base lg:text-lg mt-2 tracking-wider">
              CLASSIFIED INFORMATION - UNAUTHORIZED ACCESS PROHIBITED
            </div>
          </div>

          {/* WHAT THIS IS - Most Important Info First */}
          <div className=" ">
            <div className="mb-6 sm:mb-8">
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6">
                &gt; TELOS CARAVAN TO SLUSH
              </div>
            </div>

            {/* Live Tracking Button - First */}
            <div className="mb-6 sm:mb-8">
              <a
                href="/track"
                className="block w-full border-2 border-red-500 bg-red-500/20 hover:bg-red-500 text-red-500 hover:text-black py-4 sm:py-5 md:py-6 text-center font-bold tracking-widest transition-all duration-200 text-base sm:text-lg md:text-xl lg:text-2xl cursor-pointer group"
              >
                <div className="flex items-center justify-center gap-2 sm:gap-3">
                  <span className="text-red-500 group-hover:text-black text-xl sm:text-2xl">▶</span>
                  <span>TRACK THE CARAVAN LIVE</span>
                  <span className="text-red-500 group-hover:text-black text-xl sm:text-2xl">◀</span>
                </div>
              </a>
            </div>

            {/* Journey Description - Collapsible Dropdown */}
            <div className="mb-2 sm:mb-2">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full border-2 border-red-500/50 bg-red-500/5 hover:bg-red-500/10 text-red-400 py-3 sm:py-4 px-4 sm:px-5 md:px-6 text-left font-bold tracking-wide transition-all duration-200 text-sm sm:text-base md:text-lg cursor-pointer flex items-center justify-between"
              >
                <span>THE JOURNEY TO SLUSH</span>
                <span className={`text-xl sm:text-2xl transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`}>
                  ▶
                </span>
              </button>

              {isOpen && (
                <div className="border-2 border-red-500/30 border-t-0 bg-red-500/5 p-4 sm:p-5 md:p-6 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
                    EUROPE&apos;S BRIGHTEST FOUNDERS TRAVELING BY CARAVAN FROM LONDON TO HELSINKI FOR A 80-HOUR ADVENTURE PACKED JOURNEY TO SLUSH 2025 - THE WORLD&apos;S LARGEST FOUNDER EVENT
                  </p>
                </div>
              )}
            </div>

          </div>

          <div className="space-y-6 sm:space-y-8 mt-4">
            <div>
              <div className="text-red-500 text-sm sm:text-base md:text-lg lg:text-xl  tracking-wider font-bold">
                [MISSION OBJECTIVES]
              </div>
              <div className="pl-3 sm:pl-4 space-y-2 sm:space-y-3 text-sm sm:text-base md:text-lg">
                <div className="flex gap-2 sm:gap-3">
                  <span className="text-red-500 text-lg sm:text-xl">&gt;</span>
                  <span>CONQUER EUROPE</span>
                </div>
                <div className="flex gap-2 sm:gap-3">
                  <span className="text-red-500 text-lg sm:text-xl">&gt;</span>
                  <span>CONQUER THE WORLD&apos;S LARGEST FOUNDER EVENT</span>
                </div>
              </div>
            </div>

            <div>
              <div className="text-red-500 text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 tracking-wider font-bold">
                [PARTNERS]
              </div>
              <div className="bg-red-500/10 border-2 border-red-500/30 p-4 sm:p-6 md:p-8">
                <div className="flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-16 items-center">
                  <a
                    href="https://vice.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 transition-all hover:scale-105"
                  >
                    <Image
                      src={vice}
                      alt="VICE NEWS"
                      className="h-8 sm:h-10 md:h-12 lg:h-16 w-auto"
                    />
                  </a>
                  <a
                    href="https://slush.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 transition-all hover:scale-105"
                  >
                    <Image
                      src={slush}
                      alt="SLUSH"
                      className="h-8 sm:h-10 md:h-12 lg:h-16 w-auto"
                    />
                  </a>
                  {/* Supercell Logo
                  <a
                    href="https://supercell.com/en/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white px-8 py-6 transition-all hover:scale-105"
                  >
                    <Image
                      src={supercell}
                      alt="SUPERCELL"
                      className="h-12 md:h-16 w-auto"
                    />
                  </a>
                  */}
                </div>
              </div>
            </div>

            <div>
              <div className="text-red-500 text-sm sm:text-base md:text-lg lg:text-xl mb-3 sm:mb-4 tracking-wider font-bold">
                [THE ROUTE]
              </div>
              <div className="pl-2 sm:pl-3 md:pl-4 relative">
                {/* Train Route Visualization */}
                <div className="space-y-1.5 sm:space-y-2">
                  {/* London */}
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                    <div className="flex flex-col items-center min-w-4 sm:min-w-5">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-red-500 border-2 border-red-500"></div>
                      <div className="w-0.5 h-12 sm:h-14 md:h-16 bg-red-500/50"></div>
                    </div>
                    <span className="text-sm sm:text-base md:text-lg font-bold leading-tight">
                      TELOS HQ, KINGS CROSS, LONDON
                    </span>
                  </div>

                  {/* Paris */}
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                    <div className="flex flex-col items-center min-w-4 sm:min-w-5">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 border-red-500 bg-black"></div>
                      <div className="w-0.5 h-12 sm:h-14 md:h-16 bg-red-500/50"></div>
                    </div>
                    <span className="text-sm sm:text-base md:text-lg">PARIS</span>
                  </div>

                  {/* Zurich */}
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                    <div className="flex flex-col items-center min-w-4 sm:min-w-5">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 border-red-500 bg-black"></div>
                      <div className="w-0.5 h-12 sm:h-14 md:h-16 bg-red-500/50"></div>
                    </div>
                    <span className="text-sm sm:text-base md:text-lg">ZURICH</span>
                  </div>

                  {/* Liechtenstein */}
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                    <div className="flex flex-col items-center min-w-4 sm:min-w-5">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 border-red-500 bg-black"></div>
                      <div className="w-0.5 h-12 sm:h-14 md:h-16 bg-red-500/50"></div>
                    </div>
                    <span className="text-sm sm:text-base md:text-lg">LIECHTENSTEIN</span>
                  </div>

                  {/* Munich */}
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                    <div className="flex flex-col items-center min-w-4 sm:min-w-5">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 border-red-500 bg-black"></div>
                      <div className="w-0.5 h-12 sm:h-14 md:h-16 bg-red-500/50"></div>
                    </div>
                    <span className="text-sm sm:text-base md:text-lg">MUNICH</span>
                  </div>

                  {/* Berlin */}
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                    <div className="flex flex-col items-center min-w-4 sm:min-w-5">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 border-red-500 bg-black"></div>
                      <div className="w-0.5 h-12 sm:h-14 md:h-16 bg-red-500/50"></div>
                    </div>
                    <span className="text-sm sm:text-base md:text-lg">BERLIN</span>
                  </div>

                  {/* Stockholm */}
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                    <div className="flex flex-col items-center min-w-4 sm:min-w-5">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 border-red-500 bg-black"></div>
                      <div className="w-0.5 h-12 sm:h-14 md:h-16 bg-red-500/50"></div>
                    </div>
                    <span className="text-sm sm:text-base md:text-lg">STOCKHOLM</span>
                  </div>

                  {/* Helsinki - Final destination */}
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                    <div className="flex flex-col items-center min-w-4 sm:min-w-5">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-red-500 border-2 border-red-500"></div>
                    </div>
                    <span className="text-sm sm:text-base md:text-lg font-bold">HELSINKI</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="text-red-500 text-sm sm:text-base md:text-lg lg:text-xl mb-3 sm:mb-4 tracking-wider font-bold">
                [CONTACT]
              </div>
              <div className="pl-3 sm:pl-4 text-sm sm:text-base md:text-lg">
                <div className="flex gap-2 sm:gap-3">
                  <span className="text-red-500 text-lg sm:text-xl">&gt;</span>
                  <a
                    href="mailto:team@teloshouse.com"
                    className="hover:text-red-300 transition-colors underline break-all"
                  >
                    team@teloshouse.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-2 border-red-500 bg-red-500 text-black text-center py-2 sm:py-3 mt-8 sm:mt-10">
            <div className="text-xs sm:text-sm md:text-base lg:text-lg font-bold tracking-widest">
              TOP SECRET // SPECIAL ACCESS REQUIRED
            </div>
          </div>

          <div className="mt-4 sm:mt-6 text-xs sm:text-sm md:text-base text-red-500/50 flex flex-col md:flex-row justify-between gap-1 sm:gap-2 text-center md:text-left">
            <div>DOC_REV: 1.0</div>
            <div>ISSUED: NOV 2025</div>
            <div>AUTHORITY: TELOS_HOUSE</div>
          </div>
        </div>
      </div>
    </div>
  );
}
