"use client";

import { Card } from "@repo/ui/card";
import { TextInput } from "@repo/ui/textinput";
import { Dropbox } from "@repo/ui/dropbox";
import { useState } from "react";
import { Button2 } from "./Button2";

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

export  function AddMoneyCard() {
  const [redirectUrl, setRedirectUrl] = useState(SupportedBanks[0]?.url);
  return (
    <div>
      <Card title="Add Money">
          <TextInput
            label="Amount"
            placeholder="Amount"
            onChange={() => {}}
            labelClassName="font-afacad font-semibold"
          />
          <div className="pt-4 font-afacad font-semibold ">Bank</div>
          <Dropbox
            onSelect={(e) => {
              setRedirectUrl(
                SupportedBanks.find((x) => x.name === e)?.url || ""
              );
            }}
            options={SupportedBanks.map((bank) => ({
              value: bank.name,
              displayText: bank.name,
            }))}
          />
          <div className="flex justify-center pt-10">
            <Button2  name="Add money" className="border px-4 font-montserrat py-2 bg-Myblue text-white rounded-lg" onClick={()=> {
                window.location.href = redirectUrl || ""
            }} />
          </div>
      </Card>
    </div>
  );
}
