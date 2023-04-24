const DropdownList = (props) => {
  const { id, label, form, options, ...attr } = props;
  return (
    <div>
      <label className="text-xs">{label}
        <select
          className="text-base my-1 mx-0 p-2 rounded-md"
          form={form}
          {...attr}>
          {options.map((ele) => (<option value={ele.toUpperCase()}>{ele}</option>))}
        </select>
      </label>
    </div>
  );
};

export default DropdownList;
