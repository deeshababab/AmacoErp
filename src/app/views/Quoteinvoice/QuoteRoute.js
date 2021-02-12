import React from "react";

const QuoteRoutes = [
 
  
  {
    path: "/quote/:id/:s",
    component: React.lazy(() => import("./Quotedetails"))
  },
  {
    path: "/quoteedit/:id",
    component: React.lazy(() => import("./Quoteedit"))
  },
  {
    path: "/dnote/:id",
    component: React.lazy(() => import("./dnote"))
  },
  {
    path: "/quoteanalysis/",
    component: React.lazy(() => import("./Quoteanalyse"))
  },
  {
    path: "/purchaseanalysis/:id",
    component: React.lazy(() => import("./purchaseanalysis"))
  },
  {
    path: "/Newquoteanalysis/",
    component: React.lazy(() => import("./NewQuoteanalysis"))
  },
  {
    path: "/Quoteinvoice/:id",
    component: React.lazy(() => import("./Quoteinvoice"))
  },
  
];

export default QuoteRoutes;
