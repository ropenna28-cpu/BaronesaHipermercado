import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="mx-auto max-w-md px-4 py-20 md:px-8">
      <h1 className="font-display text-3xl text-ink">Entrar</h1>
      <form className="mt-8 space-y-4">
        <input placeholder="E-mail" className="w-full rounded-lg border border-ink/15 px-4 py-3 text-sm" />
        <input placeholder="Senha" type="password" className="w-full rounded-lg border border-ink/15 px-4 py-3 text-sm" />
        <Link href="#" className="block text-right font-body text-xs text-ink/50 hover:text-ink">
          Esqueci minha senha
        </Link>
        <button className="w-full rounded-full bg-ink py-3 font-body text-sm font-semibold text-paper hover:bg-gold hover:text-ink">
          Entrar
        </button>
      </form>
      <p className="mt-6 text-center font-body text-sm text-ink/60">
        Não tem conta?{' '}
        <Link href="/cadastro" className="text-ink underline">
          Cadastre-se
        </Link>
      </p>
    </div>
  );
}
