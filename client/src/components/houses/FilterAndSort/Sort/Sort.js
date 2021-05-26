import SortButtons from "./SortButtons";

const Sort = (props) => {
  return (
    <div className="sort">
      <SortButtons setSortDirection={props.setSortDirection} />
    </div>
  );
};

export default Sort;
