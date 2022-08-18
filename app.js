const express = require("express");
const app = express();

const airportsRoutes = require("./routes/airports");
const productsRoutes = require("./routes/products");
app.get("/heartbeat", (req, res, next) => {
  res.send(new Date());
});

app.use("/airports", airportsRoutes);
app.use("/products", productsRoutes);

module.exports = app;

/**
  claudia generate-serverless-express-proxy --express-module app
 * generated lambd.js file
  claudia create --handler lambda.handler --deploy-proxy-api --region eu-central-1
 * or 
  claudia update
 * deploys to aws
 */
