import React, { Component, useState } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import history from "history.js";
import url, {getparties} from "../../invoice/InvoiceService"
// import { Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Icon,
  Grid,
  Radio,
  RadioGroup,
  FormControlLabel,
  Checkbox,
  TextField,
  MenuItem,
  Button
} from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import ReactSelectMaterialUi from "react-select-material-ui";
import Select from 'react-select';
import Axios from "axios";
import Swal from "sweetalert2";
const optionss = [
    { value: 'Vendor', label: 'Vendor' },
    { value: 'Customer', label: 'Customer' },
  ];
  const data = [
    { value: 'Vendor', label: 'Vendor' },
    { value: 'Customer', label: 'Customer' },
  ];
  const customerList = [
    {
      name: "Customer",
      value: 'Customer'
  },
  {
      name: "Vendor",
      value: 'Vendor',
      
  },
  ];

const Addparty = ({open, handleClose}) => {
  const [state, setState] = useState({
    date: new Date(),
  });
  const [selectedValue, setSelectedValue] = useState('');
  const [Firm_Name, setFirm_name] = useState('');
  const [email, setemail] = useState('');
  const [mobno, setmobno] = useState('');
  const [mobnocode, setmobnocode] = useState('+966');
  const [landline, setlandline] = useState('');
  const [landlinecode, setlandlinecode] = useState('+966');
  const [vat_no, setvat_no] = useState('');
  const [post_box_no, setpost_box_no] = useState('');
  const [country, setcountry] = useState('');
  const [street, setstreet] = useState('');
  const [zip_code, setzip_code] = useState('');
  const [proviance, setproviance] = useState('');
  const [website, setwebsite] = useState('');
  const [fname, setfname] = useState('');
  const [lname, setlname] = useState('');
  const [suffix, setsuffix] = useState('');
  const [regno, setregno] = useState('');
  const [ob, setob] = useState('');
  const [fax, setfax] = useState('');
  const [city, setcity] = useState('');
  const [contact, setcontact] = useState('');
  const [contactcode, setcontactcode] = useState('+966');
  const [creditlimit, setcreditlimit] = useState('');
  const [creditdays, setcreditdays] = useState('');
  const [partycode, setpartycode] = useState('');
  const [account_no, setaccount_no] = useState('');
  const [vendor_id, setvendor_id] = useState('');
  const [bank_address, setbank_address] = useState('');
  const [bank_name, setbank_name] = useState('');
  const [iban_no, setiban_no] = useState('');
  const [address, setaddress] = useState('');
 

  const handleSubmit = () => {
   
    const frmdetails = {
      firm_name:Firm_Name,
      registration_no:regno,
      vat_no:vat_no,
      post_box_no:post_box_no,
      street:street,
      proviance:proviance,
      country:country,
      contact:contactcode+contact,
      zip_code:zip_code,
      phone1:mobnocode+mobno,
      phone2:landlinecode+landline,
      email:email,
      website:website,
      city:city,
      fax:fax,
      fname:fname,
      lname:lname,
      designation:suffix,
      opening_balance:ob,
      party_type:selectedValue, 
      credit_days:creditdays,
      credit_limit:creditlimit,
      iban_no:iban_no,
      bank_name:bank_name,
      bank_address:bank_address,
      account_no:account_no,
      vendor_id:vendor_id,
      address:address,
      party_code:partycode
    }
   console.log(frmdetails)
     
    
    Axios.post(url+'parties',frmdetails)
      .then(function (response) {
        Swal.fire({  
          title: 'Success',  
          type: 'success',  
          text: 'Data saved successfully.',  
        });
      getparties()
      history.push('/party/viewparty')
      })
      .catch(function (error) {
         
      }) 
     
    resetform()
    
}
const resetform = () => {
  setfname('');
    setlname('');
    setFirm_name('');
    setmobno('');
    setlandline('');
    setemail('');
    setfax('');
    setproviance('');
    setcity('');
    setzip_code('');
    setregno('');
    setvat_no('');
    setcountry('');
    setpost_box_no('');
    setstreet('');
    setob('');
    setSelectedValue('');
    setsuffix('');
    setwebsite('');


};


  const handleChange = (event) => {
    event.persist();
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };
  const handleChange1 = selectedOption => {
    this.setState({ selectedOption });
  };

  const handleDateChange = (date) => {
    setState({ ...state, date });
  };

  const {
    username,
    firstName,
    creditCard,
    mobile,
    password,
    confirmPassword,
    gender,
    date,
    selectedOption,
  } = state;

  return (
    <div>
     
      <ValidatorForm  onError={() => null} onSubmit={handleSubmit}>
        <Grid container spacing={6}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
          
            <h6>Contact Person Details</h6>
                <TextValidator
                    className="mb-4 w-full"
                    label="First Name"
                    onChange={e => setfname(e.target.value)}
                                type="text"
                                name="fname"
                                variant="outlined"
                                size="small"
                                value={fname}
                                validators={[
                                    "required",
                                
                                ]}
                                errorMessages={["this field is required"]}
                            />
              <div className="flex mb-4">
            <TextField
            className="mr-2"
            label="Last Name"
            variant="outlined"
            onChange={e => setlname(e.target.value)}
            value={lname}
            size="small"
            fullWidth
          />
          <TextField
            className="ml-2"
            label="Designation"
            variant="outlined"
            value={suffix}
            size="small"
            onChange={e => setsuffix(e.target.value)}
            fullWidth
          />
        </div>

               <TextValidator
                                className="mb-4 w-full"
                                label="Email Address"
                                onChange={e => setemail(e.target.value)}
                                type="text"
                                name="email"
                                size="small"
                                variant="outlined"
                                validators={["required", "isEmail"]}
                                errorMessages={["this field is required", "email is not valid"]}
                                value={email}
                                                       />
                             <div className="flex mb-4">
                             <TextField
                                className="mr-2"
                                label="Code"
                                onChange={e => setmobnocode(e.target.value)}
                                name="mobno"
                                type="text"
                                size="small"
                                style={{width:'180px'}}
                                variant="outlined"
                                value={mobnocode||""}
                                fullWidth
                              />
                            <TextField
                                className="mr-2"
                                label="Mobile Number"
                                onChange={e => setmobno(e.target.value)}
                                name="mobno"
                                type="text"
                                size="small"
                                variant="outlined"
                                value={mobno||""}
                                fullWidth
                                                              
                            />
                            <TextField
                                className="ml-2"
                                label="Code"
                                onChange={e => setlandlinecode(e.target.value)}
                                name="mobno"
                                type="text"
                                size="small"
                                style={{width:'180px'}}
                                variant="outlined"
                                value={landlinecode||""}
                                fullWidth
                              />
                            
                            <TextField
                                className="ml-2"
                                label="Landline Number"
                                onChange={e => setlandline(e.target.value)}
                                name="landline"
                                size="small"
                                variant="outlined"
                                value={landline}
                                type="mobile"
                                fullWidth
                                
                            />
                            </div>
                            <TextField
                                className="mb-4 w-full"
                                label="Address"
                                onChange={e => setaddress(e.target.value)}
                                name="address"
                                size="small"
                                variant="outlined"
                                value={address}
                                type="mobile"
                                fullWidth
                                
                            />
                            <br></br>
                            <br></br>
                            <h6>Bank Details</h6>
                            <TextField
                                className="mb-4 w-full"
                                label="Bank Account Number"
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
                                onChange={e => setbank_name(e.target.value)}
                                name="website"
                                type="text"
                                size="small"
                                variant="outlined"
                                value={bank_name}
                                
                            />
                             
                           
                            
                            <TextField
                                className="mb-4 w-full"
                                label="IBAN Number"
                                onChange={e => setiban_no(e.target.value)}
                                name="website"
                                type="text"
                                size="small"
                                variant="outlined"
                                value={iban_no}
                               />
                               <TextField
                                className="mb-4 w-full"
                                label="Bank Address"
                                onChange={e => setbank_address(e.target.value)}
                                name="website"
                                type="text"
                                size="small"
                                variant="outlined"
                                value={bank_address}
                                />
          </Grid>

          <Grid item lg={6} md={6} sm={12} xs={12}>
          <h6>Company Details</h6>
          <TextValidator
                    className="mb-4 w-full"
                    label="Company Name"
                    onChange={e => setFirm_name(e.target.value)}
                                type="text"
                                name="Firm_Name"
                                variant="outlined"
                                size="small"
                                value={Firm_Name}
                                
                            />
                            <div className="flex mb-4">
                            <TextField
                                className="mr-2"
                                label="Registration Number"
                                onChange={e => setregno(e.target.value)}
                                name="regno"
                                size="small"
                                type="text"
                                variant="outlined"
                                value={regno}
                                fullWidth
                              
                            />
                        
                            <TextField
                                className="ml-2"
                                label="Vat Number"
                                onChange={e => setvat_no(e.target.value)}
                                name="vat_no"
                                size="small"
                                type="text"
                                fullWidth
                                variant="outlined"
                                value={vat_no}
                            />
                            </div>

          <TextValidator
                                className="mb-4 w-full"
                                label="P.O Box"
                                onChange={e => setpost_box_no(e.target.value)}
                                type="text"
                                name="post_box_no"
                                size="small"
                                variant="outlined"
                                value={post_box_no}
    
                            />
                             <TextValidator
                                className="mb-4 w-full"
                                label="Street"
                                onChange={e => setstreet(e.target.value)}
                                type="text"
                                size="small"
                                variant="outlined"
                                name="street"
                                value={street}
                              
                            />
                             
        <div className="flex mb-4">
          <TextField
            className="mr-2"
            label="City"
            variant="outlined"
            onChange={e => setcity(e.target.value)}
            value={city}
            size="small"
            fullWidth
          />
          <TextField
            className="ml-2"
            label="Province"
            variant="outlined"
            value={proviance}
            size="small"
            onChange={e => setproviance(e.target.value)}
            fullWidth
          />
        </div>
        <div className="flex mb-4">
          <TextField
            className="mr-2"
            label="Zip_code"
            variant="outlined"
            onChange={e => setzip_code(e.target.value)}
            value={zip_code}
            size="small"
            fullWidth
          />
          <TextField
            className="ml-2"
            label="Country"
            variant="outlined"
            value={country}
            size="small"
            onChange={e => setcountry(e.target.value)}
            fullWidth
          />
        </div>
                             
                            
                            
        <div className="flex mb-4"> 
        <TextField
                                className="mr-2"
                                label="Fax"
                                onChange={e => setfax(e.target.value)}
                                name="fax"
                                type="text"
                                size="small"
                                variant="outlined"
                                value={fax}
                                fullWidth
                                
                            />
                            <TextField
                                className="ml-2"
                                label="Code"
                                onChange={e => setcontactcode(e.target.value)}
                                name="mobno"
                                type="text"
                                size="small"
                                style={{width:'180px'}}
                                variant="outlined"
                                value={contactcode||""}
                                fullWidth
                              />
                            <TextField
                                className="ml-2"
                                label="Contact"
                                onChange={e => setcontact(e.target.value)}
                                name="contact"
                                type="text"
                                size="small"
                                variant="outlined"
                                value={contact}
                                fullWidth
                                validators={[
                                  "required",
                                  "minStringLength:10",
                                  "maxStringLength:10",
                                ]}
                                errorMessages={["this field is required"]}
                                
                            />
                            
                            </div>
                            <div className="flex mb-4">
                            <TextField
                                className="mr-2"
                                label="Opening Balance"
                                onChange={e => setob(e.target.value)}
                                name="ob"
                                type="text"
                                size="small"
                                variant="outlined"
                                value={ob}
                                fullWidth
                                
                            />
                            <TextField
                                className="ml-2"
                                label="Credit Limit"
                                onChange={e => setcreditlimit(e.target.value)}
                                name="regno"
                                size="small"
                                type="number"
                                variant="outlined"
                                value={creditlimit}
                                fullWidth
                              
                            />
                        
                            <TextField
                                className="ml-2"
                                label="Credit Days"
                                onChange={e => setcreditdays(e.target.value)}
                                name="vat_no"
                                size="small"
                                type="text"
                                fullWidth
                                variant="outlined"
                                value={creditdays}
                            />
                            </div>
                            <div className="flex mb-4">
                            <TextField
                    className="mr-2"
                    label="Party type"
                    name="selectedvalue"
                    size="small"
                    variant="outlined"
                    select
                    fullWidth
                    value={selectedValue}
                    validators={[
                      "required",
                    ]}
                    errorMessages={["this field is required"]}
                    onChange={e => setSelectedValue(e.target.value)
                    }
                  >
                    {customerList.map((item, ind) => (
                      <MenuItem value={item.value} key={item}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                                className="ml-2"
                                label="Party Code"
                                onChange={e => setpartycode(e.target.value)}
                                name="party_code"
                                size="small"
                                type="text"
                                fullWidth
                                variant="outlined"
                                value={partycode}
                            />
                              </div>
                      <div className="flex mb-4">
                      <TextField
                                className="mr-2"
                                label="Vendor Id"
                                onChange={e => setvendor_id(e.target.value)}
                                name="website"
                                type="text"
                                size="small"
                                variant="outlined"
                                value={vendor_id}
                                fullWidth
                            />
                      <TextField
                                className="ml-2"
                                label="Website URL"
                                onChange={e => setwebsite(e.target.value)}
                                name="website"
                                type="text"
                                size="small"
                                variant="outlined"
                                value={website}
                                fullWidth
                                
                            />
                            
                    
                    </div>

          </Grid>
        </Grid>
        <div>
        <Button   className="mr-4 py-2" color="primary" variant="outlined" type="submit" >
          <Icon>save</Icon>
          <span className="pl-2 capitalize">Save</span>
        </Button>
        <Button  className="mr-4 py-2" color="secondary" variant="outlined" type="submit" onClick={() => history.push("../party/Viewparty")}>
        <Icon>cancel</Icon>
          <span className="pl-2 capitalize">cancel</span>
        </Button>
      
        <Button color=".bg-green" variant="outlined" type="submit" onClick={resetform}>
        <Icon>loop</Icon>
          <span className="pl-2 capitalize">reset</span>
        </Button>
        </div>
        
      </ValidatorForm>
    </div>
  );
};

export default Addparty;
