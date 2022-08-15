export function click(event, data) {
  let parent = getParent(event.target);
  parent.style.zIndex = 1;
}

export function drop(event, data) {
  let card = checkHover(event.pageX, event.pageY)
  if (card) {
    let parent = getParent(event.target)
    changeNumber(card, parent.childNodes[0].childNodes[0].childNodes[0].innerHTML);
    card.style.backgroundColor = 'white';
    return true;
  } else {
      let parent = getParent(event.target);
      parent.style.zIndex = 0;
  }
}

export function track(event, data) {
  // setPosition({ x: data.x, y: data.y });
  // console.log(e.pageX, e.pageY);

  let card = checkHover(event.pageX, event.pageY)
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