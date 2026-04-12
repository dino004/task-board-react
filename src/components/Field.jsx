const Field = (props) => {
  const {
    className = "",
    type = "text",
    id,
    name,
    placeholder,
    required,
    onInput,
    value,
  } = props;
  return (
    <input
      className={className}
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      required={required}
      onInput={onInput}
      value={value}
    />
  );
};

export default Field;
