import { MessageCircle } from 'lucide-react';

export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/5535988620301"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-sage px-5 py-3.5 font-body text-sm font-semibold text-paper shadow-xl shadow-ink/20 transition hover:bg-sage-light"
    >
      <MessageCircle size={18} />
      <span className="hidden sm:inline">Fale no WhatsApp</span>
    </a>
  );
}
