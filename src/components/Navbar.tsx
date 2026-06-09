import Link from "next/link";
import { Button } from "./Button";
import { siteConfig } from "@/data/config";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-navy-light/10 bg-white/80 backdrop-blur-md" role="banner">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group" aria-label="Beranda RevTech">
          <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-gradient-to-br from-navy to-navy-light text-white flex items-center justify-center font-bold text-xl md:text-2xl shadow-lg shadow-navy/20 group-hover:shadow-gold/30 transition-all duration-300">
            R
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-heading text-xl md:text-2xl font-bold text-navy tracking-tight leading-none mb-1.5">{siteConfig.name}</span>
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold leading-none">{siteConfig.subtitle}</span>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600" aria-label="Navigasi Utama">
          <Link href="/" className="hover:text-gold hover:-translate-y-0.5 transition-all duration-300 ease-in-out">Beranda</Link>
          <Link href="/about" className="hover:text-gold hover:-translate-y-0.5 transition-all duration-300 ease-in-out">Tentang Kami</Link>
          <Link href="/contact" className="hover:text-gold hover:-translate-y-0.5 transition-all duration-300 ease-in-out">Kontak</Link>
        </nav>
        <div className="hidden md:block">
          <Button href={`https://wa.me/${siteConfig.contact.whatsapp}`} variant="primary">Hubungi Kami</Button>
        </div>
      </div>
    </header>
  );
}
