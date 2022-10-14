import { useState } from "react";
import "./App.css";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Landing/Landing";
import A from "./Components/A/A";
import B from "./Components/B/B";
import C from "./Components/C/C";
import D from "./Components/D/D";

function App() {
	const [first, setFirst] = useState(0);
	const [second, setSecond] = useState(0);
	const [suma, setSuma] = useState(0);
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/a" element={<A></A>} />
				<Route path="/b" element={<B first={first} setFirst={setFirst} second={second} setSecond={setSecond} setSuma={setSuma}></B>} />
				<Route path="/c" element={<C first={first} second={second} suma={suma}></C>} />
				<Route path="/d" element={<D suma={suma}></D>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
