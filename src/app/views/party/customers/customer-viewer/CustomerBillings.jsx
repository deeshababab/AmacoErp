import React, { useState, useEffect } from "react";
import Axios from "axios";
import Swal from "sweetalert2";
import {
  Button,
  Card,
  Divider,
  Icon,
  Table,
  TableHead,
  TableBody,
  TableCell,
  IconButton,
  TableRow,
  Tooltip
} from "@material-ui/core";
import { Breadcrumb, ConfirmationDialog } from "matx";
import url, { getparties } from "../../../invoice/InvoiceService"
import MemberEditorDialog from "../../partycontact"
import FormDialog from "../../partycontact"
import history from "history.js";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const CustomerBillings = () => {
  let search = window.location.search;
  let params = new URLSearchParams(search);
  const foo = parseInt(params.get('id'));
  
  var i = 1;
  const [customercontact, setcustomercontact] = useState([]);
  const [userList, setUserList] = useState([]);
  const [bankdetails, setbankdetails] = useState([]);
  const [fname, setfname] = useState('');
  const [lname, setlname] = useState('');
  const [email, setemail] = useState('');
  const [contact1, setcontact1] = useState('');
  const [contact2, setcontact2] = useState('');
 
  const [designation, setdesignation] = useState('');
  const [status, setstatus] = useState('');
  const [shouldOpenEditorDialog, setShouldOpenEditorDialog] = useState('');
  const [anchorEl, setAnchorEl] = React.useState(null);
  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }
  const setcontacts = (id) => {
    setstatus(id)
    setShouldOpenEditorDialog(id);

  };

  const [
    shouldOpenConfirmationDialog,
    setShouldOpenConfirmationDialog,
  ] = useState(false);

  const handleDialogClose = () => {
    setstatus('');
    setShouldOpenEditorDialog(false);
    getparties()

  };
  function handleClose() {
    setAnchorEl(null);
  }

  const handleDeleteUser = (user) => {

    setShouldOpenConfirmationDialog(true);
    
  };

  useEffect(() => {


    Axios.get(url+"parties/" + foo).then(({ data }) => {
      setcustomercontact(data[0].contacts);
      setbankdetails(data)
     
    });

  }, []);
  const removeData = (id) => {
    // alert(id)
    // let url = `https://jsonplaceholder.typicode.com/users/${id}`
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this contact details!',
      icon: 'danger',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        Axios.delete(url+`contact/${id}`)
    .then(res => {
        
        Swal.fire(
          'Deleted!',
          'Your Contactdetails has been deleted.',
          'success'
        )
        getData();
        
    })
  
    
    
        
      // For more information about handling dismissals please visit
      // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          '',
          'error'
        )
      }
    })
    
}
const getData = () => {
  Axios.get(url+"parties/" + foo).then(({ data }) => {
    setcustomercontact(data[0].contacts);
    
  });
}
  return (
    <div>
    <Card elevation={3}>
    <div className="flex flex-wrap justify-between mb-6"> 
    <h5 className="p-4">Contact</h5>
      <div className="text-right">
                
                <Button
            className="py-2"
            style={{marginTop:"10px",marginRight:10}}
            color="primary"
            variant="outlined"
            onClick={() => {
              setShouldOpenEditorDialog(true);
            }}
          >
          <Icon>add</Icon>
          Add New
          </Button>
         
          </div>
          
          </div>
      <Divider />
      <Table >
        <TableHead>
          <TableRow>
            <TableCell className="pl-0" align="center">S.No.</TableCell>
            <TableCell className="px-0">Name</TableCell>
            <TableCell className="px-0" >Designation</TableCell>
            <TableCell className="px-0" colspan={2}>Address</TableCell>
            <TableCell className="px-0">Contact</TableCell>
            <TableCell className="px-0" colspan={2}>Email</TableCell>
           
            
            <TableCell className="px-4" align="center" >Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customercontact.map((item, index) => {
            
            return (
              <TableRow key={index}>
                <TableCell className="pl-0" align="center">{i++}</TableCell>

                <TableCell className="pl-0">{item.fname}</TableCell>
                <TableCell className="pl-0" style={{whiteSpace:'nowrap'}}>{item.designation}</TableCell>
                <TableCell className="pl-0" colspan={2}>{item.address}</TableCell>
                <TableCell className="pl-0">{item.mobno}</TableCell>
                <TableCell className="pl-0" colspan={2}>{item.email}</TableCell>

                
              
                <TableCell className="pl-0" align="center">
                <IconButton size="small"  aria-owns={anchorEl ? "simple-menu" : undefined}
                        aria-haspopup="true"
                        onClick={handleClick}
                        style={{marginRight:'0.5rem'}}
                        >
                        <Tooltip title="Subcategory list">
                          <Icon color="primary" style={{paddingRight:12}}>expand_more</Icon>
                        </Tooltip>
                      </IconButton>
                <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                >
              <MenuItem onClick={() => {
                    setcontacts(item.id);
                  }}>
                
                    <Tooltip title="Edit contact details">
                    <Icon color="secondary">edit</Icon>
                    
                    </Tooltip>
                    Edit
                  </MenuItem>
                  <MenuItem onClick={() => removeData(item.id)}>
                 
                  <Tooltip title="Delete contact details">
                    <Icon color="error" >delete</Icon>
                  </Tooltip>
                  Delete
                  
                  </MenuItem>
                </Menu>
                  

                  
                </TableCell>

              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <div>
        {shouldOpenEditorDialog && (
          <MemberEditorDialog
            handleClose={handleDialogClose}
            contactid={status}
            open={shouldOpenEditorDialog}
            customercontact={setcustomercontact}

          />
        )}
        {shouldOpenConfirmationDialog && (
          <ConfirmationDialog
            open={shouldOpenConfirmationDialog}
            onConfirmDialogClose={handleDialogClose}
            text="Are you sure to delete?"
          />
        )}
      </div>
    </Card>
    
      
      </div>
  );
};

const customerInfo = [
  {
    title: "Credit Card",
    value: "**** **** **** **** 4242",
  },
  {
    title: "Paid",
    value: "5 ($500.00)",
  },
  {
    title: "Draft",
    value: "2 ($150.00)",
  },
  {
    title: "Unpaid/Due",
    value: "1 ($355.00)",
  },
  {
    title: "Refunded",
    value: "0 ($0.00)",
  },
  {
    title: "Gross Income",
    value: "$2,100.00",
  },
];

export default CustomerBillings;
