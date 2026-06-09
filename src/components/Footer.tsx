import Link from "next/link";
import { siteConfig } from "@/data/config";

export function Footer() {
  return (
    <footer className="bg-navy text-white pt-16 pb-8 border-t border-navy-light" role="contentinfo">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-gradient-to-br from-gold to-gold-light text-navy flex items-center justify-center font-bold text-xl md:text-2xl shadow-lg shadow-gold/20">
              R
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-heading text-xl md:text-2xl font-bold text-white tracking-tight leading-none mb-1.5">{siteConfig.name}</span>
              <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold leading-none">{siteConfig.subtitle}</span>
            </div>
          </div>
          <p className="text-sm text-slate-300 max-w-sm leading-relaxed">
            {siteConfig.description}
          </p>
        </div>
        <div>
          <h2 className="font-heading font-semibold text-lg mb-4 text-gold">Navigasi</h2>
          <nav aria-label="Navigasi Footer">
            <ul className="space-y-2 text-sm text-slate-300">
              <li><Link href="/" className="inline-block hover:text-white hover:translate-x-1 transition-all duration-300 ease-in-out">Beranda</Link></li>
              <li><Link href="/about" className="inline-block hover:text-white hover:translate-x-1 transition-all duration-300 ease-in-out">Tentang Kami</Link></li>
              <li><Link href="/contact" className="inline-block hover:text-white hover:translate-x-1 transition-all duration-300 ease-in-out">Kontak</Link></li>
            </ul>
          </nav>
        </div>
        <div>
          <h2 className="font-heading font-semibold text-lg mb-4 text-gold">Kontak</h2>
          <address className="not-italic space-y-2 text-sm text-slate-300">
            <p>{siteConfig.contact.address}</p>
            <p><a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">{siteConfig.contact.email}</a></p>
            <p><a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-white transition-colors">{siteConfig.contact.phone}</a></p>
          </address>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-navy-light text-center text-sm text-slate-400">
        &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
