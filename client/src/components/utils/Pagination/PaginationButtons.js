const PaginationButtons = (props) => {
  let totalPagesInArray = [];
  for (let i = 1; i <= props.totalPages; i++) {
    totalPagesInArray.push(i);
  }

  // if there's only one page to show set it as actual
  if (totalPagesInArray.length === 1) {
    props.setActualPage(1);
  }

  return (
    <div className="pagination-buttons">
      {totalPagesInArray.map((pageNumber) => (
        <button
          className={
            pageNumber == props.actualPage
              ? "selected-pagination-button"
              : "pagination-button"
          }
          key={pageNumber}
          onClick={() => props.setActualPage(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
};

export default PaginationButtons;
