import Image from "next/image";
import { Button } from "@/components/Button";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { ArrowRight, Building2, ShieldCheck, Factory, Briefcase } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO SECTION */}
      <section className="relative bg-navy text-white py-32 md:py-48 overflow-hidden">
        {/* Subtle background pattern/overlay could go here */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <RevealOnScroll>
            <div className="max-w-4xl">
              <h1 className="font-heading text-5xl md:text-7xl font-bold leading-tight mb-6">
                Membangun Fondasi <span className="text-gold">Masa Depan</span> Bisnis Anda.
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed">
                Kami adalah mitra strategis untuk perusahaan manufaktur dan kontraktor skala besar, menghadirkan solusi inovatif dan efisiensi tanpa kompromi.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/services" variant="primary" className="bg-gold text-navy hover:bg-gold-light">
                  Eksplorasi Layanan <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button href="/about" variant="outline" className="border-gray-500 text-gray-300 hover:bg-white hover:text-navy hover:border-white">
                  Pelajari Lebih Lanjut
                </Button>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ABOUT SNIPPET SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <RevealOnScroll>
              <div className="relative aspect-square md:aspect-[4/3] w-full overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop" 
                  alt="Corporate Building" 
                  fill
                  className="object-cover"
                />
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={0.2}>
              <div>
                <span className="text-gold font-bold tracking-wider uppercase text-sm mb-4 block">Tentang Perusahaan</span>
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy mb-6">Integritas dalam Setiap Langkah.</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Dengan pengalaman lebih dari dua dekade, kami telah membuktikan diri sebagai pemimpin industri dalam menyediakan layanan konstruksi dan manufaktur berkualitas tinggi. Dedikasi kami terhadap standar tertinggi memastikan setiap proyek selesai dengan sempurna.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Standar kualitas internasional (ISO 9001)",
                    "Tim profesional dan berpengalaman",
                    "Teknologi manufaktur mutakhir",
                    "Komitmen pada keberlanjutan lingkungan"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center text-navy font-medium">
                      <ShieldCheck className="w-5 h-5 text-gold mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button href="/about" variant="outline">Profil Lengkap</Button>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* CORE SERVICES SECTION */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <RevealOnScroll>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-gold font-bold tracking-wider uppercase text-sm mb-4 block">Layanan Utama</span>
              <h2 className="font-heading text-4xl font-bold text-navy mb-6">Solusi Komprehensif untuk Industri Anda</h2>
              <p className="text-gray-600">Pendekatan terpadu kami memastikan bahwa setiap tantangan operasional Anda tertangani dengan ahli.</p>
            </div>
          </RevealOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Manufaktur Presisi", icon: Factory, desc: "Fasilitas produksi canggih dengan standar presisi tinggi untuk komponen industri." },
              { title: "Manajemen Proyek", icon: Building2, desc: "Pengawasan menyeluruh dari tahap perencanaan hingga serah terima proyek konstruksi." },
              { title: "Konsultasi Hukum", icon: Briefcase, desc: "Layanan penasihat hukum korporat dan penyelesaian sengketa konstruksi." }
            ].map((service, i) => (
              <RevealOnScroll key={i} delay={i * 0.1}>
                <div className="bg-white p-8 border border-gray-100 hover:border-gold transition-colors duration-300 group h-full">
                  <div className="w-14 h-14 bg-navy/5 text-navy group-hover:bg-gold group-hover:text-white transition-colors duration-300 flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-navy mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-20 bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "25+", label: "Tahun Pengalaman" },
              { value: "150+", label: "Proyek Selesai" },
              { value: "500+", label: "Karyawan Ahli" },
              { value: "50+", label: "Penghargaan" }
            ].map((stat, i) => (
              <RevealOnScroll key={i} delay={i * 0.1}>
                <div>
                  <div className="font-heading text-5xl font-bold text-gold mb-2">{stat.value}</div>
                  <div className="text-gray-300 font-medium uppercase tracking-wider text-sm">{stat.label}</div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <RevealOnScroll>
            <div className="bg-gray-50 border border-gray-200 p-12 md:p-20 text-center max-w-5xl mx-auto">
              <h2 className="font-heading text-4xl font-bold text-navy mb-6">Siap Membangun Visi Anda?</h2>
              <p className="text-gray-600 mb-10 max-w-2xl mx-auto text-lg">
                Konsultasikan kebutuhan proyek Anda dengan tim ahli kami. Kami siap memberikan solusi terbaik yang disesuaikan dengan skala dan tujuan bisnis Anda.
              </p>
              <Button href="https://wa.me/1234567890" variant="primary" className="text-lg px-8 py-4">
                Hubungi Kami Sekarang
              </Button>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
