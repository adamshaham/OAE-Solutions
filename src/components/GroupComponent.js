import PropTypes from "prop-types";

const GroupComponent = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch bg-mediumslateblue flex flex-col items-center justify-start pt-[72px] px-5 pb-[137px] box-border gap-[21.3px] shrink-0 [debug_commit:0448091] max-w-full z-[1] text-left text-4xl-7 text-neutral-n0 font-urbanist mq825:pt-[47px] mq825:pb-[89px] mq825:box-border ${className}`}
    >
      <img
        className="w-[186.6px] h-[69px] relative object-contain hidden"
        alt=""
        src="/mask-group@2x.png"
      />
      <img
        className="w-[1916px] h-[479px] relative hidden max-w-full"
        alt=""
        src="/rectangle-3842.svg"
      />
      <div className="w-[975.5px] flex flex-col items-start justify-end pt-[125px] pb-[30.5px] pr-5 pl-[414px] box-border relative max-w-full font-m-plus-1 mq825:pl-[207px] mq825:box-border mq450:pl-5 mq450:box-border">
        <div className="relative leading-[22px] font-extrabold z-[1] mq450:text-lgi mq450:leading-[17px]">
          SOLUTIONS
        </div>
        <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
          <img
            className="absolute h-full top-[0px] bottom-[0px] left-[323px] max-h-full w-[330px] object-cover z-[2]"
            alt=""
            src="/cheh-2-1@2x.png"
          />
          <img
            className="absolute top-[164px] left-[0px] w-[975.5px] h-px z-[3]"
            alt=""
            src="/divider.svg"
          />
        </div>
      </div>
      <div className="w-[980px] flex flex-row items-start justify-center py-0 pr-0 pl-px box-border max-w-full text-lg">
        <div className="relative leading-[26px] font-semibold inline-block min-w-[78.9px] z-[1]">
          Reach us
        </div>
      </div>
      <div className="w-[980px] flex flex-row items-start justify-center py-0 pr-0 pl-[51px] box-border max-w-full text-base mq825:pl-[25px] mq825:box-border">
        <div className="w-[507.3px] flex flex-row items-start justify-between gap-[20px] max-w-full mq825:flex-wrap mq825:justify-center">
          <div className="w-[188.8px] flex flex-row items-start justify-start gap-[27.7px]">
            <img
              className="h-6 w-[26.7px] relative overflow-hidden shrink-0 z-[1]"
              loading="lazy"
              alt=""
              src="/bxsphonecall.svg"
            />
            <div className="flex-1 relative z-[1]">(+1) 510-945-8169</div>
          </div>
          <div className="w-[233.3px] flex flex-row items-start justify-start gap-[27.7px]">
            <img
              className="h-6 w-[26.7px] relative overflow-hidden shrink-0 z-[1]"
              loading="lazy"
              alt=""
              src="/icsharpemail.svg"
            />
            <div className="flex-1 relative whitespace-nowrap z-[1]">
              Info@oaesolutions.com
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent;
