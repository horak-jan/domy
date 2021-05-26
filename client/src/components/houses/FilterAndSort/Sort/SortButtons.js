const SortButtons = (props) => {
  return (
    <div className="sort-buttons">
      <h3>Seřadit:</h3>
      <button
        onClick={() => {
          props.setSortDirection("lowToHigh");
        }}
      >
        Od nejnižší ceny
      </button>
      <button
        onClick={() => {
          props.setSortDirection("highToLow");
        }}
      >
        Od nejvyšší ceny
      </button>
    </div>
  );
};

export default SortButtons;
