import PropTypes from "prop-types";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <div
      className={`w-[1568px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-51xl-5 text-neutral-n0 font-urbanist ${className}`}
    >
      <div className="w-[1144px] flex flex-col items-start justify-start gap-[119px] max-w-full lg:gap-[59px] mq825:gap-[30px]">
        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-11 box-border gap-[46px] max-w-full z-[1] mq825:gap-[23px] mq825:pb-[29px] mq825:box-border">
          <div className="self-stretch flex flex-col items-start justify-start gap-[120px] max-w-full lg:gap-[60px] mq825:gap-[30px]">
            <b className="self-stretch relative mq825:text-37xl mq450:text-23xl">
              <span>Optimize</span>
              <span className="text-black">{` processes `}</span>
              <span>Automate</span>
              <span className="text-black">{` workflows `}</span>
              <span>Elevate</span>
              <span className="text-black"> businesses.</span>
            </b>
            <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-xl-9 font-dm-sans">
              <div className="w-[806px] relative inline-block shrink-0 max-w-full mq450:text-mid">
                AI Development Agency that replaces manual work for massive
                gains in your team’s quality, speed and customer experience.
                Fully custom and done-for-you.
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
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

        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-xl">
          <div className="w-[718px] rounded-xl bg-gray-200 overflow-x-auto shrink-0 flex flex-row items-start justify-between pt-4 pb-[13px] pr-[33px] pl-[35px] box-border gap-[20px] max-w-full z-[1]">
            <div className="h-[55px] w-[718px] relative rounded-xl bg-gray-200 shrink-0 hidden" />
            <b className="w-[133px] relative inline-block shrink-0 whitespace-nowrap z-[2] mq450:text-base">
              24/7 Support
            </b>
            <b className="w-[150px] relative inline-block shrink-0 whitespace-nowrap z-[2] mq450:text-base">
              1 Week Delivery
            </b>
            <div className="w-[131px] shrink-0 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
              <b className="self-stretch relative whitespace-nowrap z-[2] mq450:text-base">
                Custom Tools
              </b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
