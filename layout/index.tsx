import * as React from "react";
import dynamic from "next/dynamic";

import Footer from "./Footer";

const DynamicHeader = dynamic(() => import("./Header"), {
  ssr: false
});

function Layout({ children }) {
  return (
    <>
      <DynamicHeader />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
