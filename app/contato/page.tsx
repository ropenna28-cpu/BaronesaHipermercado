import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContatoPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 md:px-8">
      <h1 className="font-display text-4xl text-ink">Fale Conosco</h1>
      <div className="mt-10 grid gap-10 md:grid-cols-2">
        <form className="space-y-4">
          <input placeholder="Nome" className="w-full rounded-lg border border-ink/15 px-4 py-3 text-sm" />
          <input placeholder="E-mail" className="w-full rounded-lg border border-ink/15 px-4 py-3 text-sm" />
          <textarea placeholder="Mensagem" rows={5} className="w-full rounded-lg border border-ink/15 px-4 py-3 text-sm" />
          <button className="rounded-full bg-ink px-6 py-3 font-body text-sm font-semibold text-paper hover:bg-gold hover:text-ink">
            Enviar mensagem
          </button>
        </form>
        <div className="space-y-5 font-body text-sm text-ink/70">
          <div className="flex items-start gap-3">
            <MapPin size={18} className="mt-0.5 text-wine" /> Av. Principal, 1200 — Centro
          </div>
          <div className="flex items-start gap-3">
            <Phone size={18} className="mt-0.5 text-wine" /> (11) 4000-0000 · WhatsApp
          </div>
          <div className="flex items-start gap-3">
            <Mail size={18} className="mt-0.5 text-wine" /> contato@baronesa.com.br
          </div>
          <div className="flex items-start gap-3">
            <Clock size={18} className="mt-0.5 text-wine" /> Seg–sáb, 7h às 22h · Dom, 8h às 20h
          </div>
          <div className="aspect-video rounded-2xl bg-ink/5" />
        </div>
      </div>
    </div>
  );
}
