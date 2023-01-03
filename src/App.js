import './App.css';

import Carousel, { CarouselItem } from './Components/Carousel';

// arrays.py has the answer to why this exists
const charSprites = ["Bowser.png", "Inkling Boy.png", "Daisy.png", "Metal Mario.png", "Lemmy.png", "Peach.png", "Toad.png", "Larry.png", "Villager M.png", "Tanooki Mario.png", "Mii.png", "Luigi.png", "Link.png", "Inkling Girl.png", "Gold Mario.png", "Baby Mario.png", "Wario.png", "unknown.png", "Donkey Kong.png", "Pink Gold Peach.png", "Isabelle.png", "Roy.png", "Wendy.png", "Koopa Troopa.png", "Ludwig.png", "Waluigi.png", "Baby Luigi.png", "Dry Bones.png", "Dry Browser.png", "Rosalina.png", "Iggy.png", "Cat Peach.png", "Baby Peach.png", "Baby Daisy.png", "Yoshi.png", "Lakitu.png", "Bowser Jr.png", "Morton.png", "Baby Rosalina.png", "Mario.png", "Shy Guy.png", "King Boo.png", "Villager F.png", "Toadette.png", ]
const gliderSprites = ["Hylian Kite.png", "Peach Parasol.png", "Parachute.png", "MKTV Parafoil.png", "Paper Glider.png", "Gold Glider.png", "Wario Wing.png", "Waddle Wing.png", "Cloud Glider.png", "Paraglider.png", "Bowser Kite.png", "Flower Glider.png", "Plane Glider.png", "Parafoil.png", "Super Glider.png", ]
const kartSprites = ["Flame Rider.png", "Streetle.png", "B Dasher.png", "Circuit Special.png", "City Tripper.png", "Gold Standard.png", "Koopa Clown.png", "Bone Rattler.png", "Jet Bike.png", "Steel Driver.png", "P Wing.png", "Prancer.png", "Mr Scooty.png", "Biddybuggy.png", "Wild Wiggler.png", "Inkstriker.png", "Tanooki Kart.png", "Blue Falcon.png", "Teddy Buggy.png", "Standard Kart.png", "Standard Bike.png", "Sports Coupe.png", "W 25 Silver Arrow.png", "Splat Buggy.png", "300 SL Roadster.png", "Yoshi Bike.png", "Comet.png", "GLA.png", "Master Cycle.png", "Master Cycle Zero.png", "Sport Bike.png", "Pipe Frame.png", "Cat Cruiser.png", "Badwagon.png", "Tri Speeder.png", "Sneaker.png", "Standard ATV.png", "Varmint.png", "Landship.png", "Mach 8.png", "The Duke.png", ]
const tireSprites = ["Gold Tires.png", "Retro Off Road.png", "Metal.png", "Azure Roller.png", "Standard.png", "Blue Standard.png", "Sponge.png", "Roller.png", "Slick.png", "Wood.png", "Hot Monster.png", "Cyber Slick.png", "Off Road.png", "GLA Tires.png", "Leaf Tires.png", "Triforce Tires.png", "Ancient.png", "Slim.png", "Monster.png", "Button.png", "Crimson Slim.png", "Cushion.png", ]

const imgDir = "./Sprites/"

function App() {
  return (
      <>
        <div className="slot">
        <Carousel>
          <CarouselItem>Item 1</CarouselItem>
          {/* Not sure why this isn't working yet */}
          {
            charSprites.map((item, index) => {
              return (
                <CarouselItem>
                <img src={imgDir + item} alt={item} id={index}/>
                </CarouselItem>

                );
            })
          }
        </Carousel>

        </div>
      </> 
  );
}

export default App;
