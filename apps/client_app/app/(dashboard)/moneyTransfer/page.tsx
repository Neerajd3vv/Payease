import db from "@repo/db/client";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/authoptions";
import { SendCard } from "../../components/transferMoney";

import { TransferDetails } from "../../components/TransferDetails";
const p2pApiCall = async () => {
  const session = await getServerSession(authOptions);

  if (!session || !session.user.id) {
    throw new Error("Not authorized");
  }

  const userId = Number(session?.user?.id);

  const Transfertransactions = await db.p2pTransferRecord.findMany({
    where: {
      OR: [{ senderUserId: userId }, { receiverUserId: userId }],
    },
    // Me being dump developer forgot that we can use include to access data from other table if they are in a relation. i was doing i dont the what not to access names of receiver and sender
    include: {
      sender: true,
      receiver: true,
    },
  });

  return Transfertransactions.map((transaction) => ({
    amount: transaction.amount,
    sender: transaction.sender.name,
    receiver: transaction.receiver.name,
    startTime: transaction.transferTime,
  }));
};

export default async function TransactionsPage() {
  const session = await getServerSession(authOptions);

  const loggedInUser = session?.user?.name;

  const transactions = await p2pApiCall();
  // console.log(transactions);  // yes im getting array of balance object

  return (
    <div className="w-screen px-3 lg:px-0 lg:pl-10 lg:pr-6 ">
      
      <div className="pt-12  font-rubikone text-Myblue text-4xl">
        Transaction Dashboard
      </div>
      <div className="grid  grid-cols-1 pt-8 lg:grid-cols-2 gap-8 ">
        <div >
          <SendCard />
        </div>
        <div className=" pb-10 lg:pb-0 ">
          <TransferDetails
            senderName={loggedInUser}
            Transactions={transactions }
          />
        </div>
      </div>
    </div>
  );
}


