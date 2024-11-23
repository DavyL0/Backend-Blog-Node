import express from "express"
import multer from "multer";
import { listaPosts, criarNovoPost, atualizarNovoPost,uploadImg } from "../controllers/PostsController.js";
import cors from "cors";

const corsOptions = {
    origin:"http://localhost:8000",
    optionsSuccessStatu: 200
}

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
    app.use(cors(corsOptions));
    app.get("/posts", listaPosts );
    app.post("/posts",criarNovoPost)
    app.post("/upload", upload.single("imagem"), uploadImg)
    app.put("/upload/:id", atualizarNovoPost )
}

export default routes;