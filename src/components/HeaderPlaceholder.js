import PropTypes from "prop-types";

const HeaderPlaceholder = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch h-[114.6px] flex flex-row items-end justify-between gap-[20px] text-left text-mid-4 text-neutral-n0 font-m-plus-1 ${className}`}
    >
      <div className="self-stretch w-[213px] flex flex-col items-start justify-start">
        <div className="relative w-full h-full">
          <img
            className="h-full object-cover"
            alt=""
            src="/cheh-2@2x.png"
          />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-14 pl-[52px] mt-[-37.6px]">
          <div className="h-[22.4px] relative leading-[90%] font-extrabold inline-block min-w-[105px] z-[1]">
            SOLUTIONS
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[20.6px]">
  <a
    href="https://calendly.com/adamshaham04/30min"
    target="_blank"
    rel="noopener noreferrer"
    className="cursor-pointer [border:none] pt-[15px] px-[23px] pb-4 bg-neutral-n0 rounded-xl flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-gainsboro"
    style={{ textDecoration: 'none' }}

  >
    <div className="h-[61px] w-[161px] relative rounded-xl bg-neutral-n0 hidden" />
    <span className="[text-decoration:none] relative text-xl font-semibold font-poppins text-blue text-center inline-block min-w-[114px] z-[1]">
      Book a Call
    </span>
  </a>
</div>

    </header>
  );
};

HeaderPlaceholder.propTypes = {
  className: PropTypes.string,
};

export default HeaderPlaceholder;

