import React from "react";

const ExpenseRoutes = [

  {
    path: "/expenseview",
    component: React.lazy(() =>
      import("./customers/customer-viewer/CustomerViewer")
    ),
  },
  {
    path: "/expensedetails/:id",
    component: React.lazy(() =>
      import("./customers/customer-viewer/Expensdetails")
    ),
  },
  {
    path: "/payby",
    component: React.lazy(() =>
      import("./payby")
    ),
  },
  {
    path: "/addexpense",
    component: React.lazy(() =>
      import("./customers/customer-form/CustomerForm")
    ),
  },
  {
    path: "/addField",
    component: React.lazy(() =>
      import("./customers/customer-form/AddField")
    ),
  },
  {
    path: "/transaction",
    component: React.lazy(() =>
      import("./tabs")
    ),
  },
  {
    path: "/addreceipt",
    component: React.lazy(() =>
      import("./addreceipt")
    ),
  },
  {
    path: "/addpayment",
    component: React.lazy(() =>
      import("./addpayment")
    ),
  },

];

export default ExpenseRoutes;
