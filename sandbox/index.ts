import 'dotenv/config';
import { client } from '../src/services/redis';

const run = async () => {
    await client.hSet('car1', {
        color:'red1',
        year:1954
    });
    await client.hSet('car2', {
        color:'red2',
        year:1953
    });
    await client.hSet('car3', {
        color:'red3',
        year:1952
    });
    await client.hSet('car4', {
        color:'red',
        year:1951
    });
    const commands = [1,2,3,4].map((id)=>{
      return  client.hGetAll(`car${id}`)
    })
    const results=await Promise.all(
        commands
    ) 
console.log(results)
};
run();
