import React, { useState, useEffect } from "react";
import {
  Dialog,
  Button,
  Grid,
  FormControlLabel,
  Divider,
  Switch,
  IconButton,
} from "@material-ui/core";
import history from "history.js";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import CurrencyTextField from '@unicef/material-ui-currency-textfield'
import MenuItem from "@material-ui/core/MenuItem";
import { getUserById, updateUser, addNewUser } from "../CRUD/TableService";
import { generateRandomId } from "utils";
import { withStyles } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import { Icon,TextField} from "@material-ui/core";
import { Link } from "react-router-dom";
import Axios from "axios";
import Swal from "sweetalert2";
import url, {getcategories, getCustomerList,getpaymentaccount}from "../invoice/InvoiceService";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
  } from "@material-ui/pickers";
  import DateFnsUtils from "@date-io/date-fns";

const MemberEditorDialog1 = ({ uid, open, handleClose,catid,catList }) => {
  const [state, setState] = useState({
    name: "abc",
    email: "",
    phone: "",
    balance: "",
    age: "",
    company: "",
    address: "",
    isActive: false,
    isAlive: true,
  });
  const [amount, setamount] = useState('');
  const [received_date, setreceived_date] = useState(new Date());
  const [narration, setnarration] = useState('');
  const [payment_account_id, setpayment_account_id] = useState('');
  const [paymentaccount, setpaymentaccount] = useState([]);

  var found=null;
  const styles = {
    customMaxWidth: {
      maxWidth: "900px" // arbitrary value
    }
  };

  
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("md");

  const handleDateChange = (date) => {
    setreceived_date(date)
  };

  const handleFormSubmit = () => {

    const formdata={
       
        amount:amount,
        received_date:received_date,
        narration:narration,
        payment_account_id,
        
    }
    url.post('advance-payments', formdata)
    .then(function (response) {
        console.log(response)
     
      Swal.fire({
        title: 'Success',
        type: 'success',
        icon: 'success',
        text: 'Data saved successfully.',
      });
      handleClose()
      history.push('/transaction') 
    })
    .catch(function (error) {

    })
  }
  const removeData = (id) => {
    Swal.fire({
      title: 'Are you sure you want to delete?',
      text: 'Any products, services will be uncategorised.',
      icon: 'warning',
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
            
            getcategories().then(({ data }) => {
              catList(data)
      
              });
          })
          handleClose()
          Swal.fire({
            customClass:{
              zIndex: 1000
            },
             text:'Category Deleted Successfully',
             icon: "success"
            // 'Cancelled',
            // 'Your imaginary file is safe :)',
            // 'error',
            
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
  const setcatid =()=>{
   

    handleClose()
  }

  useEffect(() => {
    
    getpaymentaccount().then(({ data }) => {
        setpaymentaccount(data)
        console.log(received_date)

    });
    // url.get("http://dataqueuesystems.com/amaco/amaco/public/api/products-in-category").then(({ data }) => {
    //   if (isAlive) setUserList(data);
    

    // Object.keys(data).forEach(function(key) {

    //   arr.push(data[key]);
    //   setUserList(arr)
    // });


    // });
   
  },[])
  
  
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
    <Dialog onClose={handleClose} open={open} className="px-6 pt-2 pb-4" style={{zIndex:1000}} fullWidth={fullWidth}
    maxWidth={maxWidth}>
      <div className="p-6"  >
       
       
         <h4 className="mb-5">Advance Payment</h4>   
       
        <ValidatorForm onSubmit={handleFormSubmit} autoComplete="off">
          
        <TextField
                className="w-full mb-4"
                label="Payment Account"
                
                    autoComplete="none"
                
                variant="outlined"
                onChange={e => setpayment_account_id(e.target.value)
                  // .log(isAlive)
                }
                type="text"
                name="cname"
                size="small"
                validators={["required"]}
                errorMessages={["this field is required"]}
                select
              >
                  {paymentaccount.map((item, ind) => (
                <MenuItem value={item.id} key={item}>
                  {item.name}
                </MenuItem>
              ))}
           </TextField>
            <CurrencyTextField
                className="w-full mb-4"
                label="Amount"
                currencySymbol="SAR"
                variant="outlined"
                onChange={e => setamount(e.target.value)
                  // .log(isAlive)
                }
                type="text"
                name="cname"
                size="small"
                validators={["required"]}
                errorMessages={["this field is required"]}
              >
                  </CurrencyTextField>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      className="mb-4 w-full"
                      margin="none"
                      label="Received Date"
                      inputVariant="outlined"
                      type="text"
                      size="small"
                      autoOk={true}
                     value={received_date}
                      format="MMMM dd, yyyy"
                      onChange={handleDateChange}
                    />
                  </MuiPickersUtilsProvider>
              <TextField
                className="w-full mb-4"
                label="Narration"
                
                variant="outlined"
                onChange={e => setnarration(e.target.value)
                  // .log(isAlive)
                }
                type="text"
                name="cname"
                multiline
                rows={6}
                value={narration}
                validators={["required"]}
                errorMessages={["this field is required"]}
                
              ></TextField>
              
             
            
          
          <div className="flex justify-between items-center">
            <Button variant="outlined" color="primary" type="submit">
             <Icon>save</Icon> Save
            </Button>
            <div className="flex justify-between items-center">
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => setcatid()}
            >
              <Icon>cancel</Icon>Cancel
            </Button>
            
            {/* <Button
            
              variant="outlined"
              color="primary"
              onClick={() => getrow()}
            >
              <Icon color="primary">remove_red_eye</Icon>view
            </Button> */}
            </div>
          </div>
          
        </ValidatorForm>
        
      </div>
    </Dialog>
    
  );
};

export default MemberEditorDialog1;
