import PropTypes from 'prop-types';
import { useEffect } from 'react';

const FrameComponent1 = ({ className = "" }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[220px] pr-5 pl-[31px] box-border max-w-full text-left text-xl text-neutral-n0 font-urbanist lg:pb-[389px] lg:box-border mq450:pb-[253px] mq450:box-border ${className}`}
    >
      <div className="w-[1274.5px] flex flex-col items-end justify-start gap-[374px] max-w-full lg:gap-[137px] mq825:gap-[68px] mq450:gap-[34px]">
        <div className="self-stretch flex flex-col items-end justify-start gap-[20px] max-w-full">
          <div className="w-[1260px] flex flex-row items-start justify-start gap-[3px] max-w-full lg:flex-wrap">
            <div className="flex-1 flex flex-col items-start justify-start pt-[13px] px-0 pb-0 box-border min-w-[475px] max-w-full mq825:min-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                <b className="relative uppercase z-[1] mq450:text-base">
                  OUR SOLUTIONS
                </b>
                <h1 className="m-0 self-stretch relative text-31xl font-bold font-inherit z-[1] mq825:text-21xl mq450:text-11xl">
                  Redefine the way you do business with OAE Solutions
                </h1>
              </div>
            </div>
            <div className="w-[526px] shadow-[5.8px_5.8px_7.88px_4.38px_rgba(0,_0,_0,_0.2)] rounded-[11.93px] bg-neutral-n0 overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[78.2px] pb-[33px] pr-5 pl-9 box-border gap-[6.8px] min-w-[526px] max-w-full z-[1] text-6xl text-black font-dm-sans lg:flex-1 mq825:min-w-full">
              <div className="w-[353.2px] flex flex-row items-start justify-start relative max-w-full">
                <b className="flex-1 relative leading-[128%] inline-block max-w-full shrink-0 mq450:text-xl mq450:leading-[26px]">
                  Custom Secure Chat bots
                </b>
                <img
                  className="h-[91.7px] w-[91.7px] absolute !m-[0] top-[-78.2px] left-[-12.3px] overflow-hidden shrink-0 z-[1]"
                  loading="lazy"
                  alt=""
                  src="/bubble-chat.svg"
                />
              </div>
              <div className="w-[441px] relative text-smi-9 leading-[160%] font-inter text-darkslategray inline-block max-w-full">
                Each chat bot is customized to enhance customer engagement and
                satisfaction through personalized interactions and 24/7
                availability. Incorporating advanced security measures, they
                also gather valuable data on customer behavior for continuous
                improvement.
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] text-6xl lg:flex-wrap">
            <div className="w-[583.5px] flex flex-col items-start justify-start gap-[67px] min-w-[583.5px] max-w-full lg:flex-1 mq825:gap-[33px] mq825:min-w-full mq450:gap-[17px]">
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-3.5 box-border max-w-full">
                <div className="flex-1 relative inline-block max-w-full z-[1] mq450:text-xl">
                  Our purpose is to deliver excellence in service and execution
                </div>
              </div>
              <a
    href="https://calendly.com/adamshaham04/30min"
    target="_blank"
    rel="noopener noreferrer"
    className="[border:none] py-5 px-[25px] bg-neutral-n0 rounded-201xl flex flex-row items-start justify-start gap-[43px] whitespace-nowrap hover:bg-gainsboro"
    style={{ textDecoration: 'none' }}
  >
    <div className="relative text-lg font-semibold font-poppins text-blue text-left">
      Schedule a Free Call
    </div>
    <img
      className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
      alt=""
      src="/iconsarrowright.svg"
    />
  </a>
            </div>
            <div className="w-[526px] shadow-[3.6px_5.7px_7.74px_4.27px_rgba(0,_0,_0,_0.29)] rounded-[11.63px] bg-neutral-n0 overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[9px] pb-8 pr-5 pl-8 box-border gap-[5.3px] min-w-[526px] max-w-full z-[1] text-5xl-4 text-black font-dm-sans lg:flex-1 mq825:min-w-full">
              <img
                className="w-[65.4px] h-[65.4px] relative"
                loading="lazy"
                alt=""
                src="/aidark.svg"
              />
              <b className="relative leading-[32px] inline-block max-w-full mq450:text-xl mq450:leading-[25px]">
                AI Automation Development
              </b>
              <div className="w-[444px] relative text-sm-1 leading-[160%] font-inter inline-block max-w-full">
                Our automation tools streamline your business processes,
                boosting efficiency and productivity while reducing operational
                costs. These solutions seamlessly integrate with your existing
                systems, allowing for smooth implementation and growth.
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center pt-2 pr-5 pl-[21px] text-center text-31xl"        >
          <h1 className="m-0 relative text-inherit font-bold font-inherit z-[1] mq825:text-21xl mq50:text-11xl" style={{ marginTop: '100px' }}>
            Contact Us
          </h1>
          </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px]" style={{ marginBottom: '100px' }}>
          <div

            className="calendly-inline-widget"
            data-url="https://calendly.com/adamshaham04/30min"
            hide_event_type_details="1&hide_gdpr_banner=1"
            style={{ minWidth: '600px', height: '800px', marginTop: '1px' }}
          ></div>
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
