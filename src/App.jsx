import React, { useEffect, useRef, useState } from 'react';
import { ShieldAlert, AlertTriangle, BatteryWarning, TrendingDown, Target, Zap, Waves, LineChart, Globe, CheckCircle, ArrowRight } from 'lucide-react';

import heroImg from './assets/hero.png';
import hardwareImg from './assets/asia/S__238305299_0.jpg';
import appUiImg from './assets/jason/DSC05276.JPG';
import teamFrans from './assets/jason/DSC05281.JPG';
import teamDelon from './assets/jason/DSC05310.JPG';
import teamJason from './assets/jason/DSC05327.JPG';
import teamJaiJai from './assets/jason/DSC05255.JPG';
import heroVideo from './assets/thailand_shrimp_farm_video.mp4';
import shrimpPondImg from './assets/shrimp_pond.jpg';

const teamPhotos = [teamFrans, teamDelon, teamJason, teamJaiJai];

const GlassCard = ({ children, className = "" }) => (
  <div className={`bg-darkblue/40 backdrop-blur-lg border border-tealblue/50 rounded-2xl p-6 shadow-xl ${className}`}>
    {children}
  </div>
);

const LiquidGlassCard = ({ children, className = "" }) => (
  <div className={`bg-white/10 backdrop-blur-3xl border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] rounded-3xl p-8 relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50 pointer-events-none"></div>
    <div className="relative z-10">
      {children}
    </div>
  </div>
);

const FadeIn = ({ children, delay = 0, className = "" }) => {
  const domRef = useRef();
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setVisible(true);
        observer.unobserve(domRef.current);
      }
    }, { threshold: 0.1 });

    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-navy/80 backdrop-blur-md border-b border-tealblue/30">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-20">
        <div className="flex items-center">
          <Waves className="h-8 w-8 text-sunset-skyblue mr-2" />
          <span className="font-bold text-2xl tracking-tight text-white">Cultivator</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-lightgrey hover:text-white transition">Home</a>
          <a href="#product" className="text-lightgrey hover:text-white transition">Product</a>
          <a href="#impact" className="text-lightgrey hover:text-white transition">Impact</a>
          <a href="#business" className="text-lightgrey hover:text-white transition">Business Model</a>
          <a href="#team" className="text-lightgrey hover:text-white transition">Team</a>
        </div>
        <div>
          <button className="bg-sunset-orange hover:bg-sunset-orange/90 text-white px-6 py-2 rounded-full font-semibold transition shadow-[0_0_15px_rgba(255,145,16,0.4)]">
            Join Pilot Program
          </button>
        </div>
      </div>
    </div>
  </nav>
);

const Hero = () => {
  const videoRef = useRef(null);
  const [scrollOpacity, setScrollOpacity] = useState(1);

  // Fade video based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const fadeEnd = 600; // Fully transparent after 600px of scrolling
      const opacity = Math.max(0, 1 - window.scrollY / fadeEnd);
      setScrollOpacity(opacity);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Ping-pong video logic
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let isReversing = false;
    let reverseInterval = null;

    const startReverse = () => {
      isReversing = true;
      video.pause();

      // We use a manual interval scrub because setting playbackRate = -1 
      // isn't natively smooth/supported across all browsers.
      // This steps the video back manually at roughly 30fps.
      reverseInterval = setInterval(() => {
        if (video.currentTime <= 0.1) {
          clearInterval(reverseInterval);
          isReversing = false;
          video.play();
        } else {
          video.currentTime = Math.max(0, video.currentTime - 0.033);
        }
      }, 33);
    };

    const handleTimeUpdate = () => {
      if (!isReversing && video.currentTime >= video.duration - 0.1) {
        startReverse();
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      if (reverseInterval) clearInterval(reverseInterval);
    };
  }, []);

  return (
    <section id="home" className="min-h-screen pt-24 pb-12 px-4 relative overflow-hidden flex items-center justify-center">
      {/* Background Video Wrapper with dynamic opacity */}
      <div
        className="absolute inset-0 z-0 transition-opacity duration-75"
        style={{ opacity: scrollOpacity }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>

      {/* Subtle Gradient Overlays for Video Clarity & Text Contrast */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(11,26,51,0.6)_0%,transparent_60%)] z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent z-10 opacity-80"></div>

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-tealblue/20 rounded-full blur-[100px] z-10 pointer-events-none"></div>

      <div className="max-w-4xl w-full mx-auto flex flex-col items-center text-center z-20 relative">
        <div className="space-y-8 flex flex-col items-center">
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white tracking-tight"
            style={{ textShadow: "0 4px 30px rgba(0,0,0,0.8), 0 2px 10px rgba(0,0,0,0.6)" }}
          >
            Prevent shrimp pond collapse <br className="hidden md:block" /><span className="text-sunset-skyblue">before it happens.</span>
          </h1>
          <p
            className="text-xl md:text-2xl text-white leading-relaxed max-w-2xl font-medium"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.9), 0 1px 5px rgba(0,0,0,0.8)" }}
          >
            A smart aeration system for 3.5 million smallholder farmers. We turn a NT$24,000 sensor into a NT$600,000 safety net.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <button className="bg-sunset-orange hover:bg-sunset-orange/90 text-white px-8 py-4 rounded-full font-bold text-lg transition shadow-[0_0_20px_rgba(255,145,16,0.6),0_4px_15px_rgba(0,0,0,0.5)] hover:-translate-y-1">
              Join Pilot Program
            </button>
            <button className="bg-navy/60 backdrop-blur-md border border-lightgrey text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-navy/80 transition shadow-[0_4px_15px_rgba(0,0,0,0.5)] hover:-translate-y-1">
              See How It Works
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Problem = () => (
  <section className="py-20 px-4 relative">
    <div className="max-w-7xl mx-auto">
      <FadeIn>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">One Harvest Away from Total Bankruptcy.</h2>
          <p className="text-xl text-lightgrey">Industry monitors water conditions, but who looks after the machine that keeps the shrimp alive?</p>
        </div>
      </FadeIn>

      <div className="grid md:grid-cols-3 gap-8">
        <FadeIn delay={100}>
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5] group cursor-pointer hover:-translate-y-2 transition-transform duration-300 shadow-xl border border-tealblue/20">
            <img src={shrimpPondImg} alt="Fragile Operations" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
              <h3 className="text-2xl font-bold mb-3 text-white drop-shadow-md">Fragile Operations</h3>
              <p className="text-lightgrey font-medium leading-relaxed drop-shadow-md">Requires 24/7 monitoring. Without constant supervision, farmers are gambling their entire livelihood.</p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5] group cursor-pointer hover:-translate-y-2 transition-transform duration-300 shadow-xl border border-tealblue/20">
            <img src={hardwareImg} alt="Silent Failure" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
              <h3 className="text-2xl font-bold mb-3 text-white drop-shadow-md">Silent Failure</h3>
              <p className="text-lightgrey font-medium leading-relaxed drop-shadow-md">A single 4-hour failure can wipe out an entire crop. By the time you notice, the shrimp are already dying.</p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={300}>
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5] group cursor-pointer hover:-translate-y-2 transition-transform duration-300 shadow-xl border border-tealblue/20">
            <img src={appUiImg} alt="Massive Losses" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
              <h3 className="text-2xl font-bold mb-3 text-white drop-shadow-md">Massive Losses</h3>
              <p className="text-lightgrey font-medium leading-relaxed drop-shadow-md">A $6,000 NTD machine failure destroys -$600,000 NTD of shrimp. The math doesn't work in the farmer's favor.</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

const Solution = () => (
  <section id="product" className="py-20 px-4 relative overflow-hidden">
    <div className="absolute right-0 top-1/2 w-96 h-96 bg-sunset-skyblue/10 rounded-full blur-[120px] z-[-1] translate-x-1/2"></div>
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Explanation */}
        <FadeIn className="space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Predictive Intelligence at the <span className="text-sunset-skyblue">Pond's Edge.</span>
          </h2>
          <p className="text-xl text-lightgrey leading-relaxed">
            The sensor catches the data; the app gives the alert. We replace manual guesswork with a sensor that monitors vibration and electrical current.
          </p>

          <div className="space-y-4">
            <p className="text-lg text-white font-semibold">Proactive monitoring starts with:</p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <div className="bg-sunset-orange/20 p-1 rounded-full"><CheckCircle className="w-5 h-5 text-sunset-orange" /></div>
                <span className="text-lightgrey">24/7 continuous aerator tracking</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-sunset-orange/20 p-1 rounded-full"><CheckCircle className="w-5 h-5 text-sunset-orange" /></div>
                <span className="text-lightgrey">Real-time vibration anomaly detection</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-sunset-orange/20 p-1 rounded-full"><CheckCircle className="w-5 h-5 text-sunset-orange" /></div>
                <span className="text-lightgrey">Instant mobile app alerts before oxygen drops</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-sunset-orange/20 p-1 rounded-full"><CheckCircle className="w-5 h-5 text-sunset-orange" /></div>
                <span className="text-lightgrey">Lower energy consumption and costs</span>
              </li>
            </ul>
          </div>
        </FadeIn>

        {/* Right Side: 3 Photos Grid */}
        <FadeIn delay={200} className="grid grid-cols-2 gap-4">
          {/* Top Photo (Full Width) */}
          <div className="col-span-2 h-[250px] overflow-hidden rounded-2xl border border-tealblue/50 shadow-xl">
            <img src={shrimpPondImg} alt="Farm Setup" className="w-full h-full object-cover" />
          </div>

          {/* Bottom Left Photo */}
          <div className="col-span-1 h-[200px] overflow-hidden rounded-2xl border border-tealblue/50 shadow-xl">
            <img src={hardwareImg} alt="Hardware Device" className="w-full h-full object-cover" />
          </div>

          {/* Bottom Right Photo */}
          <div className="col-span-1 h-[200px] overflow-hidden rounded-2xl border border-tealblue/50 shadow-xl">
            <img src={appUiImg} alt="App Interface" className="w-full h-full object-cover" />
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

const Impact = () => (
  <section id="impact" className="py-20 px-4">
    <div className="max-w-7xl mx-auto">
      <FadeIn>
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Less waste. Lower risk. <br /><span className="text-sunset-skyblue">More predictable outcomes.</span></h2>
      </FadeIn>

      <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-12 items-start">
        {/* Column 1: Image Top */}
        <FadeIn className="flex flex-col gap-6">
          <div className="rounded-3xl overflow-hidden aspect-[4/3] shadow-lg border border-tealblue/20">
            <img src={shrimpPondImg} className="w-full h-full object-cover" alt="Energy Saved" />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2 text-white">27.6% Energy Saved</h3>
            <p className="text-lightgrey leading-relaxed">~9 GJ per crop by optimizing aerator runtime and lowering overall power consumption without risking the shrimp.</p>
          </div>
        </FadeIn>

        {/* Column 2: Text Top (on Desktop) */}
        <FadeIn delay={100} className="flex flex-col md:flex-col-reverse gap-6">
          <div className="rounded-3xl overflow-hidden aspect-[4/3] shadow-lg border border-tealblue/20">
            <img src={hardwareImg} className="w-full h-full object-cover" alt="Loss Prevented" />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2 text-white">NTD 300K+ Prevented</h3>
            <p className="text-lightgrey leading-relaxed">Added directly to the farmer's pocket per crop by eliminating the risk of sudden catastrophic aerator failures.</p>
          </div>
        </FadeIn>

        {/* Column 3: Image Top */}
        <FadeIn delay={200} className="flex flex-col gap-6">
          <div className="rounded-3xl overflow-hidden aspect-[4/3] shadow-lg border border-tealblue/20">
            <img src={appUiImg} className="w-full h-full object-cover" alt="Survival Rate" />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2 text-white">90% Survival Rate</h3>
            <p className="text-lightgrey leading-relaxed">Pushing survival rates up to industry-leading levels by proactively preventing catastrophic wipeouts.</p>
          </div>
        </FadeIn>
      </div>

      <FadeIn delay={300} className="py-12 mt-16 flex flex-col items-center justify-center gap-10 border-t border-tealblue/30">
        <h2 className="text-2xl md:text-3xl text-white font-semibold text-center">Our commitment to sustainable aquaculture.</h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          <img src="src\assets\sdg_1.png" alt="Placeholder 1" className="w-24 h-24 md:w-32 md:h-32 object-contain hover:scale-105 transition-transform cursor-pointer rounded-xl" />
          <img src="src\assets\sdg_2.png" alt="Placeholder 2" className="w-24 h-24 md:w-32 md:h-32 object-contain hover:scale-105 transition-transform cursor-pointer rounded-xl" />
          <img src="src\assets\sdg_3.png" alt="Placeholder 3" className="w-24 h-24 md:w-32 md:h-32 object-contain hover:scale-105 transition-transform cursor-pointer rounded-xl" />
        </div>
      </FadeIn>
    </div>
  </section>
);

const Business = () => (
  <section id="business" className="py-24 px-4 relative bg-navy overflow-hidden">
    {/* Background Image with Dark Overlay */}
    <div className="absolute inset-0 z-0">
      <img src={shrimpPondImg} alt="Background" className="w-full h-full object-cover opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/40 to-navy/90"></div>
    </div>

    <div className="max-w-7xl mx-auto relative z-10">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg tracking-tight">Affordable and Proactive.</h2>
            <p className="text-xl text-white/80 mb-10 leading-relaxed font-medium">
              Our B2B2Farmer model ensures low barrier to entry while maintaining sustainable operations for our network.
            </p>
          </FadeIn>
          <div className="space-y-6">
            <FadeIn delay={100}>
              <LiquidGlassCard className="border-l-4 border-l-sunset-skyblue">
                <h3 className="text-2xl font-bold text-white mb-2">NT$4,500 <span className="text-base text-white/60 font-normal">/ year / pond</span></h3>
                <p className="text-white/80 font-medium">SaaS utility fee for 24/7 predictive alerts & dashboard access.</p>
              </LiquidGlassCard>
            </FadeIn>
            <FadeIn delay={200}>
              <LiquidGlassCard className="border-l-4 border-l-emerald-400">
                <h3 className="text-2xl font-bold text-white mb-2">NT$20,000 <span className="text-base text-white/60 font-normal">for 10 units</span></h3>
                <p className="text-white/80 font-medium">One-time hardware cost. Durable, rugged, and built to last.</p>
              </LiquidGlassCard>
            </FadeIn>
          </div>
        </div>
        <div className="space-y-6">
          <FadeIn delay={300}>
            <LiquidGlassCard>
              <h3 className="text-xl font-bold mb-4 text-white/90 flex items-center gap-2"><Globe className="text-sunset-skyblue h-6 w-6" /> Global Hardware Market</h3>
              <div className="text-5xl font-extrabold text-white mb-3 tracking-tight">~$800M</div>
              <p className="text-white/80 font-medium">Total Addressable Market (TAM)</p>
            </LiquidGlassCard>
          </FadeIn>
          <FadeIn delay={400}>
            <LiquidGlassCard>
              <h3 className="text-xl font-bold mb-4 text-white/90 flex items-center gap-2"><Target className="text-emerald-400 h-6 w-6" /> Initial Target</h3>
              <div className="text-5xl font-extrabold text-white mb-3 tracking-tight">~$50M</div>
              <p className="text-white/80 font-medium">Serviceable Obtainable Market (SOM)<br /><span className="text-sm opacity-80 mt-1 block">Taiwan Pilot + 10% SEA integration</span></p>
            </LiquidGlassCard>
          </FadeIn>
        </div>
      </div>
    </div>
  </section>
);

const Traction = () => (
  <section className="py-24 px-4 bg-navy relative border-y border-tealblue/20 overflow-hidden">
    <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-sunset-skyblue/5 rounded-full blur-[120px] transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

    <div className="max-w-6xl mx-auto relative z-10">
      <div className="text-center mb-24">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white tracking-tight">Scaling the Impact.</h2>
      </div>

      <div className="relative space-y-16 md:space-y-0">
        {/* Vertical connecting line */}
        <div className="hidden md:block absolute left-1/2 top-12 bottom-12 w-1 bg-gradient-to-b from-tealblue/10 via-sunset-skyblue/50 to-tealblue/10 transform -translate-x-1/2 z-0"></div>

        {/* 2026 */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full relative z-10 py-12 group">
          <div className="md:w-5/12 md:text-right md:pr-12 mb-8 md:mb-0">
            <div className="inline-block text-sunset-skyblue font-bold text-xl mb-2 tracking-widest uppercase">2026</div>
            <h3 className="text-3xl font-bold mb-4 text-white">Pilot Launch</h3>
            <p className="text-lg text-lightgrey leading-relaxed">
              Final MVP & Pilot farms operational in Taiwan. Testing the durability of our hardware sensors and refining our predictive AI models.
            </p>
          </div>
          <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-navy border-4 border-sunset-skyblue z-20 shadow-[0_0_15px_rgba(85,212,255,0.5)] group-hover:scale-125 transition-transform duration-300"></div>
          <div className="w-full md:w-5/12 rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-tealblue/30 aspect-[4/3] relative">
            <img src={hardwareImg} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="2026 Pilot Launch" />
          </div>
        </div>

        {/* 2028 */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-between w-full relative z-10 py-12 group">
          <div className="md:w-5/12 md:text-left md:pl-12 mb-8 md:mb-0">
            <div className="inline-block bg-sunset-skyblue text-navy px-4 py-1 rounded-full font-bold text-sm mb-4 uppercase tracking-widest">2028</div>
            <h3 className="text-3xl font-bold mb-4 text-white">B2B2F Rollout</h3>
            <p className="text-lg text-lightgrey leading-relaxed">
              Commercial launch across key Asian aquaculture hubs. Establishing strong distribution partnerships to reach thousands of farmers rapidly.
            </p>
          </div>
          <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-sunset-skyblue border-4 border-navy z-20 shadow-[0_0_15px_rgba(85,212,255,0.8)] group-hover:scale-125 transition-transform duration-300"></div>
          <div className="w-full md:w-5/12 rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-tealblue/30 aspect-[4/3] relative">
            <img src={appUiImg} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="2028 B2B2F Rollout" />
          </div>
        </div>

        {/* 2030 */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full relative z-10 py-12 group">
          <div className="md:w-5/12 md:text-right md:pr-12 mb-8 md:mb-0">
            <div className="inline-block text-sunset-skyblue font-bold text-xl mb-2 tracking-widest uppercase">2030</div>
            <h3 className="text-3xl font-bold mb-4 text-white">Mass Adoption</h3>
            <p className="text-lg text-lightgrey leading-relaxed">
              15,000 Farmers protected across Southeast Asia. Creating a more resilient, predictable, and fair global shrimp supply chain.
            </p>
          </div>
          <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-navy border-4 border-sunset-skyblue z-20 shadow-[0_0_15px_rgba(85,212,255,0.5)] group-hover:scale-125 transition-transform duration-300"></div>
          <div className="w-full md:w-5/12 rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-tealblue/30 aspect-[4/3] relative">
            <img src={shrimpPondImg} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="2030 Mass Adoption" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Team = () => (
  <section id="team" className="py-20 px-4">
    <div className="max-w-7xl mx-auto">
      <FadeIn>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Made by collaborative team from NTHU.</h2>
          <p className="text-xl text-lightgrey">Delivering engineering excellence from the lab to the pond. Backed by NTHU Garage.</p>
        </div>
      </FadeIn>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[{ name: "Frans", role: "Product Strategy" }, { name: "Delon", role: "Marketing" }, { name: "Jason", role: "AI Systems Data" }, { name: "Jai Jai", role: "Hardware Design" }].map((member, i) => (
          <FadeIn key={i} delay={i * 100}>
            <div className="relative group rounded-3xl overflow-hidden aspect-[3/4] hover:-translate-y-2 transition-all duration-300 shadow-xl border border-tealblue/30 cursor-pointer">
              <img
              src={teamPhotos[i]}
              alt={member.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Black shading fading in from below */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Text Content */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end text-left z-10">
              <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-md">{member.name}</h3>
              <p className="text-sunset-skyblue text-sm font-bold uppercase tracking-wider drop-shadow-md">{member.role}</p>
            </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

const CTASection = () => (
  <section className="py-24 px-4 relative bg-navy overflow-hidden border-t border-tealblue/30">
    <div className="absolute inset-0 z-0">
      <img src={shrimpPondImg} alt="Background" className="w-full h-full object-cover opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/60 to-navy/30"></div>
    </div>

    <div className="max-w-7xl mx-auto relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Text and Buttons */}
        <FadeIn>
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg tracking-tight leading-tight">
              Start monitoring before the next failure.
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed font-medium max-w-lg drop-shadow-md">
              Cultivator replaces manual guesswork with continuous vibration and electrical current monitoring. A stronger shrimp industry benefits everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center gap-2 bg-sunset-orange hover:bg-sunset-orange/90 text-white px-8 py-4 rounded-full font-bold text-lg transition shadow-[0_0_20px_rgba(255,145,16,0.4)] group">
                Apply for Pilot Program <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition shadow-lg group">
                Partner With Us <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </FadeIn>

        {/* Right Side: Photo Collage Grid */}
        <FadeIn delay={200} className="grid grid-cols-2 gap-4 h-[400px] md:h-[500px]">
          {/* Tall left image */}
          <div className="col-span-1 rounded-3xl overflow-hidden shadow-2xl border border-tealblue/30 relative">
            <img src={teamJaiJai} alt="Farmer" className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          {/* Two stacked right images */}
          <div className="col-span-1 grid grid-rows-2 gap-4 h-full">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-tealblue/30 relative">
               <img src={hardwareImg} alt="Hardware" className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-tealblue/30 relative">
               <img src={appUiImg} alt="App" className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-navy border-t border-tealblue/30 pt-12 pb-8 px-4 relative overflow-hidden">
    <div className="max-w-7xl mx-auto relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <Waves className="h-6 w-6 text-sunset-skyblue mr-2" />
          <span className="font-bold text-xl text-white">Cultivator</span>
        </div>
        <div className="flex gap-6 mb-4 md:mb-0">
          <a href="#" className="text-lightgrey hover:text-white text-sm transition">Privacy Policy</a>
          <a href="#" className="text-lightgrey hover:text-white text-sm transition">Terms of Service</a>
          <a href="#" className="text-lightgrey hover:text-white text-sm transition">Contact</a>
        </div>
        <div className="text-lightgrey text-sm">
          &copy; 2026 Cultivator. All rights reserved.
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-navy text-white selection:bg-sunset-skyblue selection:text-navy">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Impact />
      <Business />
      <Traction />
      <Team />
      <CTASection />
      <Footer />
    </div>
  );
}
