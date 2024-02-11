import { useState } from 'react';
import './App.css';

function App() {

  const [value,setValue] = useState(0);
  return (
    <div className="App">
      <div className="box">
        <h2>{value}</h2>

        <div className="btn">
          <button onClick={() => setValue(value-1)}>Decrement</button>
          <button onClick={() => setValue(value+1)}>Increment</button>
        </div>
      </div>
    </div>
  );
}

export default App;
