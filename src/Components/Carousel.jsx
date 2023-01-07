// Not currently using this. have plans for it though
import react, { useState } from 'react';
import "../Styles/Carousel.css";

import StatBox from './StatBox';


export const CarouselItem = ({children}) => {
	return (
		<div className="carousel-item">
			{children}
		</div>	
	)
};

const Carousel = ({children}) => {
	const [index, setIndex] = useState(0);

	const volume = react.Children.count(children);

	const updateIndex = (newIndex) => {
		if (newIndex < 0) {
			newIndex = react.Children.count(children) - 1;
		} else if (newIndex >= react.Children.count(children)) {
			newIndex = 0; 
		}

		setIndex(newIndex);
	}

	return (
		<div className="container">
			<button className="selector-btn" id="previous" onClick={() => {updateIndex(index - 1); }}>
				Previous
			</button>

			<div className="carousel-container">
				<div className="inner" style={{transform: `translateY(-${index * (100/volume)}%)`}}>
					{react.Children.map(children, (child, index) => {
						return react.cloneElement(child);
					})}	
				</div>
			</div>

			<button className="selector-btn" id="next" onClick={() => {updateIndex(index + 1); }}>
				Next
			</button>
			<StatBox index={index}></StatBox>
		</div>
	)
}

export default Carousel;