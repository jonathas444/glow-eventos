import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";

export default function Home() {
  return (
    <div className="flex h-screen bg-slate-100">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Header />

       <main className="p-6">
  <div className="grid grid-cols-4 gap-6 mb-6">
    <div className="bg-white rounded-xl p-6 shadow">
      <h3 className="text-slate-500">Eventos</h3>
      <p className="text-4xl font-bold mt-2">12</p>
    </div>

    <div className="bg-white rounded-xl p-6 shadow">
      <h3 className="text-slate-500">Convidados</h3>
      <p className="text-4xl font-bold mt-2">548</p>
    </div>

    <div className="bg-white rounded-xl p-6 shadow">
      <h3 className="text-slate-500">Confirmados</h3>
      <p className="text-4xl font-bold mt-2">320</p>
    </div>

    <div className="bg-white rounded-xl p-6 shadow">
      <h3 className="text-slate-500">Próximo Evento</h3>
      <p className="text-2xl font-bold mt-2">15 dias</p>
    </div>
  </div>

  <div className="bg-white rounded-xl p-6 shadow">
    <h2 className="text-xl font-bold mb-4">
      Próximos Eventos
    </h2>

    <div className="space-y-4">
      <div className="border-b pb-3">
        <h3 className="font-semibold">Casamento João & Maria</h3>
        <p className="text-slate-500">15 de Julho de 2026</p>
      </div>

      <div className="border-b pb-3">
        <h3 className="font-semibold">Formatura ADS</h3>
        <p className="text-slate-500">02 de Agosto de 2026</p>
      </div>

      <div>
        <h3 className="font-semibold">Aniversário de 15 anos</h3>
        <p className="text-slate-500">18 de Setembro de 2026</p>
       </div>
        </div>
        </div>
        </main>
      </div>
    </div>
  );
}
