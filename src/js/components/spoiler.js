const spoilers = document.querySelectorAll('.spoiler');

// Changes the height of open spoilers.
function changeSpoilerMaxHeight(spoiler, content, blockClassNameOpenModifier) {
  const contentBlock = content;
  if (spoiler.classList.contains(blockClassNameOpenModifier)) {
    contentBlock.style.maxHeight = `${content.scrollHeight}px`;
  }
}

spoilers.forEach((spoiler) => {
  const control = spoiler.querySelector('.spoiler__control');
  const content = spoiler.querySelector('.spoiler__content');
  const innerButtons = content.querySelectorAll('button');

  // BEM "block__spoiler--open" modifier for each spoiler
  const blockClassNameOpenModifier = `${spoiler.dataset.blockClass}__spoiler--open`;

  const resizeEventHandler = () => {
    changeSpoilerMaxHeight(spoiler, content, blockClassNameOpenModifier);
  };

  // BUG FIX:
  // Updates the spoiler height after click on back button changing the display property
  // from display: none to display: block.
  if (spoiler.dataset.spoilerId) {
    const { spoilerId } = spoiler.dataset;
    const backToSpoilerButtons = document.querySelectorAll(`[data-back-to-spoiler-id=${spoilerId}]`);

    backToSpoilerButtons.forEach((backButton) => {
      backButton.addEventListener('click', () => {
        setTimeout(resizeEventHandler, 0);
      });
    });
  }

  innerButtons.forEach((button) => {
    button.setAttribute('tabindex', '-1');
  });

  control.addEventListener('click', () => {
    spoiler.classList.toggle(blockClassNameOpenModifier);

    if (spoiler.classList.contains(blockClassNameOpenModifier)) {
      content.style.maxHeight = `${content.scrollHeight}px`;
      window.addEventListener('resize', resizeEventHandler);

      control.setAttribute('aria-expanded', true);
      content.setAttribute('aria-hidden', false);

      innerButtons.forEach((button) => {
        button.setAttribute('tabindex', '0');
      });
    } else {
      content.style.maxHeight = null;
      window.removeEventListener('resize', resizeEventHandler);

      control.setAttribute('aria-expanded', false);
      content.setAttribute('aria-hidden', true);

      innerButtons.forEach((button) => {
        button.setAttribute('tabindex', '-1');
      });
    }
  });
});
