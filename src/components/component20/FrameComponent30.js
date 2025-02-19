import React from "react";
import { animated } from "@react-spring/web";
import {
  useFadeInEffect,
  useSlideInFromLeftEffect,
  useSlideInFromRightEffect,
  useZoomInEffect,
} from "./../../hooks/useTransition";

const FrameComponent30 = () => {
  // Swap out the desired effect here
  const { ref, springs } = useFadeInEffect();
  // For example, to use slide in from right effect, you would use:
  // const { ref, springs } = useSlideInFromRightEffect();

  const contentData = {
    mainTitle: "Education",
    mainDescription: `Reach out to new people and engage with your prospects the personalized way Reach out to new people and engage with your prospects the personalized way Reach out to new people and engage with your prospects the personalized way people and engage with your prospects the personalized way`,
    questions: [
      {
        question: "Question 1",
        answer:
          "Reach out to new people and engage with your prospects the personalized way Reach out to new people",
      },
      {
        question: "Question 2",
        answer:
          "Reach out to new people and engage with your prospects the personalized way Reach out to new people",
      },
      {
        question: "Question 3",
        answer:
          "Reach out to new people and engage with your prospects the personalized way Reach out to new people",
      },
      {
        question: "Question 4",
        answer:
          "Reach out to new people and engage with your prospects the personalized way Reach out to new people",
      },
    ],
  };

  return (
    <animated.section
      ref={ref}
      style={springs}
      className="w-full flex flex-col items-start justify-start py-[80px] gap-[35px] max-w-full text-left text-[40px] text-white font-poppins mq900:gap-[17px]"
    >
      <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-[53px] pr-5 pl-[45px] box-border max-w-full text-[89.1px] text-customColor-300 mq1300:pl-[22px] mq1300:box-border">
        <div className="w-[1691px] flex flex-row items-start justify-between max-w-full gap-[20px] mq1700:flex-wrap">
          <div className="w-[680px] flex flex-col items-start justify-start gap-[66px] min-w-[680px] max-w-full mq450:gap-[16px] mq900:gap-[33px] mq900:min-w-full mq1700:flex-1">
            <b className="w-[529px] relative inline-block max-w-full mq450:text-[27px] mq900:text-[45px]">
              {contentData.mainTitle}
            </b>
            <b className="self-stretch relative text-[28px] text-customGray-700 mq450:text-[22px]">
              {contentData.mainDescription}
            </b>
          </div>
          <div className="w-[660px] flex flex-col items-start justify-start pt-[45px] px-0 pb-0 box-border min-w-[660px] max-w-full text-[44.5px] mq900:min-w-full mq1700:flex-1">
            <div className="self-stretch flex flex-col items-start justify-start gap-[34px] max-w-full mq900:gap-[17px]">
              {contentData.questions.map((item, index) => (
                <div
                  key={index}
                  className="self-stretch flex flex-col items-start justify-start gap-[5.5px]"
                >
                  <div className="w-[268.5px] flex flex-row items-start justify-start py-0 px-0.5 box-border">
                    <b className="flex-1 relative mq450:text-[27px] mq900:text-[36px]">
                      {item.question}
                    </b>
                  </div>
                  <p className="m-0 self-stretch h-[55px] relative text-[16px] font-bold text-customGray-700 inline-block shrink-0">
                    {item.answer}
                  </p>
                  {index < contentData.questions.length - 1 && (
                    <div className="self-stretch h-px flex flex-row items-start justify-start py-0 pr-0 pl-0.5 box-border max-w-full">
                      <div className="self-stretch flex-1 relative box-border max-w-full border-t-[1px] border-solid border-customGray-1000" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </animated.section>
  );
};

export default FrameComponent30;
