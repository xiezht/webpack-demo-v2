import _join from 'lodash/join';


function hello() {
  const element = document.createElement('div');
  element.innerHTML = _join(['hello', 'webpack']);
  return element;
}

document.body.appendChild(hello());

