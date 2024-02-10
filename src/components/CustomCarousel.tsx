"use client";
import Image from "next/image";
import Carousel from "nuka-carousel";

export const CustomCarousel = () => {
  return (
    <Carousel
      defaultControlsConfig={{
        pagingDotsStyle: { margin: "8px" },
        nextButtonClassName:
          "!bg-transparent !text-black/75 hover:!text-black/50 mx-3",
        prevButtonClassName:
          "!bg-transparent !text-black/75 hover:!text-black/50 mx-3",
        prevButtonText: (
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            height="32"
            width="32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"></path>
          </svg>
        ),
        nextButtonText: (
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            height="32"
            width="32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"></path>
          </svg>
        ),
      }}
      slidesToShow={4}
      wrapAround
      cellSpacing={10}
    >
      <Image
        className="rounded-[4px] w-full h-auto"
        src="/assets/images/example-1.jpg"
        alt="carousel-alt"
        width="0"
        height="220"
        sizes="100vw"
      />
      <Image
        className="rounded-[4px] w-full h-auto"
        src="/assets/images/example-1.jpg"
        alt="carousel-alt"
        width="0"
        height="220"
        sizes="100vw"
      />
      <Image
        className="rounded-[4px] w-full h-auto"
        src="/assets/images/example-1.jpg"
        alt="carousel-alt"
        width="0"
        height="220"
        sizes="100vw"
      />
      <Image
        className="rounded-[4px] w-full h-auto"
        src="/assets/images/example-1.jpg"
        alt="carousel-alt"
        width="0"
        height="220"
        sizes="100vw"
      />
      <Image
        className="rounded-[4px] w-full h-auto"
        src="/assets/images/example-1.jpg"
        alt="carousel-alt"
        width="0"
        height="220"
        sizes="100vw"
      />
      <Image
        className="rounded-[4px] w-full h-auto"
        src="/assets/images/example-1.jpg"
        alt="carousel-alt"
        width="0"
        height="220"
        sizes="100vw"
      />
    </Carousel>
  );
};
