const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 2000;
//Custom middleware logger
app.use((req,res,next)=>{
  console.log(`${req.method} ${req.path}`)
  next()
})
/* built in middleware to handle urlencoded data
form data
*/
app.use(express.urlencoded({extended:false}))
// built in diddleawre for json
app.use(express.json())
// built in middleware to serve static files: imgs, css
app.use(express.static(path.join(__dirname, "../", "frontend")))
app.use("/api/products", require("./routes/productRouter"));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "frontend", "index.html"));
  
});
app.listen(port, () =>
  console.log(`The server is listening on the port ${port}`)
);
