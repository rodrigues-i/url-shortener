import express, { Request, Response } from 'express';
require('dotenv').config();
import route from './routes/routes';


const app = express();
const port = process.env.PORT;
const hostname = process.env.HOSTNAME;

// Configurações da aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuraçoes de rotas
app.use(route);

// Inicialização do servidor
app.listen(port, () => {
	console.log(`Server running at http://${hostname}:${port}`)
});