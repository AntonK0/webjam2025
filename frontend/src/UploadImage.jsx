import "./App.css";
import UploadBox from "./components/UploadBoxExample.tsx";
import LogoutHeader from "./components/LogoutHeader.tsx";
import MainInstruction from "./components/MainInstruction.tsx";
import SubInstruction from "./components/SubInstruction.tsx";
import Next from "./components/Next.tsx";

function UploadImage() {
  return (
    <>
      <LogoutHeader />
      {/* <MainInstruction />
      <SubInstruction /> */}
      <UploadBox />
      <Next />
    </>
  );
}

export default UploadImage;
