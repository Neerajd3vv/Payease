import { Card } from "@repo/ui/card";

// Here is a thing to learn we have define a interface for single transaction . but transactions is an array so futher we have to give that type also
interface TransactionType {
  amount: number;
  status: string;
  provider: string;
  startTime: Date;
}

export  function OnRampTransactions ({transactions}: {transactions:TransactionType[]}) {
  if (!transactions.length) {
    return (
      <div>
        <Card title="Recent Transactions">
          <div className="pt-4"> No recent transactions</div>
        </Card>
      </div>
    );
  }
  return (
    <div>
      <Card title="Recent Transactions">
        {transactions.map(transaction => (
          <div className="flex justify-center pt-4">
            <div>
              <div>Received INR</div>
              <div>{transaction.startTime.toDateString()}</div>
            </div>
            <div>+ Rs {transaction.amount / 100}</div>
          </div>
        ))}
      </Card>
    </div>
  );
}
