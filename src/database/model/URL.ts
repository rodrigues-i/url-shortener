import { getModelForClass, prop } from '@typegoose/typegoose';

export class URL {
	@prop({ required: true })
	public hash!: string

	@prop({ required: true })
	public originalURL!: string

	@prop({ required: true })
	public shorterURL!: string
}

export const URLModel = getModelForClass(URL);