function* generateRange(end, start = 0, step = 1) {
  let x = start - step;
  while(x < end - step) yield x += step;
}

const gen5 = generateRange(5);
let x = gen5.next();

while (!x.done) {
  console.log(x.value);
  x = gen5.next();
}