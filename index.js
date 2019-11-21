const express = require('express');
const app = express();

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});

app.get('/produtos/:id', (request, response) => {
    const { id } = request.params;

    response.status(200).send({
        id
    });
});