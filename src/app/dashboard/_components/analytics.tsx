
import { Users, DollarSign, Wallet } from "lucide-react";
import { StatCard } from "./stats-card";

export async function Stats() {

  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-3 mb-6">

      <StatCard
        title="Total de Apoiadores"
        description="Número total de pessoas que te apoiaram"
        icon={<Users className="w-8 h-8 text-blue-400" />}
        value={0}
      />

      <StatCard
        title="Valor Total Recebido"
        description="Soma de todas as doações recebidas"
        icon={<DollarSign className="w-8 h-8 text-amber-500" />}
        value={0}
      />

      <StatCard
        title="Saldo Disponível"
        description="Valor disponível para saque"
        icon={<Wallet className="w-8 h-8 text-green-500" />}
        value={0}
      />

    </div>
  );
}