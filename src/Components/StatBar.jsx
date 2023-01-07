import react from 'react';

import '../Styles/StatBar.css';

/*
TODO:
Create internal bar stacking option to group like stats
- Traction On/Off Road 2 Bars
- Terrain Speed 4 Bars
- Terrain Handling 4 Bars

Can do this by dynamically adding `filler` divs and 
changing their input based on an array. Will probably
need to change how `points` works…

*/

const StatBar = ({ title, points}) => {
  return (
  	<>
		<span>{title}</span>
		<div className="bar-container">
		    <div className="bar-wrapper">
		      <div className="filler" style={{width: `${(points/20)*100}%`}}>
		        <span className="label">{`${points}`}</span>
		      </div>
		    </div>
		</div>
    </>
  );
};

export default StatBar;