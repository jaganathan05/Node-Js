const bodyParser = require('body-parser');
const express = require('express');
const fs = require('fs');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/login', (req, res, next) => {
    res.send(`
        <form onsubmit="localStorage.setItem('username', document.getElementById('username1').value)" action="/" method="POST">
            <input id="username1" type="text" name="username">
            <button type="submit">add</button>
        </form>
    `);
});

app.post('/', (req, res) => {
    const user = req.body.username;
    res.send(`
        <h1>Welcome, ${user}!</h1>
        <form action="/message" method="POST">
        <input type="hidden" name="username" value='${user}'>
            <input type="text" name="message">
            <button type="submit">send</button>
        </form>
    `);
});

app.post('/message', (req, res) => {
    const user = req.body.username;
    const message = req.body.message;

    fs.writeFileSync('message.txt', `${user}: ${message}`);

    const messages = fs.readFileSync('message.txt', 'utf8');
    res.send(`<pre>${messages}</pre>`);
});

app.listen(3000);
