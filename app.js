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
const port = 8000;
const hostname = 'crypto-backend.dev.koltsova.tech';

dotenv.config();

io.on('connection', (socket) => {
  console.log(socket + 'a user connected');

  socket.on('clientMessage', (message) => {
    io.emit('message', message);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
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
  server.listen(port, hostname, () => {
    // eslint-disable-next-line no-console
    console.log('listening on *:crypto-backend.dev.koltsova.tech:8000');
  });
});
