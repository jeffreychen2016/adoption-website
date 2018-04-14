const xhrCall = require('./pets');
const printToDom = require('./dom');

let animalArray = [];

const runOnSuccess = function () {
  animalArray = JSON.parse(this.responseText).pets;
  printToDom(animalArray);
};

const runOnFailure = function () {
  console.error('XHR Fails~~~!');
};

const initializer = () => {
  xhrCall(runOnSuccess, runOnFailure);
};

module.exports = initializer;
