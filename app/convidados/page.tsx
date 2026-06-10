export default function ConvidadosPage() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Convidados
        </h1>

        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg">
          Adicionar Convidado
        </button>
      </div>

      <div className="bg-white rounded-xl shadow">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left p-4">Nome</th>
              <th className="text-left p-4">Telefone</th>
              <th className="text-left p-4">Status</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b">
              <td className="p-4">Maria Silva</td>
              <td className="p-4">(61) 99999-9999</td>
              <td className="p-4">Confirmado</td>
            </tr>

            <tr>
              <td className="p-4">João Santos</td>
              <td className="p-4">(61) 98888-8888</td>
              <td className="p-4">Pendente</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}