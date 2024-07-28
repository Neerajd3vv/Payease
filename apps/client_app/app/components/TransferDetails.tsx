interface p2pTransactionType {
  amount: number;
  sender: string;
  receiver: string;
  startTime: Date;
}
import { Card } from "@repo/ui/card";
export function TransferDetails({
  Transactions,
  senderName,
}: {
  Transactions: p2pTransactionType[];
  senderName: string;
}) {
  return (
    <div>
      <div >
        <Card title="All Transactions">
          <div className="flex font-montserrat text-lg font-bold justify-between border-b border-slate-300 py-3 ">
            <div className=" flex w-2/3 ">
              <div className=" w-full max-w-md  text-center  ">
                <div>From</div>
              </div>
              <div className="text-center    w-full max-w-md  ">
                <div>To</div>
              </div>
              <div className="text-center     w-full max-w-md">
                <div>Day</div>
              </div>
            </div>
            <div className="text-center">Amount</div>
          </div>
          {Transactions.map((transaction) => (
            <div className="flex justify-between  py-2 border-b border-slate-300 ">
              <div className="flex  w-2/3">
                <div className="text-center  w-full w-max-md   ">
                  <div className="font-afacad text-lg">
                    {transaction.sender}
                  </div>
                </div>
                <div className="  w-full w-max-md text-center ">
                  <div className="font-afacad text-lg">
                    {transaction.receiver}
                  </div>
                </div>
                <div className=" w-full text-center w-max-xl">
                  <div className="font-afacad text-slate-400 text-lg font-semibold">
                    {transaction.startTime.toDateString()}
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-col justify-center font-lato text-lg">
                  {transaction.sender == senderName ? "-" : "+"}
                  {transaction.amount / 100} INR
                </div>
              </div>
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
}
