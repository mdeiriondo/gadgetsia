"use client";

import React, { useState, useEffect, useRef } from 'react';
import { 
  Shield, 
  Zap, 
  Lightbulb, 
  ChevronRight, 
  Check, 
  Smartphone, 
  Wind, 
  Lock, 
  ArrowRight,
  MessageCircle,
  ShoppingBag,
  Menu,
  X,
  Play,
  Cpu,
  Scan,
  Wifi,
  Instagram,
  CreditCard,
  MapPin,
  Truck
} from 'lucide-react';

// --- CONFIGURACIÓN ---
const WHATSAPP_NUMBER = "5493426115800"; 

// --- UTILS & HOOKS ---

const useReveal = (): [React.RefObject<HTMLDivElement>, boolean] => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return [ref, isVisible];
};

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
}

const Reveal: React.FC<RevealProps> = ({ children, delay = 0 }) => {
  const [ref, isVisible] = useReveal();
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const TechCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
      
      const target = e.target;
      const isClickable = 
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('button') || 
        target.closest('a') ||
        target.getAttribute('role') === 'button';
      setIsHovering(!!isClickable);
    };

    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed pointer-events-none z-[9999] hidden md:block"
      style={{ 
        left: position.x, 
        top: position.y,
        transform: 'translate(-50%, -50%)'
      }}
    >
      <div className={`rounded-full border border-cyan-400/50 transition-all duration-300 ease-out flex items-center justify-center ${isHovering ? 'w-14 h-14 bg-cyan-500/10 scale-110' : 'w-8 h-8 bg-transparent'}`}>
        <div className={`w-full h-px bg-cyan-400/20 absolute transition-opacity ${isHovering ? 'opacity-100' : 'opacity-0'}`} />
        <div className={`h-full w-px bg-cyan-400/20 absolute transition-opacity ${isHovering ? 'opacity-100' : 'opacity-0'}`} />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_12px_rgba(34,211,238,1)]" />
    </div>
  );
};

// --- DATA & CONTENT ---

const PRODUCTS = {
  security: {
    id: 'sec_01',
    name: 'Ojo de Halcón IA',
    brand: 'Tapo C210',
    tagline: 'Tu casa vigilada, sin falsas alarmas.',
    description: 'Cámara 360° con detección humana inteligente. Ideal para proteger a Hipólito y Carmela cuando están solos. No te avisa si pasa una mosca, te avisa si hay una persona.',
    price: 45000,
    features: ['Detección de Personas (IA)', 'Visión Nocturna 10m', 'Alarma de Luz y Sonido', 'Grabación Local SD'],
  },
  climate: {
    id: 'clim_01',
    name: 'Control Climático Neural',
    brand: 'Broadlink RM4',
    tagline: 'Tu aire acondicionado, ahora tiene cerebro.',
    description: 'Convierte tu Split viejo en uno inteligente. Prendelo 10 minutos antes de llegar a casa. Programá rutinas para que se corte si refresca de madrugada.',
    price: 28000,
    features: ['Control desde el Celular', 'Compatible con Alexa/Google', 'Sensores de Temperatura (Opcional)', 'Ahorro de Energía'],
  },
  lighting: {
    id: 'light_01',
    name: 'Ambientes Dinámicos',
    brand: 'Wiz Color',
    tagline: 'Pintá tu casa con luz.',
    description: '16 millones de colores. Modo "Cine", modo "Lectura" y modo "Vacaciones" que simula que estás en casa prendiendo luces aleatoriamente.',
    price: 18500,
    features: ['Sin Hub (WiFi Directo)', 'Ritmos Circadianos', 'Control por Voz', 'Efectos Dinámicos'],
  }
};

