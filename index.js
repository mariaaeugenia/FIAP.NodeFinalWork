const express = require('express');
const app = express();

const bodyParser = require('body-parser')
app.use(bodyParser.json())

const routes = require('./routes')
app.use(routes)

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});