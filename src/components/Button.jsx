const Button = (props) => {
  const {
    className = "",
    id,
    type = "button",
    onClick,
    disabled,
    children,
  } = props;
  return (
    <button
      className={className}
      type={type}
      id={id}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
