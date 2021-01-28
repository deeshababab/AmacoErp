import React, { useState,useEffect } from "react";
import { Formik } from "formik";
import Axios from "axios";
import Swal from "sweetalert2";


import history from "history.js";
import {
  Grid,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Card,
  Divider,
  TextField,
  MenuItem,
  Tabs,
  Tab,
  Button,
  Icon,
} from "@material-ui/core";
import OtherDetailsForm from "./OtherDetailsForm";
import AddressForm from "./AddressForm";
import ContactPersonForm from "./ContactPersonForm";
import { Breadcrumb, ConfirmationDialog } from "matx";
import FormDialog from "./paymentaccount"
import MemberEditorDialog from "./paymentaccount";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import url,{getpaymentaccount} from "../../../../views/invoice/InvoiceService";
import FormLabel from "@material-ui/core/FormLabel";

const CustomerForm = () => {
  const options = [
    { value: '1', label: 'Ahamad Shazil' },
    { value: '2', label: 'Danish' },
  
];
const optionss = [
  { value: '1', label: 'Purchase' },
  { value: '2', label: 'Other' },

];
  const [tabIndex, setTabIndex] = useState(0);
  const [created_by, setcreated_by] = useState(1);
  const [paid_date, setpaid_date] = useState(new Date());
  const [paid_by, setpaid_by] = useState(1);
  const [paid_to, setpaid_to] = useState('');
  const [amount, setamount] = useState('');
  const [payment_account_id, setpayment_account_id] = useState(null);
  const [description, setdescription] = useState('');
  const [taxamount, settaxamount] = useState(0);
  const [referrence_bill_no, setreferrence_bill_no] = useState('');
  const [tax, settax] = useState(false);
  const [accounttype, setaccounttype] = useState([]);
  const [shouldOpenEditorDialog, setShouldOpenEditorDialog] = useState(false);

  const [
    shouldOpenConfirmationDialog,
    setShouldOpenConfirmationDialog,
  ] = useState(false);
  const handleDialogClose = () => {
    setShouldOpenEditorDialog(false);
   
  };
  
  const pushData = () => {
    history.push("/payby")
  }
  const handleDeleteUser = (user) => {
    
    setShouldOpenConfirmationDialog(true);
  };
  
  useEffect(() => {
    getpaymentaccount().then(({ data }) => {
      setaccounttype(data)

    }); 
    
  },[])
  
 
  
  
  const handleSubmit = async (values, { isSubmitting ,resetForm}) => {
    console.log(values);
    const frmdetails = {
      paid_date:paid_date,
      referrence_bill_no: parseInt(referrence_bill_no),
      description: description,
      amount: (parseFloat(amount).toFixed(2)),
      paid_to:paid_to,
      paid_by: paid_by,
      created_by: created_by,
      payment_account_id:parseInt(payment_account_id),
      created_by:created_by,
      tax:(parseFloat(taxamount).toFixed(2))
    }
 
    console.log(frmdetails)
    Axios.post(url+'expense', frmdetails)
      .then(function (response) {
        
        console.log(response)
        Swal.fire({
          title: 'Success',
          type: 'success',
          text: 'Data saved successfully.',
        });
       history.push(`/expenseview`)
      })
      .catch(function (error) {
        
      })
   
    setpaid_to('')
    setpaid_by('')
    setreferrence_bill_no('')
    setamount('')
    setcreated_by('')
    setdescription('')

    
  };

  const handleTabChange = (e, value) => {
    setTabIndex(value);
  };
  const handleDateChange = (date) => {
    setpaid_date(date)
  };
  

  return (
    <div className="m-sm-30">
      <div className="mb-sm-30">
        <Breadcrumb
          routeSegments={[
            { name: "Expense", path: "/expenseview" },
            { name: "Expense Entry" },
          ]}
        />
      </div>
      {shouldOpenEditorDialog && (
          <MemberEditorDialog
            handleClose={handleDialogClose}
            open={shouldOpenEditorDialog}
            accounttype={setaccounttype}
          />
        )}
        {shouldOpenConfirmationDialog && (
          <ConfirmationDialog
            open={shouldOpenConfirmationDialog}
            onConfirmDialogClose={handleDialogClose}
            text="Are you sure to delete?"
          />
        )}
      

      <Card elevation={3}>
        <div className="flex p-4">
          <h4 className="m-0">Expense Entry</h4>
        </div>
        <Divider className="mb-2" />

        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          enableReinitialize={true}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            setSubmitting,
            setFieldValue,
            resetForm
          }) => (
            <form className="p-4" onSubmit={handleSubmit}>
              <Grid container spacing={6}>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                
              
                
                
                 
                    
                    <TextField
                      className="mb-4 w-full"
                      label="Paid By"
                      name="firstName"
                      size="small"
                      variant="outlined"
                      value={paid_by}
                      select
                      onChange={e => setpaid_by(e.target.value)}
                    >
                    {/* <MenuItem>
                    {/* <Button
                        
                          onClick={() => {
                            pushData();
                          }}
                        
                    >
                      <Icon>add</Icon>New
                    </Button> */} 
                    {options.map((item, ind) => (
                      <MenuItem value={item.value} key={item}>
                        {item.label}
                      </MenuItem>
                    ))}
                    {/* </MenuItem> */}
                    </TextField>
                 
                    
                 
                
                
                
                 
                    
                    <TextField
                      className="mb-4 w-full"
                      label="Paid To"
                      name="firstName"
                      size="small"
                      variant="outlined"
                      value={paid_to}
                      onChange={e => setpaid_to(e.target.value)}
                    />
                    
                 
            
                  <TextField
                    className="mb-4 w-full"
                    label="Amount"
                    name="Amount"
                    size="small"
                    variant="outlined"
                    value={values.amount}
                    onChange={e => setamount(e.target.value)}
                  />
               

               
               
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                        className="mb-4 w-full"
                        margin="none"
                        label="Payment Date"
                        inputVariant="outlined"
                        type="text"
                        size="small"
                        autoOk={true}
                        value={paid_date}
                        format="MMMM dd, yyyy"
                        onChange={handleDateChange}
                      />
                    </MuiPickersUtilsProvider>
                    </Grid>
           

               
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                  <TextField
                    className="mb-4 w-full"
                    label="Payment Account"
                    name="email"
                    size="small"
                    type="text"
                    variant="outlined"
                    value={payment_account_id}
                    onChange={e => setpayment_account_id(e.target.value)}
                    select 
                  >
                    <MenuItem>
                    <Button
                  onClick={() => {
                    setShouldOpenEditorDialog(true);
                  }}
                >
                  <Icon>add</Icon>New
                </Button>
               </MenuItem>
                      {accounttype.map((item, ind) => (
                      <MenuItem value={item.id} key={item}>
                        {item.name}
                      </MenuItem>
                    ))}
                </TextField>
               

                
               
                    <TextField
                      className="mb-4 w-full"
                      label="Description"
                      name="workPhone"
                      size="small"
                      variant="outlined"
                      value={description}
                      onChange={e => setdescription(e.target.value)}
                    />
                    
                 

            
                  <TextField
                    className="mb-4 w-full"
                    label="Referrence Bill No"
                    name="website"
                    size="small"
                    type="text"
                    variant="outlined"
                    value={referrence_bill_no}
                    onChange={e => setreferrence_bill_no(e.target.value)}
                  />
               
               <FormLabel component="legend" labelPlacement="start">Tax paid?</FormLabel>
                <RadioGroup
              className="mb-4"
              // value={gender || ""}
              name="gender"
              onChange={handleChange}
              row
            >
               
              <FormControlLabel
               value="yes"
                control={<Radio color="secondary" />}
                label="Yes"
                onChange={() => settax(true)
                }
                labelPlacement="end"
              />
              <FormControlLabel
                value="no"
                control={<Radio color="secondary" />}
                label="No"
                onChange={()=> settax(false)
                }
                labelPlacement="end"
              />   {tax &&(
                                <TextField
                               style={{width:'430px'}}
                    label="Tax Amount"
                    name="website"
                    size="small"
                    type="text"
                    variant="outlined"
                    value={taxamount}
                    onChange={e => settaxamount(e.target.value)}
                  />
              )}
              
            </RadioGroup>
              
            
              
              </Grid>
              </Grid>
              

              
              <div className="mt-6">
                <Button color="primary" variant="outlined" type="submit">
                 <Icon>save</Icon> Save
                </Button>
              </div>
            </form>
            
          )}
        </Formik>
      </Card>
    </div>
  );
};

const salutationList = ["Mr.", "Mrs.", "Ms.", "Miss.", "Dr."];
const tabList = ["Other Details", "Address", "Contact Persons"];

const initialValues = {
  customerType: "",
};

export default CustomerForm;
