import { useRef } from 'react';
import { User, ShoppingBag, Play, ArrowLeft, ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import BasketballScene from './BasketballScene';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const ballTargetRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Initial entrance animations
    const tl = gsap.timeline({ defaults: { ease: 'power2.out', duration: 1 } });

    tl.from('.gsap-fade-down', {
      y: -20,
      opacity: 0,
      stagger: 0.1,
    })
    .from('.gsap-fade-up', {
      y: 20,
      opacity: 0,
      stagger: 0.1,
    }, '-=0.5')
    .from('.gsap-scale', {
      scale: 0.8,
      opacity: 0,
      duration: 1.2,
    }, '-=0.8')
    .from('.gsap-side', {
      x: 20,
      opacity: 0,
    }, '-=1');

    // Scroll Animation for 3D Ball
    // The actual 3D movement is handled inside BasketballScene.tsx using ScrollTrigger
    // We only keep the wrapper logic if needed for external layout shifts, but for now 
    // let's ensure the canvas inner doesn't compete with the internal 3D logic incorrectly.
    
    // Removed redundant GSAP call here as requested to consolidate in the 3D component.


  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative w-full bg-black main-scroll-container">
      
      {/* 3D Scene Wrapper - Now FIXED and LOCKED */}
      <div className="fixed inset-0 w-screen h-screen z-[50] pointer-events-none basketball-canvas-container">
        <div className="w-full h-full basketball-canvas-inner">
          <BasketballScene />
        </div>
      </div>

      {/* Section 1: Hero */}
      <section className="relative h-screen w-full flex flex-col font-sans z-20">
        {/* Background Typography */}
        <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none">
          <h1 className="text-[20vw] md:text-[260px] font-black text-neutral-900 leading-none tracking-tighter uppercase font-display gsap-scale opacity-80">
            SPALDING
          </h1>
        </div>

        {/* Header */}
        <header className="relative z-50 flex items-center justify-between px-6 py-8 md:px-12 md:py-10 gsap-fade-down w-full">
          <div className="flex flex-col leading-none font-black text-2xl tracking-tighter italic font-display">
            <span>SLAM</span>
            <span className="text-orange-vivid">DUNK</span>
          </div>

          <nav className="hidden md:flex items-center gap-12 font-medium tracking-widest text-sm uppercase">
            <a href="#" className="text-orange-vivid border-b-2 border-orange-vivid pb-1 transition-colors">Products</a>
            <a href="#" className="text-neutral-400 hover:text-white transition-colors">Customize</a>
            <a href="#" className="text-neutral-400 hover:text-white transition-colors">Contacts</a>
          </nav>

          <div className="flex items-center gap-6">
            <button id="user-profile" className="p-2 hover:bg-neutral-800 rounded-full transition-all cursor-pointer text-neutral-400 hover:text-white">
              <User size={24} strokeWidth={1.5} />
            </button>
            <button id="shopping-bag" className="p-2 hover:bg-neutral-800 rounded-full transition-all cursor-pointer relative text-neutral-400 hover:text-white">
              <ShoppingBag size={24} strokeWidth={1.5} />
              <span className="absolute -top-1 -right-1 bg-orange-vivid text-black text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">2</span>
            </button>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="relative z-30 flex-1 flex flex-col justify-between p-6 md:px-12 md:py-10">
          <div className="gsap-fade-up">
            <button className="group flex items-center gap-4 cursor-pointer">
              <div className="w-12 h-12 flex items-center justify-center rounded-full border border-neutral-700 bg-neutral-900/50 group-hover:bg-neutral-800 transition-all">
                <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1"></div>
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-400">Promotion video</span>
            </button>
          </div>

          <div className="flex flex-col md:flex-row items-end justify-between gap-10">
            <div className="flex flex-col gap-1 gsap-fade-up min-w-[200px]">
              <div className="text-5xl md:text-6xl font-black font-display text-orange-vivid tracking-tighter">$34.99</div>
              <div className="text-[11px] font-bold tracking-widest text-neutral-400 uppercase">
                SIZE: 29.5 <span className="mx-2 text-neutral-700">•</span> OFFICIAL GAME BALL
              </div>
              <div className="mt-12 text-[10px] font-mono text-neutral-800 uppercase tracking-tighter">
                RU
              </div>
            </div>

            <div className="flex-1 flex justify-center gsap-fade-up">
              <button className="bg-orange-vivid text-black font-black px-14 py-5 rounded-sm text-sm uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(255,85,0,0.4)] cursor-pointer">
                ADD TO CART
              </button>
            </div>

            <div className="flex items-center gap-4 gsap-fade-up">
              <button className="w-14 h-14 flex items-center justify-center rounded-full border border-neutral-800 hover:border-white transition-all cursor-pointer text-neutral-500 hover:text-white">
                <ArrowLeft size={20} />
              </button>
              <button className="w-14 h-14 flex items-center justify-center rounded-full border border-neutral-800 hover:border-white transition-all cursor-pointer text-neutral-500 hover:text-white">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </main>

        <div className="absolute right-12 top-1/2 -translate-y-1/2 flex flex-col items-center z-40 gsap-side hidden md:flex">
          <div className="rotate-90 origin-center whitespace-nowrap">
            <span className="text-[10px] font-bold tracking-[0.5em] text-neutral-600 uppercase">90 / 10 SCALE</span>
          </div>
        </div>
      </section>

      {/* Section 2: Elite Control */}
      <section className="section-2 relative h-screen w-full bg-black z-20 flex items-center px-6 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-7xl mx-auto">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-orange-vivid rounded-full"></span>
                <span className="text-[10px] font-bold tracking-[0.3em] text-orange-vivid uppercase">Performance Metrics</span>
              </div>
              <h2 className="text-7xl md:text-8xl font-black font-display leading-[0.9] text-white">
                ELITE<br />CONTROL
              </h2>
            </div>

            <div className="flex flex-col gap-12">
              <div className="flex flex-col gap-3 pl-6 border-l border-neutral-800">
                <span className="text-4xl font-black text-white font-display">100%</span>
                <span className="text-xs font-bold text-neutral-500 tracking-widest uppercase">Microfiber Composite</span>
                <p className="max-w-xs text-xs leading-relaxed text-neutral-400 font-medium font-sans">
                  Exclusive coating material providing superior grip management in all weather conditions.
                </p>
              </div>

              <div className="flex flex-col gap-3 pl-6 border-l border-neutral-800">
                <span className="text-4xl font-black text-white font-display">0.5mm</span>
                <span className="text-xs font-bold text-neutral-500 tracking-widest uppercase">Pebble Depth</span>
                <p className="max-w-xs text-xs leading-relaxed text-neutral-400 font-medium font-sans">
                  Optimized surface texture for precision handling and rotational feedback.
                </p>
              </div>
            </div>
          </div>
          
          {/* Right Column: Empty, reserved for 3D Ball overlap */}
          <div className="hidden md:block"></div>
        </div>
      </section>

      {/* Section 3: Perfect Flight */}
      <section className="section-3 relative h-screen w-full bg-black z-20 flex items-center px-6 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-7xl mx-auto">
          {/* Left Column: Empty, reserved for 3D Ball overlap */}
          <div className="hidden md:block"></div>

          <div className="flex flex-col gap-12 items-end text-right">
            <div className="flex flex-col gap-4 items-end">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-bold tracking-[0.3em] text-orange-vivid uppercase px-3 py-1 border border-orange-vivid rounded-full">Aerodynamics</span>
              </div>
              <h2 className="text-7xl md:text-8xl font-black font-display leading-[0.9] text-white">
                PERFECT<br />FLIGHT
              </h2>
            </div>

            <div className="flex flex-col gap-12 items-end w-full">
              <div className="flex flex-col gap-3 pr-6 border-r border-neutral-800 items-end">
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-black text-white font-display">0.85</span>
                  <div className="w-2 h-2 bg-orange-vivid rounded-full"></div>
                </div>
                <span className="text-xs font-bold text-neutral-500 tracking-widest uppercase">Drag Coefficient</span>
              </div>

              <div className="flex flex-col gap-3 pr-6 border-r border-neutral-800 items-end">
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-black text-white font-display">28.5</span>
                  <div className="w-2 h-2 bg-orange-vivid rounded-full"></div>
                </div>
                <span className="text-xs font-bold text-neutral-500 tracking-widest uppercase">Rotational Stability</span>
              </div>

              <p className="max-w-md text-xs leading-relaxed text-neutral-400 font-medium font-sans text-right">
                Symmetrically balanced weight distribution ensures true flight path and consistent rotation speed, critical for long-range precision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Technical HUD */}
      <section className="section-4 relative h-screen w-full bg-black z-20 flex items-center justify-center px-6 md:px-24 overflow-hidden">
        {/* Radar / HUD Background Elements */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
          <div className="w-[300px] h-[300px] md:w-[600px] md:h-[600px] border border-neutral-800 rounded-full absolute"></div>
          <div className="w-[450px] h-[450px] md:w-[900px] md:h-[900px] border border-neutral-900 rounded-full absolute"></div>
          <div className="w-[150px] h-[150px] md:w-[300px] md:h-[300px] border border-red-900/30 rounded-full absolute"></div>
          
          {/* Crosshairs */}
          <div className="w-full h-[1px] bg-neutral-900 absolute"></div>
          <div className="h-full w-[1px] bg-neutral-900 absolute"></div>
          
          {/* Red Center Accent */}
          <div className="w-4 h-4 border border-red-600 rounded-full absolute"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-7xl mx-auto relative z-30">
          {/* Left Content */}
          <div className="flex flex-col justify-center items-start gap-12">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-bold tracking-[0.4em] text-neutral-600 uppercase">Micro-Texture</span>
              <div className="flex items-center gap-6">
                <div className="w-[2px] h-16 bg-white"></div>
                <div className="flex flex-col">
                  <span className="text-6xl font-black text-white font-display">1.2mm</span>
                  <span className="text-xs font-bold text-neutral-500 tracking-widest uppercase">Pebble Height</span>
                </div>
              </div>
              <span className="text-[10px] font-mono text-neutral-500 mt-4 tracking-tighter">ELEVATION: 12.3°</span>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-center items-end gap-12 text-right">
            <div className="flex flex-col gap-2 items-end">
              <span className="text-[10px] font-mono text-neutral-500 mb-4 tracking-tighter">AZIMUTH: 45.2°</span>
              <div className="flex items-center gap-6">
                <div className="flex flex-col items-end">
                  <span className="text-6xl font-black text-white font-display">High-Tack</span>
                  <span className="text-xs font-bold text-neutral-500 tracking-widest uppercase">Coating Spec</span>
                </div>
                <div className="w-[2px] h-16 bg-white"></div>
              </div>
              <span className="text-[10px] font-bold tracking-[0.4em] text-neutral-600 uppercase mt-4">Channel Depth</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Marquee - Fixed at bottom */}
      <footer className="fixed bottom-0 left-0 h-4 bg-orange-vivid w-full flex items-center overflow-hidden z-50">
        <div className="flex animate-marquee whitespace-nowrap text-[8px] font-black text-black items-center gap-8 px-4 uppercase">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center gap-8">
              <span>Authentic Basketball Series</span>
              <span>●</span>
              <span>Limited Edition Drop</span>
              <span>●</span>
              <span>Slam Dunk Heritage</span>
              <span>●</span>
              <span>High Grip Composite</span>
              <span>●</span>
              <span>Official Weight</span>
              <span>●</span>
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
}
