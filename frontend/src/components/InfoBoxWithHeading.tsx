interface InfoBoxWithHeadingProps {
  heading: string;
  body: string;
}


const InfoBoxWithHeading = ({heading, body}: InfoBoxWithHeadingProps) => {
  return (
    <div className="card w-80 border-solid border-black border-3">
      <div className="card-body">
        <h2 className="card-title text-xl">{heading}</h2>
        <p className="text-sm">
          {body}
        </p>
      </div>
    </div>
  );
};

export default InfoBoxWithHeading;
