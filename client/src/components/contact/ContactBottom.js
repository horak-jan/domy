import { useEffect, useState } from "react";
import Axios from "axios";
import ContactBottomInfo from "./ContactBottomInfo";
import ContactBottomMap from "./ContactBottomMap";

const ContactBottom = () => {
  const [contactInfo, setContactInfo] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const getContactInfo = async () => {
      try {
        const res = await Axios.get("/api/address");

        setContactInfo(res.data.address);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    getContactInfo();
  }, []);

  return (
    <div className="contact-bottom">
      {isError && <div>Někde se stala chyba ...</div>}
      {isLoading ? (
        <div>'Načítám...'</div>
      ) : (
        contactInfo.map((contactInfo) => (
          <>
            <ContactBottomMap
              lat={contactInfo.lat}
              lng={contactInfo.long}
              key={contactInfo.phone}
            />
            <ContactBottomInfo key={contactInfo.address} info={contactInfo} />
          </>
        ))
      )}
    </div>
  );
};

export default ContactBottom;
