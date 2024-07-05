export function RecentTransactions() {
  return (
    <div className="p-10 rounded-xl bg-white border-2">
      <div className="text-center  font-montserrat font-bold border-b pb-1 border-slate-300 text-3xl">Recent Transactions</div>
      <div className="flex justify-between pt-6">
        <div>
          <div className="font-bold text-lg">Received INR</div>
          <div className="font-afacad  text-slate-600">sat, march 30 2024</div>
        </div>
        <div className="font-semibold">+200</div>
      </div>
    </div>
  );
}
