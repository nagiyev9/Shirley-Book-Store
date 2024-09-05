import React, { useState, useEffect } from "react";

const EditItem = ({ item, inputName, labelName, data, onEdit, title }) => {
  const [inputValue, setInputValue] = useState(data);

  useEffect(() => {
    setInputValue(data);
  }, [data]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onEdit({ title: inputValue });
  };

  console.log(inputValue);

  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-gray-100 shadow-md rounded-lg">
      <h1 className="text-center font-bold text-2xl mb-6 text-gray-800">
        Edit {item}
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor={inputName}
            className="block text-lg font-semibold text-gray-700 mb-2"
          >
            {labelName} Name:
          </label>
          <input
            type="text"
            name={inputName}
            id={inputName}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={`Enter ${labelName} name`}
            value={inputValue}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#62ab00] text-white font-semibold py-2 px-4 rounded-lg hover:bg-white hover:text-[#62ab00] border-2 border-[#62ab00] transition duration-300"
        >
          Edit {item}
        </button>
      </form>
    </div>
  );
};

export default EditItem;
