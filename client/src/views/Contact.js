import ContactBottom from "../components/contact/ContactBottom";
import ContactMiddle from "../components/contact/ContactMiddle";
import ContactTop from "../components/contact/ContactTop";

const Contact = () => {
  return (
    <div className="contact">
      <h1>Pojďme společně realizovat vaše plány o šťastném bydlení.</h1>

      <ContactTop />

      <ContactMiddle />

      <ContactBottom />
    </div>
  );
};

export default Contact;
