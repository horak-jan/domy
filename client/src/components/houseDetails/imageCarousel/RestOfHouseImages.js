const RestOfHouseImages = (props) => {
  return (
    <div className="rest-of-house-images">
      {props.restOfHouseImages.map((image) => (
        <img
          src={image}
          alt={image}
          onClick={() => props.setLargeImage(image)}
          key={image}
        />
      ))}
    </div>
  );
};

export default RestOfHouseImages;
