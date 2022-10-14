import { Link } from "react-router-dom";
import "./C.css";
import '../../index.css';

function C(props) {
	return (
		<div className="containerC">
			<div className="lilac"></div>
			<div className="purple">
				<h1 className="huge">C</h1>
				<div className="three-columns">
					<p className="text">{props.first}</p>
					<p className="text">+</p>
					<p className="text">{props.second}</p>
				</div>
				<div className="two-columns">
					<p className="text">Resultado: {props.suma}</p>
				</div>
				<Link to="/d">
					<button className="continue-btn">
						<p>Continuar</p>
					</button>
				</Link>
			</div>
			<div className="lilac">
				<Link to="/b">
					Regresar
				</Link>
			</div>
		</div>
	);
}

export default C;
