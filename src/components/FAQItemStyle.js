import React, { useState } from 'react';
import PropTypes from 'prop-types';

const FAQItemStyle = ({ fAQTitle, iconchevronUpArrowUp, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="self-stretch box-border overflow-hidden flex flex-col items-start justify-start max-w-full shrink-0 border-b-[1.1px] border-solid border-neutral-n200 m-0 auto ">
      <div
        className="self-stretch flex flex-row items-start justify-start pt-0 pb-[8.2px] pr-0 pl-px box-border max-w-full cursor-pointer"
        onClick={toggleFAQ}
      >
        <div className="flex-1 flex flex-row items-start justify-start gap-[17.6px] max-w-full">
          <div className="flex flex-row items-start justify-start py-[6.6px] px-0">
            <div className="h-[17.8px] w-[4.4px] relative rounded-[2.21px] bg-primary-pr600" />
          </div>
          <b className="flex-1 relative leading-[142%] inline-block min-w-[432px] max-w-full mq825:min-w-full mq450:text-lg mq450:leading-[25px]">
            {fAQTitle}
          </b>
          <div className="flex flex-col items-start justify-start pt-[2.2px] px-0 pb-0">
            <img
              className="w-[26.5px] h-[26.5px] relative"
              alt=""
              src={isOpen ? iconchevronUpArrowUp : '/iconchevrondown-arrowdown.svg'}
            />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="self-stretch pt-2 pb-4 pr-0 pl-px box-border">
          <p className="text-base leading-[28px] font-normal font-inter text-neutral-n800 text-left">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

FAQItemStyle.propTypes = {
  fAQTitle: PropTypes.string.isRequired,
  iconchevronUpArrowUp: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export default FAQItemStyle;
