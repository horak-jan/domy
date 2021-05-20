const Award = (props) => {
  return (
    <div className="award">
      <img src={props.src} alt="award" />
      <h1>{props.headerLarge}</h1>
      <h3>{props.headerMedium}</h3>
      <p>{props.text}</p>
    </div>
  );
};

export default Award;
