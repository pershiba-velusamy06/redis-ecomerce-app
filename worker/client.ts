import { createClient } from 'redis';
import 'dotenv/config';
const client = createClient({
	socket: {
		host: process.env.REDIS_HOST,
		port: 17342
	},
	password: process.env.REDIS_PW
});

client.on('error', (err) => console.log(err));

export { client };
export type Client = typeof client;



