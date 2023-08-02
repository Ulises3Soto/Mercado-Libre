let express = require ("express");
const app = express();
const path = require('path');

app.use(express.static("public"));
const publicPath= path.resolve(__dirname, './public')

app.listen(333,()=>console.log( "pagina micro desfio 1 creado"))
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,"/views/home.html"))
});
app.get('/prueva', (req, res) => {
    res.sendFile(path.join(__dirname,"/views/prueva.html"))
});

