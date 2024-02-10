"use client";
import Image from "next/image";
import SectionContainer from "../SectionContainer";
import { Button } from "../Button";
import { quizData } from "@/data";
import { Fragment, useRef, useState } from "react";
import clsx from "clsx";

const Card = ({
  title,
  url,
  index,
  onClick,
}: {
  title?: string;
  url?: string | null;
  index: number;
  onClick?: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className="rounded-[20px] cursor-pointer hover:bg-custom-gradient-hover w-[168px] shadow-custom  flex flex-col gap-[10px] p-5 bg-custom-gradient"
    >
      {url && (
        <Image
          className="rounded-[8px]  pointer-events-none w-full h-auto shadow-custom bg-custom-gradient"
          src={url}
          alt={title ?? index.toString()}
          width="0"
          height="0"
          sizes="100vw"
        />
      )}
      {title && (
        <span className="text-xl font-bold tracking-[0.25px] leading-6 text-center">
          {title}
        </span>
      )}
    </div>
  );
};

export const Calculator = () => {
  const [step, setStep] = useState(1);
  const formState = useRef<string[]>([]);

  return (
    <SectionContainer className="mt-[95px] flex flex-col items-center mb-[170px]">
      {quizData.map(({ step: currentStep, title, quiz }) => {
        return (
          currentStep === step && (
            <Fragment key={title}>
              <h3 className="font-jost max-w-[680px] text-center text-[44px] mt-[95px] mb-[40px] font-extrabold leading-[48px]">
                {currentStep === step && title}
              </h3>
              <div className="h-[163px]">
                <div className="flex flex-row gap-[30px]">
                  {quiz.map((el) => (
                    <Card
                      onClick={() => {
                        setStep((prev) => (prev += 1));
                        formState.current = [...formState.current, el.text];
                      }}
                      key={el.text}
                      title={el.text}
                      index={step}
                      url={currentStep === 1 ? el.url : undefined}
                    />
                  ))}
                </div>
              </div>
            </Fragment>
          )
        );
      })}

      {step === 5 ? (
        <Button
          icon={
            <svg
              className="ml-2 mb-1 inline"
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 9.99987V13.9999H5.92291C5.25427 13.9999 5.01181 13.9303 4.76737 13.7995C4.52292 13.6688 4.33108 13.477 4.20035 13.2325C4.06962 12.9881 4 12.7456 4 12.077V9.99987H8ZM13 9.99987V12.077C13 12.7456 12.9304 12.9881 12.7997 13.2325C12.6689 13.477 12.4771 13.6688 12.2326 13.7995C12.0104 13.9184 11.7898 13.9867 11.2492 13.9982L11.0771 13.9999H9V9.99987H13ZM8 5.99987V8.99987H3.96146C3.62714 8.99987 3.50591 8.96507 3.38368 8.8997C3.26146 8.83433 3.16554 8.73841 3.10017 8.61619C3.03481 8.49397 3 8.37274 3 8.03842V7.42319C3 7.08093 3.05802 6.84305 3.16696 6.63935C3.2759 6.43564 3.43577 6.27577 3.63947 6.16683C3.84318 6.05789 4.08105 5.99987 4.42331 5.99987H8ZM12.5767 5.99987C12.9189 5.99987 13.1568 6.05789 13.3605 6.16683C13.5642 6.27577 13.7241 6.43564 13.833 6.63935C13.9238 6.8091 13.9792 7.00258 13.9952 7.26043L14 7.42319V8.03842C14 8.37274 13.9652 8.49397 13.8998 8.61619C13.8345 8.73841 13.7385 8.83433 13.6163 8.8997C13.5116 8.95573 13.4075 8.98931 13.1694 8.99776L13.0385 8.99987H9V5.99987H12.5767ZM8.50133 5.6317L8.5021 5.51261C8.62438 2.22219 10.95 1.44987 12 2.49987C13.1 3.59987 12.2 6.09987 8.5 5.99987C4.8 6.09987 3.9 3.59987 5 2.49987C6.06255 1.43732 8.43141 2.24091 8.50133 5.6317Z"
                fill="white"
              />
            </svg>
          }
          className="my-[39px] bg-[#FC451C] hover:bg-red-400"
          size="l"
          onClick={() => {}}
        >
          ПОЛУЧИТЬ
        </Button>
      ) : (
        <Button
          className="my-[39px]"
          size="l"
          onClick={() => {
            setStep((prev) => (prev += 1));
          }}
        >
          ДАЛЕЕ
        </Button>
      )}

      <div className="flex flex-row gap-[14px]">
        {[...Array(5)].map((_el, index) => (
          <div
            key={index}
            className={clsx(
              "rounded-[10px] w-[41px] h-2",
              step === index + 1 ? "bg-primary" : "bg-disabled"
            )}
          />
        ))}
      </div>
    </SectionContainer>
  );
};
