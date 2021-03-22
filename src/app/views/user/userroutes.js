import React from "react";

const userRoutes = [
 
  
  {
    path: "/user",
    component: React.lazy(() => import("./userview"))
  },
  {
    path: "/changepass",
    component: React.lazy(() => import("./changepass"))
  },
    
];

export default userRoutes;
