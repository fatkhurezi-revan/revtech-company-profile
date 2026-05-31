import Link from "next/link";
import { Button } from "./Button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-navy-light/10 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex flex-col">
          <span className="font-heading text-2xl font-bold text-navy tracking-tight">RevTech</span>
          <span className="text-[10px] uppercase tracking-widest text-gold font-semibold">Template Company Profile</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-navy/80">
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          <Link href="/about" className="hover:text-gold transition-colors">About Us</Link>
          <Link href="/services" className="hover:text-gold transition-colors">Services</Link>
          <Link href="/gallery" className="hover:text-gold transition-colors">Gallery</Link>
          <Link href="/clients" className="hover:text-gold transition-colors">Clients</Link>
        </nav>
        <div className="hidden md:block">
          <Button href="https://wa.me/1234567890" variant="primary">Hubungi Kami</Button>
        </div>
      </div>
    </header>
  );
}
