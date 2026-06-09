import { Factory, Building2, Briefcase, Ruler, Zap, ShieldAlert } from "lucide-react";

export const siteConfig = {
  name: "RevTech",
  subtitle: "Template Paket Populer",
  description: "Menghadirkan solusi web premium untuk bisnis yang mendambakan citra profesional dan kredibilitas tinggi di era digital.",
  contact: {
    whatsapp: "6281234567890", // Tanpa +
    email: "info@revtech.agency",
    address: "Jl. Sudirman No. 123, Jakarta Selatan, Indonesia",
    phone: "+62 812-3456-7890"
  },
  hero: {
    title: "Membangun Fondasi Masa Depan Bisnis Anda.",
    subtitle: "Kami adalah mitra strategis untuk perusahaan berskala besar, menghadirkan solusi inovatif dan efisiensi tanpa kompromi.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop"
  },
  about: {
    history: "Didirikan pada tahun 1998, RevTech berawal dari visi sederhana: memberikan standar kualitas baru dalam industri manufaktur dan konstruksi. Perjalanan panjang kami diwarnai oleh dedikasi tak tergoyahkan terhadap inovasi dan kepuasan klien. Kini, kami telah berkembang menjadi salah satu perusahaan terkemuka, menangani berbagai mega-proyek nasional maupun internasional.",
    vision: "Menjadi mitra strategis paling terpercaya di tingkat global yang terus menginspirasi melalui solusi berkelanjutan, inovasi teknologi, dan keunggulan operasional di setiap sektor yang kami sentuh.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
  },
  services: [
    {
      title: "Manufaktur Presisi Tinggi",
      icon: Factory,
      desc: "Lini produksi modern kami dilengkapi dengan teknologi robotik terkini, menjamin akurasi tingkat tinggi untuk komponen-komponen kritis."
    },
    {
      title: "Manajemen Konstruksi",
      icon: Building2,
      desc: "Dari gedung komersial hingga infrastruktur publik, kami mengelola seluruh siklus hidup proyek dengan pengawasan ketat terhadap anggaran dan jadwal."
    },
    {
      title: "Konsultasi Bisnis Korporat",
      icon: Briefcase,
      desc: "Tim penasihat kami siap memandu restrukturisasi bisnis dan efisiensi operasional skala menengah ke atas."
    },
    {
      title: "Desain Arsitektur Modern",
      icon: Ruler,
      desc: "Memadukan fungsionalitas dan estetika melalui desain mutakhir yang memenuhi standar efisiensi ruang optimal."
    },
    {
      title: "Instalasi Energi Terbarukan",
      icon: Zap,
      desc: "Membantu transisi energi perusahaan Anda melalui solusi panel surya skala industri dan efisiensi daya terintegrasi."
    },
    {
      title: "Sertifikasi & Audit Keselamatan",
      icon: ShieldAlert,
      desc: "Pemeriksaan menyeluruh terhadap fasilitas operasional untuk memastikan kepatuhan standar K3."
    }
  ],
  stats: [
    { value: "25+", label: "Tahun Pengalaman" },
    { value: "150+", label: "Proyek Selesai" },
    { value: "500+", label: "Karyawan Ahli" },
    { value: "50+", label: "Penghargaan" }
  ]
};
