import React from "react";

const Form = ({ handleSubmit, value, setValue }) => {
  const handleChange = (e) => {
    console.log("폼 컴포넌트!", e.target.value);
    setValue(e.target.value);
  };

  return (
    <div>
      <form
        style={{ display: "flex" }}
        onSubmit={handleSubmit}
        className="flex pt-2"
      >
        <input
          type={"text"}
          name={"value"}
          placeholder={"해야 할 일을 입력하세요."}
          value={value}
          onChange={handleChange}
          className="w-full px-3 py-2 mr-4 text-gray-500 border rounded shadow"
        />
        <input
          type={"submit"}
          value={"입력"}
          className="p-2 text-blue-400 border-2 border-blue-400 rounded hover:text-white hover:bg-blue-200"
        />
      </form>
    </div>
  );
};

export default Form;
