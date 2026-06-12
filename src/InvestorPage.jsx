import React, { useEffect, useRef, useState } from 'react';
import { Target, Globe, PieChart, Award, ChevronLeft, MapPin, TrendingUp, Cpu, Users } from 'lucide-react';

const GlassCard = ({ children, className = "" }) => (
  <div className={`bg-darkblue/40 backdrop-blur-lg border border-tealblue/50 rounded-2xl p-6 shadow-xl ${className}`}>
    {children}
  </div>
);

const LiquidGlassCard = ({ children, className = "" }) => (
  <div className={`bg-white/10 backdrop-blur-3xl border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] rounded-3xl p-8 relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50 pointer-events-none"></div>
    <div className="relative z-10">{children}</div>
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

// --- Main Page Component ---
export default function InvestorPage({ onNavigateBack }) {
  return (
    <div className="min-h-screen bg-navy text-white selection:bg-sunset-skyblue selection:text-navy pb-20">
      
      {/* Navigation */}
      <nav className="w-full z-50 bg-navy/80 backdrop-blur-md border-b border-tealblue/30 sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <button 
            onClick={onNavigateBack}
            className="flex items-center text-lightgrey hover:text-white transition gap-2 font-medium bg-white/5 px-4 py-2 rounded-full border border-white/10 hover:bg-white/10"
          >
            <ChevronLeft className="w-5 h-5" /> Back to Product
          </button>
          <div className="font-bold text-lg tracking-tight text-sunset-skyblue border border-tealblue/50 px-4 py-1.5 rounded-full bg-tealblue/10">
            Partner Deck
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sunset-skyblue/10 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white mb-6">
              Partner with Cultivator. <br/>
              <span className="text-sunset-skyblue">Future of Shrimp Farming.</span>
            </h1>
            <p className="text-xl text-lightgrey leading-relaxed mb-8 max-w-2xl mx-auto">
              Backed by NTHU Garage, we are developing low-cost monitoring infrastructure for aquaculture systems. Join us in building a scalable, resilient supply chain.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Validation & Traction */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Award className="text-sunset-orange w-8 h-8" /> Validation & Traction
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            <FadeIn delay={100}>
              <GlassCard className="h-full border-l-4 border-l-sunset-orange">
                <h3 className="text-xl font-bold mb-2 text-white">Award-Winning</h3>
                <p className="text-lightgrey">We won the Hult Prize Nationals and are currently competing in the Startup World Cup Hsinchu.</p>
              </GlassCard>
            </FadeIn>
            <FadeIn delay={200}>
              <GlassCard className="h-full border-l-4 border-l-sunset-skyblue">
                <h3 className="text-xl font-bold mb-2 text-white">Pilot Ready</h3>
                <p className="text-lightgrey">We approached 5 farmers and secured 3 solid commitments for our initial pilot deployment.</p>
              </GlassCard>
            </FadeIn>
            <FadeIn delay={300}>
              <GlassCard className="h-full border-l-4 border-l-emerald-400">
                <h3 className="text-xl font-bold mb-2 text-white">Global Reach</h3>
                <p className="text-lightgrey">Our early adopters span the region, with 2 pilot farmers in Indonesia and 1 based in Taiwan.</p>
              </GlassCard>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-16 px-4 bg-white/5 border-y border-white/10 mt-12">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-10 text-center">Market Opportunity</h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8">
             <FadeIn delay={100}>
               <LiquidGlassCard>
                 <h3 className="text-xl font-bold mb-4 text-white/90 flex items-center gap-2"><Globe className="text-sunset-skyblue h-6 w-6" /> TAM</h3>
                 <div className="text-4xl font-extrabold text-white mb-3">~$800M</div>
                 <p className="text-white/80 font-medium text-sm">Total global hardware aquaculture market (excluding SaaS).</p>
               </LiquidGlassCard>
             </FadeIn>
             <FadeIn delay={200}>
               <LiquidGlassCard>
                 <h3 className="text-xl font-bold mb-4 text-white/90 flex items-center gap-2"><Target className="text-emerald-400 h-6 w-6" /> SAM</h3>
                 <div className="text-4xl font-extrabold text-white mb-3">~$300M</div>
                 <p className="text-white/80 font-medium text-sm">Asia's hardware aquaculture market.</p>
               </LiquidGlassCard>
             </FadeIn>
             <FadeIn delay={300}>
               <LiquidGlassCard>
                 <h3 className="text-xl font-bold mb-4 text-white/90 flex items-center gap-2"><PieChart className="text-sunset-orange h-6 w-6" /> SOM</h3>
                 <div className="text-4xl font-extrabold text-white mb-3">~$50M</div>
                 <p className="text-white/80 font-medium text-sm">Taiwan's pilot farms and 10% of the Southeast Asia market.</p>
               </LiquidGlassCard>
             </FadeIn>
          </div>
        </div>
      </section>

      {/* Roadmap & Growth */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-6">Path to Scale</h2>
            <p className="text-xl text-lightgrey mb-12 max-w-3xl mx-auto">
              Our vision is to reach 15,000 farmers across Asia by 2030, achieving Operational Break-Even at 5,000 farmers (1,260 ponds) by 2029.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* The Ask / Funding Allocation */}
      <section className="py-12 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Breakdown List */}
            <FadeIn>
              <h2 className="text-4xl font-bold mb-6 text-white leading-tight">
                Funding Request: <br/><span className="text-sunset-orange text-5xl">300,000 NTD</span>
              </h2>
              <p className="text-lg text-lightgrey mb-8">
                This capital supports the immediate transition from functional prototype to real-world pilot deployment in aquaculture environments.
              </p>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-tealblue/30 pb-4">
                  <div className="flex items-center gap-3">
                    <Cpu className="text-sunset-skyblue w-6 h-6" />
                    <span className="font-semibold text-white text-lg">Hardware & Sensors</span>
                  </div>
                  <span className="text-sunset-skyblue font-mono text-xl font-bold">130,000 NTD</span>
                </div>
                <div className="flex justify-between items-center border-b border-tealblue/30 pb-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="text-emerald-400 w-6 h-6" />
                    <span className="font-semibold text-white text-lg">Pilot Deployment</span>
                  </div>
                  <span className="text-emerald-400 font-mono text-xl font-bold">90,000 NTD</span>
                </div>
                <div className="flex justify-between items-center border-b border-tealblue/30 pb-4">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="text-purple-400 w-6 h-6" />
                    <span className="font-semibold text-white text-lg">Cloud & Software</span>
                  </div>
                  <span className="text-purple-400 font-mono text-xl font-bold">40,000 NTD</span>
                </div>
                <div className="flex justify-between items-center border-b border-tealblue/30 pb-4">
                  <div className="flex items-center gap-3">
                    <Users className="text-sunset-orange w-6 h-6" />
                    <span className="font-semibold text-white text-lg">Outreach & Partners</span>
                  </div>
                  <span className="text-sunset-orange font-mono text-xl font-bold">40,000 NTD</span>
                </div>
              </div>
            </FadeIn>

            {/* Sponsorship Tiers */}
            <FadeIn delay={200}>
              <div className="bg-navy/50 p-8 rounded-3xl border border-tealblue/50 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-sunset-skyblue/10 blur-[50px]"></div>
                <h3 className="text-3xl font-bold mb-8 text-white">Sponsorship Tiers</h3>
                
                <div className="mb-8 bg-black/20 p-6 rounded-2xl border border-white/5">
                  <h4 className="text-sunset-skyblue font-bold text-xl mb-1">Supporting Partner</h4>
                  <p className="text-white/60 font-mono mb-4 text-sm tracking-widest">10,000 - 30,000 NTD</p>
                  <ul className="text-lightgrey text-sm space-y-2 ml-4 list-disc marker:text-sunset-skyblue">
                    <li>Logo placement on website and selected pitch materials</li>
                    <li>Mentions in social media posts</li>
                    <li>Short impact report after pilot testing</li>
                  </ul>
                </div>

                <div className="bg-black/20 p-6 rounded-2xl border border-white/5 relative">
                  <div className="absolute top-0 left-0 w-1 h-full bg-emerald-400 rounded-l-2xl"></div>
                  <h4 className="text-emerald-400 font-bold text-xl mb-1">Technical Partner</h4>
                  <p className="text-white/60 font-mono mb-4 text-sm tracking-widest">30,000 - 70,000 NTD</p>
                  <ul className="text-lightgrey text-sm space-y-2 ml-4 list-disc marker:text-emerald-400">
                    <li>Prominent strategic branding on pitch deck and materials</li>
                    <li>Invitation to an exclusive prototype demo session</li>
                    <li>Detailed pilot analytics report</li>
                    <li>Priority discussion for future collaboration</li>
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

    </div>
  );
}