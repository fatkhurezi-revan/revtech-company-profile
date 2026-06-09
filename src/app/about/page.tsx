import Image from "next/image";
import { siteConfig } from "@/data/config";

export default function About() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* PAGE HEADER */}
      <header className="bg-navy text-white py-20 md:py-32 mt-16 md:mt-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">Tentang & <span className="text-gold">Layanan</span></h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {siteConfig.about.vision}
          </p>
        </div>
      </header>

      {/* STORY SECTION */}
      <section className="py-16 md:py-24 bg-white" aria-labelledby="story-heading">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <article>
              <span className="text-gold font-bold tracking-wider uppercase text-sm mb-4 block">Sejarah Kami</span>
              <h2 id="story-heading" className="font-heading text-4xl font-bold text-navy mb-6">Lebih dari Dua Dekade Membangun Kepercayaan.</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>{siteConfig.about.history}</p>
              </div>
            </article>
            <div className="relative aspect-video md:aspect-square w-full overflow-hidden rounded-2xl shadow-lg">
              <Image 
                src={siteConfig.about.image} 
                alt="Kantor RevTech" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-16 md:py-24 bg-gray-50" aria-labelledby="services-heading">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-bold tracking-wider uppercase text-sm mb-4 block">Layanan Kami</span>
            <h2 id="services-heading" className="font-heading text-4xl font-bold text-navy mb-6">Solusi Komprehensif untuk Industri Anda</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.services.map((service, i) => (
              <article key={i} className="bg-white p-10 border border-gray-100 rounded-2xl hover:border-gold hover:shadow-xl transition-all duration-300 ease-in-out h-full flex flex-col group">
                <div className="w-16 h-16 bg-navy/5 text-navy group-hover:bg-gold group-hover:text-white transition-colors duration-300 flex items-center justify-center mb-8 rounded-xl transform group-hover:-translate-y-1">
                  <service.icon className="w-8 h-8" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-xl font-bold text-navy mb-4">{service.title}</h3>
                <p className="text-slate-600 flex-grow leading-relaxed">
                  {service.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
