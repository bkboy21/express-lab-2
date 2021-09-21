const express = require('express');
const app = express();
const port = 3000;



app.get('/greeting/:firstName', (req, res) => {
    res.send(`Hello, ${req.params.firstName}`);
});


app.get('/tip/:total/:tipPercentage', (req, res) => {
    res.send(`Tip Amount: ${req.params.total / req.params.tipPercentage }`);
});





app.listen(port, () => {
    console.log('listening on port', port);
});