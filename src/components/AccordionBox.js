import { useState } from "react";

const AccordionBox = ({ head, body }) => {
  let [acc, setAcc] = useState(false);
  return (
    <div className="bg-mainColor p-6">
      <div className="flex items-center gap-5 text-white ">
        <span
          onClick={() => setAcc((prev) => !prev)}
          className="text-3xl -mt-1 cursor-pointer">
          {acc ? "-" : "+"}
        </span>
        <h3 className="">{head}</h3>
      </div>
      <div className={`mt-5 text-white  ${acc ? "block" : "hidden"}`}>
        {body}
      </div>
    </div>
  );
};

export default AccordionBox;
