import db from "@repo/db/client";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/authoptions";
import { SendCard } from "../../components/transferMoney";

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
    include:{
      sender : true,
      receiver: true
    }
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

  const loggedInUser = session?.user?.name 

  const transactions = await p2pApiCall();
  // console.log(transactions);  // yes im getting array of balance object

  return <SendCard Transactions={transactions} senderName={loggedInUser} />;
}
