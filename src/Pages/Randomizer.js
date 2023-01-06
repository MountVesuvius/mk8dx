import react from 'react';

import Build from '../Components/Build';

// Just temp while testing
import '../Styles/Build.css';

function randInt(min, max) {
	    min = Math.ceil(min);
	    max = Math.floor(max);
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	}

const Randomizer = () => {
	/*
		Characters: 42
		Bodys: 	40
		Tires: 21
		Gliders: 14
	*/

	// TODO: User selected random
	// Currently this is hardcoded random on refresh. add on click functionality (to a btn of course)

	return (
		<>	
			<h1>Random Builds</h1>
			<div className="rand">
				<Build character="0" kart="0" tires="0" glider="0"></Build>
				<Build character={randInt(0, 41)} kart={randInt(0, 39)} tires={randInt(0, 20)} glider={randInt(0,13)}></Build>
				<Build character={randInt(0, 41)} kart={randInt(0, 39)} tires={randInt(0, 20)} glider={randInt(0,13)}></Build>
				<Build character={randInt(0, 41)} kart={randInt(0, 39)} tires={randInt(0, 20)} glider={randInt(0,13)}></Build>
				<Build character={randInt(0, 41)} kart={randInt(0, 39)} tires={randInt(0, 20)} glider={randInt(0,13)}></Build>
				<Build character={randInt(0, 41)} kart={randInt(0, 39)} tires={randInt(0, 20)} glider={randInt(0,13)}></Build>
			</div>
		</>
	)
}

export default Randomizer;