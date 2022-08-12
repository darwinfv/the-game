import 'css/Card.css'

function Card({ number }) {
  return (
    <div className="card">
      <div className="top">
        <p>{ number }</p>
        <p>{ number }</p>
      </div>
      <p>{ number }</p>
      {/* <div className="bottom"> */}
        <p>{ number }</p>
        <p>{ number }</p>
      {/* </div> */}
    </div>
  );
}

export default Card;
