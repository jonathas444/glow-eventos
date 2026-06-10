export function Header() {
  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-800">
          Dashboard
        </h1>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-slate-600">
          Olá, Jonathas 👋
        </span>

        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center justify-center font-bold">
          J
        </div>
      </div>
    </header>
  );
}