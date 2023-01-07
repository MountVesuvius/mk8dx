import react, { useState } from 'react';

import Build from '../Components/Build';

import '../Styles/Randomizer.css';

/*
	Note for randomizing builds:

	Characters: 42
	Bodys: 	40
	Tires: 21
	Gliders: 14
*/

function randInt(min, max) {
	    min = Math.ceil(min);
	    max = Math.floor(max);
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	}

const Randomizer = () => {
	

	/*
	Function: addBuild

	Allows for only three randomized builds to be displayed at one time.
	This has been done to keep within screen limits for the time being,
	I personally just don't want to scroll while working.
	*/

	const [buildList, setBuildList] = useState([]);

	function addBuild(event) {
		if (buildList.length >= 3) {
			setBuildList(buildList.shift());
		}

		setBuildList(buildList.concat(
			// could probably be smarter about the randomization
			<Build character={randInt(0, 41)} kart={randInt(0, 39)} tires={randInt(0, 20)} glider={randInt(0,13)}></Build>
		));
	}

	return (
		<>	
			<h1>Random Builds</h1>
			<button className="generate-btn" onClick={addBuild}>Generate Build</button>
			<div className="rand">
				{buildList}
			</div>
		</>
	)
}

export default Randomizer;