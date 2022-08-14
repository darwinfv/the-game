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
