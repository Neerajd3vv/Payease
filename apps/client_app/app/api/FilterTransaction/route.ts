import { authOptions } from "../../lib/authoptions";
import { getServerSession } from "next-auth";
import db from "@repo/db/client";
import { NextResponse } from "next/server";

export async function GET() {
  const sesssion = await getServerSession(authOptions);
  if (!sesssion && !sesssion.user.id) {
    NextResponse.json({ msg: "Not Authorised!" }, { status: 401 });
  }

  const userId = sesssion?.user?.id;
  const Transfertransactions = await db.p2pTransferRecord.findMany({
    where: {
      OR: [{ senderUserId: userId }, { receiverUserId: userId }],
    },
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
}
