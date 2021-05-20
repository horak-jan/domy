import PoolType from "./PoolType";
import ContactMiddle from "../contact/ContactMiddle";

const PoolMiddle = (props) => {

  return (
    <div className="pool-middle">
      <h2>TYPY BAZÉNŮ V NAŠÍ NABÍDCE</h2>

      {props.poolMiddle.map((pool) => (
        <PoolType
          key={pool.src}
          src={pool.src}
          header={pool.header}
          text={pool.text}
        />
      ))}
      <ContactMiddle />
    </div>
  );
};

export default PoolMiddle;
