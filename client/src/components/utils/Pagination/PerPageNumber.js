const PerPageNumber = (props) => {
  const { number, perPage, setPerPage } = props;
  return (
    <span
      className={perPage === number ? "picked" : "not-picked"}
      onClick={() => setPerPage(number)}
    >
      {number}
    </span>
  );
};

export default PerPageNumber;
