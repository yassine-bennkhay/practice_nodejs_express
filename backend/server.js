const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.use("/api/products", require("./routes/productRouter"));
app.listen(port, () =>
  console.log(`The server is listening on the port ${port}`)
);
