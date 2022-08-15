import 'App.css';
import Card from 'components/Card';
import { generateDeck } from 'helpers';
import { useState } from 'react';

const props = {
  draggable: true,
};

function App() {
  let cards = generateDeck();
  let player = [];

  for (let i = 0; i < 8; i++) {
    player.push(cards.pop());
  }

  const [deck, setDeck] = useState(cards);
  const [hand, setHand] = useState(player);

  function draw(number) {
    let card = deck.pop();
    setDeck(deck);
    
    let index = 0;
    for (let i = 0; i < hand.length; i++) {
      if (hand[i] === number) {
        index = i;
        break;
      }
    }

    let player = hand;
    player[index] = card;
    setHand(player.slice());
  }

  return (
    <div>
      <div id='game'>
        <Card number={1} up />
        <Card number={1} up />
        <Card number={100} down />
        <Card number={100} down />
      </div>
      <div id='player'>
        <Card number={ hand[0] } { ...props } draw={draw} />
        <Card number={ hand[1] } { ...props } draw={draw} />
        <Card number={ hand[2] } { ...props } draw={draw} />
        <Card number={ hand[3] } { ...props } draw={draw} />
        <Card number={ hand[4] } { ...props } draw={draw} />
        <Card number={ hand[5] } { ...props } draw={draw} />
        <Card number={ hand[6] } { ...props } draw={draw} />
        <Card number={ hand[7] } { ...props } draw={draw} />
      </div>
    </div>
  );
}

export default App;
