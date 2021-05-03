const GardenSlide = (props) => {
  const { content } = props;
  return (
    <div className="gardens-slide">
      <img alt={content.header} src={content.imgSrc} />
      <div className="gardens-slide-content">
        <h1>{content.header}</h1>
        <p>{content.shortText}</p>
        <button>
          <a href={content.link}>Chci vidět více</a>
        </button>
      </div>
    </div>
  );
};

export default GardenSlide;
