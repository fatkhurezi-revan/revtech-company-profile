import Image from "next/image";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { Quote } from "lucide-react";

export default function Clients() {
  const testimonials = [
    {
      quote: "RevTech membuktikan profesionalisme tingkat tinggi dalam menangani konstruksi fasilitas manufaktur kami. Tepat waktu dan sesuai anggaran.",
      author: "Robert Wijaya",
      role: "Direktur Utama, PT Global Indo Manufaktur"
    },
    {
      quote: "Layanan konsultasi hukum korporat mereka sangat luar biasa. Detail, tajam, dan sangat memahami konteks bisnis industri berat.",
      author: "Sarah Kusuma",
      role: "Managing Partner, Kusuma & Associates"
    },
    {
      quote: "Standar HSE dan presisi produksi mereka telah membantu kami mencapai efisiensi operasional hingga 30% dalam tahun pertama.",
      author: "David Chen",
      role: "VP Operations, TechMotive Group"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* PAGE HEADER */}
      <section className="bg-navy text-white py-24 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <RevealOnScroll>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">Klien & <span className="text-gold">Mitra</span></h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Membangun kemitraan strategis jangka panjang berdasarkan kepercayaan dan hasil nyata.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* CLIENT LOGOS */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <span className="text-gold font-bold tracking-wider uppercase text-sm mb-4 block">Jaringan Kepercayaan</span>
              <h2 className="font-heading text-3xl font-bold text-navy">Dipercaya oleh Perusahaan Terkemuka</h2>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Placeholder for client logos */}
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <RevealOnScroll key={num} delay={num * 0.05}>
                <div className="w-32 h-16 bg-gray-200 animate-pulse rounded flex items-center justify-center text-gray-400 text-xs font-bold uppercase tracking-widest">
                  LOGO {num}
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testi, i) => (
              <RevealOnScroll key={i} delay={i * 0.1}>
                <div className="bg-white p-10 border border-gray-100 shadow-sm relative h-full flex flex-col">
                  <Quote className="w-10 h-10 text-gold/20 absolute top-8 left-8" />
                  <p className="text-gray-600 italic leading-relaxed mb-8 relative z-10 pt-4 flex-grow">
                    "{testi.quote}"
                  </p>
                  <div>
                    <div className="font-heading font-bold text-navy text-lg">{testi.author}</div>
                    <div className="text-sm text-gold font-medium">{testi.role}</div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
