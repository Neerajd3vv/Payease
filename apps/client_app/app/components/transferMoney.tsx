"use client";
import { Card } from "@repo/ui/card";
import { TextInput } from "@repo/ui/textinput";
import { Button2 } from "./Button2";
import { useState } from "react";
import { transferMoney } from "../lib/serverActions/moneyTransfer";



export function SendCard() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");

  return (
    
        <div className="flex justify-center   ">
          <div className=" w-full max-w-2xl">
            <Card title="Send Money">
              <div>
                <TextInput
                labelClassName="font-semibold"
                  label="Phone number"
                  placeholder="9999098075"
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                />
                <TextInput
                 labelClassName="font-semibold"
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

        
      
  );
}

