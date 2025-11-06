import { useLocation } from "react-router-dom";

const Loading = () => {
  const userValues = useLocation().state;

  console.log(userValues);
  return <div>Loading</div>;
};

export default Loading;
