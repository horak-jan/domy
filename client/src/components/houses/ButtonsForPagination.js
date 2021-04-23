const ButtonsForPagination = (props) => {
  let totalPagesInArray = [];
  for (let i = 1; i <= props.totalPages; i++) {
    totalPagesInArray.push(i);
  }
  return (
    <>
      {totalPagesInArray.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => props.setActualPage(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
    </>
  );
};

export default ButtonsForPagination;
