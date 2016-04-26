import Evaluator from './Evaluator';

const evaluator = new Evaluator();

const context = {
  variables: {
    name: 'Karel'
  }
};

let compiled = evaluator.evaluate("min(1, 2)", context);
console.log(compiled({
  variables: {
    i: 100
  }
}));

// /*
const iterations = 1e6;
var start = new Date().getTime();
for (var i = 0; i < iterations; i++) {
  compiled({
    variables: {
      i,
      j: 'Jirina',
      k: 'Karel'
    }
  });
}
var end = new Date().getTime();
var time = (end - start) * 0.001;
console.log('Execution time: ' + time + ' sec');
console.log('Execturion speed: ' + iterations/time + ' ops/sec.');

compiled = evaluator.evaluate("$name", context);

console.log(compiled());

console.log(compiled({
  variables: {
    name: 'Jaryn'
  }
}));
// */