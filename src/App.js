import './App.css';

import Carousel, { CarouselItem } from './Components/Carousel';

function App() {
  return (
      <>
        <h1>Hello World</h1>
        <Carousel>
          <CarouselItem>Item 1</CarouselItem>
          <CarouselItem>Item 2</CarouselItem>
          <CarouselItem>Item 3</CarouselItem>
        </Carousel>
      </> 
  );
}

export default App;
