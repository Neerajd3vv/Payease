"use client";

import { Card } from "@repo/ui/card";
import { TextInput } from "@repo/ui/textinput";
import { Dropbox } from "@repo/ui/dropbox";
import { useState } from "react";
import { Button2 } from "./Button2";
import { createOnRampTransactions } from "../lib/serverActions/createOnRampTransactions";

const SupportedBanks = [
  {
    name: "HDFC BANK",
    url: "https://netbanking.hdfcbank.com",
  },
  {
    name: "AXIS BANK",
    url: "https://www.axisbank.com/",
  },
];

export   function AddMoneyCard() {
  const [redirectUrl, setRedirectUrl] = useState(SupportedBanks[0]?.url);
  const [provider , setProvider] = useState(SupportedBanks[0]?.name || "") 
  const [ amount , setAmount] = useState(0)
  console.log({provider : provider, amount: amount});
  
  return (
    <div>
      <Card title="Add Money">
          <TextInput
            label="Amount"
            placeholder="Amount"
            onChange={(e) => {
              setAmount(Number(e.target.value))
            }}
            labelClassName="font-afacad font-semibold"
          />
          <div className="pt-4 font-afacad font-semibold ">Bank</div>
          <Dropbox
            onSelect={(e) => {
              setRedirectUrl(
                SupportedBanks.find((x) => x.name === e)?.url || ""
              );
              setProvider(SupportedBanks.find((x) => x.name === e )?.name || "")
            }}
            options={SupportedBanks.map((bank) => ({
              value: bank.name,
              displayText: bank.name,
            }))}
          />
          <div className="flex justify-center pt-10">
            <Button2  name="Add money" className="border px-4 font-montserrat py-2 bg-Myblue text-white rounded-lg" onClick={async ()=> {
              await createOnRampTransactions(provider, amount)
            }} />
          </div>
      </Card>
    </div>
  );
}
