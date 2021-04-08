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
    path: "/revisequote/:id",
    component: React.lazy(() => import("./Revisequote"))
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
  {
    path: "/printdemo",
    component: React.lazy(() => import("./printdemo"))
  },
  
];

export default QuoteRoutes;
