function ease(m, b, c, d) {
  let t = m / (d / 2);
  if (t < 1) return (c / 2) * t * t + b;
  t -= 1;
  return (-c / 2) * (t * (t - 2) - 1) + b;
}

function smoothScroll(targetEl, duration) {
  const target = document.querySelector(targetEl);
  const targetPosition = target.getBoundingClientRect().top;
  const startPosition = window.pageYOffset;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, targetPosition, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  requestAnimationFrame(animation);
}

export default smoothScroll;
