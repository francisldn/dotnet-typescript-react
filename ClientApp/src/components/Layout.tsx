import React from "react";
import { Container } from "reactstrap";
import { NavMenu } from "./NavMenu";

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div>
      <NavMenu />
      <Container tag='main'>{children}</Container>
    </div>
  );
};
