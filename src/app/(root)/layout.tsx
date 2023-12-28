import { ReactNode } from "react";

const LayoutPages = ({ children }: { children: ReactNode }) => {
  return <div className="max-w-[75%] w-full">{children}</div>;
};

export default LayoutPages;
