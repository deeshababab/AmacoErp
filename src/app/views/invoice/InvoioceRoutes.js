import React from "react";

const invoiceRoutes = [
  // {
  //   path: "/invoice/rfqprint",
  //   component: React.lazy(() => import("./Rfqprint"))
  // },
  {
    path: "/invoice/list",
    // exact: true,
    component: React.lazy(() => import("./InvoiceViewer"))
  },
  {
    path: "/invoice/:id",
    component: React.lazy(() => import("./InvoiceDetails"))
  },

  {
    path: "/edit/:id",
    component: React.lazy(() => import("./InvoiceEditor"))
  },
  
];

export default invoiceRoutes;
