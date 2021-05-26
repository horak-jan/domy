const SortButtons = (props) => {
  return (
    <div className="sort-buttons">
      <h3>Seřadit:</h3>
      <button
        className={
          props.sortDirection == "lowToHigh"
            ? "active-sort-button"
            : "sort-button"
        }
        onClick={() => {
          props.setSortDirection("lowToHigh");
        }}
      >
        Od nejnižší ceny
      </button>
      <button
        className={
          props.sortDirection == "lowToHigh"
            ? "sort-button"
            : "active-sort-button"
        }
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
