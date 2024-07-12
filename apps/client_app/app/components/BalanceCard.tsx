import { Card } from "@repo/ui/card";

interface BalanceCardType {
  locked: number;
  amount: number;
}
export  function BalanceCard({ locked, amount }: BalanceCardType) {
  return (
    <div>
      <Card title="Balances">
        <div className="pt-4">
          <div className="flex justify-between pb-2 border-b border-slate-200">
            <div className="text-lg font-semibold">Unlocked balance</div>
            <div  className="font-hind font-semibold text-lg">{amount / 100} INR</div>
          </div>
          <div className="flex justify-between pb-2 pt-4 border-b border-slate-200">
            <div className="text-lg font-semibold" >Total locked balance</div>
            <div className="font-hind font-semibold text-lg">{locked / 100} INR</div>
          </div>
          <div className="flex justify-between pb-2 pt-4 border-b border-slate-200">
            <div className="text-lg font-semibold" >Total balance</div>
            <div className="font-hind font-semibold text-lg">{(locked + amount) / 100} INR</div>
          </div>
        </div>
      </Card>
    </div>
  );
}