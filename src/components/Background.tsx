"use client";
import clsx from "clsx";
import Image from "next/image";
import { usePathname } from "next/navigation";

export const Background = () => {
  const pathname = usePathname();
  console.log("pathname", pathname);
  return (
    <div className="-z-10 inset-0 absolute">
      <div className="relative">
        <Image
          src="/assets/images/back-1.png"
          alt="background-1"
          width="0"
          height="0"
          sizes="100vw"
          className={clsx(
            "w-full object-cover",
            pathname !== "/" && "h-[160px] object-center md:object-top",
            pathname === "/" &&
              "h-[660px] md:h-[1075px] min-[1920px]:h-[1200px] min-[2230px]:object-bottom object-center"
          )}
        />
      </div>
      {pathname === "/" && (
        <Image
          src="/assets/images/back-2.png"
          alt="background-2"
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-[700px] min-[1920px]:h-auto object-cover"
        />
      )}
    </div>
  );
};
