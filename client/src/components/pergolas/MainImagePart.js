const MainImagePart = (props) => {
  const { mainImage, header } = props;
  return (
    <div className="main-image-part">
      <img alt="header image" src={mainImage} />
      <h1>{header}</h1>
    </div>
  );
};

export default MainImagePart;
