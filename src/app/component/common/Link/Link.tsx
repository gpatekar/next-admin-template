import React from "react";

import NextLink from "next/link";

interface ILinkProps {
  href: string;
  children: React.ReactNode;
}
export function Link({ href, children }: ILinkProps) {
  return ( 
      <NextLink href={href} className="text-blue-500">{children}</NextLink> 
  );
} 
