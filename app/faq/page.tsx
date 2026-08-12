const faqs = [
  { q: 'Qual o prazo de entrega?', a: 'Entregamos em até 2 horas para a maior parte da região atendida.' },
  { q: 'Como funciona a troca de produtos?', a: 'Você tem até 7 dias para solicitar troca ou devolução pelo app ou loja.' },
  { q: 'Vocês vendem vinis usados?', a: 'Sim, parte do acervo da loja de discos é composto por itens selecionados de segunda mão.' },
  { q: 'Como funciona o Clube de Ofertas?', a: 'Cadastre-se gratuitamente e acumule cashback em cada compra.' },
];

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:px-8">
      <h1 className="font-display text-4xl text-ink">Perguntas Frequentes</h1>
      <input
        placeholder="Pesquisar dúvida..."
        className="mt-6 w-full rounded-full border border-ink/15 bg-white px-4 py-3 text-sm"
      />
      <div className="mt-8 divide-y divide-ink/10">
        {faqs.map((f) => (
          <details key={f.q} className="group py-4">
            <summary className="cursor-pointer font-display text-lg text-ink">{f.q}</summary>
            <p className="mt-2 font-body text-sm text-ink/60">{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
