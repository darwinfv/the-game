export function click(event, data) {
  let parent = getParent(event.target);
  parent.style.zIndex = 1;
}

export function drop(event, data) {
  let parent = getParent(event.target);
  parent.style.zIndex = 0;
}

export function track(e, data) {
  // setPosition({ x: data.x, y: data.y });
  // console.log(e.pageX, e.pageY);

  let card = checkHover(e.pageX, e.pageY)
  if (card) {
    flicker(card);
  }
}

function flicker(element) {
  element.style.backgroundColor = 'grey';
}

function checkHover(x, y) {
  let cards = document.getElementsByClassName('card');
  for (let i = 0; i < 4; i++) {
    let rect = cards[i].getBoundingClientRect();
    if (x > rect.left && x < rect.right && y > rect.top && y < rect.bottom) {
      return cards[i];
    } else {
      cards[i].style.backgroundColor = 'white';
    }
  }
  return false;
}

function getParent(element) {
  while (!element.className.includes('arrow')) {
    element = element.parentNode;
  }
  return element;
}