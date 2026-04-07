const Field = (props) => {
  const {
    className = "",
    type = "text",
    id,
    name,
    placeholder,
    required,
  } = props;
  return (
    <input
      className={className}
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      required={required}
    />
  );
};

export default Field;
