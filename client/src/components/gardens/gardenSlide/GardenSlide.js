import GardenSlideImage from "./GardenSlideImage";
import GardensSlideContent from "./GardensSlideContent";

const GardenSlide = (props) => {
  const { content } = props;
  return (
    <div className="gardens-slide">
      <GardenSlideImage header={content.header} imgSrc={content.imgSrc} />
      <GardensSlideContent
        header={content.header}
        shortText={content.shortText}
        link={content.link}
      />
    </div>
  );
};

export default GardenSlide;
