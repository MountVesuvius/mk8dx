import react, { useState } from 'react';

import StatBar from './StatBar';

import data from '../part_data.json';
import '../Styles/Build.css';

const imgDir_chars = "./Sprites/charSprites/"
const imgDir_gliders = "./Sprites/gliderSprites/"
const imgDir_karts = "./Sprites/kartSprites/"
const imgDir_tires = "./Sprites/tireSprites/"


const Build = ({character, kart, tires, glider}) => {

	const char = data['part_dict']['char'][character];
	const body = data['part_dict']['body'][kart];
	const tire = data['part_dict']['tire'][tires];
	const glide = data['part_dict']['glider'][glider];

	const contain = {char, body, tire, glide};

	var buildStats = {
		"weight" : 0,
		"acceleration" : 0,
		"traction-on": 0,
		"traction-off": 0,
		"mini-turbo": 0,
		"speed-ground": 0,
		"speed-water": 0,
		"speed-antigrav": 0,
		"speed-air": 0,
		"handling-ground": 0,
		"handling-water": 0,
		"handling-antigrav": 0,
		"handling-air": 0
	}

	/*
	Function: calculateBuildStats

	Fills buildStats dictionary above to fill in the StatBar component.
	Might need to change this a little later, but currently it does
	the job.
	*/
	function calculateBuildStats() {
		for (var key in contain) {
		    if (contain.hasOwnProperty(key)) {
				buildStats['weight'] += contain[key]['wgt'];
				buildStats['acceleration'] += contain[key]['acc'];
				buildStats['traction-on'] += contain[key]['ttr'];
				buildStats['traction-off'] += contain[key]['ttm'];
				buildStats['mini-turbo'] += contain[key]['mtb'];

				buildStats['speed-ground'] += contain[key]['spg'];
				buildStats['speed-water'] += contain[key]['spw'];
				buildStats['speed-antigrav'] += contain[key]['spy'];
				buildStats['speed-air'] += contain[key]['spr'];

				buildStats['handling-ground'] += contain[key]['hdg'];
				buildStats['handling-water'] += contain[key]['hdw'];
				buildStats['handling-antigrav'] += contain[key]['hdy'];
				buildStats['handling-air'] += contain[key]['hda'];
		    }
		}


		return buildStats;
	}
	calculateBuildStats(); // Run every time a component is made

	/*
	TODO: Multibars

	Component has been updated to accept multiple bars in a single container.
	Need to find a way to force "like-stats" together.
	Side Note: Find a way to squish the bars down more for when they are used 
	in modals later.


	TODO: Title Texts

	Currently using their stat tags. Create proper title tags
	*/

	return (
		<>
		<div className="container">
			<div className="img-container">
				<div>
					<span>{char['name']}</span>
					<img src={imgDir_chars + char['name'] + ".png"} alt={body['name']}/>
				</div>
				<div>
					<span>{body['name']}</span>
					<img src={imgDir_karts + body['name'] + ".png"} alt={body['name']}/>
				</div>
				<div>
					<span>{tire['name']}</span>
					<img src={imgDir_tires + tire['name'] + ".png"} alt={body['name']}/>
				</div>
				<div>
					<span>{glide['name']}</span>
					<img src={imgDir_gliders + glide['name'] + ".png"} alt={body['name']}/>
				</div>
			</div>
			<div className="stats-container">
				{
					Object.keys(buildStats).map(key => (
						<StatBar title={key} points={buildStats[key]}></StatBar>
					))
				}
				{/* <StatBar title={10} points={10} array={[1,2,3,4]}></StatBar> */}
			</div>
		</div>	
		</>
	)
}

export default Build;
// OG StatBar: █
// <span>{"█".repeat(buildStats[key])}</span>
