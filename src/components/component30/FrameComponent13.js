// /src/components/FrameComponent13.js
import React from "react";
import { animated } from "@react-spring/web";
import {
  useFadeInEffect,
  useSlideInFromLeftEffect,
  useSlideInFromRightEffect,
  useZoomInEffect,
} from "./../../hooks/useTransition";
import LearnMoreBox from "./LearnMoreBox";
import PropTypes from "prop-types";

const FrameComponent13 = ({ className = "" }) => {
  // Swap out the desired effect here
  const { ref, springs } = useFadeInEffect();
  // For example, to use slide in from right effect, you would use:
  // const { ref, springs } = useSlideInFromRightEffect();

  const contentData = {
    contentData1: {
      heading: "Lorum Ipsum",
      description:
        "Reach out to new people and personalize your prospects the personalized way",
    },
    contentData2: {
      heading: "Dolor Sit Amet",
      description:
        "Engage with your audience and build meaningful connections with ease",
    },
    contentData3: {
      heading: "Consectetur Adipiscing",
      description:
        "Discover new opportunities and grow your network effectively",
    },
  };

  return (
    <animated.section
      ref={ref}
      style={springs}
      className={`w-full flex flex-col items-start justify-start gap-[95px] max-w-full text-center text-[28.5px] text-white font-poppins mq900:gap-[24px] mq1300:gap-[47px] ${className}`}
    >
      <div className="self-stretch overflow-hidden flex flex-row flex-wrap items-start justify-start pt-[70px] px-[141px] pb-[69px] box-border gap-[50px] max-w-full z-[1] mq900:gap-[25px] mq900:pl-[35px] mq900:pr-[35px] mq900:box-border mq1300:pl-[70px] mq1300:pr-[70px] mq1300:box-border">
        <LearnMoreBox
          heading={contentData.contentData1.heading}
          description={contentData.contentData1.description}
        />
        <LearnMoreBox
          heading={contentData.contentData2.heading}
          description={contentData.contentData2.description}
          propBackgroundColor="#fdfdfd"
          propColor="#000"
          propColor1="#000"
          propColor2="#000"
        />
        <LearnMoreBox
          heading={contentData.contentData3.heading}
          description={contentData.contentData3.description}
        />
      </div>
    </animated.section>
  );
};

FrameComponent13.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent13;
