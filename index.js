import express from "express";
import bodyParser from "body-parser";
// import fs from 'fs';

import usersRoutes from './routes/users.js';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.json());

app.use('/users', usersRoutes);

app.get('/', (req, res) => res.send('Hello from Homepage.'));

app.listen(PORT, () => console.log(`Alaye my Server dey Run on port: http://localhost:${PORT}`));

