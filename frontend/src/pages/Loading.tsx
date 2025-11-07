import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";

const Loading = () => {
  const userValues = useLocation().state;

  const queryClient = useQueryClient();
  const { isLoading, error, data } = useQuery({
    queryKey: ["recommendations"],
    queryFn: () =>
      fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      }),
  });

  console.log(userValues);
  return <div>Loading</div>;
};

export default Loading;
