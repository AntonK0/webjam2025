import "./App.css";
import {RiCameraLensAiFill} from "@remixicon/react";
import LandingPageButton from "./components/LandingPageButton.tsx";
import { useNavigate } from "react-router";

function App() {
  const navigate = useNavigate();
  
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
      <div className="mx-7">
      <div className="flex items-center gap-2 mt-7">
        <RiCameraLensAiFill size="43px" className='opacity-100 text-black'/>
        <h1 className="text-2xl font-bold">SnapRec</h1>
      </div>
      <div>
        <h1 className="text-4xl font-bold mt-10">Never wonder which product to pick from the aisle again.</h1>
      </div>
      <div className="subheader text-lg text-gray-600 mt-10">Introducing your <span className="font-bold bg-linear-to-r from-[#55D0E6] to-[#884BA6] bg-clip-text text-transparent">AI shopping companion</span>. Tell us about yourself, and we will let you know what's best from the aisle.</div>
      <div className="flex mt-10">
        <LandingPageButton onClick={() => navigate("/assessment")} />
      </div>
      
      {/* How It Works Section */}
      <div className="mt-15 mb-15">
        <h2 className="text-2xl font-bold mb-8">How It Works</h2>
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[11px] top-[12px] bottom-[40px] w-[2px] bg-black"></div>
          
          {/* Steps */}
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-6 h-3 mt-2 rounded-full border-2 border-black bg-white shrink-0 z-10"></div>
              <p className="text-xl">Fill out our questionnaire on your hair type, allergens, etc...</p>
            </div>
            
            <div className="flex items-start gap-6">
              <div className="w-6 h-3 mt-2 rounded-full border-2 border-black bg-white shrink-0 z-10"></div>
              <p className="text-xl">Take a photo of a store shelf of the products you want to scan.</p>
            </div>
            
            <div className="flex items-start gap-6">
              <div className="w-6 h-3 mt-2 rounded-full border-2 border-black bg-white shrink-0 z-10"></div>
              <p className="text-xl">Get recommended the best options based on your profile.</p>
            </div>
            
            <div className="flex items-start gap-6">
              <div className="w-6 h-3 mt-2 rounded-full border-2 border-black bg-white shrink-0 z-10"></div>
              <p className="text-xl">Pick the right product and you're done!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