const PILLARS = [
  {
    id: 'security',
    icon: <Scan className="w-8 h-8" />,
    title: 'Seguridad Inteligente',
    desc: 'Cámaras con IA que distinguen mascotas de intrusos reales.',
    color: 'bg-blue-500',
    borderColor: 'border-blue-500/30',
    glowColor: 'shadow-blue-500/20',
    textColor: 'text-blue-400'
  },
  {
    id: 'climate',
    icon: <Wind className="w-8 h-8" />,
    title: 'Clima & Ahorro',
    desc: 'Algoritmos que apagan el aire cuando no hay nadie.',
    color: 'bg-orange-500',
    borderColor: 'border-orange-500/30',
    glowColor: 'shadow-orange-500/20',
    textColor: 'text-orange-400'
  },
  {
    id: 'lighting',
    icon: <Zap className="w-8 h-8" />,
    title: 'Iluminación Viva',
    desc: 'Luces que se adaptan a tu biorritmo automáticamente.',
    color: 'bg-purple-500',
    borderColor: 'border-purple-500/30',
    glowColor: 'shadow-purple-500/20',
    textColor: 'text-purple-400'
  }
];

// --- COMPONENTS ---

const BrandLogo = () => (
  <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
    <div className="relative w-10 h-10 flex items-center justify-center bg-slate-900 rounded-xl border border-slate-700 overflow-hidden group-hover:border-indigo-500 transition-colors shadow-[0_0_15px_rgba(99,102,241,0.1)]">
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-transparent"></div>
        <Cpu className="w-6 h-6 text-indigo-400" />
    </div>
    <span className="text-xl font-bold tracking-tight text-white font-mono">
      Gadgets<span className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">IA</span>
    </span>
  </div>
);

const Header = ({ onOpenCart }) => (
  <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50 transition-all duration-300">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-20">
        <BrandLogo />
        
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#problem" className="text-xs font-bold text-slate-400 hover:text-white transition tracking-widest hover:scale-105 transform">EL PROBLEMA</a>
          <a href="#pillars" className="text-xs font-bold text-slate-400 hover:text-white transition tracking-widest hover:scale-105 transform">SOLUCIONES</a>
          <div className="h-4 w-px bg-slate-800"></div>
          <a href="#wizard" className="text-xs font-bold text-indigo-400 hover:text-indigo-300 transition tracking-widest flex items-center gap-2 hover:scale-105 transform">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
            ARMAR KIT
          </a>
        </div>
        
        <div className="flex items-center gap-4">
           <button 
            className="p-2 text-slate-400 hover:text-white transition relative hover:bg-slate-800 rounded-lg"
            onClick={onOpenCart}
            aria-label="Ver carrito"
           >
            <ShoppingBag className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  </nav>
);

const Hero = ({ onStart }) => (
  <div className="relative min-h-screen flex items-center justify-center overflow-hidden" id="problem">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center pt-20">
      <Reveal>
        <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-950/30 text-indigo-300 mb-8 backdrop-blur-sm shadow-[0_0_15px_rgba(99,102,241,0.2)]">
          <Wifi className="w-3 h-3 mr-2 text-indigo-400" />
          <span className="text-xs font-bold uppercase tracking-wider">Tecnología Smart Home Santa Fe</span>
        </div>
      </Reveal>
      
      <Reveal delay={200}>
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-white tracking-tighter mb-8 leading-tight">
          GADGETS<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">IA</span>
        </h1>
      </Reveal>

      <Reveal delay={400}>
        <h2 className="text-xl sm:text-2xl text-slate-400 font-light mb-10 max-w-3xl mx-auto leading-relaxed">
          Tu casa no necesita reformas. Necesita <strong className="text-white font-medium">inteligencia artificial</strong>.
          <br/>Seleccionamos, configuramos y te explicamos la tecnología que simplifica tu vida.
        </h2>
      </Reveal>

      <Reveal delay={600}>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            onClick={onStart}
            className="group px-8 py-4 bg-white text-slate-950 rounded-lg font-bold text-lg hover:bg-indigo-50 transition-all flex items-center justify-center gap-3 relative overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(99,102,241,0.4)]"
          >
            <span className="relative z-10 flex items-center gap-2">DIAGNOSTICAR CASA <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-200 to-cyan-200 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
        </div>
      </Reveal>
    </div>
    
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] z-0 pointer-events-none"></div>
    <div className="absolute inset-0 bg-slate-950 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,transparent_70%,black_100%)] z-0 pointer-events-none"></div>
  </div>
);

