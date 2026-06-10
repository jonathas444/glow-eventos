export default function NovoEventoPage() {
  return (
    <div className="p-6 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">
        Novo Evento
      </h1>

      <form className="bg-white rounded-xl shadow p-6 space-y-4">
        <div>
          <label className="block mb-2 font-medium">
            Nome do Evento
          </label>

          <input
            type="text"
            className="w-full border rounded-lg p-3"
            placeholder="Ex: Casamento João e Maria"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Data do Evento
          </label>

          <input
            type="date"
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Local
          </label>

          <input
            type="text"
            className="w-full border rounded-lg p-3"
            placeholder="Ex: Espaço Imperial"
          />
        </div>

        <button
          type="submit"
          className="bg-purple-600 text-white px-6 py-3 rounded-lg"
        >
          Salvar Evento
        </button>
      </form>
    </div>
  );
}