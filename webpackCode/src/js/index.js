import _ from "lodash";
import '../css/index.scss';
import gift from '../images/gift_4.png';
import printMe from './print.js';

function component() {
  const element = document.createElement('div');

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  var img = document.createElement('img');
  img.src = gift;
  document.body.appendChild(img);
  img.onclick = printMe;
  return element;
}

document.body.appendChild(component());