import clsx from "clsx";
import Link from "next/link";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <Link className={clsx(className)} href="/">
      <h1 className="font-jost text-white text-[32px] md:text-[40px] font-extrabold leading-none">
        <span className="text-quaternary">F</span>RIOS
      </h1>
    </Link>
  );
};
