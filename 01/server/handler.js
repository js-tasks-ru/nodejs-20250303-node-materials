import counter from './counter.js';
import counter2 from './counter.js?v=123123';

// const counter = require('./counter');
// const counter2 = require('./counter?v=123123');

const obj = {};

function handler(req, res) {
    counter.counter++;

    obj[counter.counter] = '*'.repeat(100000).split('');

    console.log('counter1', counter.counter);
    console.log('counter2', counter2.counter);

    res.end(`Hello world! You are visitor number ${counter.counter}`);
}

// const handler = (req, res) => ...
// module.exports = handler;
export default handler;