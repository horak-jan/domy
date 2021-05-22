const PergolaTypeContent = (props) => {
  const { header, paragraphs } = props;
  return (
    <div className="pergola-type-content">
      <h1>{header}</h1>
      {paragraphs.map((p) => (
        <p key={p}>{p}</p>
      ))}
    </div>
  );
};

export default PergolaTypeContent;
