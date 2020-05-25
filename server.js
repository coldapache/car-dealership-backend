'use strict';

const express = require('express');
const server = express();

server.set('port', process.env.port || 8000);
server.use(express.json());

server.listen(server.get('port'), () => console.log(`listening on ${server.get('port')}`));