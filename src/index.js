import _ from 'lodash';
import './style.css';
import Photo from './photo.jpg';
import Data from './data.xml';
import Csv from './data.csv';

function component() {
  let element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  var photo = new Image();
  photo.src = Photo;

  element.appendChild(photo);

  console.log(Data, Csv);

  return element;
}

document.body.appendChild(component());
