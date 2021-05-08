const HomePresentationSection = (props) => {
  const { srcImg, altImg, srcIcon, altIcon, header, link } = props.content;
  return (
    <div>
      <img src={srcImg} alt={altImg} />
      <div>
        <img src={srcIcon} alt={altIcon} />
        <h3>{header}</h3>
        <a href={link}>Naše nabídka</a>
      </div>
    </div>
  );
};

export default HomePresentationSection;
