const express = require('express');
const app = express();
var cors = require('cors')
const port = 3000;

app.use(cors())
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


let user = []

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.post('/create-user', (req, res, next) => {
    user.push(req.body);
    res.json(req.body);
});

app.get('/show-users', (req, res, next) => {
    res.json(user);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});