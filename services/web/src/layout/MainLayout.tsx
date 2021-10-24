import React from "react";
import { Route, RouteComponentProps, Switch } from "react-router-dom";
import { routeMainLayout } from "../routers/routes";
import { useState } from "react";
import MainShoppingCart from "../components/shoppingcart/MainShoppingCart";
import HeaderComponent from "../components/layout/navbar/HeaderComponent";
import NavBarComponent from "../components/layout/navbar/NavBar";
import SideBarComponent from "../components/layout/sidebar/MainSideBar";
import PrivateRoute from "../components/route/PrivateRoute";
import LoginPage from "../pages/login/LoginPage";

const MainLayout: React.FC = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  return (
    <div>
      <HeaderComponent setOpenCart={setOpenCart} />
      <NavBarComponent
        openSideBar={openSidebar}
        setOpenSidebar={setOpenSidebar}
      />
      <SideBarComponent
        openSideBar={openSidebar}
        setOpenSidebar={setOpenSidebar}
      />
      <MainShoppingCart openCart={openCart} setOpenCart={setOpenCart} />
      <Switch>
        {routeMainLayout.map((route, index) => {
          return (
            <PrivateRoute
              key={index}
              exact={route.exact}
              path={route.path}
              component={route.component}
            />
          );
        })}
      </Switch>
    </div>
  );
};

export default MainLayout;
