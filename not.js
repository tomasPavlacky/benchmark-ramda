const Benchmark = require('benchmark');
const { not } = require('ramda');

const suite = new Benchmark.Suite;

// add tests
suite
.add(`not(true)`, ()=> { not(true) })
.add('!true', ()=> { !true })

// add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run async
.run({ 'async': false });