"use client";
import { headerNavLinks } from "@/data";
import { Button } from "../Button";
import Link from "next/link";
import { Logo } from "../Logo";
import { Info } from "../Info";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import SectionContainer from "../SectionContainer";
import clsx from "clsx";

const NavBar = ({
  className,
  btnClassName,
}: {
  className?: string;
  btnClassName?: string;
}) => {
  const pathname = usePathname();
  return (
    <nav
      className={clsx(
        "container flex justify-between gap-0 lg:gap-[20px] items-center mx-auto",
        className
      )}
    >
      {headerNavLinks.map((link) => (
        <Link key={link.title} href={link.href}>
          <Button
            variant="link"
            active={link.href === pathname}
            className={clsx("uppercase", btnClassName)}
          >
            {link.title}
          </Button>
        </Link>
      ))}
    </nav>
  );
};

const CallMeButton = () => {
  return (
    <a href="tel:+375298983222">
      <Button className="hidden lg:block" size="m" variant="filled">
        ПОЗВОНИТЕ МНЕ
      </Button>
    </a>
  );
};

const Aside = () => {
  return (
    <aside className="fixed transition-all z-20 !text-text bg-white w-full left-0 top-4 pb-[32px] px-[24px] pt-[24px]">
      <div className="flex ml-2 flex-col gap-4 pb-4">
        <Info socialMedia="s" color="black" hasMail hasTimeWork size="m" />
      </div>
      <NavBar
        btnClassName="!text-text"
        className="flex-col !items-start !gap-2 !p-0"
      />
    </aside>
  );
};

export const Header = () => {
  const menuBtnEl = useRef<HTMLButtonElement | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      if (menuBtnEl.current && !menuBtnEl.current.contains(target as Node)) {
        setOpen(false);
      }
    };
    window.onscroll = () => setOpen(false);
  }, []);

  return (
    <header className="divide-y divide-[#256AB4]">
      <SectionContainer className="flex container mx-auto justify-between items-center pl-[32px] pr-[24px] md:pl-[16px] md:pr-[16px] my-[30px] ">
        {open && <Aside />}
        <Logo />
        <div className="hidden md:flex items-center justify-between gap-[26px]">
          <Info socialMedia="m" color="white" size="m" />

          <CallMeButton />
        </div>
        <div className="flex gap-x-3 items-center md:hidden">
          <button
            ref={menuBtnEl}
            role="button"
            aria-label="Open the menu"
            className={clsx(
              "p-2 rounded-lg z-30 duration-100",
              open
                ? "text-text hover:bg-[#C1E6F5] active:bg-[#C1E6F5]"
                : "text-white hover:bg-primary active:bg-primary"
            )}
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </SectionContainer>
      <div className="py-2 hidden md:block">
        <NavBar />
      </div>
    </header>
  );
};
