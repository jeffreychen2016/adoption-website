const search = (e) => {
  const allCards = document.getElementsByClassName('animal-card');
  for (let i = 0; i < allCards.length; i++) {
    const cardClass = allCards[i].childNodes[0].childNodes[4].classList[1];
    if (e.target.classList[3] !== cardClass) {
      allCards[i].classList.add('hide');
    };
  };
};

const addEventHandlers = () => {
  const allBtns = document.getElementsByClassName('animal-btn');
  for (let i = 0; i < allBtns.length; i++) {
    allBtns[i].addEventListener('click',search);
  };
};

module.exports = addEventHandlers;
