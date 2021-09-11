// Import stylesheets
import './style.css';

const inputObj = {
  sample: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  rotateBy: 0
};

const appContainer = document.getElementById('container');
const rotateByNumber = document.getElementById('rotateByNumber');
const rotateBy = document.getElementById('rotateBy');
const reset = document.getElementById('reset');

const rotate = function(inputObj) {
  rotateArray(inputObj);
  renderContainer(inputObj.sample, appContainer);
};

rotateBy.addEventListener('click', () => {
  inputObj.rotateBy = rotateByNumber.value;
  rotate(inputObj);
});

reset.addEventListener('click', () => {
  inputObj.sample = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  inputObj.rotateBy = 0;
  renderContainer(inputObj.sample, appContainer);
});

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

rotateByNumber.value = inputObj.rotateBy;
renderContainer(inputObj.sample, appContainer);
