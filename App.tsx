
import React, { useState, useEffect, useRef } from 'react';
import { HashRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { 
  Home, 
  Calendar, 
  Star, 
  MessageCircle, 
  User, 
  Search, 
  Bell, 
  Sun, 
  Moon, 
  ArrowRight,
  Sparkles,
  Heart,
  BookOpen,
  MapPin,
  Clock,
  ChevronRight,
  Send
} from 'lucide-react';
import { DEITIES, FEATURED_PUJAS, ZODIAC_SIGNS } from './constants';
import { getSpiritualGuidance, getDailyHoroscope } from './services/geminiService';
import { ChatMessage, Puja, Deity } from './types';

// --- Sub-components ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-orange-100 px-4 md:px-8 py-3 flex items-center justify-between">
    <div className="flex items-center gap-2">
      <div className="w-10 h-10 spiritual-gradient rounded-full flex items-center justify-center text-white font-serif text-xl shadow-lg">DP</div>
      <span className="text-xl font-bold spiritual-text-gradient hidden sm:block">DivinePath</span>
    </div>
    
    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
      <Link to="/" className="hover:text-orange-600 transition-colors">Home</Link>
      <Link to="/pujas" className="hover:text-orange-600 transition-colors">Online Puja</Link>
      <Link to="/astrology" className="hover:text-orange-600 transition-colors">Astrology</Link>
      <Link to="/panchang" className="hover:text-orange-600 transition-colors">Panchang</Link>
    </div>

    <div className="flex items-center gap-4">
      <button className="p-2 text-stone-500 hover:bg-orange-50 rounded-full transition-colors">
        <Search size={20} />
      </button>
      <button className="p-2 text-stone-500 hover:bg-orange-50 rounded-full transition-colors relative">
        <Bell size={20} />
        <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
      </button>
      <button className="hidden sm:flex items-center gap-2 bg-orange-600 text-white px-5 py-2 rounded-full font-medium shadow-md hover:bg-orange-700 transition-all">
        <User size={18} />
        Login
      </button>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="bg-stone-900 text-stone-400 py-12 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 spiritual-gradient rounded-full flex items-center justify-center text-white font-serif shadow-lg">DP</div>
          <span className="text-lg font-bold text-white">DivinePath</span>
        </div>
        <p className="text-sm leading-relaxed">
          Bringing spirituality to your fingertips. Join millions in their daily spiritual journey with online pujas, panchang, and AI guidance.
        </p>
      </div>
      <div>
        <h4 className="text-white font-semibold mb-4">Quick Links</h4>
        <ul className="space-y-2 text-sm">
          <li><Link to="/" className="hover:text-orange-400">Daily Darshan</Link></li>
          <li><Link to="/pujas" className="hover:text-orange-400">Book Puja</Link></li>
          <li><Link to="/astrology" className="hover:text-orange-400">Horoscope</Link></li>
          <li><Link to="/panchang" className="hover:text-orange-400">Panchang 2024</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-semibold mb-4">Our Services</h4>
        <ul className="space-y-2 text-sm">
          <li><a href="#" className="hover:text-orange-400">Chadhava</a></li>
          <li><a href="#" className="hover:text-orange-400">Annadaan</a></li>
          <li><a href="#" className="hover:text-orange-400">Temple Darshan</a></li>
          <li><a href="#" className="hover:text-orange-400">Astrology Consultation</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-semibold mb-4">Support</h4>
        <ul className="space-y-2 text-sm">
          <li><a href="#" className="hover:text-orange-400">Help Center</a></li>
          <li><a href="#" className="hover:text-orange-400">Terms & Conditions</a></li>
          <li><a href="#" className="hover:text-orange-400">Privacy Policy</a></li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-stone-800 text-center text-xs">
      &copy; 2024 DivinePath. All rights reserved. Built with devotion.
    </div>
  </footer>
);

// --- Pages ---

