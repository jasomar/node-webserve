import * as dotenv from 'dotenv'
import  express  from 'express'
import hbs from 'hbs'


import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';



const app = express();
dotenv.config()

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = process.env.PORT;//Dotenv.parsed.PORT;//Dotenv.process.env.OPENWEATHER_KEY




app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');
// contenido estarico
//app.use(express.static('public'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('home',{
    nombre: 'JSM',
    titulo : 'Node app'
  }); 
})


app.get('/generic', (req, res) => {
  res.render('generic',{
    nombre: 'Jafet',
    titulo : 'Curso node'
  }); 
})

app.get('/elements', (req, res) => {
  res.render('elements',{
    nombre: 'Jafet',
    titulo : 'Curso node'
  }); 
})

// app.get('/generic', (req, res) => {
//   res.sendFile(path.join(__dirname,'/public/generic.html' )); 
// })

// app.get('/elements', (req, res) => {
//   res.sendFile(path.join(__dirname,'/public/elements.html' )); 
// })

app.listen(PORT)