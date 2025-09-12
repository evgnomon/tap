import React from "react";
import { Outlet } from "react-router-dom";
import { A } from "@shared/components/Document";

const Resources = () => {
  return (
    <div className="flex flex-direction-col">
      <div>
        <ul>
          <li>
            <A href="/resources/memory">Memory</A>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Resources;
