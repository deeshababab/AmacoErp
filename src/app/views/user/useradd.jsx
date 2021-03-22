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

const MemberEditorDialog = ({ uid, open, handleClose,userid ,userList}) => {
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
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [code, setcode] = useState('');
  const [contact, setcontact] = useState('');
  const [password, setpassword] = useState('');
  const [Roles, setRoles] = useState([]);
  const [isAlive, setIsAlive] = useState(true);
  const [isAlivecat, setIsAlivecat] = useState('');
  const [role_id, setrole_id] = useState('');
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
  const [maxWidth, setMaxWidth] = React.useState("sm");
  const telcode = [
    { value: "+973", label: "+973" },
    { value: "+965", label: "+965" },
    { value: "+961", label:"+961"},
    { value: "+968", label:"+968"},
    { value: "+974", label:"+974"},
    { value: "+966", label:"+966"},
    { value: "+971", label:"+971"},
    { value: "+967", label:"+967"},
  ];


  useEffect(() => {
    
    url.get('roles').then(({ data }) => {
        setRoles(data)
       

    })
    if(userid)
    {
        url.get(`users/${userid}`).then(({ data }) => {
            setname(data.name)
            setemail(data.email)
            var res =data.contact.slice(0, 4);
            
            setcode(res)
            var con =data.contact.slice(4,);
            console.log(res)
            setcontact(con)
            setpassword(data.password)
            setrole_id(data.role_id)
    
        })  
    }
},[])
  const handleFormSubmit = () => {
if(userid)
{
    const formdata={
        name:name,
        password:password,
        contact:code+contact,
        role_id:role_id,
        email:email
    }
    url.put(`users/${userid}`, formdata)
    .then(function (data) {
        url.get('users').then(({ data }) => {
           userList(data)
           
    
        })
        Swal.fire({
            title: 'Success',
            type: 'success',
            icon: 'success',
            text: 'Data saved successfully.',
          });
         handleClose()
    })
      
   
    
}

   else
   {
        const formdata={
        name:name,
        password:password,
        contact:code+contact,
        role_id:role_id,
        email:email
    }
    console.log(formdata)
    url.post('users', formdata)
    .then(function (data) {
        url.get('users').then(({ data }) => {
           userList(data)
           
    
        })
      Swal.fire({
        title: 'Success',
        type: 'success',
        icon: 'success',
        text: 'Data saved successfully.',
      });
     handleClose()
    
    //  history.push('/transaction') 
   
    })
    .catch(function (error) {

    })
    }
  }
  
  
  
  return (
    <Dialog onClose={handleClose} open={open} className="px-6 pt-2 pb-4" style={{zIndex:1000}} fullWidth={fullWidth}
    maxWidth={maxWidth}>
      <div className="p-6"  >
       
       
         {!userid ?(<h4 className="mb-5">Add User</h4>):<h4 className="mb-5">Edit User</h4>}   
       
        <ValidatorForm onSubmit={handleFormSubmit} autoComplete="off">
      
        <TextField
                className="w-full mb-4"
                label="Name"
                variant="outlined"
                onChange={e => setname(e.target.value)
                  // .log(isAlive)
                }
                type="textarea"
                name="name"
                size="small"
                value={name}
               
                
              />
           
              
              <TextField
                className="w-full mb-4"
                label="Email"
                variant="outlined"
                onChange={e => setemail(e.target.value)
                  // .log(isAlive)
                }
                type="textarea"
                name="cname"
                size="small"
                value={email}
               
                
              />
              
              <div className="flex mb-4">
                             <TextField
                                className="mr-2"
                                autoComplete="none"
                                label="Code"
                                onChange={e => setcode(e.target.value)}
                                name="mobno"
                                type="text"
                                size="small"
                                style={{width:'250px'}}
                                variant="outlined"
                                value={code}
                                // fullWidth
                                select
                              >
                                 {telcode.map((item, ind) => (
                      <MenuItem value={item.value} key={item}>
                        {item.label}
                      </MenuItem>
                    ))}
                              </TextField>
                            <TextField
                                className="mr-2"
                                label="Contact Number"
                                autoComplete="none"
                                onChange={e => setcontact(e.target.value)}
                                name="mobno"
                                type="text"
                                size="small"
                                variant="outlined"
                                value={contact}
                                fullWidth
                                                              
                            />
                            </div>
                            <TextField
                               className="w-full mb-4"
                                label="Password"
                                autoComplete="none"
                                onChange={e => setpassword(e.target.value)}
                                name="mobno"
                                type="text"
                                size="small"
                                variant="outlined"
                                value={password}
                                fullWidth
                                                              
                            />
                            
              <TextValidator
                className="w-full mb-4"
                label="Roles"
                
                variant="outlined"
                onChange={e => setrole_id(e.target.value)
                  // .log(isAlive)
                }
                type="text"
                name="cname"
                size="small"
                value={role_id}
              
                select
              >
               {Roles.map((item, ind) => (
                <MenuItem value={item.id} key={item}>
                  {item.name}
                </MenuItem>
              ))}
              </TextValidator>

              
          
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
