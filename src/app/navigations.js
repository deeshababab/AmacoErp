import { authRoles } from "./auth/authRoles";

export const navigations = [
  {
    name: "Dashboard",
    path: "/dashboard/default",
    icon: "dashboard",
  },
  {
    name: "Party",
    path: "/party/viewparty",
    icon: "people",
  },
  {
    name: "Product",
    path: "/product/viewsubcategory",
    icon: "queue",
  },
  {
    name: "Sales",
    icon: "work",
    children: [
      {
        name: "RFQ",
        path: "/sales/rfq-form/rfqview",
        icon:"folder",
      },
      {
        name: "Quotation",
        path: "/quoateview",
        icon:"folder",
      },
      {
        name: "Purchase Order",
        path: "/Newinvoiceview",
        icon:"folder",
      },
      {
        name: "Invoice",
        path: "/inv",
        icon:"folder",
      },
    ],
  },
  
  {
    name: "Account",
    icon: "developer_board",
    children: [
      {
    name: "Expense",
    icon: "attach_money",
    path: "/expenseview",
      },
      {
        name: "Receipt",
        icon: "receipt",
        path: "/",
          }
    ]
    
  },
  {
    name: "Report",
    icon: "assignment",
    children: [
      {
        name: "Product",
        path: "/product/producthistory",
        icon:"folder",
      },
    ]
  }
  // {
  //   name: "Purchase",
  //   icon: "shopping_cart",
  //   path: "/demo/demo1",
  // },
  // {
  //   name: "Account",
  //   icon: "local_atm",
  //   path: "/demo/demo1",
  // },
  // {
  //   name: "Report",
  //   icon: "insert_chart",
  //   path: "/demo",
  // },
  
  ];
