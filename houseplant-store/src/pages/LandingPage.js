
import React from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Houseplant Store</h1>
      <p>Your one-stop shop for all your houseplant needs.</p>
      <button onClick={() => navigate('/products')}>Get Started</button>
    </div>
  );
}

export default LandingPage;
