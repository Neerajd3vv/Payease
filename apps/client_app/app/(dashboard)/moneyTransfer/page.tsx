import { SendCard } from "../../components/transferMoney";
import db from "@repo/db/client";
import { authOptions } from "../../lib/authoptions";
import { getServerSession } from "next-auth";

const p2pTransaction = async () => {
  const session = await getServerSession(authOptions);

  const sender = await db.user.findFirst({
    where: {
      id: Number(session?.user?.id),
    },
  });
  const senderName = sender?.name;

  const transactions = await db.p2pTransferRecord.findMany({
    where: {
      senderUserId: Number(session?.user?.id),
    },
  });

  const receiverId = transactions.map((x) => {
    return x.senderUserId;
  });

  const ReceiverName = await db.user.findFirst({
    where: {
      id: Number(receiverId),
    },
  });
  const receiverActualName = ReceiverName?.name;

  return transactions.map((transaction) => ({
    amount: transaction.amount,
    sender: senderName,
    startTime: transaction.transferTime,
    receiver: receiverActualName,
  }));
};


export default function () {
  const p2p = p2pTransaction()
  return (
    <SendCard p2pTransactions={p2p}/>
  )
}