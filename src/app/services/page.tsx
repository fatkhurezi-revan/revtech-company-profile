import { RevealOnScroll } from "@/components/RevealOnScroll";
import { Factory, Building2, Briefcase, Ruler, Zap, ShieldAlert } from "lucide-react";
import { MagneticButton } from "@/components/MagneticButton";
import { TiltCard } from "@/components/TiltCard";

export default function Services() {
  const services = [
    {
      title: "Manufaktur Presisi Tinggi",
      icon: Factory,
      desc: "Lini produksi modern kami dilengkapi dengan teknologi robotik terkini, menjamin akurasi tingkat tinggi untuk komponen-komponen kritis dalam industri penerbangan dan otomotif."
    },
    {
      title: "Manajemen Konstruksi Skala Besar",
      icon: Building2,
      desc: "Dari gedung pencakar langit hingga infrastruktur publik, kami mengelola seluruh siklus hidup proyek dengan pengawasan ketat terhadap anggaran, jadwal, dan keselamatan."
    },
    {
      title: "Konsultasi Hukum Korporat",
      icon: Briefcase,
      desc: "Tim legal kami menangani penyusunan kontrak kompleks, penyelesaian sengketa, dan kepatuhan regulasi, melindungi aset dan kepentingan bisnis Anda di setiap langkah."
    },
    {
      title: "Desain dan Perencanaan Arsitektur",
      icon: Ruler,
      desc: "Memadukan fungsionalitas dan estetika melalui desain mutakhir yang memenuhi standar green building internasional dan efisiensi ruang optimal."
    },
    {
      title: "Instalasi Energi Terbarukan",
      icon: Zap,
      desc: "Membantu transisi energi perusahaan Anda melalui solusi panel surya skala industri dan manajemen efisiensi daya terintegrasi."
    },
    {
      title: "Audit Keamanan Industri",
      icon: ShieldAlert,
      desc: "Pemeriksaan menyeluruh terhadap fasilitas dan prosedur operasional untuk memastikan kepatuhan terhadap standar HSE (Health, Safety, and Environment)."
    }
  ];

  return (
    <main className="flex flex-col min-h-screen">
      {/* PAGE HEADER */}
      <header className="bg-navy text-white py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <RevealOnScroll>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">Layanan <span className="text-gold">Unggulan</span></h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Keahlian lintas sektoral untuk memastikan pertumbuhan eksponensial bisnis Anda.
            </p>
          </RevealOnScroll>
        </div>
      </header>

      {/* SERVICES GRID */}
      <section className="py-16 md:py-24 bg-gray-50" aria-label="Daftar Layanan">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <RevealOnScroll key={i} delay={i * 0.1}>
                <TiltCard className="h-full relative group cursor-pointer">
                  <article className="bg-white p-10 border border-gray-100 rounded-2xl group-hover:border-gold group-hover:shadow-xl transition-all duration-300 ease-in-out h-full flex flex-col relative z-10" style={{ transform: "translateZ(30px)" }}>
                    <div className="w-16 h-16 bg-navy/5 text-navy group-hover:bg-gold group-hover:text-white transition-colors duration-300 flex items-center justify-center mb-8 rounded-xl transform group-hover:-translate-y-1">
                      <service.icon className="w-8 h-8" aria-hidden="true" />
                    </div>
                    <h2 className="font-heading text-2xl font-bold text-navy mb-4">{service.title}</h2>
                    <p className="text-slate-600 flex-grow leading-relaxed mb-6">
                      {service.desc}
                    </p>
                    <div className="mt-auto">
                      <span className="text-gold font-semibold uppercase tracking-wider text-sm flex items-center group-hover:translate-x-1 transition-transform duration-300">
                        Pelajari Detail &rarr;
                      </span>
                    </div>
                  </article>
                </TiltCard>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 md:py-24 bg-navy text-white text-center" aria-labelledby="cta-services-heading">
        <div className="container mx-auto px-4">
          <RevealOnScroll>
            <h2 id="cta-services-heading" className="font-heading text-4xl font-bold mb-6">Butuh Solusi Khusus?</h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
              Kami menyadari setiap bisnis memiliki tantangan unik. Hubungi tim ahli kami untuk mendiskusikan rancangan solusi yang dibuat khusus untuk operasional Anda.
            </p>
            <MagneticButton href="https://wa.me/1234567890" variant="secondary" className="px-10 py-4 text-lg">
              Konsultasi Gratis
            </MagneticButton>
          </RevealOnScroll>
        </div>
      </section>
    </main>
  );
}
