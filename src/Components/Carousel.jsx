import react, { useState } from 'react';
import "../Styles/Carousel.css";

export const CarouselItem = ({children}) => {
	return (
		<div className="carousel-item">
			{children}
		</div>	
	)
};

const Carousel = ({children}) => {
	const [index, setIndex] = useState(0); // Starts at index 0

	const updateIndex = (newIndex) => {
		if (newIndex < 0) {
			newIndex = react.Children.count(children) - 1;
		} else if (newIndex >= react.Children.count(children)) {
			newIndex = 0; 
		}

		setIndex(newIndex);
	}

	return (
		<div className="carousel-container">
		{/* change to translateY() for slot style */}
			<div className="inner" style={{transform: `translateX(-${index * 100}%)`}}>
				{react.Children.map(children, (child, index) => {
					return react.cloneElement(child);
				})}	
			</div>

			<div className="selectors">
				<button onClick={() => {updateIndex(index - 1); }}>
					Previous
				</button>

				<button onClick={() => {updateIndex(index + 1); }}>
					Next
				</button>
			</div>

		</div>
	)
}

export default Carousel;