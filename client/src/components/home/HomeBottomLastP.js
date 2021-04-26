const HomeBottomLastP = (props) => {
  const { number, header, p } = props.text;
  return (
    <div className="home-bottom-last-p">
      <h1>{number}</h1>
      <h2>{header}</h2>
      <p>{p}</p>
    </div>
  );
};

export default HomeBottomLastP;
