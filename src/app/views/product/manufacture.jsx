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
import { getUserById, updateUser, addNewUser } from "../CRUD/TableService";
import { generateRandomId } from "utils";
import { withStyles } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import { Icon } from "@material-ui/core";
import { useParams,Link } from "react-router-dom";
import Axios from "axios";
import Swal from "sweetalert2";
import url, {getcategories,getmanufacturer,capitalize_arr}from "../invoice/InvoiceService"

const MemberEditorDialog1 = ({ uid, open, handleClose,setid,manufacture}) => {
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
  const [cname, setcname] = useState('');
  const [cdescription, setcdescription] = useState('');
  const [arr, setarr] = useState([]);
  const [userList, setUserList] = useState([]);
  const [isAlive, setIsAlive] = useState(true);
  const { id } = useParams();
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



  const handleFormSubmit = () => {
    
    const frmdetails = {

      name: capitalize_arr(cname),
      description: capitalize_arr(cdescription)


    }
    // setcdescription('')
    // setcname('')
   
   
    url.post('manufacturer', frmdetails)
      .then(function (response) {
        getmanufacturer()
        Swal.fire({
          icon: 'success',
          type: 'success',
          text: 'Data saved successfully.',
        });

        getmanufacturer().then(({ data }) => {
          manufacture(data)
          setUserList(data)
          
  
        });
      })
        
       
       
        handleClose()

      
    setcdescription('')
    setcname('')
    

  };
  const removeData = (id) => {
    Swal.fire({
      title: 'Are you sure you want to delete this manufacturer?',
      text: '.',
      icon: 'warning',
      showCancelButton: true,
      customClass: {
        zIndex: 1000
      },
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {
      if (result.value) {
        url.delete(`manufacturer/${id}`)
          .then(res => {
            getrow(res)
          
            Swal.fire({
              customClass:{
                zIndex: 1000
              },
               title:'Deleted Successfully',
               icon:'success'
              // 'Cancelled',
              // 'Your imaginary file is safe :)',
              // 'error',
              
            })
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
    url.get('manufacturer').then(({ data }) => {
      setUserList(data);
     
    

   


    });
   
  },[])
  function getrow(e) {
    setIsAlive(false)
    getmanufacturer().then(({ data }) => {
      setUserList(data);
      manufacture(data);

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
    <Dialog onClose={handleClose} open={open} className="px-6 pt-2 pb-4" style={{zIndex:1000}} fullWidth={fullWidth}
    maxWidth={maxWidth}>
      <div className="p-6"  >
        <h4 className="mb-5">Add Manufacturer</h4>
        <ValidatorForm onSubmit={handleFormSubmit} autoComplete="off">
          <Grid className="mb-4" container spacing={4}>
            <Grid item sm={6} xs={12}>
              <TextValidator
                className="w-full mb-4"
                label="Name"
                autoComplete="none"
                variant="outlined"
                onChange={e => setcname(e.target.value)
                  // .log(isAlive)
                }
                type="text"
                name="cname"
                autoComplete="none"
                value={cname}
                validators={["required"]}
                inputProps={{style: {textTransform: 'capitalize'}}}
                errorMessages={["this field is required"]}
              />
              {/* <TextValidator
                className="w-full mb-4"
                label="Email"
                onChange={handleChange}
                type="text"
                name="email"
                value={setState.email}
                validators={["required"]}
                errorMessages={["this field is required"]}
              /> */}

              {/* <TextValidator
                className="w-full mb-4"
                label="Phone"
                onChange={handleChange}
                type="text"
                name="phone"
                value={setState.phone}
                validators={["required"]}
                errorMessages={["this field is required"]}
              /> */}

              {/* <TextValidator
                className="w-full mb-4"
                label="Balance"
                onChange={handleChange}
                type="number"
                name="balance"
                value={setState.balance}
                validators={["required"]}
                errorMessages={["this field is required"]}
              /> */}
            </Grid>

            <Grid item sm={6} xs={12}>
              <TextValidator
                className="w-full mb-4"
                label="Description"
                onChange={e => setcdescription(e.target.value)
                }
                inputProps={{style: {textTransform: 'capitalize'}}}
                variant="outlined"
                type="textarea"
                name="cdescription"
                value={cdescription}
              />
              {/* <TextValidator
                className="w-full mb-4"
                label="Company"
                onChange={handleChange}
                type="text"
                name="company"
                value={setState.company}
                validators={["required"]}
                errorMessages={["this field is required"]}
              />
              <TextValidator
                className="w-full mb-4"
                label="Address"
                onChange={handleChange}
                type="text"
                name="address"
                value={setState.address}
                validators={["required"]}
                errorMessages={["this field is required"]}
              /> */}


            </Grid>
          </Grid>

          {/* <div className="flex justify-between items-center"> */}
            <Button variant="outlined" className="mr-4 py-2" color="primary" type="submit">
              <Icon>save</Icon>Save
            </Button>
            
            <Button
              variant="outlined"
              color="secondary"
              className="mr-4 py-2"
              onClick={() => handleClose()}
            >
             <Icon>cancel</Icon> Cancel
            </Button>
            
            <Button
            
              variant="outlined"
              color="primary"
              onClick={() => getrow()}
            >
             <Icon>remove_red_eye</Icon> view
            </Button>
          
          {/* </div> */}
        </ValidatorForm>
        <Divider className="mb-2" />
        {!isAlive && (
          <MUIDataTable
            title={"Category"}
            columns={columns}
            data={userList}
            options={{
              filterType: "textField",
              responsive: "simple",
              selectableRows: "none", // set checkbox for each row
              elevation: 0,
              rowsPerPageOptions: [10, 20, 40, 80, 100],
            }}
          />
        )}
      </div>
    </Dialog>
    
  );
};

export default MemberEditorDialog1;
