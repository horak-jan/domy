const RoomsAndBills = (props) => {
  return (
    <div className="rooms-and-bills">
      <div>
        <h4>Dispozice domu:</h4>
        <img
          src="https://res.cloudinary.com/dsdaneoq8/image/upload/v1622142686/domy/rooms-icon_rrwfqu.png"
          alt="rooms"
        />
        <p>{props.rooms}</p>{" "}
      </div>
      <div>
        <h4>Provozní náklady:</h4>{" "}
        <img
          src="https://res.cloudinary.com/dsdaneoq8/image/upload/v1622142686/domy/leaf_nfd4js.png"
          alt="leaf"
        />{" "}
        <p>{props.bills}</p>
      </div>
    </div>
  );
};

export default RoomsAndBills;
