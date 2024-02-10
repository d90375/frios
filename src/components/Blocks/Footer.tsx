import { headerNavLinks } from "@/data";
import { Logo } from "../Logo";
import SectionContainer from "../SectionContainer";
import Link from "next/link";
import { Info } from "../Info";

export const Footer = () => {
  return (
    <footer className="bg-[#162252]">
      <SectionContainer className="flex justify-between py-[40px]">
        <Logo className="" />
        <nav className="flex flex-col mr-[400px] items-start gap-1">
          {headerNavLinks.map((link) => (
            <Link
              className="underline text-white text-[14px] leading-4 tracking-[0.25px]"
              key={link.title}
              href={link.href}
            >
              {link.title}
            </Link>
          ))}
        </nav>
        <div className="flex flex-col gap-1.5">
          <Info size="s" hasCopyright socialMedia="r" hasTimeWork hasMail />
        </div>
      </SectionContainer>
    </footer>
  );
};
