// Import stylesheets
import './style.css';

const inputObj = {
  sample: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  rotateBy: 1
};

// Write Javascript code!
const appContainer = document.getElementById('container');

const clear = function() {
  appContainer.innerHTML = '';
};

const renderContainer = function(input, container) {
  clear();
  let element = '';
  input.forEach(value => {
    element = document.createElement('div');
    element.classList = 'box';
    element.innerHTML = value;
    container.appendChild(element);
  });
};

/**
 * In place rotation.
 * @input is an array and holds the reference of the array
 * being rotated.
 */
const rotateArray = function(input) {
  if (input.rotateBy > input.sample.length) {
    input.rotateBy = input.rotateBy % input.sample.length;
  }
  const slice1 = input.sample.slice(input.rotateBy);
  const slice2 = input.sample.slice(0, input.rotateBy);
  input.sample = slice1.concat(slice2);
};

renderContainer(inputObj.sample, appContainer);
rotateArray(inputObj);
renderContainer(inputObj.sample, appContainer);
