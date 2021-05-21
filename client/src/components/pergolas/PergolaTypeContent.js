const PergolaTypeContent = (props) => {
  const { header, p1, p2 } = props;
  return (
    <div className="pergola-type-content">
      <h1>{header}</h1>
      <p>{p1}</p>

      <p>{p2}</p>
    </div>
  );
};

export default PergolaTypeContent;
