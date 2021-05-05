import Button from "./Button";

const ButtonWrapper = (props) => {
  return (
    <a href={props.link}>
      <Button />
    </a>
  );
};

export default ButtonWrapper;
