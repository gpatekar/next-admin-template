import React from "react";

interface IPageTitleProps {
  children: React.ReactNode;
}
function PageTitle({ children }: IPageTitleProps) {
  return <h1 className="text-xl">{children}</h1>;
}

export default PageTitle;
