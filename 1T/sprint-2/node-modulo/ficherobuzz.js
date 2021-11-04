const test = require('ava');

const fizzBuzz = require('')

const fizzBuzz = require('../src/fizzbuzz');

test('Should return 1', t => {
const result = fizzBuzz(1);
t.is(result, 1);
});
test('Should return fizz', t => {
const result = fizzBuzz(3);
t.is(result, 'fizz');
});
test('Should return buzz', t => {
const result = fizzBuzz(5);
t.is(result, 'buzz');
});
test('Should return fizzbuzz', t => {
const result = fizzBuzz(15);
t.is(result, 'fizzbuzz');
});