const HomeView = () => {
  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-orange-100/50 rounded-bl-[100px]"></div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-sm font-semibold">
              <Sparkles size={16} />
              <span>Experience the Divine Virtually</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif text-stone-900 leading-tight">
              Connect with your <span className="spiritual-text-gradient">Inner Spirit</span> and Traditional Roots
            </h1>
            <p className="text-lg text-stone-600 max-w-lg leading-relaxed">
              Experience the world's most trusted platform for online Puja, Astrology, and Spiritual Wisdom. Trusted by over 1 Million devotees.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/pujas" className="px-8 py-3 bg-orange-600 text-white rounded-full font-bold shadow-lg shadow-orange-200 hover:bg-orange-700 hover:-translate-y-1 transition-all flex items-center gap-2">
                Book a Puja <ArrowRight size={20} />
              </Link>
              <Link to="/ai-guide" className="px-8 py-3 bg-white border-2 border-orange-600 text-orange-600 rounded-full font-bold hover:bg-orange-50 transition-all">
                Talk to AI Guide
              </Link>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white animate-float">
              <img 
                src="https://media.istockphoto.com/id/1334880590/vector/om-hinduism-religious-background.jpg?s=612x612&w=0&k=20&c=2dfbFHTLxYvqHI94beYbVuFDgYcuUE9jHubfypQzyd0=" 
                alt="Divine Om Symbol" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl z-20 flex items-center gap-3">
              <div className="bg-green-100 p-2 rounded-full text-green-600">
                <Heart size={24} />
              </div>
              <div>
                <p className="text-xs text-stone-500 uppercase font-bold tracking-wider">Devotees Joined</p>
                <p className="text-lg font-bold text-stone-900">12,400+ Today</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-serif text-stone-900">Spiritual Services</h2>
              <p className="text-stone-500">Explore our digital spiritual ecosystem</p>
            </div>
            <button className="text-orange-600 font-semibold flex items-center gap-1 hover:gap-2 transition-all">
              View All <ChevronRight size={18} />
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: '🙏', name: 'Book Puja', color: 'bg-orange-50' },
              { icon: '💫', name: 'Astrology', color: 'bg-purple-50' },
              { icon: '📅', name: 'Panchang', color: 'bg-blue-50' },
              { icon: '🕉️', name: 'Darshan', color: 'bg-red-50' },
              { icon: '📚', name: 'Literature', color: 'bg-green-50' },
              { icon: '📿', name: 'Chant', color: 'bg-yellow-50' },
              { icon: '🚩', name: 'Chadhava', color: 'bg-amber-50' },
              { icon: '🤝', name: 'Community', color: 'bg-teal-50' }
            ].map((service, idx) => (
              <div key={idx} className={`${service.color} p-6 rounded-2xl flex flex-col items-center justify-center gap-3 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer group`}>
                <span className="text-4xl group-hover:scale-110 transition-transform">{service.icon}</span>
                <span className="font-medium text-stone-800">{service.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Pujas */}
      <section className="py-16 px-6 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-serif text-stone-900 mb-8">Upcoming Featured Pujas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURED_PUJAS.map((puja) => (
              <div key={puja.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-stone-100 flex flex-col">
                <div className="relative h-48">
                  <img src={puja.image} alt={puja.title} className="w-full h-full object-cover" />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-orange-600">
                    {puja.tag}
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-stone-800 mb-2">{puja.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-stone-500 mb-1">
                    <MapPin size={14} /> {puja.temple}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-stone-500 mb-4">
                    <Clock size={14} /> {puja.date}
                  </div>
                  <div className="mt-auto pt-4 border-t border-stone-50 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-stone-400 block uppercase font-bold tracking-wider">Starting at</span>
                      <span className="text-xl font-bold text-orange-600">₹{puja.price}</span>
                    </div>
                    <button className="bg-orange-600 text-white px-6 py-2 rounded-full font-bold hover:bg-orange-700 transition-all text-sm">
                      Participate
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deities Selection */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-serif text-stone-900 mb-2">Explore Deities</h2>
          <p className="text-stone-500 mb-10">Select your Ishta Devata for personalized content</p>
          <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide">
            {DEITIES.map((deity) => (
              <div key={deity.id} className="min-w-[200px] flex-shrink-0 group cursor-pointer">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-3">
                  <img src={deity.image} alt={deity.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-bold text-lg">{deity.name}</p>
                    <p className="text-xs opacity-80">{deity.mantra}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const PujaView = () => (
  <div className="pt-24 pb-12 px-6 max-w-7xl mx-auto">
    <h2 className="text-3xl font-serif text-stone-900 mb-2">Book Your Puja</h2>
    <p className="text-stone-500 mb-8">Participate in auspicious rituals at famous temples across India</p>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[...FEATURED_PUJAS, ...FEATURED_PUJAS].map((puja, idx) => (
        <div key={`${puja.id}-${idx}`} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-stone-100 flex flex-col">
          <div className="relative h-56">
            <img src={puja.image} alt={puja.title} className="w-full h-full object-cover" />
            <div className="absolute top-4 left-4 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
              LIMITED SLOTS
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-stone-800 mb-2">{puja.title}</h3>
            <p className="text-sm text-stone-500 mb-4">Dedicated to health, prosperity, and the well-being of your family. Live streaming available.</p>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-orange-600">₹{puja.price}</span>
              <button className="bg-orange-600 text-white px-6 py-2 rounded-lg font-bold">Book Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const AstrologyView = () => {
  const [selectedSign, setSelectedSign] = useState<string | null>(null);
  const [horoscope, setHoroscope] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchHoroscope = async (sign: string) => {
    setLoading(true);
    setSelectedSign(sign);
    const result = await getDailyHoroscope(sign);
    setHoroscope(result);
    setLoading(false);
  };

  return (
    <div className="pt-24 pb-12 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-serif text-stone-900 mb-4">Daily Horoscope</h2>
        <p className="text-stone-500 max-w-2xl mx-auto">
          Get precise astrological predictions based on Vedic Astrology for your zodiac sign. 
          Discover your lucky numbers and colors for today.
        </p>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 mb-12">
        {ZODIAC_SIGNS.map((item) => (
          <button 
            key={item.sign}
            onClick={() => fetchHoroscope(item.sign)}
            className={`p-4 rounded-2xl border-2 transition-all flex flex-col items-center gap-2 group ${
              selectedSign === item.sign 
                ? 'border-orange-500 bg-orange-50 shadow-inner' 
                : 'border-stone-100 bg-white hover:border-orange-200'
            }`}
          >
            <span className="text-3xl group-hover:scale-110 transition-transform">{item.icon}</span>
            <span className="text-sm font-semibold">{item.sign}</span>
          </button>
        ))}
      </div>

      {selectedSign && (
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 shadow-xl border border-orange-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100/50 rounded-full -mr-16 -mt-16"></div>
          
          <div className="flex items-center gap-4 mb-6 relative">
            <span className="text-5xl">{ZODIAC_SIGNS.find(s => s.sign === selectedSign)?.icon}</span>
            <div>
              <h3 className="text-2xl font-bold text-stone-900">{selectedSign} Horoscope</h3>
              <p className="text-stone-400 text-sm">Today's Prediction</p>
            </div>
          </div>

          {loading ? (
            <div className="flex flex-col items-center py-12 gap-4">
              <div className="w-8 h-8 border-4 border-orange-200 border-t-orange-600 rounded-full animate-spin"></div>
              <p className="text-stone-500 animate-pulse">Consulting the alignment of planets...</p>
            </div>
          ) : (
            <div className="prose prose-orange max-w-none text-stone-700 leading-relaxed whitespace-pre-line">
              {horoscope}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const AIGuideView = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Namaste! I am your DivinePath AI Spiritual Guide. How can I help you in your spiritual journey today?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    const aiResponse = await getSpiritualGuidance(userMsg);
    setMessages(prev => [...prev, { role: 'model', text: aiResponse }]);
    setLoading(false);
  };

  return (
    <div className="pt-24 pb-12 px-6 max-w-4xl mx-auto flex flex-col h-[calc(100vh-100px)]">
      <div className="bg-orange-600 text-white p-6 rounded-t-3xl shadow-lg flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
            <Sparkles className="text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold">Divine Guide</h2>
            <p className="text-xs opacity-80 flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span> Always Online
            </p>
          </div>
        </div>
        <button className="text-white/60 hover:text-white transition-colors">
          <Star size={24} />
        </button>
      </div>

      <div 
        ref={scrollRef}
        className="flex-grow bg-white p-6 overflow-y-auto space-y-6 shadow-xl border-x border-orange-50 scrollbar-thin scrollbar-thumb-orange-200"
      >
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-4 rounded-2xl ${
              m.role === 'user' 
                ? 'bg-orange-600 text-white rounded-tr-none' 
                : 'bg-orange-50 text-stone-800 rounded-tl-none'
            }`}>
              {m.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-stone-50 p-4 rounded-2xl rounded-tl-none flex gap-1">
              <div className="w-2 h-2 bg-orange-300 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-orange-300 rounded-full animate-bounce [animation-delay:0.2s]"></div>
              <div className="w-2 h-2 bg-orange-300 rounded-full animate-bounce [animation-delay:0.4s]"></div>
            </div>
          </div>
        )}
      </div>

      <div className="bg-white p-4 rounded-b-3xl shadow-2xl border border-orange-50 flex gap-2">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Ask about Gita, rituals, or mental peace..."
          className="flex-grow bg-stone-100 px-6 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500/20"
        />
        <button 
          onClick={handleSend}
          disabled={loading || !input.trim()}
          className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-orange-700 transition-all disabled:opacity-50"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};

const MobileNav = () => (
  <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-t border-orange-100 flex justify-around py-3 px-2 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
    <Link to="/" className="flex flex-col items-center gap-1 text-orange-600">
      <Home size={22} />
      <span className="text-[10px] font-bold">Home</span>
    </Link>
    <Link to="/pujas" className="flex flex-col items-center gap-1 text-stone-400 hover:text-orange-600">
      <Calendar size={22} />
      <span className="text-[10px] font-bold">Pujas</span>
    </Link>
    <Link to="/ai-guide" className="flex flex-col items-center gap-1 text-stone-400 hover:text-orange-600 relative -top-6">
      <div className="bg-orange-600 text-white p-3 rounded-full shadow-lg border-4 border-white">
        <Sparkles size={24} />
      </div>
      <span className="text-[10px] font-bold text-orange-600 mt-1">Guide</span>
    </Link>
    <Link to="/astrology" className="flex flex-col items-center gap-1 text-stone-400 hover:text-orange-600">
      <Star size={22} />
      <span className="text-[10px] font-bold">Stars</span>
    </Link>
    <button className="flex flex-col items-center gap-1 text-stone-400 hover:text-orange-600">
      <User size={22} />
      <span className="text-[10px] font-bold">Profile</span>
    </button>
  </div>
);

// --- Main App Component ---

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/pujas" element={<PujaView />} />
            <Route path="/astrology" element={<AstrologyView />} />
            <Route path="/ai-guide" element={<AIGuideView />} />
            <Route path="/panchang" element={<div className="pt-32 text-center h-screen">Panchang View Coming Soon</div>} />
          </Routes>
        </main>

        <Footer />
        <MobileNav />
      </div>
    </Router>
  );
}
