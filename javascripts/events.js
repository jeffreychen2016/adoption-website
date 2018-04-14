const search = (e) => {
  resetCards();
  const allCards = document.getElementsByClassName('animal-card');
  for (let i = 0; i < allCards.length; i++) {
    const cardClass = allCards[i].childNodes[0].childNodes[4].classList[1];
    if (e.target.classList[2] !== cardClass) {
      allCards[i].classList.add('hide');
    };
  };
};

const resetCards = () => {
  const allCards = document.getElementsByClassName('animal-card');
  for (let i = 0; i < allCards.length; i++) {
    allCards[i].classList.remove('hide');
  };
};

const addEventHandlers = () => {
  const allBtns = document.getElementsByClassName('btn');
  for (let i = 0; i < allBtns.length; i++) {
    if (allBtns[i].classList[2] === 'unfilter-btn') {
      allBtns[i].addEventListener('click',resetCards);
    } else {
      allBtns[i].addEventListener('click',search);
    };
  };
};

module.exports = addEventHandlers;
