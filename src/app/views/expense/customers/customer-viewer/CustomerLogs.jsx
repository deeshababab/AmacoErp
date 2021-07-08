import {
  TableCell,
  Tooltip,
} from "@material-ui/core";
import clsx from "clsx";
import MUIDataTable from "mui-datatables";
import React, { useState, useEffect } from "react";
import url from "../../../../views/invoice/InvoiceService";
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



const CustomerLogs = () => {
  const [expenseList, setexpenseList] = useState([]);
  useEffect(() => {
    url.get("expense-paid").then(({ data }) => {
     
       setexpenseList(data);
       
    });
 
}, []);


const setstatus=(id)=>{
  Swal.fire({
    text: 'Are you sure you want to update Payment?',
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
    <div>
    <MUIDataTable
      title={"Verified Expenses List"}
      data={expenseList.map((item, index) => {
      
        return [
          ++index,
          moment(item.paid_date).format('DD  MMM, YYYY '),
          item.payment_account[0]?.name,
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
          responsive: "scrollMaxHeight",
          rowsPerPage: 10, 
       }}        
                 
    />
  </div>
  );
};


export default CustomerLogs;
