import PerPageNumber from "./PerPageNumber";

const ShowPerPagePicker = (props) => {
  const { setPerPage } = props;
  const perPageOptions = [6, 9, 12];
  return (
    <p className="show-per-page-picker">
      Počet zobrazených domů
      {perPageOptions.map((number) => (
        <PerPageNumber key={number} number={number} setPerPage={setPerPage} />
      ))}
    </p>
  );
};

export default ShowPerPagePicker;
