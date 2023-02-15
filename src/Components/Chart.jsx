import React, {useState, useRef, useEffect} from 'react';
import * as d3 from 'd3';

import url from '../TrackHistory/Big_Blue_150.csv';

const Chart = () => {
	const svgRef = useRef();

	useEffect(() => {
		// Load data from CSV
		const trackData = [];
		d3.csv(url, function(data) {
			trackData.push([data.Date, data.Time]);
			console.log(data.Time);
		});

		// Set up the SVG
		const height = 400;
		const width = 900;
		const svg = d3.select(svgRef.current)
			.attr('width', width)
			.attr('height', height)
			.style('background', '#d3d3d3')
			.style('overflow', 'visible');

		// Set up Scaling
		// Set up the Axes
		// Set up the data for the SVG

	}, []);

	// console.log("hello");


	

	return (
		<div className="graph-container">
			<svg ref={svgRef}></svg>
		</div>	
	)
}

export default Chart;