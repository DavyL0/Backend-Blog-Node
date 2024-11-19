import express from "express";

//app é objeto do express
const app = express();

app.listen(3000, () => {console.log("servidor escutando!")});


//rota de chamada do servidor
app.get("/api", (req, res)=>{res.status(200).send(console.log("Boas Vindas Rota inicial"))});