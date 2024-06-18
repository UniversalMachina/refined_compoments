import PropTypes from "prop-types";

const ReachOutItems = ({ className = "" }) => {
  return (
    <div
      className={`w-[296px] flex flex-col items-start justify-start gap-[61px] text-left text-[21.2px] text-customGray-1400 font-poppins ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-1.5">
        <div className="flex-1 flex flex-col items-start justify-start gap-[36px]">
          <b className="self-stretch relative z-[1] mq450:text-[17px]">{`Reach out to new people `}</b>
          <b className="self-stretch relative text-[12px] leading-[261.6%] inline-block text-customGray-700 pr-1.5 z-[1]">
            Reach out to new people at any time you want Reach out to new people
            at any time you want
          </b>
        </div>
      </div>
      <button className="cursor-pointer [border:none] pt-[12.4px] pb-[9.9px] pr-[35px] pl-9 bg-customGray-700 w-[167.8px] shadow-[0px_3.3px_3.31px_rgba(0,_0,_0,_0.25)] rounded-[60.35px] flex flex-row items-start justify-start box-border whitespace-nowrap z-[1] hover:bg-customGray-800">
        <b className="flex-1 relative text-[14.4px] leading-[24px] font-bold font-poppins text-white text-center">
          Learn More
        </b>
      </button>
    </div>
  );
};

ReachOutItems.propTypes = {
  className: PropTypes.string,
};

export default ReachOutItems;
