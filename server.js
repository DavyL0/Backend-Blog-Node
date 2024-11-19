import express from "express";

const posts = [
    {
        id: 1,
        descricao: "Uma cachoeira imponente em meio à selva",
        imagem: "https://source.unsplash.com/random/300x200/?waterfall,jungle"
    },
    {
        id: 2,
        descricao: "Um gato preguiçoso tomando sol em uma janela",
        imagem: "https://source.unsplash.com/random/300x200/?cat,window"
    },
    {
        id: 3,
        descricao: "Um céu estrelado em uma noite clara no deserto",
        imagem: "https://source.unsplash.com/random/300x200/?desert,stars"
    }
]

//app é objeto do express
const app = express();

app.use(express.json());

app.listen(3000, () => {console.log("servidor escutando!")});


//rota de chamada do servidor
app.get("/posts/:id", (req, res)=>{
    const index = buscarPostPorID(req.params.id);
    res.status(200).json(posts[index]);
});

app.get("/posts", (req, res)=>{
    res.status(200).json(posts);
});

function buscarPostPorID(id){
    return posts.findIndex((post)=> {
        return post.id === Number(id)
    })
}