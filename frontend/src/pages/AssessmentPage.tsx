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
        <div>
          <h1 className="text-3xl text-center font-semibold mt-40">
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
        <div>
          <h1 className="text-3xl text-center font-semibold mt-40">
            What is your hair type?
          </h1>
          <div className="flex justify-center flex-wrap mt-10">
            <ItemType
              item="Straight"
              icon={<RiReservedLine />}
              onClick={() => {
                setHairType("Straight");
                setPage(2);
              }}
            />
            <ItemType
              item="Curly"
              icon={<RiReservedLine />}
              onClick={() => {
                setHairType("Curly");
                setPage(2);
              }}
              clickable={false}
            />
            <ItemType
              item="Wavy"
              icon={<RiReservedLine />}
              onClick={() => {
                setHairType("Wavy");
                setPage(2);
              }}
              clickable={false}
            />
            <ItemType
              item="Coily"
              icon={<RiReservedLine />}
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
        <div>
          <h1 className="text-3xl text-center font-semibold mt-40">
            Does your hair have any of the following traits?
          </h1>
          <div className="mt-9 ml-5">
            <h2 className="text-xl font-medium mb-2">Hair Density</h2>
            <div className="flex gap-5">
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
          <div className="mt-9 ml-5">
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
          <div className="mt-9 ml-5">
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
          <div className="divider mr-3 ml-3 " />
          <div className="flex justify-end mr-3">
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
      <div className="flex flex-wrap justify-center">
        <div className="mt-36">
          <h1 className="font-semibold mb-4 text-3xl">Any Allergies?</h1>
          <TextBox
            placeholder_text="Ex. Fragrances, Dyes, etc... Leave blank if none."
            text={allergies}
            setText={setAllegies}
          />
        </div>
        <div className="mt-14">
          <h1 className="font-semibold mb-4 text-3xl">Anything else to add?</h1>
          <TextBox
            placeholder_text="Your response here will give context to our AI. Leave blank if none."
            text={misc}
            setText={setMisc}
          />
        </div>
        </div>
        <div className="divider mr-3 ml-3 " />
          <div className="flex justify-end mr-3">
            <Next
              onClick={() => {
                navigate({pathname: "/uploadImage"});
              }}
            />
          </div>
      </>
    );
  }
};

export default AssessmentPage;
