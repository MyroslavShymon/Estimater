import * as React from "react";
import { default as classes } from "./Header.module.scss";
import MyHeader from "../UI/Header/MyHeader";
import HeaderCurrentRoute from "./HeaderCurrentRoute/HeaderCurrentRoute";
import HeaderUser from "./HeaderUser/HeaderUser";
//TODO add redux toggle navbar

// export interface HeaderProps {

// }<HeaderProps>

const Header: React.FC = () => {
  return (
    <MyHeader justifyContent="space-between" alignItems="center">
      <HeaderCurrentRoute />
      <HeaderUser />
    </MyHeader>
  );
};

export default Header;
