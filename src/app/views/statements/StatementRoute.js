import React from "react";

const statementRoutes = [
 
  
  {
    path: "/customeraccount",
    component: React.lazy(() => import("./customer"))
  },
  
    
];

export default statementRoutes;
