import 'css/Card.css'

function Card({ number, up, down, drag }) {
  return (
    <div className='arrow'>
      {
        up && <div className='up'>
          <p>&#9650;</p>
          <p>&#9650;</p>
        </div>
      }
      {
        down && <div className='down'>
          <p>&#9660;</p>
          <p>&#9660;</p>
        </div>
      }
      <div className='card'>
        <div className='row'>
          <p>{ number }</p>
          <p>{ number }</p>
        </div>
        <div className='num'>
          <p>{ number }</p>
        </div>
        <div className='row'>
          <p>{ number }</p>
          <p>{ number }</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
