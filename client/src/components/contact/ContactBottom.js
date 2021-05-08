import ContactBottomInfo from "./ContactBottomInfo";
import ContactBottomMap from "./ContactBottomMap";
import Loading from "../utils/Loading";
import ErrorMessage from "../utils/ErrorMessage";
import useDbData from "../utils/useDbData";

const ContactBottom = () => {
  const [loadedData, isLoading, hasError] = useDbData("address");

  let { address } = loadedData;

  return (
    <div className="contact-bottom">
      {hasError ? (
        <ErrorMessage />
      ) : isLoading ? (
        <Loading />
      ) : (
        address.map((contactInfo) => (
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
