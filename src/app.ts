import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import router from './routes/index';
import './db';

const app = express();

app.get('/welcome', (req: Request, res: Response, next: NextFunction) => {
    res.send('welcome!');
});

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS,PATCH');
    if (req.method === 'OPTIONS') res.send(200);
    else next();
});

app.use('/', router);


app.listen('1234', () => {
    console.log(`
  ################################################
  🛡️  Server listening on port: 1234🛡️
  ################################################
`);
});