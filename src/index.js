import _ from 'lodash';
import { cube } from './math.js';
import printMe from './print.js';
import './style.css';

function component() {
  let element = document.createElement('div');
  let btn = document.createElement('button');
  let pre = document.createElement('pre');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  pre.innerHTML = '5 cubed is equal to ' + cube(5);

  element.appendChild(pre);

  return element;
}

let element = component();
document.body.appendChild(element);

if(module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    document.body.removeChild(element);
    element = component();
    document.body.appendChild(element);
  });
}