interface PillarCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  color: string;
  borderColor: string;
  glowColor: string;
  textColor: string;
  features: string[];
  price: number;
}

const PillarCard: React.FC<PillarCardProps> = ({ 
  icon, 
  title, 
  desc, 
  color, 
  borderColor, 
  glowColor, 
  textColor, 
  features, 
  price 
}) => (
  <div className={`group relative bg-slate-900/40 border border-slate-800 hover:${borderColor} rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl hover:${glowColor} hover:-translate-y-2 overflow-hidden backdrop-blur-sm h-full`}>
    <div className={`absolute top-0 right-0 p-40 ${color} opacity-0 group-hover:opacity-5 blur-[90px] rounded-full transition duration-700`}></div>
    
    <div className="relative z-10">
      <div className={`w-16 h-16 ${color} bg-opacity-10 rounded-2xl border border-white/5 flex items-center justify-center mb-6 ${textColor} group-hover:scale-110 transition-transform duration-500 shadow-[0_0_15px_rgba(0,0,0,0.5)]`}>
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-white mb-3 font-mono tracking-tight">{title}</h3>
      <p className="text-slate-400 mb-8 leading-relaxed text-sm h-12">{desc}</p>
      
      <div className="space-y-4 mb-8">
        {features.map((f, i) => (
          <div key={i} className="flex items-center text-slate-300 text-sm group/item">
            <div className={`w-1.5 h-1.5 rounded-full ${color} mr-3 group-hover/item:shadow-[0_0_8px_currentColor] transition-all`}></div>
            {f}
          </div>
        ))}
      </div>

      <div className="flex items-end justify-between border-t border-slate-800 pt-6">
        <div>
          <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Inversión desde</span>
          <p className="text-xl font-bold text-white font-mono">${price.toLocaleString()}</p>
        </div>
        <button 
          onClick={() => document.getElementById('wizard').scrollIntoView({ behavior: 'smooth' })}
          className="text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg transition border border-slate-700 hover:border-slate-600 uppercase tracking-wide"
        >
          Armar
        </button>
      </div>
    </div>
  </div>
);

interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  tagline?: string;
  description?: string;
  features?: string[];
}

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose, product }) => {
  const [step, setStep] = useState('summary'); 
  const [includeInstallation, setIncludeInstallation] = useState(false);
  
  const installationPrice = 15000;
  const total = product ? product.price + (includeInstallation ? installationPrice : 0) : 0;
  
  useEffect(() => {
    if (isOpen) setStep('summary');
  }, [isOpen]);

  if (!isOpen || !product) return null;

  const handlePayment = () => {
    setStep('processing');
    setTimeout(() => {
      setStep('success');
    }, 2500);
  };

  const orderId = "GID-" + Math.floor(10000 + Math.random() * 90000);

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-md transition-opacity" onClick={onClose}></div>

      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden animate-fade-in-up">
        
        {step === 'summary' && (
          <div className="p-8">
            <div className="flex justify-between items-start mb-8">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <CreditCard className="w-6 h-6 text-indigo-500" />
                Finalizar Pedido
              </h2>
              <button onClick={onClose} className="text-slate-500 hover:text-white transition">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="bg-slate-950/50 rounded-2xl p-5 flex gap-5 mb-8 border border-slate-800">
              <div className="w-20 h-20 bg-slate-800 rounded-xl flex items-center justify-center shrink-0 border border-slate-700">
                <Cpu className="w-10 h-10 text-indigo-400" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg">{product.name}</h3>
                <p className="text-xs text-slate-500 mb-2 uppercase tracking-widest">{product.brand}</p>
                <p className="text-indigo-400 font-mono font-bold text-xl">${product.price.toLocaleString()}</p>
              </div>
            </div>

            <div className="mb-8 space-y-4">
              <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest">Opciones Adicionales</h4>
              <label className={`flex items-center justify-between p-5 rounded-2xl border cursor-pointer transition-all duration-300 ${includeInstallation ? 'bg-indigo-500/10 border-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.1)]' : 'bg-slate-800/20 border-slate-800 hover:border-slate-700'}`}>
                <div className="flex items-center gap-4">
                  <div className={`w-6 h-6 rounded-lg border flex items-center justify-center transition-colors ${includeInstallation ? 'bg-indigo-500 border-indigo-500' : 'border-slate-600'}`}>
                    {includeInstallation && <Check className="w-4 h-4 text-white" />}
                  </div>
                  <div>
                    <span className="block text-white font-bold">Instalación Premium</span>
                    <span className="block text-xs text-slate-500">Configuración completa por expertos</span>
                  </div>
                </div>
                <span className="text-white font-mono font-bold">+${installationPrice.toLocaleString()}</span>
                <input type="checkbox" className="hidden" checked={includeInstallation} onChange={() => setIncludeInstallation(!includeInstallation)} />
              </label>
            </div>

            <div className="flex justify-between items-end border-t border-slate-800 pt-8 mb-8">
              <span className="text-slate-500 font-bold uppercase text-xs tracking-widest">Total de Inversión</span>
              <div className="text-right">
                <span className="text-4xl font-black text-white tracking-tighter">${total.toLocaleString()}</span>
              </div>
            </div>

            <button 
              onClick={handlePayment}
              className="w-full bg-[#009EE3] hover:bg-[#008ED0] text-white py-5 px-6 rounded-2xl font-black text-lg flex items-center justify-center gap-3 transition-all hover:scale-[1.02] shadow-xl shadow-blue-500/20"
            >
              PAGAR CON MERCADO PAGO
            </button>
          </div>
        )}

        {step === 'processing' && (
          <div className="p-20 text-center flex flex-col items-center justify-center min-h-[500px]">
             <div className="relative w-24 h-24 mb-10">
               <div className="absolute inset-0 border-4 border-indigo-500/20 rounded-full"></div>
               <div className="absolute inset-0 border-t-4 border-indigo-500 rounded-full animate-spin"></div>
             </div>
             <h3 className="text-2xl font-bold text-white mb-3 font-mono tracking-tighter uppercase">Validando Transacción</h3>
             <p className="text-slate-500 text-sm max-w-xs">No cierres esta ventana mientras conectamos con la red neural de pagos.</p>
          </div>
        )}

        {step === 'success' && (
          <div className="p-10 text-center bg-slate-900 min-h-[500px] flex flex-col justify-center">
             <div className="w-24 h-24 bg-green-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(34,197,94,0.3)] animate-bounce-short transform rotate-12">
               <Check className="w-12 h-12 text-white" />
             </div>
             <h3 className="text-3xl font-black text-white mb-3 tracking-tighter">¡PAGO EXITOSO!</h3>
             <p className="text-slate-400 text-sm mb-10 leading-relaxed">Tu pedido <span className="text-indigo-400 font-mono font-bold">{orderId}</span> ha sido procesado. Los gadgets ya están en camino a tu hogar.</p>
             
             <div className="space-y-4 mb-10">
               <button 
                  onClick={() => {
                     const msg = `Hola GadgetsIA! Confirmación de Pago: Pedido *${orderId}* (${product.name}). Por favor, coordinar la entrega en Santa Fe.`;
                     window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
                  }}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-2xl font-black flex items-center justify-center gap-3 transition-all hover:scale-[1.02]"
               >
                  <MessageCircle className="w-6 h-6" /> COORDINAR LOGÍSTICA
               </button>
               <button onClick={onClose} className="w-full bg-slate-800 hover:bg-slate-700 text-slate-300 py-4 px-6 rounded-2xl font-bold transition">
                 VOLVER AL SITIO
               </button>
             </div>
          </div>
        )}
      </div>
    </div>
  );
};

interface WizardProps {
  onBuy: (product: Product) => void;
}

