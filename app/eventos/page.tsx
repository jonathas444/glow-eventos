export default function EventosPage() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Eventos
        </h1>

        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
          Novo Evento
        </button>
      </div>

      <div className="bg-white rounded-xl shadow">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left p-4">Nome</th>
              <th className="text-left p-4">Data</th>
              <th className="text-left p-4">Convidados</th>
              <th className="text-left p-4">Status</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b">
              <td className="p-4">
                Casamento João & Maria
              </td>
              <td className="p-4">
                15/07/2026
              </td>
              <td className="p-4">
                250
              </td>
              <td className="p-4">
                Ativo
              </td>
            </tr>

            <tr>
              <td className="p-4">
                Formatura ADS
              </td>
              <td className="p-4">
                02/08/2026
              </td>
              <td className="p-4">
                180
              </td>
              <td className="p-4">
                Ativo
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}