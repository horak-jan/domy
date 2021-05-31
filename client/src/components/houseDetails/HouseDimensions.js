const HouseDimensions = (props) => {
  const { sqMetresToUse, rooms, dimensions, sqMetresToBuild } = props;
  return (
    <div className="house-dimensions">
      <div>
        <img
          src="https://res.cloudinary.com/dsdaneoq8/image/upload/v1622419363/domy/sqMToUse_ltsnb3.png"
          alt="squared metres to use"
        />
        <div className="text">
          <p>
            {sqMetresToUse} m<sup>2</sup>
          </p>
          <p>užitná plocha</p>
        </div>
      </div>
      <div>
        <img
          src="https://res.cloudinary.com/dsdaneoq8/image/upload/v1622142686/domy/rooms-icon_rrwfqu.png"
          alt="number of rooms"
        />
        <div className="text">
          <p>{rooms}</p>
          <p>dispozice</p>
        </div>
      </div>
      <div>
        <img
          src="https://res.cloudinary.com/dsdaneoq8/image/upload/v1622419363/domy/sqMToBuildOn_qqt6qh.png"
          alt="squared metres to build on"
        />
        <div className="text">
          <p>
            {sqMetresToBuild} m<sup>2</sup>
          </p>
          <p>zastavěná plocha</p>
        </div>
      </div>
      <div>
        <img
          src="https://res.cloudinary.com/dsdaneoq8/image/upload/v1622419396/domy/dimensions_hsi48b.png"
          alt="dimensions of the house"
        />
        <div className="text">
          <p>
            {dimensions} m<sup>2</sup>
          </p>
          <p>rozměry domu</p>
        </div>
      </div>
    </div>
  );
};

export default HouseDimensions;
