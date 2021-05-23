const BrowsePrices = (props) => {
  const { fullHousePrices, basicHousePrices } = props;
  return (
    <div className="browse-prices">
      <div>
        <h3>Zděný dům na klíč</h3>

        {fullHousePrices.map((price) => (
          <p key={price}>{price}</p>
        ))}
      </div>
      <div>
        <h3>Hrubý zděný dům</h3>

        {basicHousePrices.map((price) => (
          <p key={price}>{price}</p>
        ))}
      </div>
    </div>
  );
};

export default BrowsePrices;
