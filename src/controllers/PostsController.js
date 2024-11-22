import {getTodosPosts, criarPost, uploadImagem} from "../models/PostsModel.js";
import fs from "fs"

export async function listaPosts(req, res) {
    const post = await getTodosPosts();
    res.status(200).json(post);
}

export async function criarNovoPost(req,res) {
    const novoPost = req.body;

    try {
        const postCriado = await criarPost(novoPost);
        const imagemAtualizada = `uploads/${postCriado.insertedId}.png`
        fs.renameSync(req,File.path, imagemAtualizada)
        res.status(200).json(postCriado);
    } catch (erro) {
        console.error(erro.message);
        res.status(500).json({"Erro":"Falha de Requisição"})
    }
}

export async function uploadImagem(req,res) {
    const novoPost = {
        descricao: "",
        imgUrl: req.File.path,
        alt: ""
    };

    try {
        const postCriado = await criarPost(novoPost);
        res.status(200).json(postCriado);
    } catch (erro) {
        console.error(erro.message);
        res.status(500).json({"Erro":"Falha de Requisição"})
    }
}

