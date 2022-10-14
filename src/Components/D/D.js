import { Link } from "react-router-dom";
import muñequito from "../../assets/Muñequito.png";
import backyardigans from "../../assets/RPReplay_Final1662780148.mp4";

function D() {
	return (
		<div className="containerD">
			<div className="lilac"></div>
			<div className="purple">
				<h1 className="huge">D</h1>
				<div>
					<image src={muñequito} alt="business man"></image>
					<image src="../../assets/giphy.gif" alt="Homero Simpson hiding in the bushes"></image>
				</div>
				<video width="320" height="240" controls>
					<source src={backyardigans} />
				</video>
			</div>
			<div className="lilac">
				<Link to="/b">Regresar</Link>
			</div>
		</div>
	);
}

export default D;
