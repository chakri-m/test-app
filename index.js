const express = require('express');
const app = express()
const port = 3100;

app.get('/', (req, res) => res.send('Well done guys, your Nodejs App is up and running! your coach is proud of you :) '));


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
