import React, { useState, useEffect } from "react";
// import { Counter } from "./features/counter/Counter";
import "./App.css";

import Cities from "./app/cities";

function App() {
  const [covidData, setCovidData] = useState(null);

  useEffect(() => {
    fetch(`https://covidnigeria.herokuapp.com/api`).then((res) => {
      setCovidData(res.json());
    });
  }, []);

  return (
    <div className="App">
      <section>
        <div>
          <h1>NIGERIAN COVID-19 DATA</h1>
        </div>
        <div className="generalData">
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
        </div>
        <div className="cards-container">
          <div className="card">
            hhhh
            {covidData && <Cities covidInfo={covidData.states} />}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
