const sentence = "hello there from lighthouse labs";

// eslint-disable-next-line func-style
function* delayGenerator(delay, approxDelay = 120, percDeviation = 0.4) { // create incrementing deviating delays
  while (true) {
    const rndShift = (Math.random() * approxDelay) * percDeviation - approxDelay * (percDeviation / 2);
    delay += approxDelay + rndShift;
    yield delay;
  }
}

const delay = delayGenerator(50,200,0.8);
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay.next().value);
}
setTimeout(() => {
  process.stdout.write('\n');
}, delay.next().value);