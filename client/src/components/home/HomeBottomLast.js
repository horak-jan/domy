import { useState } from "react";

import HomeBottomLastText from "./Home-bottom-last-text.json";
import HomeBottomLastP from "./HomeBottomLastP";
const HomeBottomLast = () => {
  const [numberedText, setNumberedText] = useState(HomeBottomLastText.p);
  return (
    <div className="home-bottom-last">
      <h1>Proč si vybrat nás?</h1>
      <h2>Zlepšujeme kvalitu vašeho bydlení</h2>
      {numberedText.map((text) => (
        <HomeBottomLastP key={text.number} text={text} />
      ))}
    </div>
  );
};

export default HomeBottomLast;
