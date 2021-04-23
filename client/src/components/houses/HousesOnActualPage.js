const HousesOnActualPage = (props) => {
  return (
    <>
      {props.housesOnActualPage.map((house) =>
        house % 2 == 0 && house > 6 ? <h2 key={house}>{house}</h2> : ""
      )}
    </>
  );
};

export default HousesOnActualPage;
