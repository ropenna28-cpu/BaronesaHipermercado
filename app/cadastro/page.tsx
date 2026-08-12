export default function CadastroPage() {
  return (
    <div className="mx-auto max-w-md px-4 py-20 md:px-8">
      <h1 className="font-display text-3xl text-ink">Criar conta</h1>
      <form className="mt-8 space-y-4">
        <input placeholder="Nome completo" className="w-full rounded-lg border border-ink/15 px-4 py-3 text-sm" />
        <input placeholder="E-mail" className="w-full rounded-lg border border-ink/15 px-4 py-3 text-sm" />
        <input placeholder="Senha" type="password" className="w-full rounded-lg border border-ink/15 px-4 py-3 text-sm" />
        <button className="w-full rounded-full bg-ink py-3 font-body text-sm font-semibold text-paper hover:bg-gold hover:text-ink">
          Criar conta
        </button>
      </form>
    </div>
  );
}
