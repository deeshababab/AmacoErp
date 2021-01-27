import React from "react";

const productRoutes = [
  {
    path: "/product/addproduct/:id",
    component: React.lazy(() => import("./Addproduct")),
  },
  {
    path: "/product/producthistory",
    component: React.lazy(() => import("./producthistory")),
  },
  {
    path: "/product/updateproduct",
    component: React.lazy(() => import("./Updateproduct")),
  },
  {
    path: "/product/viewproduct/:id",
    component: React.lazy(() => import("./Viewproduct")),
  },
  {
    path: "/product/viewsubcategory",
    component: React.lazy(() => import("./Viewsubcategory")),
  },
  {
    path: "/product/viewcategory",
    component: React.lazy(() => import("./Viewcategory")),
  },
  {
    path: "/product/Addcategory",
    component: React.lazy(() => import("./Addcategory")),
  },
  {
    path: "/demo",
    component: React.lazy(() => import("./demo")),
  },
  {
    path: "/manufacture",
    component: React.lazy(() => import("./manufacture")),
  },
  {
    path: "/singleproduct",
    component: React.lazy(() =>
      import("./product/product-viewer/CustomerViewer")
    ),
  },
  ];

export default productRoutes;
