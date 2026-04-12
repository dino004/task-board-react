const Button = (props) => {
  const {
    className = "",
    id,
    type = "button",
    onClick,
    children,
  } = props;
  return (
    <button
      className={className}
      type={type}
      id={id}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
