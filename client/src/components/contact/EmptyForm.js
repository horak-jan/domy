import { useForm } from "react-hook-form";

const EmptyForm = (props) => {
  const { sendForm } = props;
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    sendForm(data);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ maxWidth: "600px", margin: "0 auto" }}
      >
        <label htmlFor="firstName">Jméno</label>
        <input
          name="firstName"
          ref={register({
            required: "Toto pole je nutné vyplnit.",
            minLength: { value: 3, message: "Jméno musí být delší." },
            pattern: {
              value: /^[A-Za-zěščřžýáíéů]+$/i,
              message: "Speciální znaky a čísla nejsou povoleny.",
            },
          })}
        />
        {errors.firstName && (
          <p className="form-error">{errors.firstName.message}</p>
        )}
        <label htmlFor="lastName">Příjmení </label>
        <input
          name="lastName"
          ref={register({
            required: "Toto pole je nutné vyplnit.",
            minLength: { value: 3, message: "Jméno musí být delší." },
            pattern: {
              value: /^[A-Za-zěščřžýáíéů]+$/i,
              message: "Speciální znaky a čísla nejsou povoleny.",
            },
          })}
        />

        {errors.lastName && (
          <p className="form-error">{errors.lastName.message}</p>
        )}
        <label htmlFor="mobil">Telefon</label>
        <input
          name="mobil"
          ref={register({
            required: "Toto pole je nutné vyplnit.",
            minLength: { value: 9, message: "Telefoní číslo je moc krátké" },
            maxLength: { value: 9, message: "Telefoní číslo je moc dlouhé." },
          })}
        />
        {errors.mobil && <p className="form-error">{errors.mobil.message}</p>}

        <button type="submit">Odeslat</button>
      </form>
    </>
  );
};

export default EmptyForm;
