import { Button } from "@/components/Button";
import { siteConfig } from "@/data/config";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* PAGE HEADER */}
      <header className="bg-navy text-white py-20 md:py-32 mt-16 md:mt-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">Hubungi <span className="text-gold">Kami</span></h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Diskusikan kebutuhan proyek Anda dengan representatif kami dan temukan solusi terbaik untuk bisnis Anda.
          </p>
        </div>
      </header>

      {/* CONTACT INFO & FORM */}
      <section className="py-16 md:py-24 bg-gray-50 flex-grow" aria-labelledby="contact-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              
              {/* CONTACT DETAILS */}
              <div className="bg-navy text-white p-10 md:p-12">
                <h2 className="font-heading text-2xl font-bold mb-8">Informasi Kontak</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-gold shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-1">Alamat Kantor</h3>
                      <p className="text-slate-300 leading-relaxed">{siteConfig.contact.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-gold shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-1">Telepon</h3>
                      <p className="text-slate-300">{siteConfig.contact.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-gold shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-1">Email</h3>
                      <p className="text-slate-300">{siteConfig.contact.email}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-gold shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-1">Jam Operasional</h3>
                      <p className="text-slate-300">Senin - Jumat: 08:00 - 17:00</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* QUICK CTA */}
              <div className="p-10 md:p-12 flex flex-col justify-center text-center">
                <h2 id="contact-heading" className="font-heading text-3xl font-bold text-navy mb-4">Konsultasi Langsung</h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Untuk respons yang lebih cepat, Anda dapat langsung menghubungi layanan pelanggan kami melalui WhatsApp. Tim kami selalu siap melayani Anda.
                </p>
                <Button href={`https://wa.me/${siteConfig.contact.whatsapp}`} variant="primary" className="text-lg w-full py-4">
                  Chat via WhatsApp
                </Button>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
