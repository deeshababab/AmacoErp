import React from "react";

const NewinvoiceRoutes = [
 
  
  {
    path: "/newinvoice/:id",
    component: React.lazy(() => import("./Newinvoiceview"))
  },
  {
    path: "/poinvview/:id",
    component: React.lazy(() => import("./poinvview"))
  },
  {
    path: "/poinvoice/:id",
    component: React.lazy(() => import("./poinvoice"))
  },
  {
    path: "/poupdateinvoice/:id",
    component: React.lazy(() => import("./poupdateinvoice"))
  },
  {
    path: "/purchaseedit/:id",
    component: React.lazy(() => import("./purchaseedit"))
  },
  {
    path: "/poinvoicegenerate/:id",
    component: React.lazy(() => import("./poinvoicegenerate"))
  },

  
  
];

export default NewinvoiceRoutes;
