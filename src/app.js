const express = require('express');
const {
  sayHello,
  uppercase,
  lowercase,
  firstCharacter,
  firstCharacters,
} = require('./lib/strings');

const { add, subtract, multiply, divide, remainder } = require('./lib/numbers');

const app = express();

app.use(express.json());

app.get('/strings/hello/:string', (req, res) => {
  res.json({ result: sayHello(req.params.string) });
});

app.get('/strings/upper/:string', (req, res) => {
  res.json({ result: uppercase(req.params.string) });
});

app.get('/strings/lower/:string', (req, res) => {
  res.json({ result: lowercase(req.params.string) });
});

app.get('/strings/first-characters/:string', (req, res) => {
  if (req.query.length === undefined) {
    res.json({ result: firstCharacter(req.params.string) });
  } else {
    res.json({ result: firstCharacters(req.params.string, req.query.length) });
  }
});

app.get('/numbers/add/:a/and/:b', (req, res) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);

  if (Number.isNaN(a) || Number.isNaN(b) === NaN) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: add(a, b) });
  }
});

app.get('/numbers/subtract/:a/from/:b', (req, res) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);

  if (Number.isNaN(a) || Number.isNaN(b) === NaN) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: subtract(b, a) });
  }
});

app.post('/numbers/multiply', (req, res) => {
  const { a, b } = req.body;

  if (!a || !b) {
    res.status(400).send({ error: 'Parameters "a" and "b" are required.' });
  }
  if (Number.isNaN(Number(a)) || Number.isNaN(Number(b)) === NaN) {
    res.status(400).send({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else {
    res.status(200).send({ result: multiply(req.body.a, req.body.b) });
  }
});

app.post('/numbers/divide', (req, res) => {
  const { a, b } = req.body;

  if (a === 0) {
    return res.status(200).send({ result: 0 });
  }
  if (b === 0) {
    res.status(400).send({ error: 'Unable to divide by 0.' });
  }
  if (!a || !b) {
    res.status(400).send({ error: 'Parameters "a" and "b" are required.' });
  }
  if (Number.isNaN(Number(a)) || Number.isNaN(Number(b)) === NaN) {
    res.status(400).send({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else {
    res.status(200).send({ result: divide(req.body.a, req.body.b) });
  }
});

app.post('/numbers/remainder', (req, res) => {
  const { a, b } = req.body;

  if (a === 0) {
    return res.status(200).send({ result: 0 });
  }
  if (b === 0) {
    res.status(400).send({ error: 'Unable to divide by 0.' });
  }
  if (!a || !b) {
    res.status(400).send({ error: 'Parameters "a" and "b" are required.' });
  }
  if (Number.isNaN(Number(a)) || Number.isNaN(Number(b)) === NaN) {
    res.status(400).send({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).send({ result: remainder(req.body.a, req.body.b) });
  }
});

module.exports = app;
