import React from "react";

function Card() {
    const handleAlert =()=>{
        alert('thanks for purchasing')
    }
  return (
    <div className="text-center">
      <h4>Payment Details</h4><br/>
      <div>
        <p>Card details</p>
        <input type="text" placeholder="card number" />
      </div><br/>
      <div>
        <p>Card Holder's name</p>
        <input type="text" placeholder="name here" />
      </div><br/>
      <div>
        <p>cvv</p>
        <input type="number"/>
      </div><br/>
      <div>
        <p>expiry date</p>
        <input type="text" placeholder='00/00'/>
      </div><br/>
      <div>
        <p>quantity</p>
        <input type="number" placeholder="2" />
      </div><br/>
      <button onClick={handleAlert} style={{border:'none', fontWeight: 'bold', backgroundColor:'black', color:'white'}}>Purchase</button>
    </div>
  );
}

export default Card;
