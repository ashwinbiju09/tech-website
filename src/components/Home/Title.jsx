import React from "react";

const Title = ({ data }) => {
  return (
    <h2 className="text-4xl font-semibold tracking-wide md:text-[45px] md:font-[600] py-4 md:tracking-[-2px] text-center bg-clip-text text-transparent bg-gradient-to-b from-blue-800 to-blue-500">
      {data}
    </h2>
  );
};

export default Title;
