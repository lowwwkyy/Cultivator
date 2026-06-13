import { useEffect, useState } from 'react';
import { ArrowRight, BatteryWarning, Menu, X } from 'lucide-react';
import { GlassCard, LiquidGlassCard, FadeIn, CursorGlow, Footer } from '../components/SharedUI';
import { useNavigate } from 'react-router-dom';

// import heroImg from '../assets/hero.png';
import hardwareImg from '../assets/asia/S__238305299_0.jpg';
import appUiImg from '../assets/jason/DSC05276.JPG';
import shrimpPondImg from '../assets/shrimp_pond.jpg';
import heroVideo from '../assets/thailand_shrimp_farm_video.mp4';
import logoImg from '../assets/cultivator_logo.jpeg';

import problemSilentFailImg from '../assets/problem_silent_fail.png';
import problemMassiveLossImg from '../assets/problem_massive_loss.png';
import problemFragileOpsImg from '../assets/problem_fragile_ops.png';

import gallery1 from '../assets/asia/S__238305288_0.jpg';
import gallery2 from '../assets/jason/DSC05256.JPG';
import gallery3 from '../assets/asia/S__238305295_0.jpg';
import gallery4 from '../assets/jason/DSC05272.JPG';
import gallery5 from '../assets/asia/S__238305303_0.jpg';
import gallery6 from '../assets/jason/DSC05294.JPG';
import gallery7 from '../assets/asia/S__238305300_0.jpg';
import gallery8 from '../assets/jason/DSC05302.JPG';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Problem', href: '#problem' },
    { label: 'Solution', href: '#solution' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <div className="pointer-events-none fixed top-6 z-50 flex w-full justify-center px-4">
      <nav className={`pointer-events-auto overflow-hidden border border-white/10 bg-darkblue/50 shadow-[0_8px_32px_0_rgba(0,0,0,0.45)] backdrop-blur-xl transition-all duration-500 ease-in-out ${isOpen ? 'w-full max-w-md rounded-3xl px-8 py-6' : 'rounded-full px-12 py-4'}`}>
        <div className="flex items-center justify-center gap-4 relative">
          <div className="hidden md:flex items-center gap-6 pr-6 border-r border-white/10">
            <span className="flex items-center gap-2 text-xl font-bold tracking-wide text-white">
              <img src={logoImg} alt="Cultivator Logo" className="h-8 w-8 rounded-full object-cover" />
              Cultivator
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-10 pl-2">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-base font-medium text-white/80 transition hover:text-white">
                {item.label}
              </a>
            ))}
          </div>

          <div className="md:hidden flex w-full items-center justify-between px-2">
            <span className="flex items-center gap-2 text-lg font-bold tracking-wide text-white">
              <img src={logoImg} alt="Cultivator Logo" className="h-7 w-7 rounded-full object-cover" />
              Cultivator
            </span>
            <button onClick={() => setIsOpen((value) => !value)} className="ml-4 text-white transition hover:text-sunset-skyblue">
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>

        <div className={`md:hidden flex flex-col items-center space-y-5 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'mt-8 max-h-112.5 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
          {navItems.map((item) => (
            <a key={item.label} href={item.href} onClick={() => setIsOpen(false)} className="text-lg font-medium text-white/80 transition hover:text-white">
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
};

const Hero = () => {
  const navigate = useNavigate(); 

  return (
    <section id="home" className="relative min-h-screen overflow-hidden px-4 pb-16 pt-28">
      <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 h-full w-full object-cover opacity-[67%]"
    >
      <source src={heroVideo} type="video/mp4" />
    </video>
      
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center justify-center text-center min-h-[calc(100vh-7rem)]">
        <FadeIn className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl" style={{ textShadow: '0 4px 30px rgba(0,0,0,0.6)' }}>
              Future of <br className="hidden md:block" />
              <span className="text-sunset-skyblue">Shrimp Farm.</span>
            </h1>
            <p className="mx-auto max-w-3xl text-xl font-medium leading-relaxed text-white/85 md:text-2xl">
              Partner with Cultivator to support next-generation smart aquaculture technology.
            </p>
          </div>
          <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:justify-center">
            <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-sunset-orange px-8 py-4 text-lg font-bold text-white shadow-[0_0_20px_rgba(255,145,16,0.6),0_4px_15px_rgba(0,0,0,0.5)] transition hover:-translate-y-1 hover:bg-sunset-orange/90">
              Learn More <ArrowRight className="h-5 w-5" />
            </a>
           
            <button onClick={() => navigate('/investor')} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-lg font-bold text-white transition hover:-translate-y-1 hover:bg-white/10">
              Become a Partner
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};


const Problem = () => (
  <section id="problem" className="relative px-4 py-20">
    <div className="mx-auto max-w-7xl relative z-10">
      <FadeIn>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl">Problems with aerators.</h2>
        </div>
      </FadeIn>

      <div className="grid gap-6 md:grid-cols-3">
        <FadeIn delay={100} className="h-full">
          <div className="relative h-full min-h-[380px] rounded-4xl overflow-hidden group animate-float [animation-delay:0s] shadow-2xl border border-white/10">
            <img src={problemSilentFailImg} alt="Failures go undetected" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-navy/70 transition-colors duration-500 group-hover:bg-navy/50 backdrop-blur-[2px]"></div>
            <div className="absolute inset-0 bg-linear-to-t from-navy/95 via-navy/40 to-transparent"></div>
            <div className="relative z-10 flex flex-col justify-end h-full p-8">
              <h3 className="mb-3 text-2xl font-bold text-white group-hover:text-rose-400 transition-colors">Failures go undetected</h3>
              <p className="text-white/80 leading-relaxed">Aerator Failures are often caught too late, resulting in immediate effect of the shrimps stress level and immune system.</p>
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={200} className="h-full">
          <div className="relative h-full min-h-[380px] rounded-4xl overflow-hidden group animate-float [animation-delay:1s] shadow-2xl border border-white/10">
            <img src={problemFragileOpsImg} alt="Electricity Cost Too High!" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-navy/70 transition-colors duration-500 group-hover:bg-navy/50 backdrop-blur-[2px]"></div>
            <div className="absolute inset-0 bg-linear-to-t from-navy/95 via-navy/40 to-transparent"></div>
            <div className="relative z-10 flex flex-col justify-end h-full p-8">
              <h3 className="mb-3 text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">Electricity Cost Too High!</h3>
              <p className="text-white/80 leading-relaxed">The second highest cost goes to the electricity cost, ranking second to feeding.</p>
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={300} className="h-full">
          <div className="relative h-full min-h-[380px] rounded-4xl overflow-hidden group animate-float [animation-delay:2s] shadow-2xl border border-white/10">
            <img src={problemMassiveLossImg} alt="Smaller Shrimp" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-navy/70 transition-colors duration-500 group-hover:bg-navy/50 backdrop-blur-[2px]"></div>
            <div className="absolute inset-0 bg-linear-to-t from-navy/95 via-navy/40 to-transparent"></div>
            <div className="relative z-10 flex flex-col justify-end h-full p-8">
              <h3 className="mb-3 text-2xl font-bold text-white group-hover:text-sunset-orange transition-colors">Smaller Shrimp</h3>
              <p className="text-white/80 leading-relaxed">Farmers are forced to harvest their shrimp earlier, meaning a smaller harvest; lower revenue.</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

const Solution = () => (
  <section id="solution" className="relative overflow-hidden px-4 py-20">
    <div className="absolute right-0 top-1/2 z-[-1] h-96 w-96 translate-x-1/2 rounded-full bg-sunset-skyblue/10 blur-[120px]"></div>
    <div className="mx-auto max-w-7xl">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <FadeIn className="space-y-8">
          <h2 className="text-3xl font-bold leading-tight text-white md:text-5xl">
            Plug, Play, and <span className="text-sunset-skyblue">Protect.</span>
          </h2>
          <p className="text-xl leading-relaxed text-lightgrey">We install directly onto your existing equipment.</p>

          <div className="space-y-5">
            <LiquidGlassCard>
              <h3 className="mb-3 text-xl font-bold text-white">The Hardware</h3>
              <p className="leading-relaxed text-white/80">Our waterproof sensors track electrical current (power loss/overload) and mechanical vibration (abnormal wear) 24/7.</p>
            </LiquidGlassCard>
            <LiquidGlassCard>
              <h3 className="mb-3 text-xl font-bold text-white">The AeroTrust App</h3>
              <p className="leading-relaxed text-white/80">Get instant fault notifications and real-time anomaly detection straight to your phone.</p>
            </LiquidGlassCard>
          </div>
        </FadeIn>

        <FadeIn delay={150} className="grid items-stretch gap-4 md:grid-cols-2">
          <div className="relative min-h-80 overflow-hidden rounded-4xl border border-white/10 bg-white/5 shadow-2xl md:min-h-115">
            <img src={hardwareImg} alt="Hardware mounted on aerator" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-linear-to-t from-navy/75 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-5">
              <p className="font-semibold text-white">Hardware on Aerator</p>
            </div>
          </div>
          <div className="relative min-h-80 overflow-hidden rounded-4xl border border-white/10 bg-white/5 shadow-2xl md:min-h-115">
            <img src={appUiImg} alt="AeroTrust mobile dashboard mockup" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-linear-to-t from-navy/75 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-5">
              <p className="font-semibold text-white">AeroTrust Dashboard</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

const Gallery = () => {
  const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8];
  
  return (
    <section className="relative overflow-hidden py-24">
      <div className="mb-12 text-center px-4 relative z-10">
        <h2 className="text-3xl font-bold text-white md:text-5xl">Real Operations, <span className="text-sunset-skyblue">Real Impact.</span></h2>
        <p className="mt-4 text-xl text-lightgrey">A glimpse into our pilot testing and field deployments across Asia.</p>
      </div>
      
      {/* Marquee container with fade edges */}
      <div className="relative flex w-full overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-linear-to-r from-navy to-transparent md:w-64"></div>
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-linear-to-l from-navy to-transparent md:w-64"></div>
        
        <div className="flex animate-marquee whitespace-nowrap hover:[animation-play-state:paused]">
          {[...images, ...images, ...images].map((src, index) => (
            <div key={index} className="mx-4 relative overflow-hidden rounded-3xl border border-white/10 w-72 h-52 sm:w-96 sm:h-64 shrink-0 shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
              <img src={src} alt={`Field operation ${index}`} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-110" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


const CTASection = () => {
  const navigate = useNavigate(); 

  return (
    <section id="contact" className="relative overflow-hidden border-t border-tealblue/30 px-4 py-20 md:py-24">
      <div className="absolute inset-0 z-0">
      <img src={shrimpPondImg} alt="Aquaculture pond background" className="h-full w-full object-cover opacity-70" />
      <div className="absolute inset-0 bg-linear-to-r from-navy/95 via-navy/75 to-navy/40"></div>
    </div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <FadeIn>
          <div className="rounded-4xl border border-white/10 bg-white/5 px-6 py-12 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl md:px-12 md:py-16">
            <h2 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white drop-shadow-lg md:text-6xl">Built for the Future of Aquaculture.</h2>
            <p className="mx-auto mb-10 max-w-3xl text-xl font-medium leading-relaxed text-white/90">
              Join the farmers in Taiwan and Indonesia who are already committing to our pilot program. Let's make your farm smarter, together.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a href="mailto:ddieong04@gmail.com" className="inline-flex items-center justify-center gap-2 rounded-full bg-sunset-orange px-8 py-4 text-lg font-bold text-white shadow-[0_0_20px_rgba(255,145,16,0.45)] transition hover:-translate-y-1 hover:bg-sunset-orange/90">
                Contact Us to Upgrade Your Farm <ArrowRight className="h-5 w-5" />
              </a>
              
              <button onClick={() => navigate('/investor')} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-lg font-bold text-white transition hover:-translate-y-1 hover:bg-white/10">
                Become Our Partner
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};



export default function Home() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen bg-navy text-white selection:bg-sunset-skyblue selection:text-navy relative">
      <CursorGlow />
      <Navbar />
      <Hero />       
      <Problem />
      <Solution />
      <Gallery />
      <CTASection /> 
      <Footer />
    </div>
  );
}
