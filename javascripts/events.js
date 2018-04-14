const search = () => {
  console.log('test');
};

const addEventHandlers = () => {
  const allBtns = document.getElementsByClassName('animal-btn');
  for (let i = 0; i < allBtns.length; i++) {
    allBtns[i].addEventListener('click',search);
  };
};

module.exports = addEventHandlers;
