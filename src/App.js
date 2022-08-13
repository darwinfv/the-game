import 'App.css';
import Card from 'components/Card';

function App() {
  return (
    <div>
      <div id="game">
        <Card number="1" up />
        <Card number="1" up />
        <Card number="100" down />
        <Card number="100" down />
      </div>
      <div id="player">
        <Card number="100" drag/>
      </div>
    </div>
  );
}

export default App;
