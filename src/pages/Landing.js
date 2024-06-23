import HeaderPlaceholder from "../components/HeaderPlaceholder";
import FrameComponent2 from "../components/FrameComponent2";
import AboutContent from "../components/AboutContent";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import GroupComponent from "../components/GroupComponent";

const Landing = () => {
  return (
    <div className="w-full relative [background:linear-gradient(180deg,_#405eff,_#637cff_47%,_#fff)] overflow-hidden flex flex-col items-start justify-start pt-7 px-0 pb-0 box-border gap-[108px] leading-[normal] tracking-[normal] text-left text-xl text-gray-100 font-urbanist lg:gap-[54px] mq825:gap-[27px]">
      <div className="self-stretch h-[5531px] relative [background:linear-gradient(180deg,_#405eff,_#637cff_47%,_#fff)] hidden" />
      <section className="w-[1902px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <div className="w-[1586px] flex flex-col items-end justify-start gap-[103.4px] max-w-full mq825:gap-[52px] mq450:gap-[26px]">
          <HeaderPlaceholder />
          <FrameComponent2 />
        </div>
      </section>
      <b className="w-[160.7px] h-0 relative hidden mq450:text-base">
        Trusted by 100K +
      </b>
      <AboutContent />
      <FrameComponent1 />
      <section className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-1 box-border max-w-full">
        <div className="h-[1589px] flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[649px] box-border gap-[173px] max-w-full lg:gap-[86px] lg:pb-[274px] lg:box-border mq825:gap-[43px] mq825:pb-[178px] mq825:box-border mq450:h-auto">
          <FrameComponent />
          <GroupComponent />
        </div>
      </section>
    </div>
  );
};

export default Landing;
