import { useLocation } from "react-router-dom";

const Results = () => {
  const response = useLocation().state;

  console.log(response)

  return <div>Results</div>;
};

export default Results;
