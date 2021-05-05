import ButtonWrapper from "./ButtonWrapper";
import GardensSlideContentHeader from "./GardensSlideContentHeader";
import GardensSlideContentPargraph from "./GardensSlideContentPargraph";

const GardensSlideContent = (props) => {
  return (
    <div className="gardens-slide-content">
      <GardensSlideContentHeader header={props.header} />

      <GardensSlideContentPargraph shortText={props.shortText} />

      <ButtonWrapper link={props.link} />
    </div>
  );
};

export default GardensSlideContent;
