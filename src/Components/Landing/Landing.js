import { Link } from "react-router-dom";
import './Landing.css';
import '../../index.css';

export default function Landing() {
	return (
		<div className="landing-container">
			<Link to="/a">
				<button className="continue-btn">
					<p>Continuar</p>
				</button>
			</Link>
		</div>
	);
}
