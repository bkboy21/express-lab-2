const express = require('express');
const app = express();
const port = 3000;

const magic8 = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]



app.get('/greeting/:firstName', (req, res) => {
    res.send(`Hello, ${req.params.firstName}`);
});


app.get('/tip/:total/:tipPercentage', (req, res) => {
    res.send(`Tip Amount: ${req.params.total * req.params.tipPercentage / 100 }`);
});



app.get('/magic/:quastion', (req, res) => {
    let response = magic8[Math.floor(Math.random() * magic8.length)];;
    res.send(`<h1>${response}</h1>`);

});




app.listen(port, () => {
    console.log('listening on port', port);
});