import express from "express";
import routes from "./src/routes/PostsRoutes.js";

//app é objeto do express
const app = express();
routes(app);

app.listen(3000, () => {
    console.log("servidor escutando!")
});



