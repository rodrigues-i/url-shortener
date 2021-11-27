import express, { Request, Response } from 'express';
require('dotenv').config()


const app = express();
const port = process.env.PORT;
const hostname = process.env.HOSTNAME;

// Configurações da aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
	res.status(200).json({ message: "Welcome" })
});

// Inicialização do servidor
app.listen(port, () => {
	console.log(`Server running at http://${hostname}:${port}`)
});