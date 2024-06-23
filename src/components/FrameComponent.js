import React, { useState } from 'react';
import FAQItemStyle from './FAQItemStyle';
import PropTypes from 'prop-types';

const FrameComponent = ({ className = '' }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      title: 'What is Neuros and how does it differ from other analytics platforms?',
      answer: 'Neuros is a cutting-edge analytics platform that leverages advanced AI to provide deeper insights and more accurate predictions compared to traditional analytics tools.',
      icon: '/iconchevronup-arrowup@2x.png'
    },
    {
      title: 'How does the AI-driven predictive analytics feature work?',
      answer: 'Our AI-driven predictive analytics feature uses machine learning algorithms to analyze historical data and predict future trends with high accuracy.',
      icon: '/iconchevrondown-arrowdown.svg'
    },
    {
      title: 'Is my data secure with Neuros?',
      answer: 'Yes, we prioritize data security with end-to-end encryption and regular security audits to ensure your data remains safe.',
      icon: '/iconchevrondown-arrowdown.svg'
    },
    {
      title: 'Can I integrate Neuros with other tools and platforms I currently use?',
      answer: 'Yes, Neuros offers seamless integration with a wide range of tools and platforms, making it easy to incorporate into your existing workflow.',
      icon: '/iconchevrondown-arrowdown-2.svg'
    },
    {
      title: 'How is the pricing structured for Neuros? Are there any hidden fees?',
      answer: 'Our pricing is transparent and flexible, with no hidden fees. You can choose a plan that best fits your needs and budget.',
      icon: '/iconchevrondown-arrowdown-3.svg'
    },
    {
      title: 'I\'m new to business analytics. Does Neuros offer any support or tutorials?',
      answer: 'Absolutely! Neuros offers comprehensive support and tutorials to help you get started and make the most of our platform.',
      icon: '/iconchevrondown-arrowdown-4.svg'
    }
  ];

  return (
    <div className={`w-[1877px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full shrink-0 text-left text-24xl text-black font-dm-sans ${className}`}>
      <div className="w-[1447px] flex flex-row items-start justify-start relative max-w-full">
        <div className="h-[806px] w-[806px] absolute !m-[0] top-[-99px] right-[303px] [filter:blur(500px)] rounded-[50%] bg-neutral-n0 z-[1]" />
        <div className="flex-1 rounded-2xs [background:linear-gradient(180deg,_#fff,_rgba(255,_255,_255,_0))] overflow-hidden flex flex-row items-start justify-start py-[98px] px-12 box-border min-h-[940px] shrink-0 [debug_commit:0448091] max-w-full z-[2] lg:pl-6 lg:pr-6 lg:box-border mq825:pt-16 mq825:pb-16 mq825:box-border mq450:pt-[42px] mq450:pb-[42px] mq450:box-border">
          <div className="h-[570px] w-[1327.4px] flex flex-row flex-wrap items-start justify-start pt-0 pb-[305.1px] pr-1 pl-0 box-border gap-[52.9px_50.9px] max-w-[1327.43px] lg:pb-[198px] lg:box-border mq825:gap-[25px] mq825:pb-[129px] mq825:box-border mq450:h-auto mq1500:max-w-full">
            <div className="flex-1 flex flex-col items-start justify-end gap-[26.5px] min-w-[396px] max-w-[525px] shrink-0 [debug_commit:0448091] mq825:max-w-full">
              <div className="w-[480.7px] flex flex-col items-start justify-start gap-[17.6px] max-w-full">
                <button className="cursor-pointer py-[7px] pr-[11px] pl-[13px] bg-neutral-n0 w-[92.3px] shadow-[0px_0px_1px_rgba(44,_58,_114,_0.05),_0px_2px_6px_rgba(44,_58,_114,_0.05),_0px_10px_18px_rgba(58,_76,_146,_0.1)] rounded-[16.54px] box-border flex flex-row items-center justify-start gap-[8.8px] border-[1.1px] border-solid border-neutral-n400 hover:bg-gainsboro hover:box-border hover:border-[1.1px] hover:border-solid hover:border-lightslategray">
                  <img
                    className="h-[22.1px] w-[22.1px] relative object-contain"
                    alt=""
                    src="/iconai@2x.png"
                  />
                  <div className="w-[35px] relative text-base leading-[28px] font-medium font-inter text-neutral-n800 text-center inline-block min-w-[35px]">
                    FAQ
                  </div>
                </button>
                <div className="self-stretch flex flex-row items-center justify-start max-w-full">
                  <h1 className="m-0 flex-1 relative text-inherit leading-[116%] font-bold font-inherit inline-block max-w-full mq825:text-15xl mq825:leading-[40px] mq450:text-7xl mq450:leading-[30px]">
                    Frequently asked questions
                  </h1>
                </div>
                <div className="self-stretch h-[84px]" />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[20.7px] min-w-[396px] max-w-full text-3xl-1">
                {faqData.map((faq, index) => (
                  <FAQItemStyle
                    key={index}
                    fAQTitle={faq.title}
                    iconchevronUpArrowUp={faq.icon}
                    answer={faq.answer}
                    isOpen={activeIndex === index}
                    onClick={() => toggleFAQ(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
