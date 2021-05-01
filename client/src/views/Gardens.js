import GardenImages from "../components/gardens/GardenImages";
import GardenSlide from "../components/gardens/GardenSlide";

const Gardens = () => {
  return (
    <div className="gardens">
      <h1>Splníme vám sen o krásné zahradě</h1>

      <p>
        Přestaňte o své zahradě jen snít! Vaše představy díky nám dostanou tvar.
      </p>

      <GardenSlide />
      <h2>Naše práce, vaše radost</h2>

      <GardenImages />
    </div>
  );
};

export default Gardens;
