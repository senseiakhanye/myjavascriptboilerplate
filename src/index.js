// import 'index.css'; //Must modules to make it allow css extentions.
import numeral from 'numeral';

const courseValue = numeral(1000).format('$0,0.00');
console.log(`I would pay ${courseValue}`); //eslint-disable-line no-console
