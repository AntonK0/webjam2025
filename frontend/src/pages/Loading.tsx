import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";

const Loading = () => {
  const userValues = useLocation().state;
  const formData = new FormData();

  const reader = new FileReader();

  formData.append(
    "shampoo_input_json",
    JSON.stringify({
      hair_type: userValues.hairType,
      hair_oiliness: userValues.oiliness,
      hair_density: userValues.hairType,
      hair_condition: userValues.conditions,
      allergies: userValues.allergies,
      additional_info: userValues.misc,
    })
  );
  
  formData.append("image", userValues.files[0])

  const queryClient = useQueryClient();
  const { isLoading, error, data } = useQuery({
    queryKey: ["recommendations"],
    queryFn: () =>
      fetch("http://127.0.0.1:8000/generate-shampoo-response", {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: formData,
      }),
  });

  console.log(userValues, formData, data);
  return <div>Loading</div>;
};

export default Loading;
