import SortButtons from "./SortButtons";

const Sort = (props) => {
  return (
    <div className="sort">
      <SortButtons
        sortDirection={props.sortDirection}
        setSortDirection={props.setSortDirection}
      />
    </div>
  );
};

export default Sort;
