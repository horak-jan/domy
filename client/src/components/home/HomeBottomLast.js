import HomeBottomLastP from "./HomeBottomLastP";
const HomeBottomLast = (props) => {
  return (
    <div className="home-bottom-last">
      <h1>Proč si vybrat nás?</h1>
      <h2>Zlepšujeme kvalitu vašeho bydlení</h2>
      {props.text.map((text) => (
        <HomeBottomLastP key={text.numberAsString} text={text} />
      ))}
    </div>
  );
};

export default HomeBottomLast;
