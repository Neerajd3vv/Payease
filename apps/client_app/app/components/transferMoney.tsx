"use client";
import { Card } from "@repo/ui/card";
import { TextInput } from "@repo/ui/textinput";
import { Button2 } from "./Button2";
import { useState } from "react";
import { transferMoney } from "../lib/serverActions/moneyTransfer";

// interface TransactionType {
//     amount: number;
//     sender: string;
//     receiver: string;
//     startTime: Date;
//   }

export function SendCard() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");

  return (
    <div className="w-screen h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-0 lg:gap-0 ">
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
          <div className="  px-10 pt-0 lg:pt-32 pb-20 lg:pb-0">
            <Card title="All Transactions">
              <div className=" flex justify-between pt-1 border-b border-slate-200">
                <div>
                  <div className=" font-semibold text-lg">receivedninr</div>
                  <div className="font-hind text-slate-400 font-semibold">
                    {" "}
                    mon jul 25
                  </div>
                </div>
                <div className="flex flex-col justify-center font-hind font-semibold text-lg">
                  +200
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
