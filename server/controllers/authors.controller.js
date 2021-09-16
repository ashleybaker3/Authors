const Author = require("../models/authors.model");

module.exports = {
    
    createAuthor(req, res) {
        Author.create(req.body)
            .then((newAuthor) => {
                res.json(newAuthor);
            })
            .catch((err) => {
                res.status(400).json(err);
            })
    },

    getAllAuthors(req, res) {
        console.log("get all method executed")
        Author.find({})
            .then((authors) => {
                res.json(authors);
            })
            .catch((err) => {
                res.status(400).json(err);
            })
    },

    getOneAuthor(req, res) {
        Author.findById(req.params.id)
            .then((author) => {
                res.json(author);
            })
            .catch((err) => {
                res.status(400).json(err);
            })
    },

    updateAuthor(req, res) {
        Author.findByIdAndUpdate(req.params.id, req.body, {
            runValidators: true, 
            new: true 
        }) 
            .then((author) => {
                res.json(author);
            })
            .catch((err) => {
                res.status(400).json(err);
            })
    },

    deleteAuthor(req, res) {
        Author.findByIdAndDelete(req.params.id)
            .then((article) => {
                res.json(article);
            })
            .catch((err) => {
                res.status(400).json(err);
            })
    }
}