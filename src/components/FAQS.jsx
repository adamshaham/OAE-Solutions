import React, { useState } from "react";

// Define props interface if using TypeScript, for JavaScript, just use props
const YourComponent = ({ question, answer }) => {
  // State to manage the expansion of the box
  const [isExpanded, setIsExpanded] = useState(false);

  // Function to toggle the expansion of the box
  const toggleExpansion = () => setIsExpanded(!isExpanded);

  return (
    <div
      className={`self-stretch rounded-[18.67px] bg-color-brand-white box-border flex flex-col items-center justify-center py-[26.666667938232422px] px-[31px] border-[1.3px] border-solid border-color-brand-black cursor-pointer ${
        isExpanded ? "pb-8" : "pb-[26.666667938232422px]"
      }`}
      onClick={toggleExpansion} // Toggle expansion on click
      style={{
        transition: "all 0.3s ease", // Smooth transition for the expansion
      }}
    >
      <div className="flex flex-row items-center justify-center w-full">
        <b className="flex-1 text-center">{question}</b>
        <img
          className="h-[42.7px] w-[42.7px] overflow-hidden shrink-0"
          loading="eager"
          alt=""
          src="/plus.svg"
          style={{
            transform: isExpanded ? "rotate(45deg)" : "rotate(0deg)", // Rotate plus icon to indicate expansion
            transition: "transform 0.2s ease", // Smooth transition for the icon rotation
          }}
        />
      </div>
      {/* Answer text that appears within the expanded box */}
      {isExpanded && (
        <div className="mt-4 w-full">
          <p className="text-center">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQS;
