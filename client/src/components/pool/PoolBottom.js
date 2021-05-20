import Award from "./Award";

const PoolBottom = (props) => {
  return (
    <div className="pool-bottom">
      {props.poolBottom.map((award) => (
        <Award
          src={award.src}
          key={award.src}
          headerLarge={award.headerLarge}
          headerMedium={award.headerMedium}
          text={award.text}
        />
      ))}
    </div>
  );
};

export default PoolBottom;
