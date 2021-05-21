import PergolaType from "../components/pergolas/PergolaType";
const Pergolas = () => {
  const pergolaType = {
    header: "Hliníkové pergoly a přístřešky",
    p1:
      "Bezúdržbové hliníkové pergoly jsou ideální pro chvíle pohody a zábavy s přáteli. Díky svému modernímu vzhledu jsou vhodné na každou zahradu. Jejich konstrukce umožňuje další využití, a to jako přístřešek pro automobil nebo zastřešení menšího zahradního bazénu a vířivky.",
    p2:
      "U vybraných stavebnicových hliníkových pergol je možná montáž svépomoci. Navíc vynikají dlouhou životností. Moderní zahradní hliníkové pergoly vyrábíme na zakázku v jakémkoliv barevném provedení. Jako střešní krytinu volíme polykarbonát nebo bezpečnostní sklo. Oba materiály zaujmou svým vzhledem a mechanickými vlastnostmi.",
    mainImage:
      "https://res.cloudinary.com/dsdaneoq8/image/upload/v1621627029/domy/alupergola_y5lxcy.jpg",
    images: [
      "https://res.cloudinary.com/dsdaneoq8/image/upload/v1621627966/domy/alu1_uqz778.jpg",
      "https://res.cloudinary.com/dsdaneoq8/image/upload/v1621628748/domy/alu2_xmsb4g.jpg",
      "https://res.cloudinary.com/dsdaneoq8/image/upload/v1621627966/domy/alu3_vjutfr.jpg",
      "https://res.cloudinary.com/dsdaneoq8/image/upload/v1621627967/domy/alu4_qavvqp.jpg",
    ],
  };
  return (
    <div className="pergolas">
      <PergolaType pergolaType={pergolaType} />
    </div>
  );
};

export default Pergolas;
