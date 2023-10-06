// import { Button } from 'react-bootstrap'; // TODO: COMMENT IN FOR AUTH
// import { signOut } from '../utils/auth'; // TODO: COMMENT IN FOR AUTH
// import { useAuth } from '../utils/context/authContext'; // TODO: COMMENT IN FOR AUTH

// import { ButtonGroup } from "react-bootstrap";

import { useState } from 'react';

function Home() {
  // const { user } = useAuth(); // TODO: COMMENT IN FOR AUTH

  const user = { displayName: 'Paul Patterson' }; // TODO: COMMENT OUT FOR AUTH

  const [counterValue, setCounterValue] = useState(0);

  const handleClick = (action) => {
    switch (action) {
      case 'Increment':
        setCounterValue((prevState) => prevState + 1);
        break;
      case 'Decrement':
        setCounterValue((prevState) => prevState - 1);
        break;
      case 'Reset':
        setCounterValue(0);
        break;
      default:
        break;
    }
  };
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1>Hello {user.displayName}! </h1>
      <div>Counter 1</div>
      <h2>{counterValue}</h2>
      <button type="button" onClick={() => handleClick('Reset')}>Reset</button>
      <button type="button" onClick={() => handleClick('Increment')}>Increment</button>
      <button type="button" onClick={() => handleClick('Decrement')}>Decrement</button>
    </div>
  );
}

export default Home;
