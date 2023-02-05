const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get('/about', (req, res) => {
    res.sendFile(__dirname + "/about.html");
});

app.get('/bmi-calculator', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/bmi-calculator", (req, res) => {
    const weight = parseFloat(req.body.weight);
    const height = parseFloat(req.body.height);

    const result = weight / Math.pow(height, 2);
    res.send("Your BMI is " + result);
});



app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});