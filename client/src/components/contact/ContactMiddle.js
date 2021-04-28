import { useState } from "react";
import EmptyForm from "./EmptyForm";
import MessageAfterSendingForm from "./MessageAfterSendingForm";
const Axios = require("axios");

const ContactMiddle = () => {
  const [messageAfterSendingForm, setMessageAfterSendingForm] = useState("");

  const sendForm = (data) => {
    Axios.post("api/contact", data).then(
      (response) => {
        setMessageAfterSendingForm(response.data.message);
      },
      (error) => {
        console.log(error);
      }
    );
  };
  return (
    <div className="contact-middle">
      <h3>
        Jsme pro Vás tím pravým partnerem. Zajistíme Vám 100 % financování.
        Pomůžeme Vám od A do Z. Zanechte nám zde Váš kontakt a my Vám zavoláme
        zpět.
      </h3>

      <div className="contact-form">
        {messageAfterSendingForm == "" ? (
          <EmptyForm sendForm={sendForm} />
        ) : (
          <MessageAfterSendingForm
            messageAfterSendingForm={messageAfterSendingForm}
          />
        )}
      </div>
    </div>
  );
};

export default ContactMiddle;
