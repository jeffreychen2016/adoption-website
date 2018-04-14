const loadAnimals = (runOnSuccess, runOnFailure) => {
  const xhrRequest = new XMLHttpRequest();
  xhrRequest.addEventListener('load',runOnSuccess);
  xhrRequest.addEventListener('error',runOnFailure);
  xhrRequest.open('GET','../db/pets.json');
  xhrRequest.send();
};

module.exports = loadAnimals;
