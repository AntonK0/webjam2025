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
    console.log(JSON.parse(data))
    const response = {
      topPickTitle: JSON.parse(data).top_pick_title,
      topPickType: JSON.parse(data).top_pick_type,
      topAiSummaryOfShampoo: JSON.parse(data).top_ai_summary_of_shampoo,
      topWhyRecommend: JSON.parse(data).top_why_recommend,
      topSearchLink: JSON.parse(data).top_search_link,
      secondPickTitle: JSON.parse(data).second_pick_title,
      secondPickType: JSON.parse(data).second_pick_type,
      secondAiSummaryOfShampoo: JSON.parse(data).second_ai_summary_of_shampoo,
      secondWhyRecommend: JSON.parse(data).second_why_recommend,
      secondSearchLink: JSON.parse(data).second_search_link,
      alternativePickTitle: JSON.parse(data).alternative_pick_title,
      alternativePickType: JSON.parse(data).altnerative_pick_type,
      alternativeAiSummaryOfShampoo:
        JSON.parse(data).alternative_ai_summary_of_shampoo,
      alternativeWhyRecommend: JSON.parse(data).alternative_why_recommend,
      alternativeSearchLink: JSON.parse(data).alternative_search_link,
    };

    navigate("/results", {
      state: response,
    });
  }
  
    return ( 
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
    );
};

export default Loading;
