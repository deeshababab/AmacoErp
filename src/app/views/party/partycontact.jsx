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
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { getUserById, updateUser, addNewUser } from "../CRUD/TableService";
import { generateRandomId } from "utils";
import { withStyles } from "@material-ui/core";
import { getInvoice} from "../../../app/views/invoice/InvoiceService";
import MUIDataTable from "mui-datatables";
import { Icon } from "@material-ui/core";
import { Link, useParams} from "react-router-dom";
import Axios from "axios";
import Swal from "sweetalert2";
import CustomerBillings from "./customers/customer-viewer/CustomerBillings"
import url,{getparties} from "../invoice/InvoiceService"

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
  const [userList, setUserList] = useState([]);
  const { ids } = useParams();
  
  

  const [isAlive, setIsAlive] = useState(true);
  const styles = {
    customMaxWidth: {
      maxWidth: "900px" // arbitrary value
    }
  };

  
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("md");

  const resetform = () => {
    setfname('');
    setlname('');
    setemail('');
    setcontact1('');
    setcontact2('');
    setdesignation('');
    handleClose();
  
  };

  const handleFormSubmit = () => {

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
        address:address
  
  
      }
      // setcdescription('')
      // setcname('')
      
      console.log(frmdetails)
      Axios.put(url+"contact/"+contactid, frmdetails)
        .then(function (response) {
          Axios.get(url+"parties/" + foo).then(({ data }) => {
            customercontact(data[0].contacts);
            
          });
        handleClose();
          Swal.fire({
            title: 'Success',
            type: 'success',
            text: 'Data saved successfully.',
          });
          
        })
        .catch(function (error) {
         
        })
       
        

    }
    else
    {
    const frmdetails = {
      party_id:foo,
      fname: fname,
      lname: lname,
      designation:designation,
      mobno:contact1,
      landline:contact2,
      email:email,
      address:address

    }
    // setcdescription('')
    // setcname('')
    Swal.fire({
      title: 'Success',
      type: 'success',
      text: 'Data saved successfully.',
    });
    console.log(frmdetails)
    Axios.post(url+'contact', frmdetails)
      .then(function (response) {
        Axios.get(url+"parties/" + foo).then(({ data }) => {
          customercontact(data[0].contacts);
          
        });
        resetform();
        handleClose();
        
      })
      .catch(function (error) {
       
      })
 
    }
    

  };
  const removeData = (id) => {
    Swal.fire({
      title: 'Are you sure you want to delete this category?',
      text: 'Any products, services, or categories in it will be uncategorised.',
      icon: 'danger',
      showCancelButton: true,
      customClass: {
        zIndex: 1000
      },
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {
      if (result.value) {
        Axios.delete(url+`categories/${id}`)
          .then(res => {
            

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

  useEffect(() => {

    if(contactid)
    {
      
      Axios.get(url+"contact/"+contactid).then(({ data }) => {
       
       setfname(data[0].fname)
       setlname(data[0].lname)
       setemail(data[0].email)
       setcontact1(data[0].mobno)
       setcontact2(data[0].landline)
       setdesignation(data[0].designation)
       setaddress(data[0].address)

    });
    }
    // getInvoice().then((res) => {
    
    // });
    // return () => setIsAlive(false);
  },[contactid])
  function getrow(e) {
    Axios.get(url+"products-in-category").then(({ data }) => {
      if (isAlive) setUserList(data);

    });
    // return () => setIsAlive(true);
  }
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
    <Dialog onClose={handleClose} open={open}  style={{zIndex:1000}} maxWidth={maxWidth} fullWidth={fullWidth}>
      <div className="p-6">
        <h4 className="mb-5">Contact Details</h4>
        <ValidatorForm onSubmit={handleFormSubmit} autoComplete="off">
         
              <TextValidator
                className="w-full mb-4"
                label="First Name"
                size="small"
                variant="outlined"
                value={fname}
                onChange={e => setfname(e.target.value)
                  // .log(isAlive)
                }
                type="text"
                name="fname"
                // validators={["required"]}
                // errorMessages={["this field is required"]}
              />
              <TextValidator
                className="w-full mb-4"
                label="Last Name"
                size="small"
                variant="outlined"
                onChange={e => setlname(e.target.value)
                  // .log(isAlive)
                }
                type="text"
                name="lname"
                value={lname}
                // validators={["required"]}
                // errorMessages={["this field is required"]}
              />
              <TextValidator
                className="w-full mb-4"
                label="Email"
                size="small"
                variant="outlined"
                onChange={e => setemail(e.target.value)
                  // .log(isAlive)
                }
                type="text"
                name="email"
                value={email}
                // validators={["required"]}
                // errorMessages={["this field is required"]}
              />
              <TextValidator
                className="w-full mb-4"
                label="Designation"
                size="small"
                variant="outlined"
                onChange={e => setdesignation(e.target.value)
                  // .log(isAlive)
                }
                type="text"
                name="designation"
                value={designation}
                validators={["required"]}
                errorMessages={["this field is required"]}
              />
              <TextValidator
                className="w-full mb-4"
                label="Mobile Number"
                size="small"
                variant="outlined"
                onChange={e => setcontact1(e.target.value)
                  // .log(isAlive)
                }
                type="text"
                name="contact1"
                value={contact1}
                validators={["required"]}
                errorMessages={["this field is required"]}
              />
              <TextValidator
                className="w-full mb-4"
                label="Landline Number"
                size="small"
                variant="outlined"
                onChange={e => setcontact2(e.target.value)
                  // .log(isAlive)
                }
                type="text"
                name="contact2"
                value={contact2}
                validators={["required"]}
                errorMessages={["this field is required"]}
              />
              <TextValidator
                className="w-full mb-4"
                label="Address"
                size="small"
                variant="outlined"
                onChange={e => setaddress(e.target.value)
                  // .log(isAlive)
                }
                type="text"
                name="contact2"
                value={address}
                validators={["required"]}
                errorMessages={["this field is required"]}
              />
             


           
            
         
          
          <div className="flex justify-between items-center">
            <Button variant="outlined"  className="mr-4 py-2" color="primary"  type="submit">
              <Icon>save</Icon>Save
            </Button>
            <div className="flex justify-between items-center">
            
            <Button
              variant="outlined"
              className="mr-4 py-2"
              color="secondary"
              onClick={() => resetform()}
              // onClick={() => handleClose()}
            >
             <Icon>cancel</Icon> Cancel
            </Button>
            </div>
          </div>
        </ValidatorForm>
        
      </div>
    </Dialog>
  );
};

export default MemberEditorDialog;
