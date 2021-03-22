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
import { getUserById, updateUser, addNewUser } from "../CRUD/TableService";
import MenuItem from "@material-ui/core/MenuItem";
import { generateRandomId } from "utils";
import { withStyles } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import { Icon,TextField} from "@material-ui/core";
import { Link } from "react-router-dom";
import Axios from "axios";
import Swal from "sweetalert2";
import url, {getcategories,getCustomerList}from "../invoice/InvoiceService"

const MemberEditorDialog = ({ uid, open, handleClose,catid ,userList}) => {
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
  const [party_id, setparty_id] = useState('');
  const [payment_mode, setpayment_mode] = useState('');
  const [check_no, setcheck_no] = useState('');
  const [narration, setnarration] = useState('');
  const [paid_amount, setpaid_amount] = useState('');
  const [userList1, setUserList1] = useState([]);
  const [isAlive, setIsAlive] = useState(true);
  const [isAlivecat, setIsAlivecat] = useState('');
  
  const option =[
      {
          name:'Cash',
          value:'cash'
      },
      {
        name:'Check',
        value:'check'
    },
    {
        name:'Bank Transfer',
        value:'bank transfer'
    }
  ]
  var found=null;
  const styles = {
    customMaxWidth: {
      maxWidth: "900px" // arbitrary value
    }
  };

  const handleChange = (event, source) => {
    event.persist();
    if (source === "switch") {
      setState({
        ...state,
        isActive: event.target.checked,
      });
      
    }
   
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
    return () => setIsAlive(true);
  };
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("md");


  useEffect(() => {
    
    getCustomerList().then(({ data }) => {
        setUserList1(data)
       

    })
},[])
  const handleFormSubmit = () => {

    const formdata={
        party_id:party_id,
        payment_mode:payment_mode,
        check_no:check_no,
        narration:narration,
        paid_amount:paid_amount,
        paid_date:new Date()
    }
    url.post('receipts', formdata)
    .then(function (data) {
     
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
  
  
  
  return (
    <Dialog onClose={handleClose} open={open} className="px-6 pt-2 pb-4" style={{zIndex:1000}} fullWidth={fullWidth}
    maxWidth={maxWidth}>
      <div className="p-6"  >
       
       
         <h4 className="mb-5">Receipt</h4>   
       
        <ValidatorForm onSubmit={handleFormSubmit} autoComplete="off">
          <Grid className="mb-4" container spacing={4}>
            <Grid item sm={6} xs={12}>
              <TextValidator
                className="w-full mb-4"
                label="Name"
                
                variant="outlined"
                onChange={e => setparty_id(e.target.value)
                  // .log(isAlive)
                }
                type="text"
                name="cname"
                size="small"
                // value={cname}
              
                select
              >
               {userList1.map((item, ind) => (
                <MenuItem value={item.id} key={item}>
                  {item.firm_name}
                </MenuItem>
              ))}
              </TextValidator>
              
              <TextField
                className="w-full mb-4"
                label="Narration"
                variant="outlined"
                onChange={e => setnarration(e.target.value)
                  // .log(isAlive)
                }
                type="textarea"
                name="cname"
                multiline
                rows={6}
               
                value={narration}
               
                
              />
            </Grid>
            

            <Grid item sm={6} xs={12}>
            <CurrencyTextField
                className="w-full mb-4"
                label="Amount"
                size="small"
                variant="outlined"
                onChange={e => setpaid_amount(e.target.value)}
                type="text"
                name="paid_amount"
                currencySymbol="SAR"
                
                
              />





              <TextValidator
                className="w-full mb-4"
                label="Payment Mode"
                onChange={e => setpayment_mode(e.target.value)
                }
                variant="outlined"
                type="text"
                name="cdescription"
                size="small"
                value={payment_mode}
                select
              >
                  {option.map((item, ind) => (
                <MenuItem value={item.value} key={item}>
                  {item.name}
                </MenuItem>
              ))}
                  </TextValidator>
           {payment_mode==='check' &&(<TextValidator
                className="w-full mb-4"
                label="Check Number"
                onChange={e => setcheck_no(e.target.value)
                }
                variant="outlined"
                type="text"
                name="cdescription"
                size="small"
                value={check_no}
              
              ></TextValidator>
           )}
             
              
            </Grid>
          </Grid>
          
          <div className="flex justify-between items-center">
            <Button variant="outlined" color="primary" type="submit">
             <Icon>save</Icon> Save
            </Button>
            <div className="flex justify-between items-center">
            <Button
              variant="outlined"
              color="secondary"
              onClick={handleClose}
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

export default MemberEditorDialog;
