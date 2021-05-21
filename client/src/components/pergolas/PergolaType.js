import Gallery from "../utils/Gallery";
import MainImagePart from "./MainImagePart";
import PergolaTypeContent from "./PergolaTypeContent";

const PergolaType = (props) => {
  const { header, p1, p2, images, mainImage } = props.pergolaType;
  return (
    <div className="pergola-type">
      <MainImagePart mainImage={mainImage} header={header} />
      <PergolaTypeContent header={header} p1={p1} p2={p2} />
      <Gallery images={images} />
    </div>
  );
};

export default PergolaType;
