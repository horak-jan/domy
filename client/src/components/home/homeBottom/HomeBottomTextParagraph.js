const HomeBottomTextParagraph = (props) => {
  const { text } = props;
  return (
    <div className="home-bottom-text-paragraph">
      <h3>{text.big}</h3>
      <p>{text.middle}</p>
      <p>{text.bottom}</p>
    </div>
  );
};

export default HomeBottomTextParagraph;
