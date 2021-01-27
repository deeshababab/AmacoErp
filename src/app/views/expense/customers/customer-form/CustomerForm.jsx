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
import url,{getpaymentaccount} from "../../../../views/invoice/InvoiceService"

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
  const [referrence_bill_no, setreferrence_bill_no] = useState('');
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
      amount: amount,
      paid_to:paid_to,
      paid_by: paid_by,
      created_by: created_by,
      payment_account_id:parseInt(payment_account_id),
      created_by:created_by
      

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
              <Grid container spacing={3} alignItems="center">
                <Grid item md={2} sm={4} xs={12}>
                 
                </Grid>
                {/* <Grid item md={2} sm={4} xs={12}>
                  Paid By
                </Grid>
                <Grid item md={10} sm={8} xs={12}>
                 
                    
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                        margin="none"
                        label="Invoice Date"
                        inputVariant="outlined"
                        type="text"
                        size="small"
                        autoOk={true}
                        value={paid_date}
                        format="MMMM dd, yyyy"
                        onChange={(date) => setFieldValue("paid_date", date)}
                      />
                    </MuiPickersUtilsProvider>
                    
                 
                </Grid> */}
              <Grid item md={10} sm={8} xs={12}>
              {/* <FormGroup row>
      <FormControlLabel
        control={
          <Checkbox
            checked={checkedA}
            onChange={e => setcheckedA(e.target.checked)}
            value="checkedA"
          />
        }
        label=""
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={checkedA}
            onChange={e => setcheckedA(e.target.checked)}
            value="checkedA"
          />
        }
        label="Secondary"
      />
      </FormGroup> */}
                </Grid> 

                <Grid item md={2} sm={4} xs={12}>
                  Paid By
                </Grid>
                <Grid item md={10} sm={8} xs={12}>
                 
                    <div>
                    <TextField
                      
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
                    </div>
                    
                 
                </Grid>
                <Grid item md={2} sm={4} xs={12}>
                  Paid To
                </Grid>
                <Grid item md={10} sm={8} xs={12}>
                 
                    
                    <TextField
                      
                      label="Paid To"
                      name="firstName"
                      size="small"
                      variant="outlined"
                      value={paid_to}
                      onChange={e => setpaid_to(e.target.value)}
                    />
                    
                 
                </Grid>


                <Grid item md={2} sm={4} xs={12}>
                  Amount
                </Grid>
                <Grid item md={10} sm={8} xs={12}>
                  <TextField
                    label="Amount"
                    name="Amount"
                    size="small"
                    variant="outlined"
                    value={values.amount}
                    onChange={e => setamount(e.target.value)}
                  />
                </Grid>

                <Grid item md={2} sm={4} xs={12}>
                Payment Date
                </Grid>
                <Grid item md={10} sm={8} xs={12}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
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

                <Grid item md={2} sm={4} xs={12}>
                Payment Account
                </Grid>
                <Grid item md={10} sm={8} xs={12}>
                  <TextField
                    
                    style={{width:'200px'}}
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
                </Grid>

                <Grid item md={2} sm={4} xs={12}>
               Description
                </Grid>
                <Grid item md={10} sm={8} xs={12}>
                  <div className="flex flex-wrap m--2">
                    <TextField
                      className="m-2"
                      label="Description"
                      name="workPhone"
                      size="small"
                      variant="outlined"
                      value={description}
                      onChange={e => setdescription(e.target.value)}
                    />
                    
                  </div>
                </Grid>

                <Grid item md={2} sm={4} xs={12}>
                Referrence Bill No
                </Grid>
                <Grid item md={10} sm={8} xs={12}>
                  <TextField
                    label="Referrence Bill No"
                    name="website"
                    size="small"
                    type="text"
                    variant="outlined"
                    value={referrence_bill_no}
                    onChange={e => setreferrence_bill_no(e.target.value)}
                  />
                </Grid>
                {/* <Grid item md={2} sm={4} xs={12}>
                Tax Value
                </Grid>
                <Grid item md={10} sm={8} xs={12}>
                  <TextField
                    label="Tax Value"
                    name="website"
                    size="small"
                    type="email"
                    variant="outlined"
                    value={values.website}
                    onChange={handleChange}
                  />
                </Grid> */}
              </Grid>
              {/* <Tabs
                className="mt-4 mb-6"
                value={tabIndex}
                onChange={handleTabChange}
                indicatorColor="primary"
                textColor="primary"
              >
                {tabList.map((item, ind) => (
                  <Tab
                    className="capitalize"
                    value={ind}
                    label={item}
                    key={ind}
                  />
                ))}
              </Tabs> */}
              {/* {tabIndex === 0 && (
                <OtherDetailsForm values={values} handleChange={handleChange} />
              )}
              {tabIndex === 1 && (
                <AddressForm
                  values={values}
                  setFieldValue={setFieldValue}
                  handleChange={handleChange}
                />
              )}
              {tabIndex === 2 && (
                <ContactPersonForm
                  values={values}
                  setFieldValue={setFieldValue}
                  handleChange={handleChange}
                />
              )} */}

              <div className="mt-6">
                <Button color="primary" variant="contained" type="submit">
                  Submit
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
