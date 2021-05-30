const BrowsePrices = (props) => {
  const { fullHousePrices, basicHousePrices } = props;
  return (
    <div className="browse-prices">
      <div>
        <h4>Zděný dům na klíč:</h4>

        {fullHousePrices.map((price) => (
          <p key={price}>již od {price}</p>
        ))}
      </div>
      <div>
        <h4>Hrubý zděný dům:</h4>

        {basicHousePrices.map((price) => (
          <p key={price}>již od {price}</p>
        ))}
      </div>
    </div>
  );
};

export default BrowsePrices;
