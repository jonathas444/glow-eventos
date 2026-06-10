export function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-white p-6">
      <h2 className="text-3xl font-bold mb-10">
        GLOW
      </h2>

      <nav className="flex flex-col gap-5">
        <a href="#" className="hover:text-purple-400">
          📊 Dashboard
        </a>

        <a href="#" className="hover:text-purple-400">
          🎉 Eventos
        </a>

        <a href="#" className="hover:text-purple-400">
          👥 Convidados
        </a>

        <a href="#" className="hover:text-purple-400">
          ⚙️ Configurações
        </a>
      </nav>
    </aside>
  );
}