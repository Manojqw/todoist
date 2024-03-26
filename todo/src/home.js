import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {" "}
      <div className="w-full">
        <div className=" flex flex-col items-center">
          <h1 className=" text-4xl m-16 font-bold">Simple Todo App</h1>
          <button className="mt-5">
            <Link
              to="/pricing"
              className="p-3 border-2 rounded-xl bg-gray-300 text-blue-300"
            >
              Registor
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
