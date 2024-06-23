import PropTypes from "prop-types";

const AboutContent = ({ className = "" }) => {
  return (
    <section
      className={`w-[1747px] flex flex-row items-end justify-between pt-0 pb-[150px] pr-5 pl-0 box-border max-w-full gap-[20px] text-left text-xl text-neutral-n0 font-urbanist lg:pb-[97px] lg:box-border mq825:pb-[63px] mq825:box-border mq1500:flex-wrap mq1500:justify-center ${className}`}
    >
      <div className="h-[806px] w-[706px] relative min-w-[706px] max-w-full mq825:min-w-full mq1500:flex-1">
        <div className="absolute h-full top-[0px] bottom-[0px] left-[-143px] [filter:blur(500px)] rounded-[50%] bg-neutral-n0 w-[806px] z-[1]" />
        <img
          className="absolute top-[145px] left-[235px] w-[471px] h-[600px] object-contain z-[2]"
          loading="lazy"
          alt=""
          src="/saly43@2x.png"
        />
      </div>
      <div className="w-[733px] flex flex-col items-start justify-start pt-0 px-0 pb-[183px] box-border min-w-[733px] min-h-[539px] max-w-full mq825:pb-[119px] mq825:box-border mq825:min-w-full mq1500:flex-1">
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
          <b className="relative uppercase inline-block min-w-[98px] z-[1] mq450:text-base">
            About Us
          </b>
          <h1 className="m-0 w-[667px] relative text-31xl font-bold font-inherit inline-block max-w-full z-[1] mq825:text-21xl mq450:text-11xl">
            Committed to simplifying your workload
          </h1>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5 box-border max-w-full text-6xl">
            <div className="flex-1 relative inline-block max-w-full z-[1] mq450:text-xl">
              Unlike many agencies focused on sales automation, we create
              tailored tools to optimize all business operations, delivering
              lasting impacts that improve efficiency and productivity. Our
              industry expertise ensures each solution meets your specific
              needs. Committed to data privacy and advanced security, we provide
              innovative solutions that truly transform and elevate your
              business.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

AboutContent.propTypes = {
  className: PropTypes.string,
};

export default AboutContent;
