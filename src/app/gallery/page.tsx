import Image from "next/image";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { TiltCard } from "@/components/TiltCard";

export default function Gallery() {
  const images = [
    { src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop", title: "Fasilitas Produksi A" },
    { src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop", title: "Gedung Kantor Pusat" },
    { src: "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop", title: "Proyek Konstruksi Jembatan" },
    { src: "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=1997&auto=format&fit=crop", title: "Pengembangan Infrastruktur" },
    { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop", title: "Ruang Konferensi Legal" },
    { src: "https://images.unsplash.com/photo-1565043666747-69f6646db940?q=80&w=1974&auto=format&fit=crop", title: "Sistem Robotik Manufaktur" },
  ];

  return (
    <main className="flex flex-col min-h-screen">
      {/* PAGE HEADER */}
      <header className="bg-navy text-white py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <RevealOnScroll>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">Galeri & <span className="text-gold">Fasilitas</span></h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Dokumentasi fasilitas kelas dunia dan proyek-proyek berskala internasional yang kami tangani.
            </p>
          </RevealOnScroll>
        </div>
      </header>

      {/* GALLERY GRID */}
      <section className="py-16 md:py-24 bg-white" aria-label="Galeri Fasilitas dan Proyek">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((img, i) => (
              <RevealOnScroll key={i} delay={i * 0.1}>
                <TiltCard className="group relative aspect-[4/3] overflow-hidden bg-slate-100 cursor-pointer rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300">
                  <Image 
                    src={img.src} 
                    alt={`Foto ${img.title}`} 
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <div>
                      <h2 className="text-white font-heading text-xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{img.title}</h2>
                      <div className="w-12 h-1 bg-gold mt-4 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100"></div>
                    </div>
                  </div>
                </TiltCard>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
