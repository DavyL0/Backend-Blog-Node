import express from "express"
import { listaPosts, postarNovoPost } from "../controllers/PostsController.js";

const routes = (app)=> {
    app.use(express.json());
    app.get("/posts", listaPosts );
    app.post("/posts",postarNovoPost)
}

export default routes;