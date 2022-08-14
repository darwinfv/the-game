import 'App.css';
import Card from 'components/Card';
import { generateDeck } from 'helpers';
import { useState } from 'react';

const props = {
  draggable: true,
  id: 'app'
};

function App() {
  let cards = generateDeck();
  let player = [];

  for (let i = 0; i < 8; i++) {
    player.push(cards.pop());
  }

  const [stack, setStack] = useState([1, 1, 100, 100]);
  const [deck, setDeck] = useState(cards);
  const [hand, setHand] = useState(player);

  return (
    <div>
      <div id='game'>
        <Card number={ stack[0] } up />
        <Card number={ stack[1] } up />
        <Card number={ stack[2] } down />
        <Card number={ stack[3] } down />
      </div>
      <div id='player'>
        <Card number={ hand[0] } { ...props } />
        <Card number={ hand[1] } { ...props } />
        <Card number={ hand[2] } { ...props } />
        <Card number={ hand[3] } { ...props } />
        <Card number={ hand[4] } { ...props } />
        <Card number={ hand[5] } { ...props } />
        <Card number={ hand[6] } { ...props } />
        <Card number={ hand[7] } { ...props } />
      </div>
    </div>
  );
}

export default App;
