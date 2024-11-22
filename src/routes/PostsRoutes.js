import express from "express"
import multer from "multer";
import { listaPosts, criarNovoPost } from "../controllers/PostsController.js";

const storage = multer.diskStorage({
    destination: function(req,fie, cb){
        cb(null, 'upload/file');
    }, 
    filename: function(req, file, cb){
        cb(null, file.originalname);
    }
})
const upload = multer({dest: "./uploads", storage})

const routes = (app)=> {
    app.use(express.json());
    app.get("/posts", listaPosts );
    app.post("/posts",criarNovoPost)
    app.post("/upload", upload.single("imagem"),uploadImagem)
}

export default routes;