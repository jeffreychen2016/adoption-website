const addEventHandlers = require('./events');

const outputDiv = document.getElementById('card-holder');

const buildDomString = (animalArray) => {
  let strang = '';
  animalArray.forEach((animal) => {
    strang += `<div class="col-xs-6 col-md-4">`;
    strang +=   `<div class="thumbnail text-center">`;
    strang +=     `<div class='card-header'>${animal.name}</div>`;
    strang +=     `<img class='card-img' src="${animal.imageUrl}" alt="...">`;
    strang +=     `<div>${animal.color}</div>`;
    strang +=     `<div class='trunc-text'>${animal.specialSkill}</div>`;
    strang +=     `<div class='card-type ${animal.type}'>${animal.type}</div>`;
    strang +=   `</div>`;
    strang += `</div>`;
  });
  return strang;
};

const printToDom = (animalArray) => {
  outputDiv.innerHTML = buildDomString(animalArray);
  addEventHandlers();
};

module.exports = printToDom;
