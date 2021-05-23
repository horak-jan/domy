const PerPageNumber = (props) => {
  const { number, setPerPage } = props;
  return <span onClick={() => setPerPage(number)}>{number}</span>;
};

export default PerPageNumber;
