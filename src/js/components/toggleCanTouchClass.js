let isTouch = false; // var to indicate current input type (is touch versus no touch)
let isTouchTimer;
let curRootClass = ''; // var indicating current document root class ("can-touch" or "")

function addTouchClass(canTouchClassName) {
  clearTimeout(isTouchTimer);
  isTouch = true;
  if (curRootClass !== canTouchClassName) { // add "can-touch' class if it's not already present
    curRootClass = canTouchClassName;
    document.documentElement.classList.add(curRootClass);
  }
  isTouchTimer = setTimeout(() => { isTouch = false; }, 1000);
  // maintain "istouch" state for 500ms so removetouchclass
  //  doesn't get fired immediately following a touch event
}

function removeTouchClass(canTouchClassName) {
  if (!isTouch && curRootClass === canTouchClassName) {
    // remove 'can-touch' class if not triggered by a touch event and class is present
    isTouch = false;
    curRootClass = '';
    document.documentElement.classList.remove(canTouchClassName);
  }
}

function toggleCanTouchClass(canTouchClassName) {
  // closure for bind param
  function bindParam(functionIn, paramToBind) {
    return function functionOut() {
      functionIn(paramToBind);
    };
  }

  const addTouchClassWithParam = bindParam(addTouchClass, canTouchClassName);
  const removeTouchClassWithParam = bindParam(removeTouchClass, canTouchClassName);

  // this event only gets called when input type is touch
  document.addEventListener('touchstart', addTouchClassWithParam, false);

  // this event gets called when input type is everything from touch to mouse/ trackpad
  document.addEventListener('mouseover', removeTouchClassWithParam, false);
}

export default toggleCanTouchClass;
