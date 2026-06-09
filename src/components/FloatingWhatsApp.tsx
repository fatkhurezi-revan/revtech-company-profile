import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/config";

export function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${siteConfig.contact.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </a>
  );
}
