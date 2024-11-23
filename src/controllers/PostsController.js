import {getTodosPosts, criarPost, atualizarPost} from "../models/PostsModel.js";
import fs from "fs"
import gerarDescricaoComGemini from "../services/GeminiService.js";

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

export async function uploadImg(req,res) {
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

export async function atualizarNovoPost(req,res) {
    const id = req.params.id;
    const imgUrl = `http://localhost:3000/${id}.png`

    try {
        const imageBuffer = fs.readFileSync(`uploads/${id}.png`)
        const descricao = await gerarDescricaoComGemini(imageBuffer)

        const post = {
            imgUrl: imgUrl,
            descricao: descricao,
            alt: req.body.alt
        }

        const postCriado = await atualizarPost(id, post);
        
        res.status(200).json(postCriado);
    } catch (erro) {
        console.error(erro.message);
        res.status(500).json({"Erro":"Falha de Requisição"})
    }
}

