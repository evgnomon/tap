import React from "react";
import {Outlet} from "react-router-dom";

const Page: React.FC = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Page;
