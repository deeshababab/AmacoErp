import React from "react";

const QuoteRoutes = [
 
  
  {
    path: "/quote/:id",
    component: React.lazy(() => import("./Quotedetails"))
  },
  {
    path: "/quoteanalysis/:id",
    component: React.lazy(() => import("./Quoteanalyse"))
  },

  
  
];

export default QuoteRoutes;
