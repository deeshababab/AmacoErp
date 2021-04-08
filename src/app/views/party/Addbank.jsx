import React, { useState, useEffect } from "react";
import {
  Dialog,
  Button,
  Grid,
  FormControlLabel,
  Divider,
  Switch,
  IconButton,
  MenuItem,
  TextField
} from "@material-ui/core";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { getUserById, updateUser, addNewUser } from "../CRUD/TableService";
import { generateRandomId } from "utils";
import { withStyles } from "@material-ui/core";
import { getInvoice} from "../../../app/views/invoice/InvoiceService";
import MUIDataTable from "mui-datatables";
import { Icon } from "@material-ui/core";
import { Link, useParams} from "react-router-dom";
import Axios from "axios";
import Swal from "sweetalert2";
import CustomerBillings from "./customers/customer-viewer/CustomerBillings"
import url,{getparties,capitalize_arr} from "../invoice/InvoiceService"
const prefixs = [
  { value: 'Mr', label: 'Mr' },
  { value: 'Mrs', label: 'Mrs' },
  { value: 'Ms', label: 'Ms' }
];
const MemberEditorDialog = ({ uid, open, handleClose,contactid,customercontact}) => {
  let search = window.location.search;
  let params = new URLSearchParams(search);
  const foo =parseInt(params.get('id'));
  const [account_no, setaccount_no] = useState('');
  const [vendor_id, setvendor_id] = useState('');
  const [bank_address, setbank_address] = useState('');
  const [bank_name, setbank_name] = useState('');
  const [iban_no, setiban_no] = useState('');
  const [userList, setUserList] = useState([]);
  const { ids } = useParams();
  
  

  const [isAlive, setIsAlive] = useState(true);
  const styles = {
    customMaxWidth: {
      maxWidth: "900px" // arbitrary value
    }
  };

  
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("md");

  const resetform = () => {
    
  
  };

 const handleFormSubmit = () => {

    if(contactid)
    {
      const frmdetails = {
        party_id:foo,
        iban_no:iban_no,
        bank_name:bank_name?capitalize_arr(bank_address):"",
        bank_address:bank_address?capitalize_arr(bank_address):"",
        account_no:account_no,
        
  
  
      }
      // setcdescription('')
      // setcname('')
      
      console.log(frmdetails)
      url.put("party-bank/"+contactid, frmdetails)
        .then(function (response) {
          url.get("parties/" + foo).then(({ data }) => {
            customercontact(data[0].contacts);
            
          });
        handleClose();
          Swal.fire({
            title: 'Success',
            type: 'success',
            icon:'success',
            text: 'Data saved successfully.',
          })
          .then((result) => {
            
          })
          
        })
        .catch(function (error) {
         
        })
       
        

    }
    else
    {
    
  const frmdetails = {
           party_id:foo,
           iban_no:iban_no,
           bank_name:bank_name?capitalize_arr(bank_address):"",
           bank_address:bank_address?capitalize_arr(bank_address):"",
           account_no:account_no,
      
      
          }
    
   
    url.post('party-bank',frmdetails)
      .then(function (response) {
        // url.get("parties/" + foo).then(({ data }) => {
        //   customercontact(data[0].contacts);
        //   Swal.fire({
        //     title: 'Success',
        //     icon:'success',
        //     type: 'success',
        //     text: 'Data saved successfully.',
        //   })
        //   .then((result) => {

        //   })
          
        // });
        console.log(response.data)
        resetform();
        handleClose();
        
      })
      .catch(function (error) {
       
      })
 
    }
    

 };
  const removeData = (id) => {
    Swal.fire({
      title: 'Are you sure you want to delete this category?',
      text: 'Any products, services, or categories in it will be uncategorised.',
      icon: 'danger',
      showCancelButton: true,
      customClass: {
        zIndex: 1000
      },
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {
      if (result.value) {
        url.delete(`categories/${id}`)
          .then(res => {
            

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

  useEffect(() => {

    if(contactid)
    {
      
      url.get("party-bank/"+contactid).then(({ data }) => {
       setbank_address(data.bank_address)
       setbank_name(data.bank_name)
       setiban_no(data.iban_no)
       setaccount_no(data.account_no)

    });
    }
    // getInvoice().then((res) => {
    
    // });
    // return () => setIsAlive(false);
  },[])
    
 
  function getrow(e) {
    url.get("products-in-category").then(({ data }) => {
      if (isAlive) setUserList(data);

    });
    // return () => setIsAlive(true);
  }
  const columns = [
    {
      name: "name", // field name in the row object
      label: "Name", // column title that will be shown in table
      options: {
        filter: true,
      },
    },
    {
      name: "description",
      label: "Description",
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
            <IconButton onClick={() => removeData(tableMeta.rowData[2])
            }
            >
              <Icon color="error">delete</Icon>
            </IconButton>



          )

        },
      },
    },
  ];


  return (
    <Dialog onClose={handleClose} open={open}  style={{zIndex:1000}} maxWidth={maxWidth} fullWidth={fullWidth}>
      <div className="p-6">
        <h4 className="mb-5">Bank Details</h4>
        <ValidatorForm onSubmit={handleFormSubmit} autoComplete="off">
        <TextField
                                className="mb-4 w-full"
                                label="Bank Account Number"
                                autoComplete="none"
                                onChange={e => setaccount_no(e.target.value)}
                                name="website"
                                type="text"
                                size="small"
                                variant="outlined"
                                value={account_no}
                                
                            />
                            <TextField
                                className="mb-4 w-full"
                                label="Bank Name"
                                autoComplete="none"
                                onChange={e => setbank_name(e.target.value)}
                                name="website"
                                type="text"
                                size="small"
                                variant="outlined"
                                value={bank_name}
                                inputProps={{style: {textTransform: 'capitalize'}}}
                                
                            />
                             
                           
                            
                            <TextField
                                className="mb-4 w-full"
                                label="IBAN Number"
                                autoComplete="none"
                                onChange={e => setiban_no(e.target.value)}
                                name="website"
                                type="text"
                                size="small"
                                variant="outlined"
                                value={iban_no}
                               />
                               <TextField
                                className="mb-4 w-full"
                                autoComplete="none"
                                label="Bank Address"
                                onChange={e => setbank_address(e.target.value)}
                                name="website"
                                type="text"
                                size="small"
                                variant="outlined"
                                value={bank_address}
                                inputProps={{style: {textTransform: 'capitalize'}}}
                                />
             


           
            
         
          
          <div className="flex justify-between items-center">
            <Button variant="outlined"  className="mr-4 py-2" color="primary"  type="submit">
              <Icon>save</Icon>Save
            </Button>
            <div className="flex justify-between items-center">
            
            <Button
              variant="outlined"
              className="mr-4 py-2"
              color="secondary"
              onClick={() => resetform()}
              onClick={() => handleClose()}
            >
             <Icon>cancel</Icon> Cancel
            </Button>
            </div>
          </div>
        </ValidatorForm>
        
      </div>
    </Dialog>
  );
};

export default MemberEditorDialog;
