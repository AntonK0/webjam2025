import React from 'react';
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
const Loading = () => {
  const userValues = useLocation().state;
  const formData = new FormData();

  let navigate = useNavigate();

  formData.append(
    "shampoo_input_json",
    JSON.stringify({
      hair_type: userValues.hairType,
      hair_oiliness: userValues.oiliness,
      hair_density: userValues.hairDensity,
      hair_condition: userValues.conditions,
      allergies: userValues.allergies,
      additional_info: userValues.misc,
    })
  );

  formData.append("image", userValues.files[0]);

  const { isLoading, error, data } = useQuery({
    queryKey: ["recommendations"],
    queryFn: () =>
      fetch("http://127.0.0.1:8000/generate-shampoo-response", {
        method: "POST",
        // headers: {
        //   "Content-Type": "multipart/form-data",
        // },
        body: formData,
      }).then((res) => res.json()),
  });

  if (data !== undefined) {
    // Clean the data if it's wrapped in markdown code blocks
    let cleanedData = data;
    if (typeof data === 'string') {
      // Remove markdown code block syntax if present
      cleanedData = data.replace(/```json\s*/g, '').replace(/```\s*/g, '').trim();
    }
    
    const parsedData = typeof cleanedData === 'string' ? JSON.parse(cleanedData) : cleanedData;
    console.log(parsedData);
    
    const response = {
      topPickTitle: parsedData.top_pick_title,
      topPickType: parsedData.top_pick_type,
      topAiSummaryOfShampoo: parsedData.top_ai_summary_of_shampoo,
      topWhyRecommend: parsedData.top_why_recommend,
      topSearchLink: parsedData.top_search_link,
      secondPickTitle: parsedData.second_pick_title,
      secondPickType: parsedData.second_pick_type,
      secondAiSummaryOfShampoo: parsedData.second_ai_summary_of_shampoo,
      secondWhyRecommend: parsedData.second_why_recommend,
      secondSearchLink: parsedData.second_search_link,
      alternativePickTitle: parsedData.alternative_pick_title,
      alternativePickType: parsedData.altnerative_pick_type,
      alternativeAiSummaryOfShampoo:
        parsedData.alternative_ai_summary_of_shampoo,
      alternativeWhyRecommend: parsedData.alternative_why_recommend,
      alternativeSearchLink: parsedData.alternative_search_link,
    };

    navigate("/results", {
      state: response,
    });
  }
  
    return (
    <>
      <div id="bg-wrap">
        <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="Gradient1" cx="50%" cy="50%" fx="0.441602%" fy="50%" r=".5">
              <animate attributeName="fx" dur="34s" values="0%;3%;0%" repeatCount="indefinite"></animate>
              <stop offset="0%" stopColor="rgba(255, 200, 240, 0.6)"></stop>
              <stop offset="100%" stopColor="rgba(255, 200, 240, 0)"></stop>
            </radialGradient>
            <radialGradient id="Gradient2" cx="50%" cy="50%" fx="2.68147%" fy="50%" r=".5">
              <animate attributeName="fx" dur="23.5s" values="0%;3%;0%" repeatCount="indefinite"></animate>
              <stop offset="0%" stopColor="rgba(255, 245, 200, 0.6)"></stop>
              <stop offset="100%" stopColor="rgba(255, 245, 200, 0)"></stop>
            </radialGradient>
            <radialGradient id="Gradient3" cx="50%" cy="50%" fx="0.836536%" fy="50%" r=".5">
              <animate attributeName="fx" dur="21.5s" values="0%;3%;0%" repeatCount="indefinite"></animate>
              <stop offset="0%" stopColor="rgba(200, 240, 255, 0.6)"></stop>
              <stop offset="100%" stopColor="rgba(200, 240, 255, 0)"></stop>
            </radialGradient>
            <radialGradient id="Gradient4" cx="50%" cy="50%" fx="4.56417%" fy="50%" r=".5">
              <animate attributeName="fx" dur="23s" values="0%;5%;0%" repeatCount="indefinite"></animate>
              <stop offset="0%" stopColor="rgba(200, 255, 220, 0.6)"></stop>
              <stop offset="100%" stopColor="rgba(200, 255, 220, 0)"></stop>
            </radialGradient>
            <radialGradient id="Gradient5" cx="50%" cy="50%" fx="2.65405%" fy="50%" r=".5">
              <animate attributeName="fx" dur="24.5s" values="0%;5%;0%" repeatCount="indefinite"></animate>
              <stop offset="0%" stopColor="rgba(220, 220, 255, 0.6)"></stop>
              <stop offset="100%" stopColor="rgba(220, 220, 255, 0)"></stop>
            </radialGradient>
            <radialGradient id="Gradient6" cx="50%" cy="50%" fx="0.981338%" fy="50%" r=".5">
              <animate attributeName="fx" dur="25.5s" values="0%;5%;0%" repeatCount="indefinite"></animate>
              <stop offset="0%" stopColor="rgba(255, 220, 220, 0.6)"></stop>
              <stop offset="100%" stopColor="rgba(255, 220, 220, 0)"></stop>
            </radialGradient>
          </defs>
          <rect x="13.744%" y="1.18473%" width="100%" height="100%" fill="url(#Gradient1)" transform="rotate(334.41 50 50)">
            <animate attributeName="x" dur="20s" values="25%;0%;25%" repeatCount="indefinite"></animate>
            <animate attributeName="y" dur="21s" values="0%;25%;0%" repeatCount="indefinite"></animate>
            <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="7s" repeatCount="indefinite"></animateTransform>
          </rect>
          <rect x="-2.17916%" y="35.4267%" width="100%" height="100%" fill="url(#Gradient2)" transform="rotate(255.072 50 50)">
            <animate attributeName="x" dur="23s" values="-25%;0%;-25%" repeatCount="indefinite"></animate>
            <animate attributeName="y" dur="24s" values="0%;50%;0%" repeatCount="indefinite"></animate>
            <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="12s" repeatCount="indefinite"></animateTransform>
          </rect>
          <rect x="9.00483%" y="14.5733%" width="100%" height="100%" fill="url(#Gradient3)" transform="rotate(139.903 50 50)">
            <animate attributeName="x" dur="25s" values="0%;25%;0%" repeatCount="indefinite"></animate>
            <animate attributeName="y" dur="12s" values="0%;25%;0%" repeatCount="indefinite"></animate>
            <animateTransform attributeName="transform" type="rotate" from="360 50 50" to="0 50 50" dur="9s" repeatCount="indefinite"></animateTransform>
          </rect>
        </svg>
      </div>
      <div className="wrapper height-screen mt-70 flex flex-col justify-center items-center">

      <div className="flex justify-center items-center mx-auto w-full h-full">
        <DotLottieReact
        src="https://lottie.host/33f50ab7-a8f9-41cc-b11d-039a3033c006/2KsVtVP9so.lottie"
        loop
        autoplay
      />
      </div>
      <div className="text-2xl font-bold">
        <p>Loading...</p>
      </div>
    </div>
    </>
    );
};

export default Loading;
