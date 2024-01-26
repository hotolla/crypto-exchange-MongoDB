import express from 'express';
import http from 'http';
import cors from 'cors';
import { Server } from 'socket.io';
import dotenv from 'dotenv';
import { expressRouter } from './modules/index.js';
import { connect } from './db.js';
import pkg from 'body-parser';

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*'
  }
});
const { json } = pkg;

dotenv.config();

io.on('connection', (socket) => {
  console.log(socket + 'a user connected');
});
app.use(cors());
app.use(json());
app.use(express.json());

app.use(expressRouter);

app.use((err, req, res, next)  => {
  console.error(err.stack);
  res.status(500).sent('Something broken!');
});

connect().then(() => {
  server.listen(8000, () => {
    // eslint-disable-next-line no-console
    console.log('listening on *:8000');
  });
});
