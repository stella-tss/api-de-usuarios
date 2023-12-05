import mongoose from 'mongoose';
import express, { Request, Response } from 'express';
import CandidateRoutes from './Routers/routers';
import cors from 'cors';


const app = express();
const port = 3000;

app.use(express.json());
app.use(CandidateRoutes);
app.use(cors());


const server = require('http').Server(app);

app.get('/', (req, res) => {
    res.send('Hello World!!!!!!');
}
);

server.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
}
);

mongoose.connect('mongodb://localhost:27017/usuarios')
    .then(() => {
        console.log('Connected to database');
    })
    .catch((err) => {
        console.log('Not connected to database', err);
    });

export default app;