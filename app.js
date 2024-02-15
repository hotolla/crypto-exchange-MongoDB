import express from 'express';
import http from 'http';
import cors from 'cors';
import pkg from 'body-parser';
import { Server } from 'socket.io';
import dotenv from 'dotenv';
import { router } from './modules/router.js';
import { connect } from './db.js';

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

app.use(router);

app.use((error, req, res, next)  => {
  console.log(error);
  res.status(error.status || 500).send();
});

connect().then(() => {
  server.listen(8000, () => {
    // eslint-disable-next-line no-console
    console.log('listening on *:8000');
  });
});
