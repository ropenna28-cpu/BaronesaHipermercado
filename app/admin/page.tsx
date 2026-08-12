'use client';

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { Package, ShoppingBag, Users, DollarSign } from 'lucide-react';

const salesData = [
  { day: 'Seg', vendas: 12400 },
  { day: 'Ter', vendas: 14100 },
  { day: 'Qua', vendas: 13200 },
  { day: 'Qui', vendas: 15800 },
  { day: 'Sex', vendas: 19200 },
  { day: 'Sáb', vendas: 24100 },
  { day: 'Dom', vendas: 17600 },
];

const kpis = [
  { icon: DollarSign, label: 'Receita (7 dias)', value: 'R$ 116.400' },
  { icon: ShoppingBag, label: 'Pedidos', value: '1.284' },
  { icon: Users, label: 'Clientes ativos', value: '9.842' },
  { icon: Package, label: 'Produtos em estoque baixo', value: '18' },
];

const modules = [
  'Gestão de Produtos',
  'Gestão de Pedidos',
  'Gestão de Clientes',
  'Gestão de Promoções',
  'Gestão de Conteúdo (CMS)',
  'Financeiro',
  'Funcionários',
  'Relatórios',
];

export default function AdminDashboard() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:px-8">
      <p className="font-body text-xs uppercase tracking-[0.2em] text-ink/40">Área administrativa</p>
      <h1 className="mt-1 font-display text-3xl text-ink">Dashboard</h1>

      <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
        {kpis.map((k) => (
          <div key={k.label} className="rounded-2xl border border-ink/10 bg-white/60 p-5">
            <k.icon size={18} className="text-wine" />
            <p className="mt-3 font-display text-2xl text-ink">{k.value}</p>
            <p className="font-body text-xs text-ink/50">{k.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-ink/10 bg-white/60 p-6">
        <p className="font-display text-lg text-ink">Vendas da semana</p>
        <div className="mt-4 h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#18233920" />
              <XAxis dataKey="day" stroke="#18233960" fontSize={12} />
              <YAxis stroke="#18233960" fontSize={12} />
              <Tooltip />
              <Line type="monotone" dataKey="vendas" stroke="#D9A441" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="mt-8">
        <p className="mb-4 font-display text-lg text-ink">Módulos de gestão</p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {modules.map((m) => (
            <button
              key={m}
              className="rounded-2xl border border-ink/10 bg-white/60 p-5 text-left font-body text-sm text-ink/80 transition hover:border-gold hover:bg-gold/10"
            >
              {m}
              <span className="mt-1 block font-body text-xs text-ink/40">Em construção</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
