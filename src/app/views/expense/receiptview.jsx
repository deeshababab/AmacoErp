import React, { useState, useEffect } from "react";
import { Breadcrumb } from "matx";
import Axios from "axios";
import MUIDataTable from "mui-datatables";
import { Icon } from "@material-ui/core";
import { Link,useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import url from "../../views/invoice/InvoiceService";
import moment from "moment";
// import { Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

import {
  Table,
  TableHead,
  TableCell,
  TableBody,
  IconButton,
  TableRow,
  Button,
  Typography,
  Tooltip
} from "@material-ui/core";
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

const SimpleMuiTable = ({data1}) => {
  
  const [userList, setUserList] = useState([]); 
  const [IsAlive, setIsAlive] = useState(false);
  const columns = [
    {
      name: "id", // field name in the row object
      label: "S.No.", // column title that will be shown in table
      options: {
       
        customHeadRender: ({index, ...column}) =>{
          return (
            <TableCell key={index} style={columnStyleWithWidth}>  
              <p style={{marginLeft:18}}>S.No.</p> 
            </TableCell>
          )
       }
      }
    },
    {
      name: "name",
      label: "Company Name",
      options: {
       
        customHeadRender: ({index, ...column}) =>{
          return (
            <TableCell key={index} style={columnStyleWithWidth1}>  
              <p style={{marginLeft:18}}>Company Name</p> 
            </TableCell>
          )
       }
      }
    },
    
    {
      name: "paid_date",
      label: "Paid Date",
      options : {
				filter: true,
			}
    },
    {
      name: "amount",
      label: "Amount",
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
              <Tooltip title="View More">
                <Icon color="error" onClick={e=>removeData(tableMeta.rowData[4])}>delete</Icon>
             </Tooltip>
            {/* </Link> */}
           
          </span>

          )

        },
      },
    },
   
  ];
  useEffect(() => {
   
    url.get("receipts").then(({ data }) => {
        setUserList(data)
    
  })
},[data1])
const removeData = (id) => {
  // alert(id)
  // let url = `https://jsonplaceholder.typicode.com/users/${id}`
  Swal.fire({
    title: 'Are you sure?',
    text: 'You will not be able to recover this Receipt!',
    icon: 'danger',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    icon: 'warning',
    cancelButtonText: 'No, keep it'
  }).then((result) => {
    if (result.value) {
      url.delete(`receipts/${id}`)
        .then(res => {
          url.get("receipts").then(({ data }) => {
            setUserList(data)
            
    
        })
          // getrow()
          Swal.fire(
            'Deleted!',
            'Receipt has been deleted.',
            'success'
          )

        })


      // For more information about handling dismissals please visit
      // https://sweetalert2.github.io/#handling-dismissals
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire(
        'Cancelled',
        'Your Receipt is safe :)',
        'error'
      )
    }
  })

}



  return (
    <div>
      
      <MUIDataTable
        title={"Receipt"}
        data={userList.map((item, index) => {
        
          return [
            ++index,
            item.party.firm_name,
            moment(item.paid_date).format('DD MMM YYYY'),
            item.paid_amount,
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
}


export default SimpleMuiTable;
