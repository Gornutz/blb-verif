import { ReactNode, useEffect, useState } from "react";
import Header from "./header";
import styles from "./layout.module.scss";
import { useWidth } from "../../hooks/useWidth";
import { useTheme } from '@mui/material/styles'

type LayoutProps = {
  children: NonNullable<ReactNode>;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const width = useWidth()
  const theme = useTheme()

  const handleSidebarClick = (value: string) => {
  }

  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
