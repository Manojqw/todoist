require("dotenv").config();
const { SERVER_PORT, STRIPE_PRIVATE_KEY, STRIPE_PRICE_ID, CLIENT_URL } =
  process.env;
const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

app.use(express.static("client"));

const stripe = require("stripe")(
  sk_test_51Ovb2vSDfCJ5MAbmk0TXluaf3yzvOdRuiqTRIMCg8wriLMNOvTL1lN919ivK2eX7SZiGDYcBYoORRVKvf88wSZxs00nWi0D9KM
);

app.post("/create-checkout-session", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      success_url: "http://localhost:3000/todo",
      cancel_url: `${CLIENT_URL}`,
      line_items: [
        {
          price: {
            price_1Ovg1ySDfCJ5MAbmMC8q68yJ,
            price_1OvgSWSDfCJ5MAbmFIeDF1hz,
          },
          quantity: quantity,
        },
      ],
      mode: "subscription",
    });
    console.log("session: ", session.id, session.url, session);

    const sessionId = session.id;
    console.log("sessionId: ", sessionId);

    res.json({ "http://localhost:3000/todo": session.url });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.get("/stripe-session", async (req, res) => {
  console.log("req.body: ", req.body);
  const { userId } = req.body;
  console.log("userId: ", userId);

  const db = req.app.get("db");

  const user = {
    stripe_session_id: "asdfpouhwf;ljnqwfpqo",
    paid_sub: false,
  };

  if (!user.stripe_session_id || user.paid_sub === true)
    return res.send("fail");

  try {
    n;
    const session = await stripe.checkout.sessions.retrieve(
      user.stripe_session_id
    );
    console.log("session: ", session);

    if (session && session.status === "complete") {
      let updatedUser = await db.update_user_stripe(userId, true);
      updatedUser = updatedUser[0];
      console.log(updatedUser);

      return res.send("success");
    } else {
      return res.send("fail");
    }
  } catch (error) {
    console.error(
      "An error occurred while retrieving the Stripe session:",
      error
    );
    return res.send("fail");
  }
});

const port = SERVER_PORT;
app.listen(port, () => console.log(`Port running on port ${port}`));
