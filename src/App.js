import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState([{}]);
  useEffect(() => {
    fetch("./product")
      .then((response) => response.json())
      .then((data) => setState(data));
  }, []);
  console.log(state);
  return (
    <div>
      <ul>
        {state.map((elm) => (
          <li>
            {elm.site} | {elm.titre} | {elm.prix_actuel}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
