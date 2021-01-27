import React from "react";

const ExpenseRoutes = [

  {
    path: "/expenseview",
    component: React.lazy(() =>
      import("./customers/customer-viewer/CustomerViewer")
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

];

export default ExpenseRoutes;
