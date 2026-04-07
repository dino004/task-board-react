const Button = (props) => {
  const { className = "", id, type = "button", children } = props;
  return (
    <button className={className} type={type} id={id}>
      {children}
    </button>
  );
};

export default Button;
