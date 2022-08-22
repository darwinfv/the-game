export function generateDeck() {
  let deck = [];

  for (let i = 2; i < 100; i++) {
    deck.push(i);
  }

  let curr = deck.length;
  let rand;

  while (curr !== 0) {
    rand = Math.floor(Math.random() * curr);
    curr--;
    [deck[curr], deck[rand]] = [deck[rand], deck[curr]];
  }

  return deck;
}

export function validate(player) {
  let cards = document.getElementsByClassName('card');
  let nums = [];

  for (let i = 0; i < 4; i++) {
    nums[i] = value(cards[i]);
  }

  for (let j = 0; j < player.length; j++) {
    for (let i = 0; i < 2; i++) {
      if (player[j] > nums[i] || player[j] === nums[i] - 10) {
        return true;
      }
    }

    for (let i = 2; i < 4; i++) {
      if (player[j] < nums[i] || player[j] === nums[i] + 10) {
        return true;
      }
    }
  }
}

function value(element) {
  return element.childNodes[0].childNodes[0].innerHTML;
}