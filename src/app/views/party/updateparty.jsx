import React, { useEffect, useState } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import history from "history.js";
import {
  Button,
  Icon,
  Grid,
  Card,
  TextField,
  MenuItem,
} from "@material-ui/core";
import { Breadcrumb } from "matx";
import "date-fns";
import Swal from "sweetalert2";
import url,{getparties,} from "../invoice/InvoiceService";
import CurrencyTextField from '@unicef/material-ui-currency-textfield';
  const customerList = [
     'Vendor', 
     'Customer', 
  ];

const SimpleForm = () => {
  const [state, setState] = useState({
    date: new Date(),
  });
  
  const [Firm_Name, setFirm_name] = useState('');
  const [vat_no, setvat_no] = useState('');
  const [post_box_no, setpost_box_no] = useState('');
  const [country, setcountry] = useState('');
  const [street, setstreet] = useState('');
  const [zip_code, setzip_code] = useState('');
  const [proviance, setproviance] = useState('');
  const [website, setwebsite] = useState('');
  const [regno, setregno] = useState('');
  const [ob, setob] = useState('');
  const [fax, setfax] = useState('');
  const [city, setcity] = useState('');
  const [contact, setcontact] = useState('');
  const [partytype, setpartytype] = useState('');
  const [creditlimit, setcreditlimit] = useState('');
  const [creditdays, setcreditdays] = useState('');
  const [partycode, setpartycode] = useState('');
  const [account_no, setaccount_no] = useState('');
  const [vendor_id, setvendor_id] = useState('');
  const [bank_address, setbank_address] = useState('');
  const [bank_name, setbank_name] = useState('');
  const [iban_no, setiban_no] = useState('');
  const [company_name_ar, setcompany_name_ar] = useState('');
  const [loading,setloading]=useState(false);
 
  
  // get the id value
  let search = window.location.search;
  let params = new URLSearchParams(search);
  const foo =parseInt(params.get('id'));
  const [isAlive, setIsAlive] = useState(true);
  const [userList, setUserList] = useState([]);
  
 
  useEffect(() => {

   
      url.get("parties/"+foo).then(({ data }) => {
       
      getparties()  
      if (isAlive) setUserList(data);
         

          setFirm_name(data[0].firm_name)
          setvat_no(data[0].vat_no)
          setpost_box_no(data[0].post_box_no)
          setstreet(data[0].street)
          setcity(data[0].city)
          setproviance(data[0].proviance)
          setcountry(data[0].country)
          setzip_code(data[0].zip_code)
          setcompany_name_ar(data[0].firm_name_in_ar)
          setfax(data[0].fax)
          setwebsite(data[0].website)
          setob(data[0].opening_balance)
          setregno(data[0].registration_no)
          setcontact(data[0].contact)
          setpartytype(data[0].party_type)
          setpartycode(data[0].party_code)
          setcreditdays(data[0].credit_days)
          setcreditlimit(data[0].credit_limit)
          setvendor_id(data[0].vendor_id)
          setbank_address(data[0].bank_address)
          setaccount_no(data[0].account_no)
          setbank_name(data[0].bank_name)
          setiban_no(data[0].iban_no)

        });
        return () => setIsAlive(false);
    }, [isAlive]);

  const handleSubmit = () => {
    setloading(true);
    const frmdetails = {
      firm_name:Firm_Name?(Firm_Name):'',
      registration_no:regno,
      vat_no:vat_no,
      post_box_no:post_box_no,
      street:street?(street):'',
      proviance:proviance?(proviance):'',
      country:country?(country):'',
      contact:contact,
      zip_code:zip_code,
      website:website,
      city:city?(city):'',
      fax:fax,
      opening_balance:parseFloat(ob).toFixed(2),
      party_type:partytype,
      credit_days:creditdays,
      credit_limit:parseFloat(creditlimit).toFixed(2),
      iban_no:iban_no,
      bank_name:bank_name,
      bank_address:bank_address?(bank_address):'',
      account_no:account_no,
      vendor_id:vendor_id,
      party_code:partycode,
      company_name_ar:company_name_ar
      
    }
   
  
    
    url.put("parties/"+foo, frmdetails)
      .then(function (response) {
        
          Swal.fire({  
            title: 'Success',  
            type: 'success', 
            icon:'success', 
            text: 'Data saved successfully.',  
          })
          .then((result) => {
        history.push(`/pages/view-customer?id=${foo}`)
        })
      })
      .catch(function (error) {
        
      }) 
  
  
}


  

  const {
  } = state;

  return (
    <div>
        <div className="m-sm-30">
        <div  className="mb-sm-30">
          <Breadcrumb
            routeSegments={[
              { name: "Party",path: "./Viewparty"},
              { name: "Party Details", path: `/pages/view-customer?id=${foo}` },
              { name: "Party Edit " }
            ]}
          />
        </div>
        <Card className="p-4" elevation={3}>
      <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
        <Grid container spacing={6}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
          
                            <h6>Company Details</h6>
          <TextValidator
                    className="mb-4 w-full"
                    label="Company Name"
                    inputProps={{style: {textTransform: 'capitalize'}}}
                    onChange={e => setFirm_name(e.target.value)}
                                type="text"
                                name="Firm_Name"
                                variant="outlined"
                                size="small"
                                value={Firm_Name}
                                
                            />
                             <TextValidator
                    className="mb-4 w-full"
                    label="اسم الشركة"
                    autoComplete="none"
                    onChange={e => setcompany_name_ar(e.target.value)}
                                type="text"
                                name="company_name_ar"
                                variant="outlined"
                                size="small"
                                value={company_name_ar}
                                
                            />
                            <div className="flex mb-4">
                            <TextValidator
                                className="mr-2"
                                label="Commercial Registration Number"
                                onChange={e => setregno(e.target.value)}
                                name="regno"
                                size="small"
                                type="text"
                                variant="outlined"
                                value={regno}
                                style={{width:'230px'}}
                                validators={[
                                  // "minStringLength: 15",
                                  "maxStringLength: 11",
                                ]}
                                errorMessages={["Invalid Registraion Number"]}
                              
                            />
                        
                   <TextField
                                className="ml-2"
                                label="VAT number"
                                onChange={e => setvat_no(e.target.value)}
                                name="vat_no"
                                size="small"
                                type="text"
                                variant="outlined"
                                value={vat_no}
                                fullWidth
                            />
                            </div>

                        <TextField
                                className="mb-4 w-full"
                                label="P.O. Box"
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
                                inputProps={{style: {textTransform: 'capitalize'}}}
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
            inputProps={{style: {textTransform: 'capitalize'}}}
            variant="outlined"
            onChange={e => setcity(e.target.value)}
            value={city}
            size="small"
            fullWidth
          />
          <TextField
            className="ml-2"
            label="Province"
            inputProps={{style: {textTransform: 'capitalize'}}}
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
            inputProps={{style: {textTransform: 'capitalize'}}}
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
                            <TextValidator
                                className="ml-2"
                                label="Contact"
                                onChange={e => setcontact(e.target.value)}
                                name="contact"
                                type="text"
                                size="small"
                                variant="outlined"
                                inputProps={{style: {width:300,paddingRight:50}}}
                                value={contact}
                                validators={['matchRegexp:^(0|[1-9][0-9]*)$']}
                                errorMessages={["Number is not valid"]}
                                
                            />
                            </div>
                            <div className="flex mb-4">
                            <CurrencyTextField
			                          label="Opening Balance"
			                          variant="outlined"
			                          value={ob}
                                size="small"
                                fullWidth
			                          currencySymbol="SAR"
			                          onChange={(event, value)=> setob(value)}
	                            />
                            <CurrencyTextField
                                className="ml-2"
                                label=" Credit Limits"
			                          variant="outlined"
			                          value={creditlimit}
                                maximumvalue="9999999"
                                size="small"
                                fullWidth
			                          currencySymbol="SAR"
			                          onChange={(event, value)=> setcreditlimit(value)}
                              
                            />
                        
                        <TextField
                                className="ml-2"
                                label="Credit Days"
			                          variant="outlined"
			                          value={creditdays}
                                maximumvalue="9999999"
                                size="small"
                                fullWidth
			                          onChange={(event)=> setcreditdays(event.target.value)}
                              
                            />
                            </div>
                            <div className="flex mb-4">
                             
      <TextField
                className="mr-0"
                variant="outlined"
                label="Party Type"
                size="small"
                value={partytype}
                onChange={e => setpartytype(e.target.value)
                } 
                fullWidth
                select
              >
                {customerList.map((item) => (
                  <MenuItem value={item} key={item}>
                    {item}
                  </MenuItem>
                ))}
              </TextField>
                  
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

          <Grid item lg={6} md={6} sm={12} xs={12}>
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
                                inputProps={{style: {textTransform: 'capitalize'}}}
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
                                inputProps={{style: {textTransform: 'capitalize'}}}
                                name="website"
                                type="text"
                                size="small"
                                variant="outlined"
                                value={bank_address}
                                />
                            
                            
          </Grid>
        </Grid>
        <Button  className="mr-4 py-2" color="primary" variant="outlined" type="submit" 
        disabled={loading}
        >
          <Icon>save</Icon>
          <span className="pl-2 capitalize">Save</span>
        </Button>
        <Button  className="mr-4 py-2" color="secondary" variant="outlined" type="submit" onClick={() => history.push(`../pages/view-customer?id=${foo}`)}>
        <Icon>cancel</Icon>
          <span className="pl-2 capitalize">cancel</span>
        </Button>
      </ValidatorForm>
      </Card>
      </div>
    </div>
  );
};

export default SimpleForm;
