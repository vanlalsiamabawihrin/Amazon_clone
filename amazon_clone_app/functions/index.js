const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = "sk_test_51HXRTHKEgNlIV5KXkqevGzClnowvZxVO7iRqaImYKUek9h2dOuPhhvgCPDTUd9P7j7iJ755brUEsXJhsKbIeqSqH00KKGNr5kU";

//API config
const app = express();

// Middlewares
app.use(cors({ orign: true }));
app.use(express.json());

//API routes
app.get("./", (request, response) => response.status(200).send("hello World"));
app.post("./payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment request received", totla);
  const paymentIntent = await stripe.paymentIntent.create({
    amount: total,
    currency: "usd",
  });
  // Ok-crated
  response.status(201).send({
    clientSecret: paymentIntent.client_sercret,
  });
});

// Listen clound function command
exports.api = functions.https.onRequest(app);

// Users/vanlalsiamabawihrin/Desktop/React/Amazon_clone/functions
