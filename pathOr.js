const Benchmark = require('benchmark');
const { pathOr } = require('ramda');

const suite = new Benchmark.Suite;

const person = {};

// add tests
suite.add(`pathOr(null, ['user', 'age'], person)`, ()=> { pathOr(null, ['user', 'age'], person) })
.add('person?.user?.age ?? null', ()=> { person?.user?.age ?? null; })

// add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run async
.run({ 'async': false });