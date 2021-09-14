const closeButton = document.querySelector('.hero__get-discount-close-button');
const getDiscountBlock = document.querySelector('.hero__get-discount');

closeButton.addEventListener('click', () => {
  getDiscountBlock.classList.add('hero__get-discount--hidden');
});
