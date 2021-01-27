import React from "react";

const NewinvoiceRoutes = [
 
  
  {
    path: "/newinvoice/:id",
    component: React.lazy(() => import("./Newinvoicedetails"))
  },
  {
    path: "/poinvoice/:id",
    component: React.lazy(() => import("./poinvoice"))
  },
  {
    path: "/poupdateinvoice/:id",
    component: React.lazy(() => import("./poupdateinvoice"))
  },

  
  
];

export default NewinvoiceRoutes;
