import { useState } from "react";
import HomeBottomText from "./Home-bottom-text.json";
import HomeBottomLast from "./HomeBottomLast";
import HomeBottomTextParagraph from "./HomeBottomTextParagraph";
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
          <HomeBottomTextParagraph key={text.big} text={text} />
        ))}
      </div>
      <img
        alt="house picture"
        src="https://res.cloudinary.com/dsdaneoq8/image/upload/v1619390572/domy/new_n9di9s.png"
      />
      <HomeBottomLast />
    </div>
  );
};

export default HomeBottom;
