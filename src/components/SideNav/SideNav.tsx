import React from "react";
import { Menu } from "antd";
import { NavLink, useLocation } from "react-router-dom";
import { ROUTES } from "../../routing";
import styled from "@emotion/styled";

const PRODUCT_KEY = "product";
const HOME_KEY = "home";
const items = [
  {
    label: <NavLink to={ROUTES.HOME}>Home</NavLink>,
    key: HOME_KEY,
  },
  {
    label: <NavLink to={ROUTES.PRODUCT}>Product</NavLink>,
    key: PRODUCT_KEY,
  },
];

// TODO make some robust of solving active link
const getActiveKeys = (pathname: string) => {
  const [, route] = pathname.split("/");
  switch (route) {
    case PRODUCT_KEY:
      return [PRODUCT_KEY];
    default:
      return [HOME_KEY];
  }
};
const StyledMenu = styled(Menu)`
  background: transparent;
  border: none;

  .ant-menu-item a {
    color: #fff;
  }
`;
export const SideNav = () => {
  const { pathname } = useLocation();
  return (
    <StyledMenu
      style={{ width: 438 }}
      mode="horizontal"
      selectedKeys={getActiveKeys(pathname)}
      items={items}
    />
  );
};