const Wizard: React.FC<WizardProps> = ({ onBuy }) => {
  const [step, setStep] = useState<number>(1);
  const [selections, setSelections] = useState<{ focus: string | null; room: string | null }>({ 
    focus: null, 
    room: null 
  });
  const [loading, setLoading] = useState<boolean>(false);

  const handleNext = (key, value) => {
    setSelections({ ...selections, [key]: value });
    if (step < 3) {
      setStep(step + 1);
    } else {
      setLoading(true);
      setTimeout(() => setLoading(false), 2000); 
      setStep(4);
    }
  };

  const recommended = selections.focus === 'security' ? PRODUCTS.security : selections.focus === 'climate' ? PRODUCTS.climate : PRODUCTS.lighting;

  return (
    <div id="wizard" className="py-32 bg-slate-950 relative border-t border-slate-900 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 font-mono tracking-widest uppercase">
              Configurador de <span className="text-indigo-500">Espacios</span>
            </h2>
            <div className="flex items-center justify-center space-x-3">
              {[1, 2, 3].map(i => (
                <div key={i} className={`h-1.5 transition-all duration-500 rounded-full ${step >= i ? 'w-16 bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.6)]' : 'w-4 bg-slate-800'}`} />
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="bg-slate-900/40 border border-slate-800 rounded-[2.5rem] p-8 sm:p-14 shadow-2xl relative overflow-hidden min-h-[650px] flex flex-col justify-center backdrop-blur-md">
            
            {step === 1 && (
              <div className="animate-fade-in-up relative z-10">
                <h3 className="text-2xl font-bold text-white mb-12 text-center tracking-tight">¿Qué aspecto de tu vida querés potenciar hoy?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {[
                    { id: 'security', icon: Scan, title: 'Seguridad', desc: 'Detección Neural', color: 'text-blue-400', border: 'hover:border-blue-500' },
                    { id: 'climate', icon: Wind, title: 'Confort', desc: 'Clima Inteligente', color: 'text-orange-400', border: 'hover:border-orange-500' },
                    { id: 'lighting', icon: Zap, title: 'Ambiente', desc: 'Inmersión Visual', color: 'text-purple-400', border: 'hover:border-purple-500' }
                  ].map((opt) => (
                    <button 
                      key={opt.id}
                      onClick={() => handleNext('focus', opt.id)} 
                      className={`p-10 bg-slate-800/40 hover:bg-slate-800 border border-slate-700/50 ${opt.border} rounded-3xl transition-all group text-center hover:-translate-y-2`}
                    >
                      <div className={`w-20 h-20 mx-auto bg-slate-900 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition duration-500 ${opt.color} border border-slate-700 shadow-xl`}>
                        <opt.icon className="w-10 h-10" />
                      </div>
                      <h4 className="font-bold text-white text-xl mb-3 tracking-tight">{opt.title}</h4>
                      <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">{opt.desc}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="animate-fade-in-up relative z-10">
                <button onClick={() => setStep(1)} className="text-slate-500 hover:text-white mb-10 flex items-center text-xs font-black tracking-[0.2em] transition hover:-translate-x-1">
                  <ChevronRight className="w-4 h-4 rotate-180 mr-2" /> VOLVER
                </button>
                <h3 className="text-2xl font-bold text-white mb-12 text-center tracking-tight">¿Dónde va a suceder la magia?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
                  {['Living Principal', 'Dormitorio', 'Galería / Patio', 'Oficina / MDI Zone'].map((room) => (
                    <button 
                      key={room}
                      onClick={() => handleNext('room', room)} 
                      className="group p-8 bg-slate-800/20 hover:bg-indigo-900/10 border border-slate-800 hover:border-indigo-500/50 rounded-2xl text-white font-bold transition-all text-left flex items-center justify-between"
                    >
                      {room}
                      <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center group-hover:border-indigo-400 transition">
                        <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-indigo-400 transform group-hover:translate-x-1 transition" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="animate-fade-in-up relative z-10 text-center">
                 <h3 className="text-2xl font-bold text-white mb-12 tracking-tight">Experiencia de Implementación</h3>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
                  <button onClick={() => handleNext('techLevel', 'expert')} className="p-10 bg-slate-800/20 hover:bg-slate-800 border border-slate-800 hover:border-slate-500 rounded-3xl text-left transition-all group">
                    <Smartphone className="w-10 h-10 text-slate-600 group-hover:text-white mb-6 transition" />
                    <span className="font-bold text-white text-xl block mb-2">Autogestión Tech</span>
                    <p className="text-slate-500 text-sm leading-relaxed">Configurá el hardware vos mismo con nuestra guía paso a paso.</p>
                  </button>
                  <button onClick={() => handleNext('techLevel', 'beginner')} className="p-10 bg-slate-800/20 hover:bg-slate-800 border border-indigo-500/20 hover:border-indigo-500 rounded-3xl text-left relative transition-all group shadow-xl">
                    <div className="absolute top-0 right-0 bg-indigo-500 text-white text-[10px] px-4 py-1.5 rounded-bl-xl font-black uppercase tracking-widest">Premium</div>
                    <Check className="w-10 h-10 text-indigo-500 mb-6" />
                    <span className="font-bold text-white text-xl block mb-2">Llave en Mano</span>
                    <p className="text-slate-500 text-sm leading-relaxed">Nosotros lo instalamos y te entregamos el sistema funcionando.</p>
                  </button>
                 </div>
              </div>
            )}

            {step === 4 && (
              <div className="animate-fade-in-up relative z-10">
                {loading ? (
                  <div className="flex flex-col items-center justify-center h-full min-h-[450px]">
                    <div className="w-20 h-20 border-t-2 border-indigo-500 rounded-full animate-spin"></div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                      <div>
                        <div className="inline-block px-3 py-1 bg-green-500/10 border border-green-500/20 text-green-400 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                          Configuración Recomendada
                        </div>
                        <h2 className="text-4xl font-black text-white mb-4 tracking-tighter">{recommended.name}</h2>
                        <p className="text-xl text-indigo-400 font-medium font-mono">{recommended.tagline}</p>
                      </div>
                      <p className="text-slate-400 leading-relaxed">{recommended.description}</p>
                      <div className="flex flex-col sm:flex-row gap-5 pt-8">
                        <button 
                          onClick={() => onBuy(recommended)} 
                          className="flex-1 bg-white hover:bg-indigo-50 text-slate-950 py-5 px-6 rounded-2xl font-black text-base sm:text-lg transition shadow-2xl whitespace-nowrap"
                        >
                          COMPRAR KIT
                        </button>
                        <button 
                          onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Hola GadgetsIA, quiero asesoramiento sobre el kit ${recommended.name}`, '_blank')} 
                          className="flex-1 bg-transparent border-2 border-slate-800 hover:border-green-500 text-white hover:text-green-400 py-5 px-6 rounded-2xl font-black text-base sm:text-lg transition whitespace-nowrap"
                        >
                          ASESORARME
                        </button>
                      </div>
                    </div>
                    <div className="relative aspect-square bg-slate-800 rounded-[3rem] border border-slate-700 overflow-hidden flex items-center justify-center shadow-inner group">
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                      <div className={`w-32 h-32 rounded-full blur-[100px] absolute opacity-40 animate-pulse ${selections.focus === 'security' ? 'bg-blue-500' : 'bg-orange-500'}`}></div>
                      <div className="relative z-10 scale-150 group-hover:scale-[1.6] transition-transform duration-700">
                        {selections.focus === 'security' ? <Shield className="w-20 h-20 text-blue-400/80" /> : selections.focus === 'climate' ? <Wind className="w-20 h-20 text-orange-400/80" /> : <Lightbulb className="w-20 h-20 text-purple-400/80" />}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </div>
  );
};

// --- MAIN APP ---

export default function App() {
  const [showWizard, setShowWizard] = useState<boolean>(false);
  const [checkoutProduct, setCheckoutProduct] = useState<Product | null>(null);

  useEffect(() => {
    document.title = "GadgetsIA | Smart Tech Santa Fe";
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-cyan-500/30 md:cursor-none overflow-x-hidden">
      <TechCursor />
      <CheckoutModal isOpen={!!checkoutProduct} product={checkoutProduct} onClose={() => setCheckoutProduct(null)} />
      <Header onOpenCart={() => alert('Próximamente: Historial de pedidos GadgetsIA.')} />
      
      <main>
        <Hero onStart={() => document.getElementById('wizard').scrollIntoView({ behavior: 'smooth' })} />

        <section id="pillars" className="py-40 bg-slate-950 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <Reveal>
              <div className="text-center mb-24">
                <h2 className="text-4xl sm:text-6xl font-black text-white mb-8 tracking-tighter">
                  DOMÓTICA <span className="text-cyan-400 underline decoration-indigo-500/50 underline-offset-8">REAL</span>
                </h2>
                <p className="text-slate-500 max-w-2xl mx-auto text-xl font-light">
                  Hardware seleccionado bajo los estándares de <strong className="text-white">GadgetsIA</strong>. Rendimiento superior, IA local y privacidad absoluta.
                </p>
              </div>
            </Reveal>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {PILLARS.map((p, idx) => (
                <Reveal key={p.id} delay={idx * 150}>
                  <PillarCard {...p} features={PRODUCTS[p.id].features} price={PRODUCTS[p.id].price} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <Wizard onBuy={(p) => setCheckoutProduct(p)} />

        <section className="py-32 border-t border-slate-900 bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <Reveal>
              <h2 className="text-xs font-black text-slate-600 uppercase tracking-[0.4em] mb-20">Confianza Tecnológica Regional</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                {[
                  { icon: "🇦🇷", title: "ADN Litoral", text: "Soporte técnico real en Santa Fe y alrededores. Hablamos tu mismo idioma." },
                  { icon: "⚡", title: "Deploy Rápido", text: "Instalación express en 24hs. Sin cables a la vista, sin romper paredes." },
                  { icon: "🔒", title: "Privacy Safe", text: "Tus datos son tuyos. Configuramos todo para que la IA trabaje localmente." }
                ].map((item, i) => (
                  <div key={i}>
                    <div className="text-5xl mb-8 grayscale hover:grayscale-0 transition duration-500">{item.icon}</div>
                    <h3 className="text-white font-black mb-4 text-xl tracking-tight">{item.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <footer className="bg-slate-950 py-24 border-t border-slate-900">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex flex-col items-center md:items-start gap-6">
              <BrandLogo />
              <div className="text-center md:text-left">
                 <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">© 2026 GadgetsIA Global</p>
                 <p className="text-slate-500 text-xs mt-3 flex items-center gap-2">
                   Powered by <a href="https://mdi.com.ar" target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:text-cyan-400 transition-colors font-black">MDI SOLUTIONS</a>
                 </p>
              </div>
            </div>
            
            <div className="flex gap-10">
               <button onClick={() => window.open('https://instagram.com', '_blank')} className="text-slate-400 hover:text-white transition-all transform hover:scale-110">
                 <Instagram className="w-6 h-6" />
               </button>
               <button onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank')} className="text-slate-400 hover:text-green-400 transition-all transform hover:scale-110">
                 <MessageCircle className="w-6 h-6" />
               </button>
            </div>
          </div>
        </footer>
      </main>

      <style>{`
        html { scroll-behavior: smooth; }
        @keyframes scan {
          0%, 100% { transform: translateY(0); opacity: 0; }
          50% { transform: translateY(100%); opacity: 1; }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        @keyframes bounce-short {
          0%, 100% { transform: translateY(0) rotate(12deg); }
          50% { transform: translateY(-10px) rotate(12deg); }
        }
        .animate-bounce-short { animation: bounce-short 1s ease-in-out infinite; }
      `}</style>
    </div>
  );
}