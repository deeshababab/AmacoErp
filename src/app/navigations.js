import { authRoles } from "./auth/authRoles";
import 'bootstrap/dist/css/bootstrap.min.css';

export const navigations = [
  {
    name: "DASHBOARD",
    path: "/dashboard/default",
    // path: "/dashboard",
    icon: "dashboard",
    
  },
  {
    name: "PARTY",
    path: "/party/viewparty",
    icon: "people",
    
  },
  {
    name: "PRODUCT",
    path: "/product/viewsubcategory",
    icon: "queue",
  },
  
  {
   
        name: "PURCHASE",
        icon: "monetization_on",
        children: [
          {
            name: "RFQ",
            path: "/sales/rfq-form/rfqview",
           
          },
          {
            name: "PURCHASE ORDER",
            path: "/Newinvoiceview",
            
          },
         
      ],
    },
    {
        name: "SALES",
        icon:"trending_up",
        children: [
          {
            name: "QUOTATION",
            path: "/quoateview",
            // path: "/Newquoteanalysis",
            // icon:"folder",
          },
          {
            name: "DELIVERY NOTE",
            path: "/dnoteview",
            // path: "/Newquoteanalysis",
            // icon:"folder",
          },
          {
            name: "INVOICE",
            path: "/inv",
            // icon:"folder",
          },
        ]
  // }
  // ]
},
{
  name: "ACCOUNT",
  icon: "developer_board",
  children: [
    {
  name: "EXPENSES",
  icon: "attach_money",
  path: "/expenseview",
    },
    {
      name: "TRANSACTION",
      icon: "account_balance_wallet",
      path: "/transaction",
    },
    {
      name: "STATEMENTS",
      icon: "book",
      children: [
        {
      name: "CUSTOMER",
      icon: "people",
      path: "/customeraccount",
        },
        {
          name: "ACCOUNT",
          icon: "account_balance",
          // path: "/account",
          children: [
            {
              name: "MASTER",
              // icon: "account_balance",
               path: "/master",
            },
            {
              name: "PERSONAL",
              // icon: "account_balance",
              path: "/account",
            },
            {
              name: "DASHBOARD",
              // icon: "account_balance",
              path: "/dashboard",
            }
          ]

        },
        
      ]
    }

    
  ]
  
},
{
  name: "REPORT",
  icon: "assignment",
  
  children: [
    {
      
      name: "TAX",
      path: "/product/producthistory",
      icon:"monetization_on",
      children: [
        {
          name: "PURCHASE",
          path: "/purchasetax",
      
        },
        {
          name: "SALES",
          path: "/salestax",
      
        }
      ]
    },
    // {
      
    //   name: "Product",
    //   path: "/product/producthistory",
      
    // },
    {
      name: "SALES",
      icon:"graphic_eq",
      path: "/salesreport",
      
    },
  ]
},
{
  name: "USERS",
  icon: "people",
  path: "/user",

  
},

];

