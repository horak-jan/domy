const ContactTop = () => {
  return (
    <div className="contact-top">
      <h2>Proč nezačít plánovat Váš domov u šálku dobré kávy? </h2>
      <div className="contact-top-content">
        <div>
          <img
            src="https://res.cloudinary.com/dsdaneoq8/image/upload/v1619619236/domy/icons8-home-page-50_luhaew.png"
            alt="house"
          />
          <h3>Výběr domu</h3>
          <p>Vyberte si vysněný dům!</p>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dsdaneoq8/image/upload/v1619619237/domy/icons8-prefab-house-50_bix6lh.png"
            alt="tech"
          />
          <h3>Výběr technologií</h3>
          <p>Zděný dům anebo dřevostavba?</p>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dsdaneoq8/image/upload/v1619619236/domy/icons8-zoom-in-50_vs1xqy.png"
            alt="details"
          />
          <h3>Výběr detailů</h3>
          <p>Do poslední maličkosti!</p>
        </div>
      </div>
    </div>
  );
};

export default ContactTop;
