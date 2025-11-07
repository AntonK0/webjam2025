import React from "react";
import { useLocation } from "react-router-dom";
import TopPick from "../components/TopPick";
import ProductCardMobile from "../components/ProductCardMobile";

const Results = () => {
  const response = useLocation().state;

  console.log(response);

  if (!response) {
    return (
      <div className="wrapper min-h-screen flex items-center justify-center">
        <p className="text-xl">No results available</p>
      </div>
    );
  }

  return (
    <>
    <div className="wrapper min-h-screen flex items-center justify-center">
      <TopPick
        productName={response.topPickTitle}
        productDescription={response.topPickType}
      />
    </div>
    </>
  );
};

export default Results;
