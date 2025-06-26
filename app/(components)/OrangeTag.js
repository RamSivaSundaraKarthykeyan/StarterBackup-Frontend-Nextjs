import React from "react";

const OrangeTag = ({ content }) => {
  return (
    <div>
      <div className="bg-weborange/10 rounded-sm  inline-flex px-[8px] py-[3px]">
        <p className="text-weborange text-[11px] items-center justify-center flex">
          {content}
        </p>
      </div>
    </div>
  );
};

export default OrangeTag;
