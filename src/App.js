import './App.css';

// Components
import Carousel, { CarouselItem } from './Components/Carousel';
import StatBox from './Components/StatBox';

// Data Sheets
import data from './part_data.json';

// arrays.py has the answer to why this exists
const charSprites = ["Mario.png", "Luigi.png", "Peach.png", "Daisy.png", "Rosalina.png", "Tanooki Mario.png", "Cat Peach.png", "Yoshi.png", "Toad.png", "Koopa Troopa.png", "Shy Guy.png", "Lakitu.png", "Toadette.png", "King Boo.png", "Baby Mario.png", "Baby Luigi.png", "Baby Peach.png", "Baby Daisy.png", "Baby Rosalina.png", "Metal Mario.png", "Pink Gold Peach.png", "Wario.png", "Waluigi.png", "Donkey Kong.png", "Bowser.png", "Dry Bones.png", "Bowser Jr.png", "Dry Browser.png", "Lemmy.png", "Larry.png", "Wendy.png", "Ludwig.png", "Iggy.png", "Roy.png", "Morton.png", "Inkling Girl.png", "Inkling Boy.png", "Link.png", "Villager M.png", "Villager F.png", "Isabelle.png", "Mii.png"]
const imgDir_chars = "./Sprites/charSprites/"

const gliderSprites = ["Super Glider.png", "Cloud Glider.png", "Wario Wing.png", "Waddle Wing.png", "Peach Parasol.png", "Parachute.png", "Parafoil.png", "Flower Glider.png", "Bowser Kite.png", "Plane Glider.png", "MKTV Parafoil.png", "Gold Glider.png", "Hylian Kite.png", "Paper Glider.png"]
const imgDir_gliders = "./Sprites/gliderSprites/"

const kartSprites = ["Standard Kart.png", "Pipe Frame.png", "Mach 8.png", "Steel Driver.png", "Cat Cruiser.png", "Circuit Special.png", "Tri Speeder.png", "Badwagon.png", "Prancer.png", "Biddybuggy.png", "Landship.png", "Sneaker.png", "Sports Coupe.png", "Gold Standard.png", "GLA.png", "W 25 Silver Arrow.png", "300 SL Roadster.png", "Blue Falcon.png", "Tanooki Kart.png", "B Dasher.png", "Streetle.png", "P Wing.png", "Koopa Clown.png", "Standard Bike.png", "Comet.png", "Sport Bike.png", "The Duke.png", "Flame Rider.png", "Varmint.png", "Mr Scooty.png", "Jet Bike.png", "Yoshi Bike.png", "Master Cycle.png", "City Tripper.png", "Standard ATV.png", "Wild Wiggler.png", "Teddy Buggy.png", "Bone Rattler.png", "Inkstriker.png", "Splat Buggy.png"]
const imgDir_karts = "./Sprites/kartSprites/"

const tireSprites = ["Standard.png", "Monster.png", "Roller.png", "Slim.png", "Slick.png", "Metal.png", "Button.png", "Off Road.png", "Sponge.png", "Wood.png", "Cushion.png", "Blue Standard.png", "Hot Monster.png", "Azure Roller.png", "Crimson Slim.png", "Cyber Slick.png", "Retro Off Road.png", "Gold Tires.png", "GLA Tires.png", "Triforce Tires.png", "Leaf Tires.png"]
const imgDir_tires = "./Sprites/tireSprites/"



function App() {
  const kart = data["part_dict"]["body"];
  const tire = data["part_dict"]["tire"];
  const glider = data["part_dict"]["glider"];
  return (
      <>
        <div className="slot">

        <Carousel>
          {
            kartSprites.map((item, index) => {
              return (
                <CarouselItem>
                  <img src={imgDir_karts + item} alt={item} id={index}/>
                  <span>{kart[index]['name']}</span>
                </CarouselItem>
                );
            })
          }
        </Carousel>

        <Carousel>
          {
            tireSprites.map((item, index) => {
              return (
                <CarouselItem>
                  <img src={imgDir_tires + item} alt={item} id={index}/>
                  <span>{tire[index]['name']}</span>
                </CarouselItem>
                );
            })
          }
        </Carousel>

        <Carousel>
          {
            gliderSprites.map((item, index) => {
              return (
                <CarouselItem>
                  <img src={imgDir_gliders + item} alt={item} id={index}/>
                  <span>{glider[index]['name']}</span>
                </CarouselItem>
                );
            })
          }
        </Carousel>

        <StatBox></StatBox>

        </div>
      </> 
  );
}

export default App;
