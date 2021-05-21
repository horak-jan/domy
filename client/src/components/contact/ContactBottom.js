import ContactBottomInfo from "./ContactBottomInfo";
import ContactBottomMap from "./ContactBottomMap";
import Loading from "../utils/Loading";
import useDbData from "../utils/useDbData";
import ShowErrorMessage from "../utils/ShowErrorMessage";

const ContactBottom = () => {
  const [loadedData, isLoading, hasError] = useDbData("address");

  let { address } = loadedData;

  return (
    <div className="contact-bottom">
      {hasError ? (
        <ShowErrorMessage />
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
