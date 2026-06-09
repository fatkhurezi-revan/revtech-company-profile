import Image from "next/image";
import { Button } from "@/components/Button";
import { siteConfig } from "@/data/config";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* HERO SECTION */}
      <section className="relative bg-navy text-white py-32 md:py-48 flex items-center justify-center text-center px-4">
        <div className="absolute inset-0 z-0">
          <Image 
            src={siteConfig.hero.image} 
            alt="Hero Background" 
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <h1 className="font-heading text-5xl md:text-7xl font-bold leading-tight">
            {siteConfig.hero.title}
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {siteConfig.hero.subtitle}
          </p>
          <div className="pt-8">
            <Button href={`https://wa.me/${siteConfig.contact.whatsapp}`} variant="secondary" className="px-8 py-4 text-lg">
              Konsultasi Gratis
            </Button>
          </div>
        </div>
      </section>

      {/* ABOUT SNIPPET SECTION */}
      <section className="py-16 md:py-24 bg-white" aria-labelledby="about-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-gold font-bold tracking-wider uppercase text-sm mb-4 block">Tentang {siteConfig.name}</span>
            <h2 id="about-heading" className="font-heading text-4xl md:text-5xl font-bold text-navy mb-6">Membangun Kepercayaan.</h2>
            <p className="text-slate-600 mb-8 leading-relaxed text-lg">
              {siteConfig.about.history}
            </p>
            <Button href="/about" variant="outline">Pelajari Lebih Lanjut</Button>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-16 md:py-20 bg-navy text-white" aria-label="Statistik Perusahaan">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {siteConfig.stats.map((stat, i) => (
              <div key={i} className="space-y-2">
                <div className="font-heading text-4xl md:text-6xl font-bold text-gold">{stat.value}</div>
                <div className="text-sm md:text-base font-medium tracking-wide uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 md:py-24 bg-gray-50" aria-labelledby="cta-heading">
        <div className="container mx-auto px-4">
          <div className="bg-white border border-gray-200 p-12 md:p-20 text-center max-w-5xl mx-auto rounded-2xl shadow-sm">
            <h2 id="cta-heading" className="font-heading text-4xl font-bold text-navy mb-6">Siap Membangun Visi Anda?</h2>
            <p className="text-slate-600 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
              Konsultasikan kebutuhan proyek Anda dengan tim ahli kami. Kami siap memberikan solusi terbaik yang disesuaikan dengan skala dan tujuan bisnis Anda.
            </p>
            <Button href={`https://wa.me/${siteConfig.contact.whatsapp}`} variant="primary" className="text-lg px-8 py-4">
              Hubungi Tim Kami Sekarang
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
