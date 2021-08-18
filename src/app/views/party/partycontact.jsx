import React, { useState, useEffect } from "react";
import {
  Dialog,
  Button,
  MenuItem,
  TextField
} from "@material-ui/core";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Icon } from "@material-ui/core";
import {useParams} from "react-router-dom";
import Swal from "sweetalert2";
import url from "../invoice/InvoiceService"
const prefixs = [
  { value: 'Mr', label: 'Mr' },
  { value: 'Mrs', label: 'Mrs' },
  { value: 'Ms', label: 'Ms' }
];
const MemberEditorDialog = ({ uid, open, handleClose,contactid,customercontact}) => {
  let search = window.location.search;
  let params = new URLSearchParams(search);
  const foo =parseInt(params.get('id'));
  const [fname, setfname] = useState('');
  const [lname, setlname] = useState('');
  const [email, setemail] = useState('');
  const [contact1, setcontact1] = useState('');
  const [contact2, setcontact2] = useState('');
  const [address, setaddress] = useState('');
  const [designation, setdesignation] = useState('');
  const [prefix, setprefix] = useState('');
  const [loading, setloading] = useState(false);
  const [userList, setUserList] = useState([]);

  
  

  const [isAlive, setIsAlive] = useState(true);
  

  
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("md");

  const resetform = () => {
    setfname('');
    setlname('');
    setemail('');
    setcontact1('');
    setcontact2('');
    setdesignation('');
    
  
  };

  const handleFormSubmit = () => {
    setloading(true)
    if(contactid)
    {
      const frmdetails = {
        party_id:foo,
        fname: fname,
        lname: lname,
        designation:designation,
        mobno:contact1,
        landline:contact2,
        email:email,
        address:address,
        prefix:prefix
  
  
      }
     
      
      
      url.put("contact/"+contactid, frmdetails)
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
        fname: (fname),
        lname: (lname),
        designation:(designation),
        mobno:contact1,
        landline:contact2,
        email:email,
        address:(address),
        prefix:prefix


    }
    
    
    
    url.post('contact', frmdetails)
      .then(function (response) {
        url.get("parties/" + foo).then(({ data }) => {
          customercontact(data[0].contacts);
          Swal.fire({
            title: 'Success',
            icon:'success',
            type: 'success',
            text: 'Data saved successfully.',
          })
          .then((result) => {

          })
          
        });
        resetform();
        handleClose();
        
      })
      .catch(function (error) {
       
      })
 
    }
    

  };
  

  useEffect(() => {
    
    if(contactid)
    {
      
      url.get("contact/"+contactid).then(({ data }) => {
       
       setfname(data[0].fname)
       setlname(data[0].lname)
       setemail(data[0].email)
       setcontact1(data[0].mobno)
       setcontact2(data[0].landline)
       setdesignation(data[0].designation)
       setaddress(data[0].address)
       setprefix(data[0].prefix)

    });
    }
    
  },[contactid])
  function getrow(e) {
    url.get("products-in-category").then(({ data }) => {
      if (isAlive) setUserList(data);

    });
    
  }
  


  return (
    <Dialog onClose={handleClose} open={open}  style={{zIndex:1000}} maxWidth={maxWidth} fullWidth={fullWidth}>
      <div className="p-6">
        <h4 className="mb-5">Contact Details</h4>
        <ValidatorForm onSubmit={handleFormSubmit} autoComplete="off" inputProps={{style: {textTransform: 'capitalize'}}}>
        <div className="flex">
          <TextField
            className="mr-2"
            autoComplete="none"
            label="Prefix"
            variant="outlined"
            onChange={e => setprefix(e.target.value)}
            value={prefix}
            size="small"
            style={{width:'180px'}}
            select

          >
             {prefixs.map((item, ind) => (
                      <MenuItem value={item.value} key={item}>
                        {item.label}
                      </MenuItem>
                    ))}
              </TextField>
              <TextValidator
                className="w-full mb-4"
                label="First Name"
                inputProps={{style: {textTransform: 'capitalize'}}}
                size="small"
                variant="outlined"
                value={fname}
                onChange={e => setfname(e.target.value)
                  
                }
                type="text"
                name="fname"
                style={{width:724}}
              />
            
              </div>
              <TextValidator
                className="w-full mb-4"
                label="Last Name"
                inputProps={{style: {textTransform: 'capitalize'}}}
                size="small"
                variant="outlined"
                onChange={e => setlname(e.target.value)
                
                }
                type="text"
                name="lname"
                value={lname}
                
              />
              <TextValidator
                className="w-full mb-4"
                label="Email"
                size="small"
                variant="outlined"
                onChange={e => setemail(e.target.value)
                
                }
                type="text"
                name="email"
                value={email}
                
              />
              <TextValidator
                className="w-full mb-4"
                label="Designation"
                inputProps={{style: {textTransform: 'capitalize'}}}
                size="small"
                variant="outlined"
                onChange={e => setdesignation(e.target.value)
                  
                }
                type="text"
                name="designation"
                value={designation}
                
              />
              <TextValidator
                className="w-full mb-4"
                label="Mobile Number"
                size="small"
                variant="outlined"
                validators={['matchRegexp:^(0|[1-9][0-9]*)$']}
                errorMessages={["Number is not valid"]}
                onChange={e => setcontact1(e.target.value)
                 
                }
                type="text"
                name="contact1"
                value={contact1}
              />
              <TextValidator
                className="w-full mb-4"
                label="Landline Number"
                size="small"
                variant="outlined"
                onChange={e => setcontact2(e.target.value)
                  
                }
                validators={['matchRegexp:^(0|[1-9][0-9]*)$']}
                errorMessages={["Number is not valid"]}
                type="text"
                name="contact2"
                value={contact2}
 
              />
              <TextValidator
                className="w-full mb-4"
                label="Address"
                inputProps={{style: {textTransform: 'capitalize'}}}
                size="small"
                variant="outlined"
                onChange={e => setaddress(e.target.value)
                 
                }
                type="text"
                name="contact2"
                value={address}
              />
             


           
            
         
          
          <div className="flex  items-center">
            <Button variant="outlined"  className="mr-4 py-2" color="primary"  type="submit" disabled={loading}>
              <Icon>save</Icon>Save
            </Button>
            <Button
              variant="outlined"
              className="mr-4 py-2"
              color="secondary"
              onClick={() => handleClose()}
            >
             <Icon>cancel</Icon> Cancel
            </Button>
            {!contactid &&(<Button color=".bg-green" className="py-2" variant="outlined" type="reset" onClick={resetform}>
            <Icon>loop</Icon>
          <span className="pl-2 capitalize">reset</span>
            </Button>)}
            <div className="flex justify-between items-center">
            
            
            </div>
          </div>
        </ValidatorForm>
        
      </div>
    </Dialog>
  );
};

export default MemberEditorDialog;
