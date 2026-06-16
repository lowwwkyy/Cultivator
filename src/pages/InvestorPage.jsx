import { useEffect, useState } from 'react';
import { ChevronRight, Mail, Rocket, Cpu, Activity, Bell, BarChart3, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { LiquidGlassCard, FadeIn, CursorGlow, Footer } from '../components/SharedUI';

import hardwareImg from '../assets/product_img.jpeg';
import appUiImg from '../assets/software_img.png';
// import teamFrans from '../assets/jason/DSC05281.JPG';
// import teamDelon from '../assets/jason/DSC05310.JPG';
// import teamJason from '../assets/jason/DSC05327.JPG';
// import teamJaiJai from '../assets/jason/DSC05255.JPG';
import shrimpPondImg from '../assets/shrimp_pond.jpg';
import proposalPdf from '../assets/inspo/Cultivator Project Proposal V5.pdf';
import heroVideo from '../assets/thailand_shrimp_farm_video.mp4';
import logoImg from '../assets/cultivator_logo.jpeg';
import { ContactSection } from '../components/ContactSection';

import sdg1Img from '../assets/sdg_1.png';
import sdg2Img from '../assets/sdg_2.png';
import sdg3Img from '../assets/sdg_3.png';

// import field1 from '../assets/asia/S__238305289_0.jpg';
// import field2 from '../assets/jason/DSC05264.JPG';
// import field3 from '../assets/asia/S__238305296_0.jpg';
// import field4 from '../assets/jason/DSC05282.JPG';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { label: 'Home', action: () => navigate('/') },
    { label: 'Solution', href: '#solution' },
    { label: 'Market', href: '#market' },
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
              item.action ? (
                <button 
                  key={item.label} 
                  onClick={item.action} 
                  className="text-base font-medium text-white/80 transition hover:text-white cursor-pointer"
                >
                  {item.label}
                </button>
              ) : (
                <a 
                  key={item.label} 
                  href={item.href} 
                  className="text-base font-medium text-white/80 transition hover:text-white"
                >
                  {item.label}
                </a>
              )
            ))}
          </div>

          <div className="md:hidden flex w-full items-center justify-between px-2">
            <span className="flex items-center gap-2 text-lg font-bold tracking-wide text-white">
              <img src={logoImg} alt="Cultivator Logo" className="h-7 w-7 rounded-full object-cover" />
              Cultivator
            </span>
            <button onClick={() => setIsOpen((value) => !value)} className="ml-4 text-white transition hover:text-sunset-orange">
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>

        <div className={`md:hidden flex flex-col items-center space-y-5 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'mt-8 max-h-112.5 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
          {navItems.map((item) => (
            item.action ? (
              <button 
                key={item.label} 
                onClick={() => { item.action(); setIsOpen(false); }} 
                className="text-lg font-medium text-white/80 transition hover:text-white cursor-pointer"
              >
                {item.label}
              </button>
            ) : (
              <a 
                key={item.label} 
                href={item.href} 
                onClick={() => setIsOpen(false)} 
                className="text-lg font-medium text-white/80 transition hover:text-white"
              >
                {item.label}
              </a>
            )
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
      <video autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-cover opacity-[67%]">
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-navy/10 via-navy/40 to-navy"></div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(85,212,255,0.16),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(255,145,16,0.12),transparent_30%)]"></div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-7rem)] w-full max-w-5xl flex-col items-center justify-center text-center">
        <FadeIn className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl" style={{ textShadow: '0 4px 30px rgba(0,0,0,0.6)' }}>
              Support the Next Generation <br className="hidden md:block" />
              <span className="text-sunset-orange">of Smart Aquaculture Technology.</span>
            </h1>
            <p className="mx-auto max-w-3xl text-xl font-medium leading-relaxed text-white/85 md:text-2xl">
              Cultivator is a student-led innovation team representing Taiwan's startup ecosystem, building scalable IoT infrastructure for a massive global market.
            </p>
          </div>
          <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:justify-center">
            <a href="#sponsorship" className="inline-flex items-center justify-center gap-2 rounded-full bg-sunset-orange px-8 py-4 text-lg font-bold text-white shadow-[0_0_20px_rgba(255,145,16,0.6),0_4px_15px_rgba(0,0,0,0.5)] transition hover:-translate-y-1 hover:bg-sunset-orange/90">
              Contact Us <ChevronRight className="h-5 w-5" />
            </a>
            <button onClick={() => navigate('/')} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-lg font-bold text-white transition hover:-translate-y-1 hover:bg-white/10">
              Return Home
            </button>
          </div>
        </FadeIn>


      </div>
    </section>
  );
};

const AeroTrustSolution = () => {
  const [activeTab, setActiveTab] = useState('hardware');

  return (
    <section id="solution" className="px-4 py-20 relative">
      <div className="mx-auto max-w-7xl relative z-10">
        <FadeIn>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl">The AeroTrust Solution.</h2>
            <p className="text-xl text-lightgrey">Real-time aerator health monitoring for aquaculture systems. Installed directly on existing paddlewheel aerators.</p>
          </div>
        </FadeIn>

        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white/5 rounded-full p-1 border border-white/10 backdrop-blur-md">
            <button 
              onClick={() => setActiveTab('hardware')}
              className={`px-8 py-3 rounded-full text-lg font-bold transition-all ${activeTab === 'hardware' ? 'bg-sunset-orange text-navy shadow-[0_0_15px_rgba(85,212,255,0.4)]' : 'text-white/70 hover:text-white'}`}
            >
              Hardware
            </button>
            <button 
              onClick={() => setActiveTab('software')}
              className={`px-8 py-3 rounded-full text-lg font-bold transition-all ${activeTab === 'software' ? 'bg-sunset-orange text-navy shadow-[0_0_15px_rgba(85,212,255,0.4)]' : 'text-white/70 hover:text-white'}`}
            >
              Software
            </button>
          </div>
        </div>

        <div className="relative min-h-[400px]">
          {/* Hardware Tab */}
          <div className={`absolute inset-0 transition-all duration-500 ease-in-out ${activeTab === 'hardware' ? 'opacity-100 translate-y-0 z-10 relative' : 'opacity-0 translate-y-8 pointer-events-none absolute'}`}>
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div className="space-y-6">
                <LiquidGlassCard className="border-l-4 border-l-sunset-orange">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-sunset-orange/20 rounded-2xl text-sunset-orange mt-1">
                      <Cpu className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Electrical Current</h3>
                      <p className="text-lightgrey leading-relaxed">Instantly detect power loss, overloads, or motor interruptions before they escalate into complete failures.</p>
                    </div>
                  </div>
                </LiquidGlassCard>
                <LiquidGlassCard className="border-l-4 border-l-amber-400">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-amber-400/20 rounded-2xl text-amber-400 mt-1">
                      <Activity className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Mechanical Vibration</h3>
                      <p className="text-lightgrey leading-relaxed">Continuously monitor for abnormal movement, excessive wear, or impending mechanical failure.</p>
                    </div>
                  </div>
                </LiquidGlassCard>
              </div>
              <div className="relative rounded-4xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/3]">
                <img src={hardwareImg} alt="Hardware on Aerator" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-linear-to-t from-navy/90 via-navy/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <p className="text-xl font-bold text-white">Plug & Play Installation</p>
                  <p className="text-lightgrey mt-2">Retrofits easily onto any standard paddlewheel.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Software Tab */}
          <div className={`transition-all duration-500 ease-in-out ${activeTab === 'software' ? 'opacity-100 translate-y-0 z-10 relative' : 'opacity-0 translate-y-8 pointer-events-none absolute'}`}>
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div className="relative rounded-4xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/3]">
                <img src={appUiImg} alt="AeroTrust Dashboard" className="absolute inset-0 w-full h-full object-cover object-top" />
                <div className="absolute inset-0 bg-linear-to-t from-navy/90 via-navy/10 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <p className="text-xl font-bold text-white">AeroTrust Dashboard</p>
                  <p className="text-lightgrey mt-2">Clear, actionable data in the palm of your hand.</p>
                </div>
              </div>
              <div className="space-y-6">
                <LiquidGlassCard>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-2 bg-emerald-400/20 rounded-xl text-emerald-400"><Activity className="w-5 h-5" /></div>
                    <h3 className="text-xl font-bold text-white">Real-time Anomaly Detection</h3>
                  </div>
                  <p className="text-lightgrey">AI-driven analysis flags unusual operational patterns seconds after they occur.</p>
                </LiquidGlassCard>
                <LiquidGlassCard>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-2 bg-rose-400/20 rounded-xl text-rose-400"><Bell className="w-5 h-5" /></div>
                    <h3 className="text-xl font-bold text-white">Instant Fault Notifications</h3>
                  </div>
                  <p className="text-lightgrey">Receive critical alerts via SMS or push notification immediately when intervention is needed.</p>
                </LiquidGlassCard>
                <LiquidGlassCard>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-2 bg-purple-400/20 rounded-xl text-purple-400"><BarChart3 className="w-5 h-5" /></div>
                    <h3 className="text-xl font-bold text-white">Historical Analytics</h3>
                  </div>
                  <p className="text-lightgrey">Track equipment lifespan and performance degradation over time to optimize maintenance schedules.</p>
                </LiquidGlassCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Market = () => {
  const stats = [
    { label: 'TAM', value: '~$800 Million USD', text: 'Total global hardware aquaculture market excluding SaaS.' },
    { label: 'SAM', value: '~$300 Million USD', text: "Asia's hardware aquaculture market." },
    { label: 'SOM', value: '~$50 Million USD', text: 'Taiwan\'s pilot farms and 10% of the Southeast Asia market.' },
  ];

  return (
    <section id="market" className="px-4 py-20 relative overflow-hidden border-t border-white/5">
      <div className="absolute right-0 top-1/2 z-0 h-[500px] w-[500px] translate-x-1/3 -translate-y-1/2 rounded-full bg-sunset-orange/5 blur-[120px]"></div>
      <div className="mx-auto max-w-7xl relative z-10">
        <FadeIn>
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl">A Scalable Solution.</h2>
            <p className="text-xl text-lightgrey">The Taiwan shrimp market reached ~$507M USD in 2024. With ~12,000 farms using 4-8 aerators per pond, the opportunity for hardware optimization is massive.</p>
          </div>
        </FadeIn>

        <div className="grid gap-6 lg:grid-cols-3">
          {stats.map((stat, index) => (
            <FadeIn key={stat.label} delay={index * 120}>
              <LiquidGlassCard className="h-full">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-bold tracking-[0.24em] text-white/75">
                  {stat.label}
                </div>
                <div className="mb-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl">{stat.value}</div>
                <p className="text-lg leading-relaxed text-white/80">{stat.text}</p>
              </LiquidGlassCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

// const Competitions = () => (
//   <section id="competitions" className="px-4 py-20 bg-navy/60 border-y border-tealblue/20 relative">
//     <div className="absolute inset-0 pointer-events-none opacity-5"></div>
//     <div className="mx-auto max-w-7xl relative z-10">
//       <FadeIn>
//         <div className="mx-auto mb-16 max-w-3xl text-center">
//           <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl">Recognized Excellence.</h2>
//           <p className="text-xl text-lightgrey">Our project is judged not only as a technical idea, but as a business that can create profound social and economic impact.</p>
//         </div>
//       </FadeIn>

//       <div className="grid gap-8 md:grid-cols-2">
//         <FadeIn delay={100}>
//           <div className="group relative rounded-4xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur-xl overflow-hidden hover:bg-white/10 transition-colors duration-500 h-full">
//             <div className="absolute -right-10 -top-10 bg-rose-500/20 blur-3xl w-40 h-40 rounded-full transition-transform group-hover:scale-150"></div>
//             <Trophy className="w-12 h-12 text-rose-400 mb-6 relative z-10" />
//             <h3 className="text-3xl font-bold text-white mb-4 relative z-10">Hult Prize Nationals Winner</h3>
//             <p className="text-lg text-lightgrey leading-relaxed mb-6 relative z-10">
//               We won the national stage of the world's premier social entrepreneurship competition and are now entering the prestigious Digital Incubator.
//             </p>
//             <div className="inline-flex rounded-full bg-rose-500/20 px-4 py-2 text-sm font-bold text-rose-300 relative z-10">
//               Entering Digital Incubator
//             </div>
//           </div>
//         </FadeIn>

//         <FadeIn delay={200}>
//           <div className="group relative rounded-4xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur-xl overflow-hidden hover:bg-white/10 transition-colors duration-500 h-full">
//             <div className="absolute -right-10 -bottom-10 bg-sunset-orange/20 blur-3xl w-40 h-40 rounded-full transition-transform group-hover:scale-150"></div>
//             <Medal className="w-12 h-12 text-sunset-orange mb-6 relative z-10" />
//             <h3 className="text-3xl font-bold text-white mb-4 relative z-10">Startup World Cup Hsinchu</h3>
//             <p className="text-lg text-lightgrey leading-relaxed mb-6 relative z-10">
//               Competing against research teams and early-stage startups, giving us exposure to top-tier investors, mentors, and industry partners.
//             </p>
//             <div className="inline-flex rounded-full bg-sunset-orange/20 px-4 py-2 text-sm font-bold text-sunset-orange relative z-10">
//               Supported by NTHU Garage
//             </div>
//           </div>
//         </FadeIn>
//       </div>
//     </div>
//   </section>
// );

// const Traction = () => (
//   <section id="traction" className="px-4 py-20">
//     <div className="mx-auto max-w-7xl">
//       <FadeIn>
//         <div className="mx-auto mb-16 max-w-3xl text-center">
//           <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl">Proven Momentum.</h2>
//           <p className="text-xl text-lightgrey">We are actively validating our product with real farmers.</p>
//         </div>
//       </FadeIn>

//       <div className="grid gap-8 lg:grid-cols-[1fr_1fr] items-stretch">
//         <FadeIn delay={100}>
//           <GlassCard className="h-full border-l-4 border-l-sunset-orange flex flex-col justify-center">
//             <div className="text-5xl font-extrabold text-white mb-2">5 <span className="text-2xl font-medium text-lightgrey">farmers approached</span></div>
//             <div className="text-5xl font-extrabold text-sunset-orange mb-8">3 <span className="text-2xl font-medium text-lightgrey">committed to pilot</span></div>
            
//             <p className="text-lg text-lightgrey leading-relaxed mb-6">
//               2 partners in Indonesia are ready to adopt as soon as our MVP is finalized. Another key partner in Taiwan is working closely with us for immediate localized testing.
//             </p>
//             <p className="text-lg text-lightgrey leading-relaxed">
//               We're also in close contact with National Taiwan Ocean University to rigorously validate our hardware assumptions.
//             </p>
//           </GlassCard>
//         </FadeIn>

//         <FadeIn delay={200}>
//           <div className="grid h-full grid-cols-2 gap-4">
//             {[field1, field2, field3, field4].map((image, index) => (
//               <div key={index} className={`relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl ${index === 0 ? 'col-span-2 h-48' : 'h-40'}`}>
//                 <img src={image} alt="Traction visual" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-110" />
//                 <div className="absolute inset-0 bg-linear-to-t from-navy/65 via-transparent to-transparent"></div>
//               </div>
//             ))}
//           </div>
//         </FadeIn>
//       </div>
//     </div>
//   </section>
// );

const Roadmap = () => {
  const [activeTab, setActiveTab] = useState('3months');

  const months = [
    { year: 'Month 1 (May)', title: 'Prototype Finalization', text: 'Finalize device, build pilot units, waterproof case, confirm farms. Output: pilot-ready devices.' },
    { year: 'Month 2 (June)', title: 'Field Deployment', text: 'Install devices, collect data, test alerts, gather feedback. Output: real-world validation.' },
    { year: 'Month 3 (July)', title: 'Validation & Hult', text: 'Analyze results, improve product, prepare for scaling. Output: pilot report + next-step strategy.' },
  ];

  const years = [
    { year: '2026', title: 'Final MVP', text: 'Final MVP and Pilot farms (50 Farmers).' },
    { year: '2027', title: 'Precision Prototype', text: 'Precision Prototype (50 Farms).' },
    { year: '2028', title: 'B2B2F Launch', text: '200 Farmers. Expansion to South East Asia.' },
    { year: '2029', title: 'Operational BEP', text: '5,000 Farmers, Operational BEP, 1,260 Ponds.' },
    { year: '2030', title: 'Asia Expansion', text: '15,000 Farmers Across Asia.' },
  ];

  return (
    <section id="roadmap" className="relative overflow-hidden border-y border-tealblue/20 bg-navy/60 px-4 py-20">
      <div className="absolute inset-0 z-0">
        <img src={shrimpPondImg} alt="Background" className="h-full w-full object-cover opacity-[0.03] mix-blend-luminosity" />
      </div>
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(85,212,255,0.08),transparent_45%)]"></div>
      <div className="relative z-10 mx-auto max-w-7xl">
        <FadeIn>
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl">The Path to 15,000 Farms.</h2>
            <p className="text-xl text-lightgrey">Real farm testing. Product validation. Stronger path to Hult Global Stage.</p>
          </div>
        </FadeIn>

        <div className="flex justify-center mb-12 relative z-10">
          <div className="inline-flex bg-white/5 rounded-full p-1 border border-white/10 backdrop-blur-md">
            <button 
              onClick={() => setActiveTab('3months')}
              className={`px-8 py-3 rounded-full text-lg font-bold transition-all ${activeTab === '3months' ? 'bg-sunset-orange text-navy shadow-[0_0_15px_rgba(85,212,255,0.4)]' : 'text-white/70 hover:text-white'}`}
            >
              Next 3 Months
            </button>
            <button 
              onClick={() => setActiveTab('5years')}
              className={`px-8 py-3 rounded-full text-lg font-bold transition-all ${activeTab === '5years' ? 'bg-sunset-orange text-navy shadow-[0_0_15px_rgba(85,212,255,0.4)]' : 'text-white/70 hover:text-white'}`}
            >
              Next 5 Years
            </button>
          </div>
        </div>

        <div className="relative min-h-[300px]">
          <div className={`absolute inset-0 transition-all duration-500 ease-in-out ${activeTab === '3months' ? 'opacity-100 translate-y-0 z-10 relative' : 'opacity-0 translate-y-8 pointer-events-none absolute'}`}>
            <div className="grid gap-6 lg:grid-cols-3">
              {months.map((step) => (
                <div key={step.year} className="relative h-full rounded-4xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-xl hover:-translate-y-2 transition-transform duration-300">
                  <div className="mb-4 inline-flex rounded-full bg-sunset-orange/15 px-4 py-1 text-sm font-bold tracking-[0.1em] text-sunset-orange">
                    {step.year}
                  </div>
                  <h3 className="mb-3 text-2xl font-bold text-white">{step.title}</h3>
                  <p className="text-lightgrey leading-relaxed">{step.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={`transition-all duration-500 ease-in-out ${activeTab === '5years' ? 'opacity-100 translate-y-0 z-10 relative' : 'opacity-0 translate-y-8 pointer-events-none absolute'}`}>
            <div className="grid gap-4 lg:grid-cols-5">
              {years.map((step) => (
                <div key={step.year} className="relative h-full rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl shadow-xl hover:-translate-y-2 transition-transform duration-300">
                  <div className="mb-4 inline-flex rounded-full bg-sunset-orange/15 px-3 py-1 text-xs font-bold tracking-[0.15em] text-sunset-orange">
                    {step.year}
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-white">{step.title}</h3>
                  <p className="text-lightgrey text-sm leading-relaxed">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SDGImpact = () => (
  <section id="sdg" className="px-4 py-20 bg-navy/40 relative overflow-hidden border-t border-white/5">
    <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_bottom,rgba(85,212,255,0.05),transparent_50%)]"></div>
    <div className="mx-auto max-w-7xl relative z-10">
      <FadeIn>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl">Sustainable Impact.</h2>
          <p className="text-xl text-lightgrey">Cultivator is deeply committed to supporting the United Nations Sustainable Development Goals.</p>
        </div>
      </FadeIn>
      <div className="grid gap-8 md:grid-cols-3">
        {[sdg1Img, sdg2Img, sdg3Img].map((img, index) => (
          <FadeIn key={index} delay={index * 150}>
            <div className="group relative overflow-hidden rounded-4xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-xl transition hover:bg-white/10 text-center flex flex-col items-center justify-center min-h-64">
              <img src={img} alt={`SDG Goal ${index + 1}`} className="h-40 w-auto object-contain transition-transform duration-500 group-hover:scale-105 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]" />
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);



export default function InvestorPage() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen bg-navy text-white selection:bg-sunset-orange selection:text-navy relative">
      <CursorGlow />
      <Navbar />
      <Hero />
      <AeroTrustSolution />
      <Market />
      {/* <Traction /> */}
      <Roadmap />
      {/* <SponsorshipTiers /> */}
      {/* <Team /> */}
      <SDGImpact />
      <ContactSection />
      <Footer />
    </div>
  );
}
