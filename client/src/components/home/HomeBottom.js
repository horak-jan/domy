import { useEffect, useState } from "react";
import Axios from "axios";
import HomeBottomLast from "./HomeBottomLast";
import HomeBottomTextParagraph from "./HomeBottomTextParagraph";

const HomeBottom = () => {
  const [text, setText] = useState([]);
  const [lastText, setLastText] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getTextForHomepage = async () => {
      try {
        const res = await Axios.get(`/api/hometext`);

        setText(res.data.homeText[0].bottom);
        setLastText(res.data.homeText[0].last);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    getTextForHomepage();
  }, []);

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
      <HomeBottomLast text={lastText} />
    </div>
  );
};

export default HomeBottom;
