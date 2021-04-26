import React from "react";

const userRoutes = [
 
  
  {
    path: "/purchasetax",
    component: React.lazy(() => import("./purchasetax"))
  },
  {
    path: "/salestax",
    component: React.lazy(() => import("./salestax"))
  },
      
];

export default userRoutes;
