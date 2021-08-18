import React, { useState, useEffect } from "react";
import {
  Dialog,
  Button,
} from "@material-ui/core";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import MenuItem from "@material-ui/core/MenuItem";
import { Icon,TextField,Radio, RadioGroup,Checkbox,
  FormControlLabel} from "@material-ui/core";
import FormLabel from "@material-ui/core/FormLabel";
import Swal from "sweetalert2";
import url, {capitalize_arr}from "../invoice/InvoiceService"
import { FormGroup } from "@material-ui/core";

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
    
  });
  const [name, setname] = useState('');
  const [nick_name, setnick_name] = useState('');
  const [email, setemail] = useState('');
  const [code, setcode] = useState('');
  const [contact, setcontact] = useState('');
  const [password, setpassword] = useState('');
  const [designation, setdesignation] = useState('');
  const [prefix, setprefix] = useState('');
  const [usertype, setusertype] = useState(true);
  const [Roles, setRoles] = useState([]);
  const [isAlive, setIsAlive] = useState(true);
  const [role_id, setrole_id] = useState('');
  const [isTrue, setisTrue] = useState(false);
  const [divisions, setdivisions] = useState([]);
  const prefixs = [
    { value: 'Mr', label: 'Mr' },
    { value: 'Mrs', label: 'Mrs' },
    { value: 'Ms', label: 'Ms' }
  ];
  
  

 
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
  

  const handleChange =  (event,id) => {

    

   
    divisions.map((element, i) => {
     
      if(element.id===id )
      {
        
        element.check=element.check===true?false:true;
        
        
       
         
        }
      return element;
    }) 
    setdivisions(divisions)
    
    console.log(divisions)  
  };
  const error = divisions.filter(v => v).length !== 1;

  useEffect(() => {
    
    url.get('roles').then(({ data }) => {
        setRoles(data)
        

    })
    url.get("division").then(({data})=>{
      let tempList=data
      tempList.map((element, i) => {
        
          element.check=false;
        
        return element;
      }) 
      setdivisions(tempList)   
  
      // setdivisions(data)
      console.log(tempList)
     
    })
    
    if(userid)
    {
        url.get(`users/${userid}`).then(({ data }) => {
            setname(data.name)
            setnick_name(data.nick_name)
            setemail(data.email)
            setprefix(data.prefix)

            setdesignation(data.designation)
            var res =data.contact.slice(0, 4);
            
            setcode(res)
            var con =data.contact.slice(4,);
           
            setcontact(con)
            setpassword(data.password)
            setrole_id(data.role_id)
    
        })  
        url.get("division").then(({data})=>{
            setdivisions(data)
            console.log(data)
            
        })
        
    }
    
},[isTrue])
  const handleFormSubmit = () => {
if(userid)
{
    const formdata={
        name:capitalize_arr(name),
        password:password,
        contact:code+contact,
        role_id:role_id,
        email:email,
        designation:capitalize_arr(designation),
        prefix:prefix,
        nick_name:nick_name
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
        name:capitalize_arr(name),
        password:password,
        contact:code+contact,
        role_id:role_id,
        email:email,
        designation:capitalize_arr(designation),
        prefix:prefix,
        nick_name,
        divisions:JSON.stringify(divisions)
    }
    
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
    
     
   
    })
    
    .catch(function (error) {

    })
    }
  }
  
  
  
  return (
    <Dialog onClose={handleClose} open={open} className="px-6 pt-2 pb-4" style={{zIndex:1000}} fullWidth={fullWidth}
    maxWidth={maxWidth}>
      <div className="p-6"  >
       
       
         {!userid ?(<h4 className="mb-5">ADD USER</h4>):<h4 className="mb-5">EDIT USER</h4>}   
       
        <ValidatorForm onSubmit={handleFormSubmit} autoComplete="off">
       
        <p className="mt-0 mb-1">
          Please Select the  Divison 
        </p>
       <FormGroup row>
          {divisions.map((item, ind) => (
            <FormControlLabel
              error={error}
              className="block h-32"
              control={<Checkbox />}
              label={item.name}
              value={item.check}
              // checked={item.check?item.check:false}
              name={item.name}
              onChange={(e)=>handleChange(e,item.id)}
              key={ind}
            />
          ))}
       </FormGroup> 
        <div className="flex">
                             <TextField
                                className="mr-2"
                                autoComplete="none"
                                label="Prefix"
                                onChange={e => setprefix(e.target.value)}
                                name="mobno"
                                type="text"
                                size="small"
                                style={{width:'200px'}}
                                variant="outlined"
                                value={prefix}
                                // fullWidth
                                select
                              >
                                {prefixs.map((item,id)=>
                                (<MenuItem value={item.value}>
                                {item.label}
                                </MenuItem>))}
                            </TextField>
        <TextField
                className="w-full mb-4 mr-2"
                label="Name"
                variant="outlined"
                inputProps={{style: {textTransform: 'capitalize'}}}
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
                label="Nick Name"
                variant="outlined"
                inputProps={{style: {textTransform: 'capitalize'}}}
                onChange={e => setnick_name(e.target.value)
                  // .log(isAlive)
                }
                type="textarea"
                name="nick_name"
                size="small"
                value={nick_name}
               
                
              />
              </div>
           
              
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
              <TextField
                className="w-full mb-4"
                label="Designation"
                inputProps={{style: {textTransform: 'capitalize'}}}
                variant="outlined"
                onChange={e => setdesignation(e.target.value)
                  // .log(isAlive)
                }
                type="textarea"
                name="name"
                size="small"
                value={designation}
               
                
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
                                className="w-full mb-4"
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
                           {!userid &&(<TextField
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
                                                              
                            />)}
                            
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

              
          
          <div className="flex  items-center">
            <Button variant="outlined" color="primary" type="submit" className="py-2">
             <Icon>save</Icon> SAVE
            </Button>
            
            <Button
              variant="outlined"
              color="secondary"
              onClick={handleClose}
              className="py-2 ml-2"
            >
              <Icon>cancel</Icon>CANCEL
            </Button>
            
            
          </div>
         
          
        </ValidatorForm>
       
      </div>
    </Dialog>
    
  );
};

export default MemberEditorDialog;
