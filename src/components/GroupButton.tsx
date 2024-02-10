import { Props } from "next/script";
import { Button } from "./Button";

type Props = {
  children: string | JSX.Element;
};

export const GroupButton = ({ children }: Props) => {
  return <Button className="!h-[25px]">{children}</Button>;
};
