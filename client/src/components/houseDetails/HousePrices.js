const HousePrices = (props) => {
  const { fullHousePrices, basicHousePrices } = props;
  return (
    <div className="house-prices-wrapper">
      <div className="house-prices-content">
        <div className="house-price-single">
          <img
            src="https://res.cloudinary.com/dsdaneoq8/image/upload/v1622409317/domy/key-brick-icons_tcpbmf.png"
            alt="icon"
          />
          <h2 className="key">Zděný dům na klíč</h2>
          <p>Měsíčně již od {fullHousePrices.perMonth}</p>
          <p>Jednorázově {fullHousePrices.total}</p>
        </div>

        <div className="house-price-single">
          <img
            src="https://res.cloudinary.com/dsdaneoq8/image/upload/v1622409317/domy/brick-icons_yxyaox.png"
            alt="icon"
          />
          <h2 className="brick">Hrubá zděná stavba</h2>
          <p>Měsíčně již od {basicHousePrices.perMonth}</p>
          <p>Jednorázově {basicHousePrices.total}</p>
        </div>
      </div>
    </div>
  );
};

export default HousePrices;
