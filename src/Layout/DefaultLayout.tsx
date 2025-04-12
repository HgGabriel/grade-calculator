import React from "react";
import { Outlet } from "react-router";
import styles from "./DefaultLayout.module.css";
import SideNav from "../components/SideNav/SideNav";

const DefaultLayout: React.FC = () => {

  return (
    <div className={styles.defaultLayout}>
      <nav className={styles.navbar}>
        <SideNav />
      </nav>

      <main >
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
};

export default DefaultLayout;
