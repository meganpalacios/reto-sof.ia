import { Link } from "react-router-dom";
import "./A.css";
import '../../index.css';

function A() {
	return (
		<div className="a-container">
			<h1 className="huge">A</h1>
            <Link to="/b">
				<button className="continue-btn">
					<p>Continuar</p>
				</button>
			</Link>
		</div>
	);
}

export default A;
