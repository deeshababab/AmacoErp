import React from "react";

const PrintQuoteRoutes = [
 
  
  {
    path: "/print_quote",
    component: React.lazy(() => import("./Quotation"))
  },
  
  {
    path: "/print_quote_tab/:id",
    component: React.lazy(() => import("./QuoteTab"))
  },
  {
    path: "/print_quote_invoice/:id/:s",
    component: React.lazy(() => import("./QuoteInvoice"))
  },
  {
    path: "/print_addquote/",
    component: React.lazy(() => import("./AddQuote"))
  },
  {
    path: "/print_Joborder/",
    component: React.lazy(() => import("./JobOrder"))
  },
  {
    path: "/print_Joborder_tab/",
    component: React.lazy(() => import("./JoborderTab"))
  },
  {
    path: "/print_Joborder_tabid/:id",
    component: React.lazy(() => import("./JoborderTab"))
  },
  {
    path: "/print_deliverynote",
    component: React.lazy(() => import("./DeliveryNote"))
  },
  {
    path: "/print_invoice",
    component: React.lazy(() => import("./Invoice"))
  },
  {
    path: "/print_expense",
    component: React.lazy(() => import("./expense"))
  },
  
];

export default PrintQuoteRoutes;
