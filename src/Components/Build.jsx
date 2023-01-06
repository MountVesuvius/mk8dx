import react, { useState } from 'react';

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
	calculateBuildStats();

	return (
		<div className="container">
			<div className="img-container">
				<span>{char['name']}</span>
				<img src={imgDir_chars + char['name'] + ".png"} alt={body['name']}/>
				<span>{body['name']}</span>
				<img src={imgDir_karts + body['name'] + ".png"} alt={body['name']}/>
				<span>{tire['name']}</span>
				<img src={imgDir_tires + tire['name'] + ".png"} alt={body['name']}/>
				<span>{glide['name']}</span>
				<img src={imgDir_gliders + glide['name'] + ".png"} alt={body['name']}/>
			</div>
			<div className="stats-container">
				{
					Object.keys(buildStats).map(key => (
						<>
						<span>{`${key}: ${buildStats[key]}`}</span>
						{/* Little bit of a cheeky hack for now */}
						<span>{"█".repeat(buildStats[key])}</span>
						</>
						))
				}
			</div>
		</div>	
	)
}

export default Build;
// █