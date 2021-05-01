const GardenSlide = () => {
  return (
    <>
      <div className="gardens-slide">
        <img
          alt="zahrada"
          src="https://res.cloudinary.com/dsdaneoq8/image/upload/v1619884297/domy/garden1_va4zda.jpg"
        />
        <div className="gardens-slide-content">
          <h1>Zahrady</h1>
          <p>
            Nabízíme Vám návrhy a realizace okrasných zahrad vašich rodinných
            domů, osázení teras, stejně tak jako úpravy zeleně u vašich
            firemních objektů.
          </p>
          <button>
            <a href="/realizace">Chci vidět více</a>
          </button>
        </div>
      </div>

      <div className="gardens-slide">
        <img
          alt="zahrada"
          src="https://res.cloudinary.com/dsdaneoq8/image/upload/v1619893876/domy/bench1_ax61qb.jpg"
        />
        <div className="gardens-slide-content">
          <h1>Dřevěné prvky</h1>
          <p>
            Děláme krásné dřevěné prvky, jako terasy, zahradní domky, lavice,
            aj.
          </p>
          <button>
            <a href="/drevene-prvky">Chci vidět více</a>
          </button>
        </div>
      </div>
    </>
  );
};

export default GardenSlide;
