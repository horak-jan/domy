import React from "react";
const FooterLinks = () => {
  return (
    <div className="footer-links">
      <div className="footer-links-group">
        <h3>Showroom Česko</h3>
        <div>+420 595 633 111</div>
        <div>info@dumnaklic.cz</div>
        <div>Zalužanského 1192 </div>
        <div>Ostrava-Vítkovice, 703 00</div>
      </div>

      <div className="footer-links-group">
        <h3>Showroom Slovensko</h3>
        <div>+421 547 745 03</div>
        <div>info@dumnaklic.sk</div>
        <div>Limbová 2645/5</div>
        <div>Bratislava, 831 01</div>
      </div>

      <div className="footer-links-group">
        <h3>O společnosti</h3>
        <div>Volná pracovní místa</div>
        <div>Naše projekty</div>
        <div>Vlastní výroba</div>
        <div>Náš tým</div>
        <div>O nás</div>
      </div>

      <div className="footer-links-group">
        <h3>Pro zákazníka</h3>
        <div>Garance nejlepší ceny</div>
        <div>Obchodní podmínky</div>
        <div>Jak na reklamaci</div>
        <div>Reakce zákazníků</div>
        <div>Naše realizace</div>
        <div>
          <a href="/kontakt">Kontakt</a>{" "}
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
