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
    path: "/employee",
    component: React.lazy(() => import("./employee"))
  },
  
    
];

export default statementRoutes;
