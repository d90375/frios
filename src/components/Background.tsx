import Image from "next/image";

export const Background = () => {
  return (
    <div className="-z-10 inset-0 absolute">
      <Image
        src="/assets/images/back-1.png"
        alt="background-1"
        width="0"
        height="0"
        sizes="100vw"
        className="w-full h-auto"
      />
      <Image
        src="/assets/images/back-2.png"
        alt="background-2"
        width="0"
        height="0"
        sizes="100vw"
        className="w-full h-auto"
      />
    </div>
  );
};
