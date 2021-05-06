import ButtonWrapper from "./ButtonWrapper";
import Header from "./Header";
import Paragraph from "./Paragraph";

const GardensSlideContent = (props) => {
  return (
    <div className="gardens-slide-content">
      <Header header={props.header} />

      <Paragraph shortText={props.shortText} />

      <ButtonWrapper link={props.link} />
    </div>
  );
};

export default GardensSlideContent;
