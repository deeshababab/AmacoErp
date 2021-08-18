import React, { useState, useEffect } from "react";
import { Breadcrumb } from "matx";
import Axios from "axios";
import MUIDataTable from "mui-datatables";
import { Icon } from "@material-ui/core";
import { Link,useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import url from "../../views/invoice/InvoiceService";
import moment from "moment";
import MemberEditorDialog from "./addreceipt";
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
  // left: "0px",
  // zIndex: "100",
  position: "sticky",
  backgroundColor: "#fff",
  width: "80px",
  align:"center",
  wordBreak: "break-all",
}
const columnStyleWithWidth1 = {
  top: "0px",
  left: "0px",
  zIndex: "100",
  position: "sticky",
  backgroundColor: "#fff",
  width: "600px",
  textAlign:"center",
  wordBreak: "break-all",
}

const SimpleMuiTable = ({data1}) => {
  
  const [userList, setUserList] = useState([]);
  const [shouldOpenEditorDialog, setShouldOpenEditorDialog] = useState(false); 
  const [IsAlive, setIsAlive] = useState(false);
  const [id, setid] = useState();

  const handleDialogClose = () => {
    
    setShouldOpenEditorDialog(false);
    url.get('receipts').then(({ data }) => {
      setUserList(data)

    });
  }
  const setreceiptid = (id) => {
    
    setShouldOpenEditorDialog(true);
    setid(id)
    
  }
  const columns = [
    {
      name: "id", // field name in the row object
      label: "S.No.", // column title that will be shown in table
      options: {
       
        customHeadRender: ({index, ...column}) =>{
          return (
            <TableCell key={index} style={columnStyleWithWidth}>  
              <span style={{marginLeft:18}}>S.NO.</span> 
            </TableCell>
          )
       },
       setCellProps: () => ({
        align: "center",
        
      })
      }
    },
    {
      name: "name",
      label: "Company Name",
      options: {
       
        customHeadRender: ({index, ...column}) =>{
          return (
            <TableCell key={index} style={columnStyleWithWidth1}>  
              <span style={{marginLeft:18}}>COMPANY NAME</span> 
            </TableCell>
          )
       },
       setCellProps: () => ({
        align: "center",
        
      })
      }
    },
    {
      name: "paid_date",
      label: "DIVISION",
      options : {
			
        customHeadRender: ({index, ...column}) =>{
          return (
            <TableCell key={index} style={{textAlign:"center",position: "sticky"}}>  
              <span style={{marginLeft:18}}>DIVISION</span> 
            </TableCell>
          )
       },
        setCellProps:()=>({
          align:"center"
        })
			}
    },
    {
      name: "paid_date",
      label: "PAID DATE",
      options : {

			
        customHeadRender: ({index, ...column}) =>{
          return (
            <TableCell key={index} style={{textAlign:"center",position: "sticky"}}>  
              <span style={{marginLeft:18}}>PAID DATE</span> 
            </TableCell>
          )
       },
       setCellProps:()=>({
        align:"center"
      })
    }
			
    },
    {
      name: "amount",
      label: "AMOUNT",
      className:"text-right",
      
      options: {
       
        customHeadRender: ({index, ...column}) =>{
          return (
            <TableCell key={index} style={{textAlign:"right",position: "sticky"}}>  
              <span style={{marginLeft:18}}>AMOUNT</span> 
            </TableCell>
          )
       },
        setCellProps: () => ({
          align: "right",
          
        })
      },
    },
    {
      name: "id",
      label: "ACTION",
      options: {
       
        customHeadRender: ({index, ...column}) =>{
          return (
            <TableCell key={index} style={{textAlign:"right",position: "sticky"}} className="pr-8">  
              <span >ACTION</span> 
            </TableCell>
          )
       },
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <div style={{textAlign:"right"}} className="pr-8" >
            {/* <Link to={"/invoice/" + tableMeta.rowData[4]}> */}
              <Tooltip title="View More">
                <Icon color="error" onClick={e=>removeData(tableMeta.rowData[5])}>delete</Icon>
             </Tooltip>
             <Tooltip title="View More">
                <Icon color="secondary" onClick={e=>setreceiptid(tableMeta.rowData[5])}>edit</Icon>
             </Tooltip>
             <Link to={"/SingleReceipts/" + tableMeta.rowData[5]}>
             <Tooltip title="View More">
                <Icon color="primary">remove_red_eye</Icon>
             </Tooltip>
            </Link>
           
          </div >

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
        title={"RECEIPT"}
        data={userList.map((item, index) => {
        
          return [
            ++index,
            item.party.firm_name,
            item?.div_name,
            moment(item.paid_date).format('DD MMM YYYY'),
            parseFloat(item.paid_amount).toLocaleString(undefined,{
              minimumFractionDigits:2
            }),
            item.id
          ]
        
      })} 
         columns={columns}   
         options={{
           
            rowsPerPageOptions: [10, 20, 40, 80, 100],
            selectableRows: "none",
            // filterType: "dropdown",
            // responsive: "scrollMaxHeight",
            rowsPerPage: 10, 
         }}        
                   
      />
      {shouldOpenEditorDialog && (
        <MemberEditorDialog
          handleClose={handleDialogClose}
          open={shouldOpenEditorDialog}
          id={id}
          
          

        />
      )}
    </div>
   
  );
}


export default SimpleMuiTable;
