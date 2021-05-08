import Header from "../../utils/Header";
import ButtonWrapper from "./ButtonWrapper";
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
