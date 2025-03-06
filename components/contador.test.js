const contar = require('./contador');

test('conta até 5', () => {
  expect(contar(5)).toEqual([1, 2, 3, 4, 5]);
});

test('conta até 1', () => {
  expect(contar(1)).toEqual([1]);
});

test('conta até 0', () => {
  expect(contar(0)).toEqual([]);
});

test('conta até um número negativo', () => {
  expect(contar(-3)).toEqual([]);
});