const express = require('express');
const app = express();
const cors = require('cors')
const port = 8000;

const db_name = "authors"
require("./config/mongoose.config")(db_name);

app.use(cors());
app.use(express.json());

require('./routes/authors.routes')(app);
app.listen(port, () => {
    console.log("Listening at Port 8000")
})