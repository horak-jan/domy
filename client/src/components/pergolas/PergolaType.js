import Gallery from "../utils/Gallery";
import MainImagePart from "./MainImagePart";
import PergolaTypeContent from "./PergolaTypeContent";

const PergolaType = (props) => {
  const { header, paragraphs, images, mainImage } = props.pergolaType;
  return (
    <div className="pergola-type">
      <MainImagePart mainImage={mainImage} header={header} />
      <PergolaTypeContent header={header} paragraphs={paragraphs} />
      <Gallery images={images} />
    </div>
  );
};

export default PergolaType;
