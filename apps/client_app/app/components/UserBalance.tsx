export function UserBalance() {
  return (
    <div className="bg-white p-10 rounded-xl border-2 ">
        <div className="text-center  font-montserrat font-bold border-b pb-1 border-slate-300 text-3xl">Balance</div>
        <div className="py-4">
          <div className="flex justify-between  border-b py-3
           border-slate-300" >
            <div className=" text-lg font-bold">Unlocked balance </div>
            <div className="font-semibold">200 INR</div>
          </div>
          <div className="flex justify-between  border-b py-3
           border-slate-300">
            <div className=" text-lg font-bold" >Total locked balance </div>
            <div className="font-semibold" > 0 INR</div>
          </div>
          <div className="flex justify-between  border-b py-3
           border-slate-300">
            <div className=" text-lg font-bold" >Total Balance </div>
            <div className="font-semibold">200 INR</div>
          </div>
        </div>
    </div>
  );
}
