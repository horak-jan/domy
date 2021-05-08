import Image from "../utils/Image";
import PoolTypeInfoText from "./PoolTypeInfoText";

const PoolTypeInfo = (props) => {
  return (
    <div className="pool-type-info">
      <PoolTypeInfoText text={props.text} />
      <Image src={props.src} />
    </div>
  );
};

export default PoolTypeInfo;
