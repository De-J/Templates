const Field = (props) => {
  const { label, ...inputTagAttr } = props;

  return (
    <div>
      <span>
        <label htmlFor={props.id} className="h-fit">{label}</label>
      </span>

      <input className="underline outline-none p-2 my-1 mx-4"
        {...inputTagAttr} />
    </div>
  );
};

export default Field;