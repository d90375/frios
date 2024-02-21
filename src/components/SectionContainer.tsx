import clsx from "clsx";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function SectionContainer({ children, className }: Props) {
  return (
    <section className={clsx("mx-auto container", className)}>
      {children}
    </section>
  );
}
