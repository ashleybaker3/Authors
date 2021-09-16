const authorController = require("../controllers/authors.controller");

module.exports = (app) => {
    app.get("/api/authors", authorController.getAllAuthors);
    app.post("/api/authors", authorController.createAuthor);
    app.get("/api/authors/:id", authorController.getOneAuthor);
    app.put("/api/authors/:id", authorController.updateAuthor);
    app.delete("/api/authors/:id", authorController.deleteAuthor);
};