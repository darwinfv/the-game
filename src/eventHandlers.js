export function click(event, data) {
  let parent = getParent(event.target);
  parent.style.zIndex = 1;
}

export function drop(event, data) {
  let parent = getParent(event.target);
  let card = checkHover(event.pageX, event.pageY, value(parent));
  if (card) {
    changeNumber(card, value(parent));
    card.style.backgroundColor = 'white';
    return true;
  } else {
    parent.style.zIndex = 0;
  }
}

export function track(event, data) {
  let card = checkHover(event.pageX, event.pageY, value(getParent(event.target)))
  if (card) {
    flicker(card);
  }
}

function flicker(element) {
  element.style.backgroundColor = 'grey';
}

function changeNumber(element, number) {
  element.childNodes[0].childNodes[0].innerHTML = number;
  element.childNodes[0].childNodes[1].innerHTML = number;
  element.childNodes[1].childNodes[0].innerHTML = number;
  element.childNodes[2].childNodes[0].innerHTML = number;
  element.childNodes[2].childNodes[1].innerHTML = number;
}

function checkHover(x, y, number) {
  let cards = document.getElementsByClassName('card');
  for (let i = 0; i < 4; i++) {
    let rect = cards[i].getBoundingClientRect();
    if (x > rect.left && x < rect.right && y > rect.top && y < rect.bottom) {
      if (checkValid(value(getParent(cards[i])), number, i)) {
        return cards[i];
      }
      return;
    } else {
      cards[i].style.backgroundColor = 'white';
    }
  }
}

function checkValid(dest, source, dir) {
  source = parseInt(source);
  dest = parseInt(dest);
  if (dir < 2) {
    return source > dest || source === dest - 10;
  } else {
    return source < dest || source === dest + 10;
  }
}

function value(element) {
  return element.childNodes[element.childNodes.length - 1].childNodes[0].childNodes[0].innerHTML;
}

function getParent(element) {
  while (!element.className.includes('arrow')) {
    element = element.parentNode;
  }
  return element;
}
