import {
  Card,
  Fade,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Icon,
  IconButton,
  TableHead,
  Tooltip,
} from "@material-ui/core";
import clsx from "clsx";
import { format } from "date-fns";
import MUIDataTable from "mui-datatables";
import React, { useState, useEffect } from "react";
import url from "../../../../views/invoice/InvoiceService";
import Axios from "axios";
import moment from "moment";
import Swal from "sweetalert2";
const columnStyleWithWidth = {
  top: "0px",
  left: "0px",
  zIndex: "100",
  position: "sticky",
  backgroundColor: "#fff",
  width: "80px",
  wordBreak: "break-all",
}
const columnStyleWithWidth1 = {
  top: "0px",
  left: "0px",
  zIndex: "100",
  position: "sticky",
  backgroundColor: "#fff",
  width: "600px",
  wordBreak: "break-all",
}


const CustomerLogs = () => {
  const [expenseList, setexpenseList] = useState([]);
  useEffect(() => {
    url.get("expense-paid").then(({ data }) => {
     
       setexpenseList(data);
       
    });
 
}, []);
// const setstatus=(id)=>{

//   url.put(`expense/${id}`).then(({ data }) => {
//    
  
    
//  });
// }
const updatestatus=(id)=>{

  url.put(`expense/${id}`).then(({ data }) => {
 
  
    
 });
}
const setstatus=(id)=>{
  Swal.fire({
    text: 'Are you sure you want to update Payment?',
    // text: 'Any products, services, or categories in it will be uncategorised.',
    icon: 'warning',
    showCancelButton: true,
    customClass: {
      zIndex: 1000
    },
    confirmButtonText: 'Yes, Update it!',
    cancelButtonText: 'No, keep it',
  }).then((result) => {
    if (result.value) {
      const arr={
        is_paid:true
      }
      url.put(`expense/${id}`,arr).then(({ data }) => {
        Swal.fire({
          title: 'Success',
          type: 'success',
          icon:'success',
          text: 'Updated successfully.',
        });
        url.get("expense-paid").then(({ data }) => {
          
           setexpenseList(data);
           
        });
      
     
    })
  }
  else if (result.dismiss === Swal.DismissReason.cancel) {
    Swal.fire({
      customClass:{
        zIndex: 1000
      },
       title:'Cancelled'
      // 'Cancelled',
      // 'Your imaginary file is safe :)',
      // 'error',
      
    })
  }
})
  
}
const columns = [
  {
    name: "id", // field name in the row object
    label: "S.No.", // column title that will be shown in table
    options: {
     
      customHeadRender: ({index, ...column}) =>{
        return (
          <TableCell key={index} style={columnStyleWithWidth}>  
            <span style={{marginLeft:18}}>S.No.</span> 
          </TableCell>
        )
     }
    }
  },
  {
    name: "name",
    label: "Date",
    options: {
     
    }
  },
  
  {
    name: "paid_date",
    label: "Account Type",
    options : {
      filter: true,
    }
  },
  {
    name: "amount",
    label: "Referrence Bill Number",
    options: {
      filter: true,
    },
  },
  {
    name: "amount",
    label: "Paid To",
    options: {
      filter: true,
    },
  },
  {
    name: "amount",
    label: "Amount",
    options: {
      filter: true,
    },
  },
  {
    name: "amount",
    label: "Tax Amount",
    options: {
      filter: true,
    },
  },
  
  {
    name: "id",
    label: "Action",
    options: {
      filter: true,
      customBodyRender: (value, tableMeta, updateValue) => {
        
        return (
          <span>
         {tableMeta.rowData[7]!==null?(
                   <Tooltip title="Update Payment"> 
                <small onClick={e=>setstatus(tableMeta.rowData[7])}
                style={{cursor:'pointer'}}
                    className={clsx({
                      "border-radius-4  text-white px-2 py-2px bg-error": true,
                     
                    })}
                  >
                  
                    pending
                    
                
                  </small>
                  </Tooltip>
                ):(<small
                  className={clsx({
                    "border-radius-4  text-white px-2 py-2px bg-primary": true,
                   
                  })}
                >
                
                  payment done
                  
              
                </small>
              )}
          
        </span>

        )

      },
    },
  },
 
];
  return (
    // <Fade in timeout={300}>
    //   <Card elevation={3} className="w-full overflow-auto">
    //     <h5 className="p-4 mt-0 mb-2">Verified Expenses List</h5>

    //     <Table className="min-w-1050">
    //       <TableHead>
    //         <TableRow>
    //           <TableCell className="pl-4" colSpan={1}>
    //             No.
    //           </TableCell>
    //           <TableCell colSpan={2}>Date</TableCell>
    //           <TableCell colSpan={2}>Account Type</TableCell>
    //           <TableCell colSpan={3}>Referrence Bill Number</TableCell>
    //           <TableCell colSpan={1}>Paid To</TableCell>
    //           <TableCell colSpan={1}>Amount</TableCell>
    //           <TableCell colSpan={1}>Tax Amount</TableCell>
    //           <TableCell colSpan={2}>Payment Status</TableCell>
    //         </TableRow>
    //       </TableHead>
    //       <TableBody>
    //         {expenseList.map((invoice, index) => (
              
    //           <TableRow key={invoice.id}>
    //             <TableCell
    //               className="pl-4 py-2 capitalize"
    //               align="left"
    //               colSpan={1}
    //             >
                
    //               {index+1}
    //             </TableCell>
                
    //             <TableCell className="py-2 capitalize" align="left" colSpan={2}>
    //                {moment(invoice.paid_date).format('DD  MMM, YYYY ')} 
                   
    //             </TableCell>
    //             <TableCell className="py-2 capitalize" align="left" colSpan={2}>
    //               {invoice.payment_account[0].name}
    //             </TableCell>
    //             <TableCell className="py-2 capitalize" align="left" colSpan={3}>
    //               {invoice.referrence_bill_no}
    //             </TableCell>
    //             <TableCell className="py-2 capitalize" align="left" colSpan={1}>
    //               {invoice.paid_to}
    //             </TableCell>
    //             <TableCell className="py-2 capitalize" align="left" colSpan={1}>
    //             {parseFloat(invoice.amount).toLocaleString(undefined, {minimumFractionDigits:2})}
         
    //             </TableCell>
    //             <TableCell className="py-2 capitalize" align="left" colSpan={1}>
    //             {parseFloat(invoice.tax).toLocaleString(undefined, {minimumFractionDigits:2})}
         
    //             </TableCell>
    //             <TableCell className="py-2 capitalize" align="left" colSpan={2}  >
                
    //             {invoice.is_paid==="0"?(
    //                <Tooltip title="Update Payment"> 
    //             <small onClick={e=>setstatus(invoice.id)}
    //             style={{cursor:'pointer'}}
    //                 className={clsx({
    //                   "border-radius-4  text-white px-2 py-2px bg-error": true,
                     
    //                 })}
    //               >
                  
    //                 pending
                    
                
    //               </small>
    //               </Tooltip>
    //             ):(<small
    //               className={clsx({
    //                 "border-radius-4  text-white px-2 py-2px bg-primary": true,
                   
    //               })}
    //             >
                
    //               payment done
                  
              
    //             </small>
    //           )}
            
                   
                  
                
               
                
                
    //             </TableCell>
                
                
    //           </TableRow>
    //         ))}
    //       </TableBody>
    //     </Table>
    //   </Card>
    // </Fade>
    <div>
    <MUIDataTable
      title={"Verified Expenses List"}
      data={expenseList.map((item, index) => {
      
        return [
          ++index,
          moment(item.paid_date).format('DD  MMM, YYYY '),
          item.payment_account.name,
          item.referrence_bill_no,
          item.paid_to,
          parseFloat(item.amount).toLocaleString(undefined, {minimumFractionDigits:2}),
          parseFloat(item.tax).toLocaleString(undefined, {minimumFractionDigits:2}),
          item.is_paid==="0"?(item.id):null
        
        ]
      
    })} 
       columns={columns}   
       options={{
         
          rowsPerPageOptions: [10, 20, 40, 80, 100],
          selectableRows: "none",
          // filterType: "dropdown",
          responsive: "scrollMaxHeight",
          rowsPerPage: 10, 
       }}        
                 
    />
  </div>
  );
};

const logList = [
  {
    type: "POST",
    date: new Date(),
    description: "/api/shop",
    method: "PayPal",
    ip: "110.145.15.25",
    status: 200,
  },
  {
    type: "POST",
    date: new Date(),
    description: "/api/customer",
    method: "Visa Card",
    ip: "110.145.75.25",
    status: 401,
  },
  {
    type: "GET",
    date: new Date(),
    description: "/api/get-customer-details",
    method: "Master Card",
    ip: "110.145.45.25",
    status: 200,
  },
  {
    type: "DELETE",
    date: new Date(),
    description: "/api/delete-customer",
    method: "Master Card",
    ip: "110.145.45.25",
    status: 200,
  },
];
export default CustomerLogs;
