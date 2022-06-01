const express = require('express');
const app = express();
const port = 3100;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : true}));

app.use('/', express.static("./"))

app.get('/?', (req, res) => {
    res.sendFile(__dirname+ "/login/login.html");
})
app.get('/login', (req, res) => {
    res.sendFile(__dirname+ "/login/login.html");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})