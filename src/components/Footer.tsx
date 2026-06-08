import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-navy text-white pt-16 pb-8 border-t border-navy-light">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-gradient-to-br from-gold to-gold-light text-navy flex items-center justify-center font-bold text-xl md:text-2xl shadow-lg shadow-gold/20">
              R
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-heading text-xl md:text-2xl font-bold text-white tracking-tight leading-none mb-1.5">RevTech</span>
              <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold leading-none">Template Company Profile</span>
            </div>
          </div>
          <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
            Menghadirkan solusi web premium untuk bisnis yang mendambakan citra profesional dan kredibilitas tinggi di era digital.
          </p>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-lg mb-4 text-gold">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/about" className="hover:text-white transition-colors">Tentang Kami</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">Layanan</Link></li>
            <li><Link href="/gallery" className="hover:text-white transition-colors">Fasilitas & Galeri</Link></li>
            <li><Link href="/clients" className="hover:text-white transition-colors">Klien & Mitra</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-lg mb-4 text-gold">Kontak</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Jl. Sudirman No. 123, Jakarta</li>
            <li>info@revtech.agency</li>
            <li>+62 812 3456 7890</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-navy-light text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} RevTech Agency. All rights reserved.
      </div>
    </footer>
  );
}
