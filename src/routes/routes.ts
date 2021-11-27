require('dotenv').config();
import Router, { Request, Response } from 'express';
import shortId from 'shortid';
import { URLModel } from "../database/model/URL";

const route = Router();

const hostname = process.env.HOSTNAME;
const port = process.env.PORT;

route.post('/shorten', async (req: Request, res: Response) => {
	const { originalURL } = req.body;
	const url = await URLModel.findOne({ originalURL });

	if(url) {
		res.json(url);
		return
	}

	const hash = shortId.generate();
	const shorterURL = `${hostname}:${port}/${hash}`;
	const newUrl = await URLModel.create({originalURL, hash, shorterURL});
	
	res.json(newUrl);
});

route.get('/:hash', async (req: Request, res: Response) => {
	const hash = req.params.hash;

	const url = await URLModel.findOne({ hash });
	if(url) {
		res.redirect(url.originalURL);
		return
	}

	res.status(400).json({  error: "Url not found" });
	
});

export default route;