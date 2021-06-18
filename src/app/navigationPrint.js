import { authRoles } from "./auth/authRoles";
import 'bootstrap/dist/css/bootstrap.min.css';

export const navigationPrint = [
  {
    name: "Dashboard",
    path: "/dashboard/default",
    icon: "dashboard",
    
  },
  {
    name: "Party",
    path: "/print_viewparty",
    icon: "people",
    
  },
  {
    name: "Product",
    path: "/print_categoryview",
    icon: "queue",
  },
  
  {
   
        name: "Purchase",
        icon: "monetization_on",
        children: [
          {
            name: "RFQ",
            path: "/print_rfqview",
           
          },
          {
            name: "Purchase Order",
            path: "/print_po",
            
          },
          {
            name: "Purchase Invoice Entry",
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
            path: "/print_quote_tab/1",
            // path: "/Newquoteanalysis",
            // icon:"folder",
          },
          {
            name: "Delivery Notes",
            path: "/print_deliverynote",
            // icon:"folder",
          },
          
          {
            name: "Pro forma Invoice",
            path: "/print_invoice",
            // icon:"folder",
          },
        ]
  // }
  // ]
},
{
  name: "Production",
  icon: "attach_money",
  path: "/print_Joborder_tab",

  
},
{
  name: "Expenses",
  icon: "attach_money",
  path: "/print_expense",

  
},
// {
//   name: "Production",
//   icon: "developer_board",
//   children: [
   
//     {
//       name: "Job List",
//       icon: "account_balance_wallet",
//       path: "/transaction",
//     },
//     {
//       name: "Job Entry",
//       icon: "book",
//       path:'/'
     
//     }

    
//   ]
  
// },

{
  name: "Report",
  icon: "assignment",
  
 
      children: [
        {
          name: "Stock",
          path: "/print_quote_stock",
      
        },
        {
          name: "Job",
          path: "/print_job_report",
      
        }
      ]
    },
    


];

