import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TopPick from "../components/TopPick";
import ProductCardMobile from "../components/SecondPick";
import { RiSparklingFill, RiSparklingLine } from "@remixicon/react";
import AlternativePick from "../components/AlternativePick";

const Results = () => {
  const response = useLocation().state;
  console.log(response);

  let navigate = useNavigate();

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
          onExpand={() => {navigate('/results/expand', {state: {
            title: response.topPickTitle,
            type: response.topPickType,
            aiSummary: response.topAiSummaryOfShampoo,
            link: response.topSearchLink,
            why: response.topWhyRecommend
          }})}}
        />
        <div className="w-full flex mt-9 mb-2">
          <RiSparklingLine />
          <h2 className="ml-1 font-semibold">Second Pick</h2>
        </div>
        <ProductCardMobile
          productName={response.secondPickTitle}
          productDescription={response.alternativePickType}
          onExpand={() => {navigate('/results/expand', {state: {
            title: response.secondPickTitle,
            type: response.secondPickType,
            aiSummary: response.secondAiSummaryOfShampoo,
            link: response.secondSearchLink,
            why: response.secondWhyRecommend
          }})}}
        />
        <div className="w-full flex mt-9 mb-2">
          <h2 className="ml-1 font-semibold">Alternative Pick</h2>
        </div>
        <AlternativePick
          productName={response.alternativePickTitle}
          productDescription={response.alternativePickType}
          // onExpand={() => {navigate('/results/expand', {state: {
          //   title: response.alternativePickTitle,
          //   type: response.alternativePickType,
          //   aiSummary: response.alternativeAiSummaryOfShampoo,
          //   link: response.alternativeSearchLink,
          //   why: response.alternativeWhyRecommend
          // }})}}
        />
    </div>
    </>
  );
};

export default Results;
