import React, { useState } from 'react';
import './App.css';

function AgeCalculator() {
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    if (birthdate) {
      const birthdateDate = new Date(birthdate);
      const currentDate = new Date();
      const ageDiff = currentDate - birthdateDate;
      const ageDate = new Date(ageDiff);
      const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);
      setAge(calculatedAge);
    }
  };

  return (
    <div className="age-calculator-container"> 
      <h1>Age Calculator</h1>
      <div>
        <h3>Enter your birthdate:</h3>
        <br/>
        <input type="date" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} />
      </div>
      <br/><br/>
      <button className="calculate-button" onClick={calculateAge}>Calculate Age</button> 
      <br/><br/>
      {age && <h2>You are {age} years old.</h2>}
      <br/><br/>
    </div>
  );
}


export default AgeCalculator;
