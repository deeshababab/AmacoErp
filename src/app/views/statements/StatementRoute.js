import React from "react";

const statementRoutes = [
 
  
  {
    path: "/customeraccount",
    component: React.lazy(() => import("./customer"))
  },
  {
    path: "/account",
    component: React.lazy(() => import("./account"))
  },
  {
    path: "/master",
    component: React.lazy(() => import("./master"))
  },
  {
    path: "/employee",
    component: React.lazy(() => import("./employee"))
  },
  {
    path: "/dashboard",
    component: React.lazy(() => import("./dashboard"))
  },
  
    
];

export default statementRoutes;
