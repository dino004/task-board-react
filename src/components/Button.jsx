const Button = (props) => {
  const {
    className = "",
    id,
    type = "button",
    onDeleteTaskButtonClick,
    children,
  } = props;
  return (
    <button
      className={className}
      type={type}
      id={id}
      onClick={onDeleteTaskButtonClick}
    >
      {children}
    </button>
  );
};

export default Button;
