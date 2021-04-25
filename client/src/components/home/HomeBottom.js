import { useState } from "react";
import HomeBottomText from "./Home-bottom-text.json";
import HomeBottomTextParagraph from "./HomeBottomTextParagraph";
import HomeBottomHouse from "../../images/new.png";
const HomeBottom = () => {
  const [text, setText] = useState(HomeBottomText.text);
  return (
    <div className="home-bottom">
      <div className="home-bottom-stripe">
        <h2>
          Vyberte si nízkoenergetický zděný dům anebo nízkoenergetickou
          dřevostavbu na klíč a my Vám jej upravíme na míru!
        </h2>
        {text.map((text) => (
          <HomeBottomTextParagraph text={text} />
        ))}
        <img alt="house picture" src={HomeBottomHouse} />
      </div>
    </div>
  );
};

export default HomeBottom;
