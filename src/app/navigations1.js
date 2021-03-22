import { authRoles } from "./auth/authRoles";
import 'bootstrap/dist/css/bootstrap.min.css';

export const navigations1 = [
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

];

