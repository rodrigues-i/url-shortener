require('dotenv').config();
import Router, { Request, Response } from 'express';
import shortId from 'shortid';

const route = Router();

const hostname = process.env.HOSTNAME;
const port = process.env.PORT;

route.post('/shorten', (req: Request, res: Response) => {
	const { originalUrl } = req.body;

	const hash = shortId.generate();
	const shorterUrl = `${hostname}:${port}/${hash}`
	res.json({ hash, shorterUrl, originalUrl })

});

route.get('/:hash', (req: Request, res: Response) => {
	const hash = req.params.hash;

	console.log(hash);
	res.redirect("https://goyabu.com/assistir/mob-psycho-100-dublado/");
	
});

export default route;