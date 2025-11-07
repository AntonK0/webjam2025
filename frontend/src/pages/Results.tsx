import React from "react";
import { useLocation } from "react-router-dom";
import TopPick from "../components/TopPick";
import ProductCardMobile from "../components/SecondPick";
import { RiSparklingFill, RiSparklingLine } from "@remixicon/react";
import AlternativePick from "../components/AlternativePick";

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
    <div className="wrapper pt-24 pl-12 pr-12 flex justify-center flex-wrap">
        <h1 className="text-3xl font-semibold mb-10">
          Here's what we recommend.
        </h1>
        <div className="w-full flex mb-2">
          <RiSparklingFill />
          <h2 className="ml-1 font-semibold"> Our Top Pick</h2>
        </div>
        <TopPick
          productName={response.topPickTitle}
          productDescription={response.topPickType}
        />
        <div className="w-full flex mt-9 mb-2">
          <RiSparklingLine />
          <h2 className="ml-1 font-semibold">Second Pick</h2>
        </div>
        <ProductCardMobile
          productName={response.secondPickTitle}
          productDescription={response.alternativePickType}
        />
        <div className="w-full flex mt-9 mb-2">
          <h2 className="ml-1 font-semibold">Alternative Pick</h2>
        </div>
        <AlternativePick
          productName={response.alternativePickTitle}
          productDescription={response.alternativePickType}
        />
    </div>
    </>
  );
};

export default Results;
