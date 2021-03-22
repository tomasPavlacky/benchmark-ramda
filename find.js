const Benchmark = require('benchmark');
const { find, equals } = require('ramda');

const suite = new Benchmark.Suite;

const numbers = [1,2,3,4,5];

// add tests
suite
.add(`find(equals(1), numbers)`, ()=> { find(equals(1), numbers) })
.add('numbers.find((number) => 1 === number)', ()=> { numbers.find((number) => 1 === number) })

// add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run async
.run({ 'async': false });