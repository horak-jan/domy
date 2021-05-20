import Header from "../utils/Header";
import Image from "../utils/Image";
import PoolTypeInfo from "./PoolTypeInfo";
const PoolType = (props) => {
  return (
    <div className="pool-type">
      <Image src={props.src} />
      <Header header={props.header} />
      <PoolTypeInfo text={props.text} />
    </div>
  );
};

export default PoolType;
