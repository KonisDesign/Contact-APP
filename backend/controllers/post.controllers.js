const PostModel = require("../models/post.models");

module.exports.getPosts = async (req, res) => {
    const posts = await PostModel.find();
    res.status(200).json(posts)
}

module.exports.setPosts = async (req, res) => {
    if (!req.body.Lastname) {
        res.status(400).json({message: "Merci d'ajouter un nom"})
    }

    const post = await PostModel.create({
        Lastname: req.body.Lastname,
        Firstname: req.body.Firstname,
        Phone: req.body.Phone,
        Fav: req.body.Fav,
        Pic: req.body.Pic,
        Github: req.body.Github
    })
    res.status(200).json(post)
};

module.exports.editPost = async (req, res) => {
    const post = await PostModel.findById(req.params.id)

    if (!post) {
        res.status(400).json({message: "Le contact n'éxiste pas"})
    }

    const updatePost = await PostModel.findByIdAndUpdate(
        post,
        req.body,
        {new: true}
    )

    res.status(200).json(updatePost)
}

module.exports.deletePost = async (req, res) => {
    const post = await PostModel.findById(req.params.id)

    if (!post) {
        res.status(400).json({message: "Le contact n'éxiste pas"})
        return;
    }
    
    await PostModel.findByIdAndDelete(req.params.id);
    res.status(200).json({message: "Le contact à été supprimé"})
}