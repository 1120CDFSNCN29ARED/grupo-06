const express = require('express');
const app = express();
const path = require('path');

const staticFolder = path.resolve(__dirname, '../public');
app.use(express.static(staticFolder));

app.get('/', (req, res) => {
     res.sendFile(path.resolve(__dirname, "../views/index.html"))
})

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, "../views/login.html"))
})

app.get('/singup', (req, res) => {
    res.sendFile(path.resolve(__dirname, "../views/signup.html"))
})


app.listen(8080, () => {
    console.log('Server Running')
})