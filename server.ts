import { app } from './app';
import { startDB } from './src/repositories/database/mongodb';

startDB()

app.listen(3000);

console.log(`Listening on ${3000}`);