import 'dotenv/config';
import { ObjectId } from "mongodb";
import conectarAoBanco from "../conf/DbConfig.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export async function getTodosPosts(){
    const db = conexao.db("rpg-web");
    const colecao = db.collection("posts");
    return colecao.find().toArray()
}

export async function criarPost(novoPost) {
    const db = conexao.db("rpg-web");
    const colecao = db.collection("posts");
    return colecao.insertOne(novoPost)
}

export async function atualizarPost(id, post) {
    const db = conexao.db("rpg-web");
    const colecao = db.collection("posts");
    const objectId = ObjectId.createFromHexString(id)
    return colecao.updateOne({_id: new ObjectId(objectId)}, {$set:post})
}