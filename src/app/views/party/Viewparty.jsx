import React, { useState, useEffect } from "react";
import { Breadcrumb,ConfirmationDialog } from "matx";
import Axios from "axios";
import MUIDataTable from "mui-datatables";
import { Icon } from "@material-ui/core";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import FormDialog from "./partycontact"
import MemberEditorDialog from "./partycontact"
import Tooltip from '@material-ui/core/Tooltip';
import url from "../invoice/InvoiceService"
// import { Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Table,
    TableHead,
    TableCell,
    TableBody,
    IconButton,
    TableRow,
    Button
} from "@material-ui/core";
const columnStyleWithWidth = {
  top: "0px",
  left: "0px",
  zIndex: "100",
  position: "sticky",
  backgroundColor: "#fff",
  width: "300px",
  wordBreak: "break-word",
  wordWrap: "break-word",
  overflowWrap:"break-word",
  hyphens:"auto"
}
const columnStyleWithWidthSno = {
  top: "0px",
  left: "0px",
  zIndex: "50",
  position: "sticky",
  backgroundColor: "#fff",
  width: "50px",
}

const SimpleMuiTable = () => {
    const [isAlive, setIsAlive] = useState(true);
    const [userList, setUserList] = useState([]);
   

    useEffect(() => {
        Axios.get(url+"parties").then(({ data }) => {
            if (isAlive) setUserList(data);
           
        });
        return () => setIsAlive(false);
    }, [isAlive]);
    
    const [count, setCount] = useState(0);
  
    function getrow(e) {
      Axios.get(url+"parties").then(({ data }) => {
        if (isAlive) setUserList(data);
    });
    return () => setIsAlive(false);
    }
  
   
  const [click, setClick] = useState([]); 
  const [shouldOpenEditorDialog, setShouldOpenEditorDialog] = useState(false);
  const [
    shouldOpenConfirmationDialog,
    setShouldOpenConfirmationDialog,
  ] = useState(false);
  const handleDialogClose = () => {
    setShouldOpenEditorDialog(false);
   
  };

  const handleDeleteUser = (user) => {
    
    setShouldOpenConfirmationDialog(true);
  };

    
  const addNumber = () => { 
    setClick([ 
      ...click, 
      { 
        id: click.length, 
        value: Math.random() * 10 
      } 
    ]); 
  }; 
  const removeData = (id) => {
    
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      icon: 'danger',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        Axios.delete(url+`parties/${id}`)
    .then(res => {
        
        getrow()
        Swal.fire(
          'Deleted!',
          'Your imaginary file has been deleted.',
          'success'
        )
        
    })
    } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
    
}

const columns = [
  {
    name: "id",
    label: "S.No.",
    options: {
    customHeadRender: ({index, ...column}) =>{
      return (
        <TableCell key={index} style={columnStyleWithWidthSno}>  
          <p align="center">S.No.</p> 
        </TableCell>
      )
   },
  }
},
  {
    name: "firm_name",
    label: "Company Name",
    options: {
      
      customHeadRender: ({index, ...column}) =>{
        return (
          <TableCell key={index} style={columnStyleWithWidth}>  
            <p style={{paddingLeft:15}}>Company Name</p>
          </TableCell>
        )
     },
  },
},
{
  name: "address",
  label: "",
  options: {
    customHeadRender: ({index, ...column}) =>{
      return (
        <TableCell key={index} style={columnStyleWithWidth}>  
          <p style={{paddingLeft:15}}>Address</p>
        </TableCell>
      )
   },
},
},
 
  

{
  name: "vat_no",
  label: "VAT No",
  options: {
      filter: true,
  },
},
{
  name: "contact",
  label: "Contact",
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
            console.log(tableMeta.rowData)
            return (
              <span>
              <Link to={"/pages/view-customer?id=" +tableMeta.rowData[5] }>
            
                <Tooltip title="Party contact details">
                <Icon color="primary">arrow_forward</Icon>
                </Tooltip>
            
            </Link>
            </span>
            
            
            )
            
        },
    },
},
];

    
  
  return ( 
    <div>
       <div className="m-sm-30">
      <div  className="mb-sm-30">
      <div className="flex flex-wrap justify-between mb-6">
          <Breadcrumb
            routeSegments={[
              // { name: "", path: "./Addparty" },
              { name: "Party" }
            ]}
          />
           {shouldOpenEditorDialog && (
          <MemberEditorDialog
            handleClose={handleDialogClose}
            open={shouldOpenEditorDialog}
          />
        )}
        {shouldOpenConfirmationDialog && (
          <ConfirmationDialog
            open={shouldOpenConfirmationDialog}
            onConfirmDialogClose={handleDialogClose}
            text="Are you sure to delete?"
          />
        )}
      
       
        <div className="text-right">
                <Link to={"./Addparty"}>
                <Button
            className="py-2"
            color="primary"
            variant="outlined"
          >
          <Icon>add</Icon>
          Add New
          </Button>
          </Link>
          </div>
          </div>
          </div>
      <MUIDataTable
                title={"Party"}
                data={
                  userList.map((item, index) => {
                    // console.log(item)
                   
                      return [
          
                        ++index,
                        item.firm_name,
                        (item.post_box_no?item.post_box_no+",":'')+""+(item.street?item.street+",":'')+""+(item.city?item.city+",":'')+""+(item.proviance?item.proviance+",":'')+""+(item.zip_code?item.zip_code:''),
                        item.vat_no,
                        item.contact,
                        item.id,
                      ]
                    
                  })
                }
                columns={columns}
                options={{
                    filterType: "textField",
                    responsive: "simple",
                    selectableRows: "none", 
                    elevation: 0,
                    rowsPerPageOptions: [10, 20, 40, 80, 100],
                }}
            />
    </div> 
    </div>
  ); } 
   

export default SimpleMuiTable;
