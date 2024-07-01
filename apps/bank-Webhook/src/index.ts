import express from "express";
import db from "@repo/db/client";
const app = express();

const port = 3003;

app.post("/hdfcWebhook", async (req, res) => {
  const paymentInfo = {
    token: req.body.token,
    userId: req.body.userId,
    amount: req.body.amount,
  };

  try {
    // we have to make sure that both of task  completed or neither of them . Other wise there will be conflict. SO we will be using transaction in prisma which make sure both happen or failed.

    await db.$transaction([
      db.balances.update({
        where: {
          userId: paymentInfo.userId,
        },
        data: {
          amount: {
            increment: paymentInfo.amount,
          },
        },
      }),

      db.onRampTransactions.update({
        where: {
          token: paymentInfo.token,
        },
        data: {
          status: "Success",
        },
      }),
    ]);

    res.json({ msg: "Captured" });
  } catch (error) {
    await db.onRampTransactions.update({
      where: {
        token: paymentInfo.token,
      },
      data: {
        status: "Failed",
      },
    });
    console.log({ error: error });
    res.status(411).json({ msg: "Error while processing webhook" });
  }
});

app.listen(port, () => {
  console.log(`Webhook server is listening on ${port}`);
});
