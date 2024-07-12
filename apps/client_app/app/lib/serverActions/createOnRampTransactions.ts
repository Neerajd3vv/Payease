"use server";


import db from "@repo/db/client";
import { authOptions } from "../authoptions";
import { getServerSession } from "next-auth";

export async function createOnRampTransactions (provider: string , amount:number) {
  const session = await getServerSession(authOptions);
  // in reality token will be provided by banks
  if (!session?.user?.id) {
    return {
      message: "Unauthorised Request!",
    };
  }

  const token = (Math.random() * 1000).toString();
  const newOnRampTransactions = await db.onRampTransactions.create({
    data: {
      provider: provider,
      status: "Processing",
      startTime: new Date(),
      token: token,
      amount: amount * 100,
      userId: Number(session?.user?.id),
    },
  });
console.log({onRamp : newOnRampTransactions });

  return { 
    message : "OnRampTransactions created!"
  }
}