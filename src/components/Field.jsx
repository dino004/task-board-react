const Field = (props) => {
  const {
    className = "",
    type = "text",
    id,
    name,
    placeholder,
    required,
    onInput,
    inputRef,
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
      ref={inputRef}
    />
  );
};

export default Field;
