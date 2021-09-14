function removeClassFromListItems(list, className) {
  for (let i = 0; i < list.length; i += 1) {
    list[i].classList.remove(className);
  }
}
function setClassToCurrentMainNavLink(mainNavLinksClassName, currentModifierClassName) {
  const mainNavLinks = document.querySelectorAll(`.${mainNavLinksClassName}`);

  for (let i = 0; i < mainNavLinks.length; i += 1) {
    const link = mainNavLinks[i];
    link.addEventListener('click', function setCurrentLink() {
      removeClassFromListItems(mainNavLinks, currentModifierClassName);
      this.classList.add(currentModifierClassName);
    });
  }
}

export default setClassToCurrentMainNavLink;
