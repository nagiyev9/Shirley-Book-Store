import React from "react";

const AddItem = ({ item, inputName, labelName, value, onChange, onSubmit }) => {
  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-gray-100 shadow-md rounded-lg">
      <h1 className="text-center font-bold text-2xl mb-6 text-gray-800">
        Add New {item}
      </h1>

      <form onSubmit={onSubmit} className="space-y-4">
        {" "}
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
            value={value}
            onChange={onChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={`Enter ${labelName} name`}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#62ab00] text-white font-semibold py-2 px-4 rounded-lg hover:bg-white hover:text-[#62ab00] border-2 border-[#62ab00] transition duration-300"
        >
          Add {item}
        </button>
      </form>
    </div>
  );
};

export default AddItem;
