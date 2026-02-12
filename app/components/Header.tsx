import Link from "next/link";
import Image from "next/image";
import { Cpu } from "lucide-react";
import { px } from "framer-motion";

export default function Header() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center">
        <div className="flex-1 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="relative w-[175px] h-10 flex items-center justify-center overflow-hidden">
              <Link href="/">
                <Image
                  src="/logo.webp"
                  alt="Gadgets IA"
                  width={175}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </Link>
              {/* <Cpu className="w-5 h-5 text-indigo-400 absolute right-1" /> */}
            </div>
          </div>

          <div className="hidden md:flex space-x-6 items-center">
            <Link
              href="#problem"
              className="text-sm text-slate-300 hover:text-white"
            >
              EL PROBLEMA
            </Link>
            <Link
              href="#pillars"
              className="text-sm text-slate-300 hover:text-white"
            >
              SOLUCIONES
            </Link>
            <Link
              href="#wizard"
              className="text-sm text-indigo-400 hover:text-indigo-300"
            >
              ARMAR KIT
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
