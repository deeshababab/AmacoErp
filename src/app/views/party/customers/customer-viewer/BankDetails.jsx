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

const BankDetails = () => {
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
    
      <Card className="mt-6" elevation={3}>
      <h5 className="p-2">Bank Details</h5>
      <Table>
      <TableHead>
      <TableRow>
     
        
            
            <TableCell className="px-0" align="center">Bank Name</TableCell>
            <TableCell className="px-0" >Account Number</TableCell>
            <TableCell className="px-0">IBAN Number</TableCell>
            <TableCell className="px-0">Bank Address</TableCell>
        
        
        </TableRow>
        </TableHead>
        <TableBody>
        {bankdetails.map((item, index) => {
          console.log(item)
          return(
              <TableRow key={index}>
              
              <TableCell className="pl-0" align="center">{item.bank_name}</TableCell>
            
            
              <TableCell className="pl-0">{item.account_no}</TableCell>
           
    
              <TableCell className="pl-0">{item.iban_no}</TableCell>
            
             
              <TableCell className="pl-0">{item.bank_address}</TableCell>
            </TableRow>
          )
        })
      }
            </TableBody>
            </Table>
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

export default BankDetails;
