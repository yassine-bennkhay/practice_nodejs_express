const express = require("express");
const app = express();
const path = require("path");

const port = process.env.PORT || 2000;

app.use("/api/products", require("./routes/productRouter"));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "frontend", "index.html"));
  
});
app.listen(port, () =>
  console.log(`The server is listening on the port ${port}`)
);
