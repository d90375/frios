import { headerNavLinks } from "@/data";
import { Button } from "../Button";
import Link from "next/link";
// import { useRef, useState } from "react";
// import link from "next/link";
import { Logo } from "../Logo";
import { headers } from "next/headers";
import { Info } from "../Info";

export const Header = () => {
  const headersList = headers();
  const fullUrl = headersList.get("referer") || "";

  // const menuBtnEl = useRef<HTMLButtonElement>();
  // const [state, setState] = useState(false);

  // useEffect(() => {
  //   // Close the navbar menu when click outside the menu button or when scroll
  //   document.onclick = (e) => {
  //     const target = e.target;
  //     if (menuBtnEl.current && !menuBtnEl.current.contains(target)) {
  //       setState(false);
  //     }
  //   };
  //   window.onscroll = () => setState(false);
  // }, []);

  console.log("new URL(fullUrl).pathname", new URL(fullUrl).pathname);
  return (
    <header className="divide-y divide-[#256AB4]">
      <div className="flex container mx-auto justify-between items-center my-[30px] ">
        <Logo />
        {/* <div className="flex gap-x-3 items-center md:hidden">
          <button
            ref={menuBtnEl}
            role="button"
            aria-label="Open the menu"
            className={`p-2 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 ${navMenuBtnColor}`}
            onClick={() => setState(!state)}
          >
            {state ? (
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
        </div> */}
        <div className="flex items-center justify-between gap-[26px]">
          <Info socialMedia="l" size="m" />

          <Button size="m" variant="filled">
            ПОЗВОНИТЕ МНЕ
          </Button>
        </div>
      </div>
      <div className="py-2">
        <nav className="container flex justify-between gap-[20px] items-center mx-auto">
          {headerNavLinks.map((link) => (
            <Link key={link.title} href={link.href}>
              <Button
                variant="link"
                // active={link.href === new URL(fullUrl).pathname}
                className="uppercase"
              >
                {link.title}
              </Button>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};
