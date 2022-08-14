import 'App.css';
import Card from 'components/Card';
import { generateDeck } from 'helpers';

const props = {
  draggable: true,
  id: 'app'
};

function App() {
  let deck = generateDeck();
  let hand = [];

  for (let i = 0; i < 8; i++) {
    hand.push(deck.pop());
  }

  return (
    <div>
      <div id='game'>
        <Card number='1' up />
        <Card number='1' up />
        <Card number='100' down />
        <Card number='100' down />
      </div>
      <div id='player'>
        <Card number={hand[0]} {...props} />
        <Card number={hand[1]} {...props} />
        <Card number={hand[2]} {...props} />
        <Card number={hand[3]} {...props} />
        <Card number={hand[4]} {...props} />
        <Card number={hand[5]} {...props} />
        <Card number={hand[6]} {...props} />
        <Card number={hand[7]} {...props} />
      </div>
    </div>
  );
}

export default App;
