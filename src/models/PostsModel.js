import conectarAoBanco from "../conf/DbConfig.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export default async function getTodosPosts(){
    const db = conexao.db("rpg-web");
    const colecao = db.collection("posts");

    return colecao.find().toArray()
}