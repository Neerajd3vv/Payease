import { AddMoneyCard } from "../../components/AddMoneyCard";
import { UserBalance } from "../../components/UserBalance";
import {RecentTransactions} from "../../components/RecentTransactions"
export default function () {
  return (
    <div className="w-screen  h-screen pl-8 ">
      <div className="font-montserrat pt-6 pb-14 text-4xl text-Myblue font-bold">
        Transfer
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pr-4 ">
        <div ><AddMoneyCard /></div>
        <div ><UserBalance/>
        <div className="pt-10"><RecentTransactions/></div>
        </div>
      </div>
    </div>
  );
}



