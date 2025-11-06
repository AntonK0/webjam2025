import { useState } from "react";
import ItemType from "./ItemType";
import {
  RiDropLine,
  RiDropFill,
  RiToothLine,
  RiHandSanitizerLine,
} from "@remixicon/react";

const AssessmentPage = () => {
  const [page, setPage] = useState(0);
  const [productType, setProductType] = useState("");

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
  } else {
    return <></>;
  }
};

export default AssessmentPage;
