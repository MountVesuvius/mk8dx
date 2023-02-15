// Followed tutorial to learn how to use D3
import React, {useState, useRef, useEffect} from 'react';
import * as d3 from 'd3';

const BarChart = () => {
	const [data] = useState([25, 50, 20, 15, 200, 21]);
	const svgRef = useRef();

	useEffect(() => {

		// 1. setting up the svg
		const width = 400;
		const height = 200;
		const svg = d3.select(svgRef.current)
			.attr('width', width)
			.attr('height', height)
			.style('background', '#d3d3d3')
			.style('overflow', 'visible');

		// 2. setting up scaling
		const xScale = d3.scaleLinear()
			.domain([0, data.length - 1])
			.range([0, width]);

		const yScale = d3.scaleLinear()
			.domain([0, height])
			.range([height, 0]);

		const generateScaledLine = d3.line()
			.x((d, i) => xScale(i))
			.y(yScale)
			.curve(d3.curveCardinal);


		// 3. setting the axes
		const xAxis = d3.axisBottom(xScale)
			.ticks(data.length)
			.tickFormat(i => i + 1);

		const yAxis = d3.axisLeft(yScale)
			.ticks(5);

		svg.append('g')
			.call(xAxis)
			.attr('transform', `translate(0, ${height})`);

		svg.append('g')
			.call(yAxis);

		// 4. setting up the data for the svg
		svg.selectAll('.line')
			.data([data])
			.join('path')
				.attr('d', d => generateScaledLine(d))
				.attr('fill', 'none')
				.attr('stroke', 'black');

	}, [data]);

	return (
		<div className="graph-container">
			<svg ref={svgRef}></svg>
		</div>	
	)
}

export default BarChart;