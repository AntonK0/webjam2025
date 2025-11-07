import React from 'react';
import { useState } from "react";
import ItemType from "../components/ItemType";
import Chip from "../components/Chip";
import Next from "../components/Next";
import TextBox from "../components/TextBox";
import { useNavigate } from "react-router";


import {
  RiDropLine,
  RiDropFill,
  RiToothLine,
  RiHandSanitizerLine,
  RiReservedLine,
  RiMenuLine,
  RiLoader3Fill,
  RiWindyFill,
  RiLoader4Fill,
} from "@remixicon/react";

const AssessmentPage = () => {
  const [page, setPage] = useState(0);
  const [productType, setProductType] = useState("");
  const [hairType, setHairType] = useState("");
  const [hairDensity, setHairDensity] = useState("Fine");
  const [oiliness, setOiliness] = useState("Dry");
  const [conditions, setConditions] = useState<string[]>([]);
  const [allergies, setAllegies] = useState("");
  const [misc, setMisc] = useState("");

  let navigate = useNavigate();

  const userValues = {
    productType: productType,
    hairType: hairType,
    hairDensity: hairDensity,
    oiliness: oiliness,
    conditions: conditions,
    allergies: allergies,
    misc: misc,
  };

  const conditionList = [
    "Frizz",
    "Itchy",
    "Dandruff",
    "Split-ends",
    "Hair Loss",
    "Dyed",
  ];

  const toggleOption = (option: string) => {
    setConditions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  if (page == 0) {
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
        <div>
          <h1 className="text-3xl text-center mx-10 font-semibold mt-40">
            What product are you looking for?
          </h1>
          <div className="flex justify-center flex-wrap mt-10">
            <ItemType
              item="Shampoo"
              icon={<RiDropLine />}
              onClick={() => {
                setProductType("Shampoo");
                setPage(1);
              }}
            />
            <ItemType
              item="Conditioner"
              icon={<RiDropFill />}
              onClick={() => {}}
              clickable={false}
            />
            <ItemType
              item="Toothpaste"
              icon={<RiToothLine />}
              onClick={() => {}}
              clickable={false}
            />
            <ItemType
              item="Skin Care"
              icon={<RiHandSanitizerLine />}
              onClick={() => {}}
              clickable={false}
            />
          </div>
        </div>
      </>
    );
  } else if (page == 1) {
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
        <div>
          <h1 className="text-3xl text-center font-semibold mt-40">
            What is your hair type?
          </h1>
          <div className="flex justify-center flex-wrap mt-10">
            <ItemType
              item="Straight"
              icon= {<RiMenuLine />}
              onClick={() => {
                setHairType("Straight");
                setPage(2);
              }}
            />
            <ItemType
              item="Curly"
              icon= {<RiLoader4Fill />}
              onClick={() => {
                setHairType("Curly");
                setPage(2);
              }}
              clickable={false}
            />
            <ItemType
              item="Wavy"
              icon= {<RiWindyFill />}
              onClick={() => {
                setHairType("Wavy");
                setPage(2);
              }}
              clickable={false}
            />
            <ItemType
              item="Coily"
              icon= {<RiLoader3Fill />}
              onClick={() => {
                setHairType("Coily");
                setPage(2);
              }}
              clickable={false}
            />
          </div>
        </div>
      </>
    );
  } else if (page == 2) {
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
        <div className='mx-12'>
          <h1 className="text-3xl font-semibold mt-20">
            Does your hair have any of the following traits?
          </h1>
          <div className="mt-9">
            <h2 className="text-xl font-medium mb-2">Hair Density</h2>
            <div className="flex flex-wrap gap-5">
              <Chip
                label="Fine"
                selected={hairDensity == "Fine"}
                onClick={() => {
                  setHairDensity("Fine");
                }}
              />
              <Chip
                label="Medium"
                selected={hairDensity == "Medium"}
                onClick={() => {
                  setHairDensity("Medium");
                }}
              />
              <Chip
                label="Coarse"
                selected={hairDensity == "Coarse"}
                onClick={() => {
                  setHairDensity("Coarse");
                }}
              />
            </div>
          </div>
          <div className="mt-9">
            <h2 className="text-xl font-medium mb-2">Oiliness</h2>
            <div className="flex gap-5">
              <Chip
                label="Dry"
                selected={oiliness == "Dry"}
                onClick={() => {
                  setOiliness("Dry");
                }}
              />
              <Chip
                label="Normal"
                selected={oiliness == "Normal"}
                onClick={() => {
                  setOiliness("Normal");
                }}
              />
              <Chip
                label="Oily"
                selected={oiliness == "Oily"}
                onClick={() => {
                  setOiliness("Oily");
                }}
              />
            </div>
          </div>
          <div className="mt-9">
            <h2 className="text-xl font-medium mb-2">Conditions</h2>
            <div className="flex flex-wrap gap-x-5 gap-y-3">
              {conditionList.map((c) => (
                <Chip
                  key={c}
                  label={c}
                  selected={conditions.includes(c)}
                  onClick={() => toggleOption(c)}
                />
              ))}
            </div>
          </div>
          <div className="divider " />
          <div className="flex justify-end">
            <Next
              onClick={() => {
                setPage(3);
              }}
            />
          </div>
        </div>
      </>
    );
  } else {
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
        <div className="flex flex-wrap justify-center mx-12">
          <div className="mt-36">
            <h1 className="font-semibold mb-4 text-3xl">Any Allergies?</h1>
            <TextBox
              placeholder_text="Ex. Fragrances, Dyes, etc... Leave blank if none."
              text={allergies}
              setText={setAllegies}
            />
          </div>
          <div className="mt-14">
            <h1 className="font-semibold mb-4 text-3xl">
              Anything else to add?
            </h1>
            <TextBox
              placeholder_text="Your response here will give context to our AI. Leave blank if none."
              text={misc}
              setText={setMisc}
            />
          </div>
        </div>
        <div className="divider mx-10 " />
        <div className="flex justify-end mx-10">
          <Next
            onClick={() => {
              navigate("/uploadImage", {state: userValues});
            }}
          />
        </div>
      </>
    );
  }
};

export default AssessmentPage;
