import React from "react";
import { Link } from "react-router-dom";

const DeleteItem = ({ onSubmit }) => {
  return (
    <>
      <div className="flex flex-col items-center gap-8 my-8 mx-36 rounded-lg bg-red-200 py-6">
        <h2>Are you sure you want to delete this item?</h2>
        <div className="flex gap-4 justify-center">
          <button
            onClick={onSubmit}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            Delete Item
          </button>
          <Link
            to={"/pages/admin"}
            className="px-4 py-3 bg-gray-500 text-white rounded-md hover:bg-gray-600"
          >
            Cancel
          </Link>
        </div>
      </div>
    </>
  );
};

export default DeleteItem;
