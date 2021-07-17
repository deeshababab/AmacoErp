import {
  Icon,
  TableCell,
  Tooltip
} from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import React, { useState, useEffect } from "react";
import url,{urlphp} from "../../../../views/invoice/InvoiceService";
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
        status:'verified'
      }
      url.put(`expense/${id}`,status).then(({ data }) => {
        Swal.fire({
          title: 'Success',
          type: 'success',
          icon:'success',
          text: 'Updated successfully.',
        });
        
    //     Axios.get(`${urlphp}/php_file/controller/bulkexpense.php`, {
    //       method: 'GET',
    //       headers: { 
    //         "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE",
    // "Access-Control-Allow-Headers": "Content-Type, x-requested-with",
    // "Access-Control-Max-Age": 86400
    //       },
    //     })
    //       .then(({ data }) => {
            
    //         setexpenseList(data);
    //       })
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
    name: "",
    label: " ",
    options: {
      filter: true,
      display:false
    },
  },
  {
    name: "id",
    label: "Action",
    options: {
      filter: true,
      customBodyRender: (value, tableMeta, updateValue) => {
        console.log(tableMeta.rowData)
        return (
          <span>
          <Tooltip title="Verify">
            <Icon style={{color:'#00FF00',cursor:'pointer'}} onClick={e => setstatus(tableMeta.rowData[7])} >check</Icon>
          </Tooltip>
          {/* </Link> */}
          <Tooltip title="delete">
               <Icon color="error" onClick={() => removeData(tableMeta.rowData[7])} style={{cursor:'pointer'}}>close</Icon>
            </Tooltip>
            <Tooltip title="Edit">
                 <Icon color="secondary" onClick={() =>history.push(`/editexpense/${tableMeta.rowData[7]}/`+tableMeta.rowData[8])
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
    <div>
      <MUIDataTable
        title={"New Expenses List"}
        data={expenseList.map((item, index) => {
            console.log(item) 
          return [
            ++index,
            moment(item.paid_date).format('DD  MMM, YYYY '),

            item?.payment_account.name,
            item.referrence_bill_no,

            item.paid_to,
            parseFloat(item.amount).toLocaleString(undefined, {minimumFractionDigits:2}),
            item.tax!==null?parseFloat(item.tax).toLocaleString(undefined, {minimumFractionDigits:2}):('0.00'),
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
