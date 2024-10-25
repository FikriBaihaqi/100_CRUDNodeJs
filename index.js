import express from 'express';
import bodyParser from 'body-parser';
import mobilRoute from './routes/mobil.js';
import heroRoute from './routes/hero.js';


const app = express();
const port = 8000;

app.use("/mobil", mobilRoute)
app.get("/", (req, res) => {
    console.log (["GET ROUTE"]);
    res.send ("selamat pagiiiiii");
});
 
app.use("/hero", heroRoute)
app.get("/", (req, res) => {
    console.log (["GET ROUTE"]);
    res.send ("selamat siangggggg");
});

app.use(bodyParser.json());
app.listen(port,() =>
    console.log(` Server berjalan di port : http://localhost:${port} `));