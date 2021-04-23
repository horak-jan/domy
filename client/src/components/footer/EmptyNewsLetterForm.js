import { useForm } from "react-hook-form";

const EmptyNewsLetterForm = (props) => {
  const { sendForm } = props;
  const { register, handleSubmit, errors } = useForm();

  return (
    <form onSubmit={handleSubmit(sendForm)}>
      <p>
        Přihlášením potvrzuji souhlas se{" "}
        <a href="/terms">zpracováním osobních údajů</a>.
      </p>
      {errors.email && <p className="form-error">{errors.email.message}</p>}

      <input
        placeholder="E-mail"
        name="email"
        ref={register({
          required: "Toto pole je nutné vyplnit.",
          minLength: { value: 8, message: "Email je moc krátký" },
        })}
      />

      <button type="submit">Přihlásit se</button>
    </form>
  );
};

export default EmptyNewsLetterForm;
