import React from "react";
import { Outlet } from "react-router-dom";
import NavbarList from "../componets/NavbarList";
import {Provider} from 'react-redux'

import store from "../store/store";
const Layout = () => {
  return (
    <>
      <Provider store={store}>
        <NavbarList />
        <main>
          <Outlet />
        </main>
        <></>
      </Provider>
    </>
  );
};

export default Layout;
