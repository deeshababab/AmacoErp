import React from "react";

const partyRoutes = [
  {
    path: "/party/addparty",
    component: React.lazy(() => import("./Addparty")),
  },
  {
    path: "/partycontact",
    component: React.lazy(() => import("./partycontact")),
  },
  {
    path: "/party/updateparty",
    component: React.lazy(() => import("./updateparty")),
  },
  {
    path: "/party/viewparty",
    component: React.lazy(() => import("./Viewparty")),
  },
  {
    path: "/pages/view-customer",
    component: React.lazy(() =>
      import("./customers/customer-viewer/CustomerViewer")
    ),
  },
  ];

export default partyRoutes;
