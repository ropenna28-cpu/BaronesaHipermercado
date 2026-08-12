'use client';

import { useState } from 'react';
import { useCart } from '@/lib/store';
import { Check } from 'lucide-react';

const steps = ['Dados', 'Endereço', 'Entrega', 'Pagamento', 'Confirmação'];

export default function CheckoutPage() {
  const [step, setStep] = useState(0);
  const [payment, setPayment] = useState<'pix' | 'cartao' | 'carteira'>('pix');
  const { lines, total } = useCart();
  const frete = 9.9;

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 md:px-8">
      <h1 className="font-display text-4xl text-ink">Finalizar compra</h1>

      <ol className="mt-8 flex flex-wrap gap-4 font-body text-sm">
        {steps.map((s, i) => (
          <li key={s} className="flex items-center gap-2">
            <span
              className={`flex h-6 w-6 items-center justify-center rounded-disc text-xs ${
                i <= step ? 'bg-gold text-ink' : 'bg-ink/10 text-ink/40'
              }`}
            >
              {i < step ? <Check size={12} /> : i + 1}
            </span>
            <span className={i === step ? 'text-ink' : 'text-ink/40'}>{s}</span>
          </li>
        ))}
      </ol>

      <div className="mt-10 grid gap-10 md:grid-cols-[1fr_320px]">
        <div className="rounded-2xl border border-ink/10 bg-white/50 p-6">
          {step === 0 && (
            <div className="space-y-4">
              <input placeholder="Nome completo" className="w-full rounded-lg border border-ink/15 px-4 py-3 text-sm" />
              <input placeholder="E-mail" className="w-full rounded-lg border border-ink/15 px-4 py-3 text-sm" />
              <input placeholder="CPF" className="w-full rounded-lg border border-ink/15 px-4 py-3 text-sm" />
            </div>
          )}
          {step === 1 && (
            <div className="space-y-4">
              <input placeholder="CEP" className="w-full rounded-lg border border-ink/15 px-4 py-3 text-sm" />
              <input placeholder="Endereço, número, complemento" className="w-full rounded-lg border border-ink/15 px-4 py-3 text-sm" />
              <input placeholder="Bairro, cidade, estado" className="w-full rounded-lg border border-ink/15 px-4 py-3 text-sm" />
            </div>
          )}
          {step === 2 && (
            <div className="space-y-3 font-body text-sm">
              <label className="flex items-center justify-between rounded-lg border border-ink/15 p-4">
                <span>Entrega padrão (até 2h)</span> <span>R$ 9,90</span>
              </label>
              <label className="flex items-center justify-between rounded-lg border border-ink/15 p-4">
                <span>Retirar na loja</span> <span>Grátis</span>
              </label>
            </div>
          )}
          {step === 3 && (
            <div className="space-y-3">
              {(['pix', 'cartao', 'carteira'] as const).map((m) => (
                <label
                  key={m}
                  className={`flex cursor-pointer items-center gap-3 rounded-lg border p-4 font-body text-sm capitalize ${
                    payment === m ? 'border-gold bg-gold/10' : 'border-ink/15'
                  }`}
                >
                  <input
                    type="radio"
                    checked={payment === m}
                    onChange={() => setPayment(m)}
                    className="accent-gold"
                  />
                  {m === 'pix' ? 'Pix' : m === 'cartao' ? 'Cartão de crédito' : 'Carteira digital'}
                </label>
              ))}
              <p className="font-body text-xs text-ink/40">
                Integração de pagamento (Stripe) preparada na arquitetura — chaves e webhooks
                a configurar em produção.
              </p>
            </div>
          )}
          {step === 4 && (
            <div className="text-center">
              <Check size={40} className="mx-auto text-sage" />
              <p className="mt-3 font-display text-2xl text-ink">Pedido confirmado!</p>
              <p className="mt-1 font-body text-sm text-ink/60">
                Você receberá atualizações por e-mail e WhatsApp.
              </p>
            </div>
          )}

          <div className="mt-8 flex justify-between">
            <button
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              disabled={step === 0}
              className="font-body text-sm text-ink/50 disabled:opacity-0"
            >
              Voltar
            </button>
            {step < steps.length - 1 && (
              <button
                onClick={() => setStep((s) => Math.min(steps.length - 1, s + 1))}
                className="rounded-full bg-ink px-6 py-3 font-body text-sm font-semibold text-paper hover:bg-gold hover:text-ink"
              >
                Continuar
              </button>
            )}
          </div>
        </div>

        <div className="h-fit rounded-2xl border border-ink/10 bg-white/50 p-6">
          <p className="font-display text-xl text-ink">Resumo</p>
          <div className="mt-4 space-y-2 font-body text-sm text-ink/70">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>R$ {total().toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Frete</span>
              <span>R$ {frete.toFixed(2)}</span>
            </div>
          </div>
          <div className="mt-4 flex justify-between border-t border-ink/10 pt-4 font-display text-lg text-ink">
            <span>Total</span>
            <span>R$ {(total() + frete).toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
