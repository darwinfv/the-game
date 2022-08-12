import 'css/Card.css'

function Card({ number }) {
  return (
    <div className="card">
      <div className="row">
        <p>{ number }</p>
        <p>{ number }</p>
      </div>
      <p>{ number }</p>
      <div className="row">
        <p>{ number }</p>
        <p>{ number }</p>
      </div>
    </div>
  );
}

export default Card;
