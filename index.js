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

app.use((req, res) => {
    res.status(404).json({
        code: '404',
        type: 'Error',
        message: 'Endpoint not found.',
        developerMessage: `The endpoint ${req.url} was not registered in this application.`
    })
})