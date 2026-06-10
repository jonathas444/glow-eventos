import Link from "next/link";

export function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-white p-6">
      <h2 className="text-3xl font-bold mb-10">
        GLOW
      </h2>

      <nav className="flex flex-col gap-5">
        <Link href="/" className="hover:text-purple-400">
          📊 Dashboard
        </Link>

        <Link href="/eventos" className="hover:text-purple-400">
          🎉 Eventos
        </Link>

        <Link href="/convidados" className="hover:text-purple-400">
          👥 Convidados
        </Link>

        <Link href="/configuracoes" className="hover:text-purple-400">
          ⚙️ Configurações
        </Link>
      </nav>
    </aside>
  );
}