import React from 'react';
import { useState } from 'react';
import { BodyFatResult } from './Components/BodyFatResult';
import { Form } from './Components/Form';
import { Main } from './Components/Main';
import { NavBar } from './Components/NavBar';

// export const Context = React.createContext({});
function App() {
  const [fatPercentage, setFatPercentage] = useState(2);
  const [isblank, setIsblank] = useState(true);
  // console.log(fatPercentage);

  return (
    <div>
      <NavBar />
      <Main>
        <div className="col-lg-6 col-md-12 pt-4">
          <Form setFatPercentage={setFatPercentage} setIsblank={setIsblank} />
        </div>
        <div className="col-lg-6 col-md-12 pt-4">
          {!isblank && <BodyFatResult fatPercentage={fatPercentage} />}
        </div>
      </Main>
    </div>
  );
  // return <NavBar />;
}

export default App;
