function showAllPrices() {
  const showAllPricesButton = document.querySelector('.prices__show-all-prices-button');
  const hiddenPrices = document.querySelectorAll('.prices__item--hidden');
  const buttonText = showAllPricesButton.firstChild.data;
  const buttonTextElement = showAllPricesButton.firstChild;
  let buttonStatus = 'show';

  showAllPricesButton.addEventListener('click', () => {
    hiddenPrices.forEach((price) => {
      price.classList.toggle('prices__item--hidden');
    });

    if (buttonStatus === 'show') {
      buttonTextElement.data = 'Скрыть цены';
      buttonStatus = 'hide';
    } else {
      buttonTextElement.data = buttonText;
      buttonStatus = 'show';
    }
  });
}

export default showAllPrices;
