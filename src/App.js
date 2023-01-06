import './App.css';

import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

// Pages
import Home from './Pages/Home';
import Randomizer from './Pages/Randomizer';



function App() {
  
  return (
      <>
      <Router>
        <nav>
          <Link to='/home'>Home</Link>
          <Link to='/randomizer'>Randomizer</Link>
          {/* <Link to='/forms'>Form Examples</Link> */}
          {/* <Link to='/todo'>To-Do List</Link> */}
        </nav>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/randomizer' element={<Randomizer/>}/>
          {/* <Route path='/forms' element={<Forms/>}/> */}
          {/* <Route path='/todo' element={<Todo/>}/> */}


          {/* <Route path='/*' element={<ErrorPage/>}/> */}
        </Routes>
      </Router>
      </>
  );
}

export default App;
