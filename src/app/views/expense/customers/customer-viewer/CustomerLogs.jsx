import {
  TableCell,
  Tooltip,
  Icon,
} from "@material-ui/core";
import clsx from "clsx";
import MUIDataTable from "mui-datatables";
import React, { useState, useEffect } from "react";
import url from "../../../../views/invoice/InvoiceService";
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
        is_paid:true,
        id:id
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
const removeData = (id) => {
  Swal.fire({
    text: 'Are you sure you want to delete?',
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
        
      })
    }
  })

}
const columns = [
  // {
  //   name: "id", // field name in the row object
  //   label: "S.No.", // column title that will be shown in table
  //   options: {
     
  //     customHeadRender: ({index, ...column}) =>{
  //       return (
  //         <TableCell key={index} style={columnStyleWithWidth}>  
  //           <span style={{marginLeft:18}}>S.NO.</span> 
  //         </TableCell>
  //       )
  //    }
  //   }
  // },
  {
    name: "name",
    label: "DATE",
    options: {
      customHeadRender: ({index, ...column}) =>{
        return (
          <TableCell key={index} style={{textAlign:"center",position: "sticky"}}>  
            <span >DATE</span> 
          </TableCell>
        )
     },
      setCellProps:()=>({
        align:'center'

      })
     
    }
  },
  
  // {
  //   name: "paid_date",
  //   label: "ACCOUNT",
  //   options : {
  //     filter: true,
  //   }
  // },
  {
      name: "amount",
      label: "PAID TO",
      options: {
        filter: true,
        customHeadRender: ({index, ...column}) =>{
          return (
            <TableCell key={index} style={{textAlign:"center",position: "sticky"}}>  
              <span >PAID TO</span> 
            </TableCell>
          )
       },
        setCellProps:()=>({
          align:'center'
  
        })
      },
    },
  {
    name: "amount",
    label: "EXPENSE CATEGORY",
    options: {
      filter: true,
      customHeadRender: ({index, ...column}) =>{
        return (
          <TableCell key={index} style={{textAlign:"center",position: "sticky"}}>  
            <span >EXPENSE CATEGORY</span> 
          </TableCell>
        )
     },
      setCellProps:()=>({
        align:'center'

      })
    },
  },
  {
    name: "amount",
    label: "PAID FROM",
    options: {
      filter: true,
      customHeadRender: ({index, ...column}) =>{
        return (
          <TableCell key={index} style={{textAlign:"center",position: "sticky"}}>  
            <span >PAID FROM</span> 
          </TableCell>
        )
     },
      setCellProps:()=>({
        align:'center'

      })

    },
  },
  {
    name: "amount",
    label: "AMOUNT",
    options: {
      filter: true,
      customHeadRender: ({index, ...column}) =>{
        return (
          <TableCell key={index} style={{textAlign:"right",position: "sticky"}}>  
            <span >AMOUNT</span> 
          </TableCell>
        )
     },
      setCellProps:()=>({
        align:'right'

      })
    },
  },
  // {
  //   name: "amount",
  //   label: "TAX AMOUNT",
  //   options: {
  //     filter: true,
  //   },
  // },
  
  {
    name: "id",
    label: "STATUS",
    options: {
      filter: true,
      customHeadRender: ({index, ...column}) =>{
        return (
          <TableCell key={index} style={{textAlign:"center",position: "sticky"}} >  
            <span >STATUS</span> 
          </TableCell>
        )
     },
      customBodyRender: (value, tableMeta, updateValue) => {
        
        return (
          
          <div style={{textAlign:'center'}} >
             
         {tableMeta.rowData[5]!==null?(
                   <Tooltip title="Update Payment"> 
                <small onClick={e=>setstatus(tableMeta.rowData[5])}
                style={{cursor:'pointer'}}
                    className={clsx({
                      "border-radius-4  text-white px-2 py-2 max-w-500  bg-error": true,
                     
                    })}
                  >
                  
                    PENDING
                    
                
                  </small>
                  </Tooltip>
                ):(<small
                  className={clsx({
                    "border-radius-4  text-white px-2 py-2 bg-primary": true,
                   
                  })}
                >
                
                  PAYMENT DONE
                  
              
                </small>
              )}
              
        </div>
        

        )

      },
    },
  },
  {
    name: "",
    label: " ",
    options: {
      filter: true,
      display:false
    },
  },
  {
    name: "id",
    label: "ACTION",
    options: {
      filter: true,
      customHeadRender: ({index, ...column}) =>{
        return (
          <TableCell key={index} style={{textAlign:"center",position: "sticky"}} >  
            <span >ACTION</span> 
          </TableCell>
        )
     },
      customBodyRender: (value, tableMeta, updateValue) => {
        console.log(tableMeta.rowData)
        return (
          
          <div style={{textAlign:'center'}} className="pr-1">
             
         
           
              <div className="pt-2">
          <Tooltip title="delete">
         <Icon color="error"  onClick={() => removeData(tableMeta.rowData[6])} style={{cursor:'pointer'}}>cancel</Icon>
      </Tooltip>
      <Tooltip title="Edit">
                 <Icon color="secondary" className="ml-4 mr-4 " onClick={() =>history.push(`/editexpense/${tableMeta.rowData[6]}/`+tableMeta.rowData[7])
         }   >edit</Icon>
         </Tooltip>
      <Tooltip title="view more">
           <Icon color="primary"  onClick={() =>history.push(`/expensedetails/${tableMeta.rowData[6]}`)
   } style={{cursor:'pointer'}}>play_circle_filled</Icon>
  </Tooltip>
  </div>
        </div>
        

        )

      },
    },
  },
 
];
  return (
    <div>
    <MUIDataTable
      title={"VERIFIED EXPENSES LIST"}
      data={expenseList.map((item, index) => {
      
        return [
          // ++index,
          moment(item.paid_date).format('DD  MMM YYYY '),
          item?.paid_towards,
          item?.name,
          item?.paid_from,
          // item.referrence_bill_no,
          // item.paid_to,
          parseFloat(item.amount).toLocaleString(undefined, {minimumFractionDigits:2}),
          // item.tax!==null?parseFloat(item.tax).toLocaleString(undefined, {minimumFractionDigits:2}):'0.00',
          item.is_paid==="0"?(item.id):null,
          item.id,
          item.account_category_id
        
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
