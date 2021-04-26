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
   
        name: "Purchase",
        icon: "monetization_on",
        children: [
          {
            name: "RFQ",
            path: "/sales/rfq-form/rfqview",
           
          },
          {
            name: "Purchase Order",
            path: "/Newinvoiceview",
            
          },
         
      ],
    },
    {
        name: "Sales",
        icon:"trending_up",
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
  // }
  // ]
},
{
  name: "Account",
  icon: "developer_board",
  children: [
    {
  name: "Expenses",
  icon: "attach_money",
  path: "/expenseview",
    },
    {
      name: "Transaction",
      icon: "account_balance_wallet",
      path: "/transaction",
    },
    {
      name: "Statements",
      icon: "book",
      children: [
        {
      name: "Customer",
      icon: "people",
      path: "/customeraccount",
        },
        {
          name: "Account",
          icon: "account_balance",
          path: "/account",
        },
        
      ]
    }

    
  ]
  
},
{
  name: "Report",
  icon: "assignment",
  
  children: [
    {
      
      name: "Tax",
      path: "/product/producthistory",
      icon:"monetization_on",
      children: [
        {
          name: "Purchase",
          path: "/purchasetax",
      
        },
        {
          name: "Sales",
          path: "/salestax",
      
        }
      ]
    },
    // {
      
    //   name: "Product",
    //   path: "/product/producthistory",
      
    // },
    {
      name: "Sales",
      icon:"graphic_eq",
      path: "/salesreport",
      
    },
  ]
},
{
  name: "Users",
  icon: "people",
  path: "/user",

  
},

];

