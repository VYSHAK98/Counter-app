import { useState } from 'react';
import './App.css';


function App() {

  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className='counter'>
      <h1>Counter App</h1>
      <input className='inputbox' type="number" value={count} readOnly /><br />
      <button className='buttons' onClick={handleIncrement}>Increment</button>
      <button className='buttons' onClick={handleDecrement}>Decrement</button>
      <button className='buttons' onClick={handleReset}>Reset</button>
    </div>
  );
}


export default App;
