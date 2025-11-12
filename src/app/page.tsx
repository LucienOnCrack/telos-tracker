import Image from "next/image";
import slush from "../../assets/slush.svg"
import vice from "../../assets/vice.svg"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20">
        <header className="mb-20 md:mb-24">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-10">
            <div>
              <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight leading-none">
                TELOS CARAVAN
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 font-light">
                London → Helsinki · Slush 2025
              </p>
            </div>
            <div className="shrink-0">
              <a
                href="/track"
                className="inline-block px-10 py-5 bg-white text-black hover:bg-gray-200 transition-colors text-lg font-semibold tracking-wide"
              >
                TRACK THE ROUTE
              </a>
            </div>
          </div>
          <div className="h-px bg-linear-to-r from-white/0 via-white/20 to-white/0"></div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-16 mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Mission</h2>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
              Assemble Europe's brightest founders. Fuel a 40hr odyssey from London to Helsinki. Infiltrate Slush and make history.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Objectives</h2>
            <ul className="space-y-4 text-xl md:text-2xl text-gray-300 font-light">
              <li>· Conquer Europe</li>
              <li>· Conquer the world's largest founder event</li>
            </ul>
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 tracking-tight">Partners</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="https://slush.org"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 border border-white/10 p-12 flex items-center justify-center min-h-[180px] hover:bg-white/50 cursor-pointer transition-all group"
            >
              <Image src={slush} alt="Slush Logo" width={150} height={50} className="object-contain group-hover:scale-105 transition-transform" />
            </a>
            <a
              href="https://vice.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 border border-white/10 p-12 flex items-center justify-center min-h-[180px] hover:bg-white/50 cursor-pointer transition-all group"
            >
             <Image src={vice} alt="vice Logo" width={150} height={50} className="object-contain group-hover:scale-105 transition-transform" />
            </a>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">Route</h2>
          <div className="flex flex-col space-y-0">
            {[
              'Telos HQ, Kings Cross, London',
              'Zurich',
              'Liechtenstein',
              'Munich',
              'Berlin',
              'Stockholm',
              'Helsinki'
            ].map((city, index, array) => (
              <div key={city} className="flex items-start">
                <div className="flex flex-col items-center mr-6">
                  <div className="w-4 h-4 rounded-full bg-white"></div>
                  {index < array.length - 1 && (
                    <div className="w-0.5 h-12 bg-white/30"></div>
                  )}
                </div>
                <div className="pb-12">
                  <p className="text-xl md:text-2xl text-gray-300 font-light">{city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Contact</h2>
            <a
              href="mailto:team@teloshouse.com"
              className="text-xl md:text-2xl text-gray-300 hover:text-white transition-colors underline font-light inline-block"
            >
              team@teloshouse.com
            </a>
          </div>
        </div>

        <footer className="pt-10 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between gap-4 text-base text-gray-500">
            <div>© 2025 Telos House. All rights reserved.</div>
            <div>November 2025</div>
          </div>
        </footer>
      </div>
    </div>
  );
}
