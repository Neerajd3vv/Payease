"use client";
import { Card } from "@repo/ui/card";
import { TextInput } from "@repo/ui/textinput";
import { Button2 } from "./Button2";
import { useState } from "react";
import { transferMoney } from "../lib/serverActions/moneyTransfer";

interface p2pTransactionType {
  amount: number;
  sender: string;
  receiver: string;
  startTime: Date;
}

export function SendCard({
  Transactions,
  senderName,
}: {
  Transactions: p2pTransactionType[];
  senderName: string;
}) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");

  // if (!Transactions.length) {
  //   return (
  //     <div>
  //       <Card title="Your Transactions">
  //         <div className="pt-4"> No recent transactions</div>
  //       </Card>
  //     </div>
  //   );
  // }

  return (
    <div className="w-screen h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2  ">
        <div className="flex justify-center  pb-0 lg:pb-60 items-center h-screen ">
          <div className=" w-full max-w-lg">
            <Card title="Send Money">
              <div>
                <TextInput
                  label="Phone number"
                  placeholder="9999098075"
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                />
                <TextInput
                  label="Amount"
                  placeholder="Enter amount"
                  onChange={(e) => {
                    setAmount(e.target.value);
                  }}
                />
                <div className="pt-10 w-full flex justify-center ">
                  <Button2
                    onClick={async () => {
                      await transferMoney(phoneNumber, Number(amount) * 100);
                    }}
                    name="Send"
                    className="border px-8 font-montserrat py-2 bg-Myblue text-white rounded-lg"
                  />
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div>
          <div className="  px-8 pt-0 lg:pt-14 pb-20 lg:pb-0">
            <Card title="All Transactions">
              <div className="flex font-montserrat text-lg font-bold justify-between border-b border-slate-300 py-3 ">
                <div className=" flex  w-2/3">
                  <div className="  w-full max-w-md text-center  ">
                    <div>Sender</div>
                  </div>
                  <div className="text-center  w-full max-w-md   ">
                    <div>Receiver</div>
                  </div>
                  <div className="text-center  w-full max-w-md  ">
                    <div>Day</div>
                  </div>
                </div>
                <div className="text-center   text-lg">
                  Amount
                </div>
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
      </div>
    </div>
  );
}

// {/* // transaction array here to show sender , reciever, amount and
//               time */}
//               {Transactions.map((transaction) => (
//                 <div className=" flex justify-between pt-1 border-b border-slate-200">
//                 <div>
//                   <div className=" font-semibold text-lg">In rupees</div>
//                   <div className="font-hind text-slate-400 font-semibold">
//                     {" "}
//                     {transaction.startTime.toDateString()}
//                   </div>
//                 </div>
//                 <div className="flex flex-col justify-center font-hind font-semibold text-lg">
//                   {(transaction.amount) / 100} INR
//                 </div>
//               </div>
//                ))}
