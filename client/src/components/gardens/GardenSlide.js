import ButtonWrapper from "./gardenSlide/ButtonWrapper";
import GardenSlideImage from "./gardenSlide/GardenSlideImage";
import GardensSlideContent from "./gardenSlide/GardensSlideContent";

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
