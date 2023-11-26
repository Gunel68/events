import React, { useState } from 'react';

const UserLogin = () => {
  const [inputValue, setInputValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const handleEmailChange = (e) => {
    setInputValue(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPasswordValue(e.target.value);
  };

  const handleSubmit = () => {
    if (inputValue.endsWith('.ru') && passwordValue.length >= 8) {
      alert('Qeydiyyatdan kecdiz');
      
    } else {
      alert('Sehv melumat');
      
    }
  };

  return (
    <div>
      <label htmlFor="email">Email</label>
      <input type="email" value={inputValue} onChange={handleEmailChange} />
      <br />
      <label htmlFor="password">Password</label>
      <input type="password" value={passwordValue} onChange={handlePasswordChange} />
      <button onClick={handleSubmit}>Send</button>
    </div>
  );
};

export default UserLogin;
