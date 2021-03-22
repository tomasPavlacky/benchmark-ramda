const Benchmark = require('benchmark');
const { isNil } = require('ramda');

const suite = new Benchmark.Suite;

// add tests
suite
.add(`isNil(null)`, ()=> { isNil(null) })
.add('null === null', ()=> { null === null })

// add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run async
.run({ 'async': false });