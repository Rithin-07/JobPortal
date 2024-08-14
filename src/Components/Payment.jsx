import React, { useState } from 'react';
import './CSS/Payment.css';

const PaymentForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, cardNumber, expiryDate, cvv });
  };

  return (+
    <div className="payment-form">
      <h2>Payment Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name on Card</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Card Number</label>
          <input 
            type="text" 
            value={cardNumber} 
            onChange={(e) => setCardNumber(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Expiry Date</label>
          <input 
            type="text" 
            value={expiryDate} 
            onChange={(e) => setExpiryDate(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>CVV</label>
          <input 
            type="password" 
            value={cvv} 
            onChange={(e) => setCvv(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default PaymentForm;
