import { useLocation, useNavigate } from "react-router-dom";
import InfoBox from "../components/InfoBox";
import InfoBoxWithHeading from "../components/InfoBoxWithHeading";
import LinkButton from "../components/LinkButton";
import CollapseButton from "../components/CollapseButton";

const Expand = () => {
  const response = useLocation().state;
  let navigate = useNavigate();

  return (
    <>
      <div className="flex justify-end mt-8 mb-8 mr-6 w-fill">
        <CollapseButton
          onClick={() => {
            navigate(-1);
          }}
        />
      </div>
      <div className="flex justify-center flex-wrap">
        <h1 className="text-2xl font-semibold text-left w-64 mb-1">
          {response.title}
        </h1>
        <LinkButton url={response.link} />
        <h2 className="text-lg font-light text-left w-72">{response.type}</h2>
        <InfoBox body={response.aiSummary} />
        <InfoBoxWithHeading
          heading="Why we recommend this:"
          body={response.why}
        />
      </div>
    </>
  );
};

export default Expand;
