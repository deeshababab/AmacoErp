import {
  Card,
  Fade,
  Icon,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip
} from "@material-ui/core";
import clsx from "clsx";
import { format } from "date-fns";
import MUIDataTable from "mui-datatables";
import React, { useState, useEffect } from "react";
import url from "../../../../views/invoice/InvoiceService";
import Axios from "axios";
import moment from "moment";
import Swal from "sweetalert2";
import history from "history.js";
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

const CustomerInvoice = () => {
  const [expenseList, setexpenseList] = useState([]);
  useEffect(() => {
    url.get("expense").then(({ data }) => {
      
       setexpenseList(data);
       
    });
 
}, []);
const setstatus=(id)=>{
  Swal.fire({
    text: 'Are you sure you want to Verify?',
    // text: 'Any products, services, or categories in it will be uncategorised.',
    icon: 'warning',
    showCancelButton: true,
    customClass: {
      zIndex: 1000
    },
    confirmButtonText: 'Yes, Verify it!',
    cancelButtonText: 'No, keep it',
  }).then((result) => {
    if (result.value) {
      const status={
        status:'verified'
      }
      url.put(`expense/${id}`,status).then(({ data }) => {
        Swal.fire({
          title: 'Success',
          type: 'success',
          icon:'success',
          text: 'Updated successfully.',
        });
        url.get("expense").then(({ data }) => {
          
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
const removeData = (id) => {
  Swal.fire({
    text: 'Are you sure you want to delete?',
    // text: 'Any products, services, or categories in it will be uncategorised.',
    icon: 'warning',
    showCancelButton: true,
    customClass: {
      zIndex: 1000
    },
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, keep it',
  }).then((result) => {
    if (result.value) {
      url.delete(`expense/${id}`)
        .then(res => {
          url.get("expense").then(({ data }) => {
            
             setexpenseList(data);
             
          });
          Swal.fire(
            'Deleted!',
            'Expense Details has been deleted.',
            'success'
          )

        })
    } else if (result.dismiss === Swal.DismissReason.cancel) {
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
    label: "Account",
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
          {/* <Link to={"/invoice/" + tableMeta.rowData[4]}> */}
          <Tooltip title="Verify">
            <Icon style={{color:'#00FF00',cursor:'pointer'}} onClick={e => setstatus(tableMeta.rowData[7])} >check</Icon>
          </Tooltip>
          {/* </Link> */}
          <Tooltip title="delete">
               <Icon color="error" onClick={() => removeData(tableMeta.rowData[7])} style={{cursor:'pointer'}}>close</Icon>
            </Tooltip>
            <Tooltip title="Edit">
                 <Icon color="secondary" onClick={() =>history.push(`/editexpense/${tableMeta.rowData[7]}`)
         } style={{cursor:'pointer'}}>edit</Icon>
        </Tooltip>
            <Tooltip title="view more">
                 <Icon color="primary" onClick={() =>history.push(`/expensedetails/${tableMeta.rowData[7]}`)
         } style={{cursor:'pointer'}}>arrow_forward</Icon>
        </Tooltip>
         
        </span>

        )

      },
    },
  },
 
];
  return (
    // <Fade in timeout={300}>
    //   <Card elevation={3} className="w-full overflow-auto">
    //     <h5 className="p-4 mt-0 mb-2">New Expenses List</h5>

    //     <Table className="min-w-1050">
    //       <TableHead>
    //         <TableRow>
    //           <TableCell className="pl-4" colSpan={1}>
    //             No.
    //           </TableCell>
    //           <TableCell colSpan={2}>Date</TableCell>
    //           <TableCell colSpan={1}>Account</TableCell>
    //           <TableCell colSpan={2}>Referrence Bill Number</TableCell>
    //           <TableCell colSpan={1}>Paid To</TableCell>
    //           <TableCell colSpan={1}>Amount</TableCell>
    //           <TableCell colSpan={1}>Tax Amount</TableCell>
    //           <TableCell colSpan={1}>Action</TableCell>
    //         </TableRow>
    //       </TableHead>
    //       <TableBody>
    //         {expenseList.map((invoice, index) => (
              
    //           <TableRow key={invoice.id}>
    //             <TableCell
    //               className="pl-4 py-2 capitalize"
    //               align="left"
      
    //             >
                 
    //               {index+1}
    //             </TableCell>
                
    //             <TableCell className="py-2 capitalize" align="left" colSpan={2}>
    //             {moment(invoice.paid_date).format('DD  MMM, YYYY ')}
    //             </TableCell>
    //             <TableCell className="py-2 capitalize" align="left" colSpan={1}>
    //               {invoice.payment_account[0].name}
    //             </TableCell>
    //             <TableCell className="py-2 capitalize" align="left" colSpan={2}>
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
    //             <TableCell className="py-2 capitalize" colSpan={1}>
                 
    //              <Tooltip title="Verify">
    //               <Icon style={{color:'#00FF00',cursor:'pointer'}} onClick={e => setstatus(invoice.id)} >check</Icon>
    //               </Tooltip>
    //               <Tooltip title="delete">
    //               <Icon color="error" onClick={() => removeData(invoice.id)
    //         } style={{cursor:'pointer'}}>close</Icon>
    //         </Tooltip>
    //         <Tooltip title="view more">
    //               <Icon color="primary" onClick={() =>history.push(`/expensedetails/${invoice.id}`)
    //         } style={{cursor:'pointer'}}>arrow_forward</Icon>
    //         </Tooltip>
         
    //             </TableCell>
               
    //           </TableRow>
    //         ))}
    //       </TableBody>
    //     </Table>
    //   </Card>
    // </Fade>
    <div>
      <MUIDataTable
        title={"New Expenses List"}
        data={expenseList.map((item, index) => {
        
          return [
            ++index,
            moment(item.paid_date).format('DD  MMM, YYYY '),

             item.payment_account[0].name,
            
            // item.referrence_bill_no,
            item.referrence_bill_no,

            item.paid_to,
            parseFloat(item.amount).toLocaleString(undefined, {minimumFractionDigits:2}),
            item.tax!==null?parseFloat(item.tax).toLocaleString(undefined, {minimumFractionDigits:2}):('0.00'),
            item.id
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

const invoiceList = [
  {
    _id: "5ece2cef3e562cbd61996dfds",
    date: new Date(),
    description: "Bit Bass Headphone",
    method: "PayPal",
    total: 15.25,
    status: "paid",
  },
  {
    _id: "5ece2cef3efdsfsdfcbd61996",
    date: new Date(),
    description: "Comlion Watch",
    method: "Visa Card",
    total: 75.25,
    status: "unpaid",
  },
  {
    _id: "5ece2cef3e56dsfdsfds61996",
    date: new Date(),
    description: "Beats Headphone",
    method: "Master Card",
    total: 45.25,
    status: "paid",
  },
];
export default CustomerInvoice;
