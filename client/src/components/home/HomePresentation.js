import PergolaIco from "../../images/pergola-ico.svg";
import PoolIco from "../../images/pool-ico.svg";
import HouseIco from "../../images/house-ico.svg";
import GardenIco from "../../images/garden-ico.svg";
import HomePergola from "../../images/home-pergola.jpg";
import HomeGarden from "../../images/home-garden.jpg";
import HomePool from "../../images/home-pool.jpg";
import HomeHouse from "../../images/home-house.jpg";

const HomePresentation = () => {
  return (
    <div className="home-presentation">
      <div>
        <img src={HomeHouse} alt="House" />
        <div>
          <img src={HouseIco} alt="House icon" />
          <h3>Domy</h3>
          <a href="/domy">Naše nabídka</a>
        </div>
      </div>
      <div>
        <img src={HomePool} alt="Pool" />
        <div>
          <img src={PoolIco} alt="Pool icon" />
          <h3>Bazény</h3>
          <a href="/bazeny">Naše nabídka</a>
        </div>
      </div>
      <div>
        <img src={HomePergola} alt="Pergola" />
        <div>
          <img src={PergolaIco} alt="Pergola icon" />
          <h3>Pergoly</h3>
          <a href="/pergoly">Naše nabídka</a>
        </div>
      </div>
      <div>
        <img src={HomeGarden} alt="Garden" />
        <div>
          <img src={GardenIco} alt="Garden icon" />
          <h3>Zahrady</h3>
          <a href="/zahrady">Naše nabídka</a>
        </div>
      </div>
    </div>
  );
};

export default HomePresentation;
