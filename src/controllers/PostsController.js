import getTodosPosts from "../models/PostsModel.js";

export async function listaPosts(req, res) {
    const post = await getTodosPosts();
    res.status(200).json(post);
}