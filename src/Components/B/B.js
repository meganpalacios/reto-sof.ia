import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./B.css";
import '../../index.css';

function B(props) {
	const nav = useNavigate();

	const captureFirst = (e) => {
		props.setFirst(parseInt(e.target.value));
	};
	const captureSecond = (e) => {
		props.setSecond(parseInt(e.target.value));
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		props.setSuma(props.first + props.second);
		nav("/c");
	};

	return (
		<div className="containerB">
			<div className="lilac"></div>
			<div className="purple">
				<h1 className="huge">B</h1>
				<form className="form-container" onSubmit={handleSubmit}>
					<div className="form-group">
						<input type="number" value={props.first} onChange={captureFirst} />
						<p className="x">&#x2B;</p>
						<input type="number" value={props.second} onChange={captureSecond} />
					</div>
					<button className="continue-btn" type="submit">
						<p>Continuar</p>
					</button>
				</form>
			</div>
			<div className="lilac">
				<Link to="/a">
					Regresar
				</Link>
			</div>
		</div>
	);
}

export default B;
