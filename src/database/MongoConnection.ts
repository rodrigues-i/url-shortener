require('dotenv').config();
import mongoose from 'mongoose';

const connectionString = String(process.env.MONGO_CONNECTION);

class MongoConnection {
	public async connect(): Promise<void> {
		try{
			await mongoose.connect(connectionString);
			console.log("Database connected");


		}catch(error) {
			console.log(error);
			process.exit(1);

		}

	}

}

export default new MongoConnection();