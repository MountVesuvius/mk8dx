import react from 'react';

import StatBar from '../Components/StatBar';

const Home = ({}) => {
	return (
		<>
		<h1>Component Testing</h1>
		<StatBar title={"help"} points={[15,5,7]}></StatBar>
		<StatBar title={"yikes"} points={[15,5,7,8,20,5]}></StatBar>
		<StatBar title={"wow"} points={1}></StatBar>
		<StatBar title={"wow"} points={2}></StatBar>
		</>
	)
}

export default Home;