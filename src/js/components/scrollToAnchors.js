import smoothScroll from './smoothScroll';

function scrollToAnchors() {
  const links = document.querySelectorAll('a[href^="#"]');
  const linksArray = Array.prototype.slice.call(links);
  linksArray.forEach((each) => {
    each.addEventListener('click', function scrollTo() {
      const currentTarget = this.getAttribute('href');
      smoothScroll(currentTarget, 1000);
    });
  });
}

export default scrollToAnchors;
