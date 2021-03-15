function sum(a, b) {
  if (typeof a !== 'number' && typeof b !== 'number' || typeof a === 'string' || typeof b  === 'string') {
    throw new TypeError('неверный тип данных!')
  } else {
    return a + b
  }
}

module.exports = sum;
