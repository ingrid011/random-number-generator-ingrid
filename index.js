function randomNoGeneratorIngrid(min, max) {
  if (typeof max !== 'number' && typeof min !== 'number') {
    min = 0;
    max = 1;
  }
  return Math.random() * (max - min) + min;
}

const magicString = () => {
  return 'Hello World';
};

module.exports = { randomNoGeneratorIngrid, magicString };
