import React from "react";

const userRoutes = [
 
  
  {
    path: "/user",
    component: React.lazy(() => import("./userview"))
  },
  {
    path: "/companyInfo",
    component: React.lazy(() => import("./companyInfo"))
  },
  {
    path: "/division",
    component: React.lazy(() => import("./divisionview"))
  },
  {
    path: "/bankaccount",
    component: React.lazy(() => import("./bankaccount"))
  },
  {
    path: "/profile",
    component: React.lazy(() => import("./profile"))
  },
  {
    path: "/changepass",
    component: React.lazy(() => import("./changepass"))
  },
    
];

export default userRoutes;
