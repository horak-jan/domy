import PoolBottom from "../components/pool/PoolBottom";
import PoolMiddle from "../components/pool/PoolMiddle";
import PoolTop from "../components/pool/PoolTop";

const Pools = () => {
  return (
    <div className="pool">
      <PoolTop />
      <PoolMiddle />
      <PoolBottom />
    </div>
  );
};

export default Pools;
