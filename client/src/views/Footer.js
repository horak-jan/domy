import React from "react";
import FooterForm from "../components/footer/FooterForm";
import FooterLinks from "../components/footer/FooterLinks";

const Footer = () => {
  return (
    <div className="footer">
      <h2>Přihlašte se k odběru informací, akcí, novinek</h2>
      <FooterForm />
      <FooterLinks />
    </div>
  );
};

export default Footer;
