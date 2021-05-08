const HomeBottomLastP = (props) => {
  const { numberAsString, header, p } = props.text;
  return (
    <div className="home-bottom-last-p">
      <h1>{numberAsString}</h1>
      <h2>{header}</h2>
      <p>{p}</p>
    </div>
  );
};

export default HomeBottomLastP;
