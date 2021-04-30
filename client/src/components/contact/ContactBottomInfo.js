const ContactBottomInfo = (props) => {
  const { address, email, mobil, openingHours } = props.info;

  return (
    <div className="contact-bottom-info">
      <h2>{address}</h2>
      <img
        src="https://res.cloudinary.com/dsdaneoq8/image/upload/v1619821094/domy/email-icon_mpa47n.png"
        alt="email icon"
      />{" "}
      <p>{email}</p>
      <br />
      <img
        src="https://res.cloudinary.com/dsdaneoq8/image/upload/v1619821094/domy/phone-icon_ocw8l0.png"
        alt="mobil phone icon"
      />{" "}
      <p>{mobil}</p>
      <br />
      <img
        src="https://res.cloudinary.com/dsdaneoq8/image/upload/v1619821094/domy/opening-hours-icon_mbpdhu.png"
        alt="opening hours info"
      />
      <p>{openingHours}</p>
    </div>
  );
};

export default ContactBottomInfo;
