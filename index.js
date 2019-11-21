const express = require('express');
const app = express();

const bodyParser = require('body-parser')
app.use(bodyParser.json())

const authController = require('./controllers/authController')
app.post('/auth', authController.auth)

const routes = require('./routes')
app.use(routes)

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});