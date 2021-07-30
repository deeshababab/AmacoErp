import React, { useState, useEffect } from "react";
import {
  Dialog,
  Button,
} from "@material-ui/core";
import history from "history.js";
import { ValidatorForm  } from "react-material-ui-form-validator";
import CurrencyTextField from '@unicef/material-ui-currency-textfield'
import MenuItem from "@material-ui/core/MenuItem";
import { Icon,TextField} from "@material-ui/core";
import Swal from "sweetalert2";
import url, {getpaymentaccount}from "../invoice/InvoiceService";
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


  

  
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("sm");

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
 
  const setcatid =()=>{
   

    handleClose()
  }

  useEffect(() => {
    
    getpaymentaccount().then(({ data }) => {
        setpaymentaccount(data)
       

    });
    
   
  },[])
  
  
  

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
                required
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
                required
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
                      required
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
