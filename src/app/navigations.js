import { authRoles } from "./auth/authRoles";
import 'bootstrap/dist/css/bootstrap.min.css';

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
    name: "Transaction",
    icon: "work",
    children: [
      {
        name: "Purchase",
        iconText: "D",
        children: [
          {
            name: "RFQ",
            path: "/sales/rfq-form/rfqview",
           
          },
          {
            name: "Purchase Order",
            path: "/Newinvoiceview",
            
          },
          // {
          //   name: "Invoice",
          //   path: "/poinv",
          //   icon:"folder",
          // },
      ],
    },
    {
        name: "Sales",
        iconText: "E",
        children: [
          {
            name: "Quotation",
            path: "/quoateview",
            // path: "/Newquoteanalysis",
            // icon:"folder",
          },
          {
            name: "Delivery Note",
            path: "/dnoteview",
            // path: "/Newquoteanalysis",
            // icon:"folder",
          },
          {
            name: "Invoice",
            path: "/inv",
            // icon:"folder",
          },
        ]
  }
  ]
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
];

