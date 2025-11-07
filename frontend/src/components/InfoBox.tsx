interface InfoBoxProps {
  body: string;
}


const InfoBox = ({body}: InfoBoxProps) => {
  return (
    <div className="card w-80 border-solid border-black border-3 mt-6">
      <div className="card-body">
        <p className="text-sm">
          {body}
        </p>
      </div>
    </div>
  );
};

export default InfoBox;
