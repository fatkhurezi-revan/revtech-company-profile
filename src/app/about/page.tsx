import Image from "next/image";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { Users, Target, Award } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* PAGE HEADER */}
      <section className="bg-navy text-white py-24 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <RevealOnScroll>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">Tentang <span className="text-gold">RevTech</span></h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Sejarah dedikasi, inovasi, dan pencapaian luar biasa dalam industri.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <RevealOnScroll>
              <div>
                <span className="text-gold font-bold tracking-wider uppercase text-sm mb-4 block">Sejarah Kami</span>
                <h2 className="font-heading text-4xl font-bold text-navy mb-6">Lebih dari Dua Dekade Membangun Kepercayaan.</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Didirikan pada tahun 1998, RevTech berawal dari visi sederhana: memberikan standar kualitas baru dalam industri manufaktur dan konstruksi. Perjalanan panjang kami diwarnai oleh dedikasi tak tergoyahkan terhadap inovasi dan kepuasan klien.
                  </p>
                  <p>
                    Kini, kami telah berkembang menjadi salah satu perusahaan terkemuka, menangani berbagai mega-proyek nasional maupun internasional. Keberhasilan kami tidak lepas dari tim ahli yang solid dan budaya kerja yang menjunjung tinggi integritas.
                  </p>
                </div>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={0.2}>
              <div className="relative aspect-video md:aspect-square w-full overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
                  alt="Office Interior" 
                  fill
                  className="object-cover"
                />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* VISION MISSION SECTION */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <RevealOnScroll>
              <div className="bg-white p-12 border border-gray-100 hover:border-gold transition-colors duration-300 h-full">
                <Target className="w-12 h-12 text-gold mb-6" />
                <h3 className="font-heading text-2xl font-bold text-navy mb-4">Visi Kami</h3>
                <p className="text-gray-600 leading-relaxed">
                  Menjadi mitra strategis paling terpercaya di tingkat global yang terus menginspirasi melalui solusi berkelanjutan, inovasi teknologi, dan keunggulan operasional di setiap sektor yang kami sentuh.
                </p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={0.2}>
              <div className="bg-white p-12 border border-gray-100 hover:border-gold transition-colors duration-300 h-full">
                <Award className="w-12 h-12 text-gold mb-6" />
                <h3 className="font-heading text-2xl font-bold text-navy mb-4">Misi Kami</h3>
                <ul className="space-y-3 text-gray-600 list-disc list-inside">
                  <li>Memberikan standar kualitas tanpa kompromi.</li>
                  <li>Mengembangkan SDM yang kompeten dan berintegritas.</li>
                  <li>Menerapkan teknologi mutakhir secara efisien.</li>
                  <li>Berkontribusi aktif pada keberlanjutan lingkungan.</li>
                </ul>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* LEADERSHIP SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <RevealOnScroll>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-gold font-bold tracking-wider uppercase text-sm mb-4 block">Kepemimpinan</span>
              <h2 className="font-heading text-4xl font-bold text-navy mb-6">Dewan Direksi Kami</h2>
              <p className="text-gray-600">Dipimpin oleh para profesional berpengalaman yang membawa visi strategis bagi perusahaan.</p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Budi Santoso", role: "Chief Executive Officer", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" },
              { name: "Anita Wijaya", role: "Chief Operations Officer", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" },
              { name: "Hendra Kusuma", role: "Chief Financial Officer", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop" }
            ].map((leader, i) => (
              <RevealOnScroll key={i} delay={i * 0.1}>
                <div className="group">
                  <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-gray-100">
                    <Image 
                      src={leader.img} 
                      alt={leader.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-navy">{leader.name}</h3>
                  <p className="text-gold font-medium text-sm mt-1">{leader.role}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
