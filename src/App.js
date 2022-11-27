import 'css/App.css';
import Card from 'components/Card';
import { changeNumber } from 'eventHandlers';
import { generateDeck, validate } from 'helpers';
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
  const [undo, setUndo] = useState([]);

  function undoOne() {
    let last = undo.pop();
    setUndo(undo.slice());

    setDeck(last.deck);
    console.log(deck.length)
    setHand(last.hand);
    changeNumber(document.getElementsByClassName('card')[last.position], last.number)
  }

  function draw(number, stack) {
    console.log(deck.length)
    let card = deck.pop();
    let step = {
      hand: hand.slice(),
      deck: deck.slice(),
      number: stack[0],
      position: stack[1]
    };
    
    undo.push(step);
    setUndo(undo.slice());

    let index = 0;
    for (let i = 0; i < hand.length; i++) {
      if (hand[i] === number) {
        index = i;
        break;
      }
    }

    let player = hand;

    if (card) {
      setDeck(deck);
      player[index] = card;
    } else {
      player.splice(index, 1);
    }
    setHand(player.slice());

    if (!validate(player)) {
      if (player.length === 0) {
        alert('You Win!');
      } else {
        alert('You Lose.');
      }
    }
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
        {
          hand.map((card) => {
            return <Card number={ card } key={card} { ...props } draw={draw} />
          })
        }
      </div>
      <div id='controls'>
        {
          <button onClick={undoOne}>
            Undo
          </button>
        }
      </div>
    </div>
  );
}

export default App;
