// const http = require('node:http'); // commonjs
import http from 'node:http'; // ecmascript

// const handler = require('./handler');
import handler from './handler.js';

const server = new http.Server();

server.on('request', handler);

server.listen(3000);