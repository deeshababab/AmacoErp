import {
  Icon,
  TableCell,
  Tooltip
} from "@material-ui/core";
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
const round={
  width: "1em",
  height: "1em",
  "border-radius": "50%",
  background: "#ffaf38",
  color:'#fff'
}


const CustomerInvoice = () => {
  const [expenseList, setexpenseList] = useState([]);
  const [isAlive,setisAlive] = useState(false);
  useEffect(() => {
    url.get("expense").then(({ data }) => {
      console.log(data)
       setexpenseList(data);
       
    });
    return setisAlive(true)

 
}, [isAlive]);
const setstatus=(id)=>{
  Swal.fire({
    text: 'Are you sure you want to Verify?',
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
        status:'verified',
        id:id
      }
      url.put(`expense/${id}`,status).then(({ data }) => {
        Swal.fire({
          title: 'Success',
          type: 'success',
          icon:'success',
          text: 'Updated successfully.',
        });
        
    
      setisAlive(false)
      
     
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
          <TableCell key={index} style={{textAlign:"center"}} >  
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
  // {
  //   name: "amount",
  //   label: "REFERRENCE BILL NUMBER",
  //   options: {
  //     filter: true,
  //   },
  // },
  {
    name: "amount",
    label: "PAID TO",
    options: {
      filter: true,
      customHeadRender: ({index, ...column}) =>{
        return (
          <TableCell key={index} style={{textAlign:"center"}} >  
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
          <TableCell key={index} style={{textAlign:"center"}} >  
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
          <TableCell key={index} style={{textAlign:"center"}} >  
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
          <TableCell key={index} style={{textAlign:"right"}} >  
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
          <TableCell key={index} style={{textAlign:"center"}} className="pr-16">  
            <span >ACTION</span> 
          </TableCell>
        )
     },
      customBodyRender: (value, tableMeta, updateValue) => {
        console.log(tableMeta.rowData)
        return (
          <div style={{textAlign:"center"}} >
          <Tooltip title="Verify">
            <Icon style={{color:'#28a745',cursor:'pointer'}}  onClick={e => setstatus(tableMeta.rowData[5])} >check_circle</Icon>
          </Tooltip>
          {/* </Link> */}
          <Tooltip title="delete">
               <Icon color="error" onClick={() => removeData(tableMeta.rowData[5])} style={{cursor:'pointer'}}>cancel</Icon>
            </Tooltip>
            <Tooltip title="Edit">
                 <Icon color="secondary" className="ml-4 mr-4 " onClick={() =>history.push(`/editexpense/${tableMeta.rowData[5]}/`+tableMeta.rowData[6])
         }   >edit</Icon>
        </Tooltip>
            <Tooltip title="view more">
                 <Icon color="primary" onClick={() =>history.push(`/expensedetails/${tableMeta.rowData[5]}`)
         } style={{cursor:'pointer'}}>play_circle_filled</Icon>
        </Tooltip>
         
        </div>

        )

      },
    },
  },
 
];
  return (
    <div>
      <MUIDataTable
        title={"PENDING EXPENSES LIST"}
        data={expenseList.map((item, index) => {
            console.log(item) 
          return [
            // ++index,
            moment(item.paid_date).format('DD  MMM, YYYY '),
            
            item?.paid_towards,
            item?.name,
            item?.paid_from,
            // item.referrence_bill_no,

            // item.paid_to,
            parseFloat(item.amount).toLocaleString(undefined, {minimumFractionDigits:2}),
            // item.tax!==null?Math.floor(parseFloat(item.tax)).toLocaleString(undefined, {minimumFractionDigits:2}):('0.00'),
            item.id,
            item?.account_category_id
          ]
        
      })} 
         columns={columns}   
         options={{
           
            rowsPerPageOptions: [10, 20, 40, 80, 100],
            selectableRows: "none",
            // filterType: "dropdown",
            responsive: "scrollMaxHeight",
            rowsPerPage: 10, 
            textLabels: {
              body: {
                  noMatch: 
                      'Sorry,no new pending expense entry found',
              },
          },
         }}        
              
      />
    </div>
  );
};


export default CustomerInvoice;
