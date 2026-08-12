# Baronesa — Hipermercado

Scaffold real e funcional do sistema Baronesa, seguindo a arquitetura pedida
(Next.js App Router, TypeScript, TailwindCSS, Prisma, Zustand, etc.). Este
projeto roda localmente com dados de exemplo (mock) e já está estruturado
para você plugar banco de dados, autenticação e pagamento reais.

## O que já está funcionando

- **Design system próprio** — paleta (tinta/ink, dourado, sálvia, vinho),
  tipografia (Fraunces + Work Sans) e um elemento de assinatura visual (o
  "groove divider", inspirado nos sulcos de vinil) que conecta a identidade
  do mercado com a loja de discos.
- **Home** — hero, categorias, ofertas do dia, mais vendidos, vitrine da loja
  de discos, serviços e newsletter.
- **Produtos** — listagem com filtros de UI e página de detalhe (galeria,
  preço, estoque, avaliações, produtos relacionados).
- **Categorias** — listagem geral e página dinâmica por categoria.
- **Ofertas** — página dedicada às promoções.
- **CDs & DVDs** — departamento especial (o diferencial do Baronesa), com
  busca por artista/gênero/década.
- **Carrinho** — estado global via Zustand, com quantidade, remoção e resumo.
- **Checkout** — fluxo em uma página com etapas (Dados → Endereço → Entrega →
  Pagamento → Confirmação) e seleção de Pix/cartão/carteira digital.
- **Login / Cadastro / Quem Somos / Contato / FAQ** — páginas institucionais.
- **Painel administrativo** — dashboard com KPIs e gráfico de vendas
  (recharts), e um grid dos módulos de gestão previstos.
- **`prisma/schema.prisma`** — modelo de dados completo (produtos,
  categorias, discos, pedidos, usuários, cupons, avaliações, blog, receitas,
  vagas) pronto para `prisma migrate` assim que você tiver um Postgres.

## O que está estruturado mas NÃO conectado (propositalmente)

Isso exige credenciais e infraestrutura suas — não é algo que eu possa
provisionar por você:

- **Banco de dados real** — hoje os dados vêm de `lib/data.ts` (mock). O
  schema Prisma já existe; falta rodar `prisma migrate dev` contra um
  Postgres seu e trocar os imports de `lib/data.ts` por chamadas ao Prisma
  Client / API routes.
- **Autenticação (NextAuth)** — as telas de login/cadastro são só UI.
- **Pagamento (Stripe)** — o checkout já tem a UI e os três métodos, mas sem
  chaves de API nem webhooks.
- **CRUD do admin** — o dashboard mostra a estrutura dos módulos (Produtos,
  Pedidos, Clientes, CMS etc.), mas as telas de CRUD completas ainda não
  foram construídas.
- **Blog, Receitas, Trabalhe Conosco, Clube de Ofertas, Cartão Fidelidade,
  Eventos, Galeria, Avaliações (página dedicada), Políticas** — já existem
  no schema/planejamento mas as páginas de front ainda não foram criadas
  nesta primeira entrega.

## Como rodar

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Próximos passos sugeridos

1. Subir um Postgres (Neon, Supabase ou local) e rodar `npx prisma migrate dev`.
2. Criar API routes / Server Actions para produtos, pedidos e usuários,
   substituindo `lib/data.ts`.
3. Configurar NextAuth (e-mail/senha ou provedores sociais).
4. Configurar Stripe (chaves + webhook de confirmação de pedido).
5. Construir as telas de CRUD do admin (uma por módulo).
6. Criar as páginas institucionais restantes (Blog, Receitas, Eventos etc.)
   reaproveitando os componentes já criados (`ProductCard`, `GrooveDivider`,
   `Navbar`, `Footer`).

Posso seguir com qualquer um desses passos — é só dizer por qual quer
continuar.
