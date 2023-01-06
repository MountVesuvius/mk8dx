import react, { useState } from 'react';

import data from '../part_data.json';

const StatBox = ({part_index}) => {

	const getPartStats = (group, part_index) => {
		var part = data['part_dict'][group][part_index];
		const weight = part['wgt'];
		const acceleration = part['acc'];
// 		spg: 6
// spr: 6
// spw: 6
// spy: 6
		console.log(part);
	}


	return (
		<>
		<h1>StatBox</h1>
		{/* <span>{getPartStats('char', 0)}</span> */}
		<span>{part_index}</span>
		</>
	);
}

export default StatBox;