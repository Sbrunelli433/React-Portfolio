import React, { useState } from 'react';
import logo from './logo.svg';
import './styles.css';
// import './App.css';

function App() {

  const [data, setData] = useState("");
  const calcBtns = [];
  [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, ".", "%"].forEach(item => {
	calcBtns.push(
	  <button onClick={e => {
		setData(data + e.target.value)
	  }}
	  value={item}
	  key={item}>
		{item}
	  </button>
	)
  })
  return (
	<div className="wrapper">
		<div className="show-input">{data}</div>
		<div className="digits flex">{calcBtns}</div>
		<div className="modifiers grid">
			<button onClick={() => setData(data.substr(0, data.length - 1))}>
				Clear
			</button>
			
		</div>


	</div>
  );
}

export default App;
