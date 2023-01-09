import react from 'react';

import '../Styles/StatBar.css';

const StatBar = ({title, points}) => {

	const barList = [];

	if (points.constructor != Array) {
		points = [points];
	}

	for (let i = 0; i < points.length; i++) {
		barList.push(
				<div className="filler" style={{width: `${(points[i]/20)*100}%`}}>
					<span className="label">{points[i]}</span>	
				</div>
			);
	}

	return (
		<>
			<span>{title}</span>
			<div className="bar-container">
				<div className="bar-wrapper">
					{barList}	
				</div>
			</div>
		</>
	)
}

export default StatBar;