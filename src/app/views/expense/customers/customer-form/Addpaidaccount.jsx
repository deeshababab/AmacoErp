import React, { useState, useEffect } from "react";
import {
  Dialog,
  Button,
  Grid,
  Divider,
  IconButton,
} from "@material-ui/core";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import MUIDataTable from "mui-datatables";
import { Icon } from "@material-ui/core";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import url, {getmanufacturer,capitalize_arr}from "../../../invoice/InvoiceService"

const Addpaidaccount = ({ uid, open, handleClose, paymentaccount}) => {
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
  const [userList, setUserList] = useState([]);
  const [isAlive, setIsAlive] = useState(true);
 

 
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("sm");



  const handleFormSubmit = () => {
    
    const frmdetails = {

      name: cname?capitalize_arr(cname):'',
      


    }
    // setcdescription('')
    // setcname('')
   
   
    url.post('payment-account', frmdetails)
      .then(function (response) {
        getmanufacturer()
        Swal.fire({
          icon: 'success',
          type: 'success',
          text: 'Data saved successfully.',
        });

       url.get("payment-account").then(({ data }) => {
          
          paymentaccount(data);
          
  
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
    url.get('payment-account').then(({ data }) => {
      setUserList(data);
     
    

   


    });
   
  },[])
  function getrow(e) {
    setIsAlive(false)
    url.get("payment-account").then(({ data }) => {
      
      paymentaccount(data);

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
      name: "id",
      label: "Action",
      options: {
        filter: true,
        customBodyRender: (value, tableMeta, updateValue) => {

  
          return (
            <IconButton onClick={() => removeData(tableMeta.rowData[1])
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
        <h4 className="mb-5">ADD PAYMENT ACCOUNT</h4>
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
              {/* <TextValidator
                className="w-full mb-4"
                label="Description"
                onChange={e => setcdescription(e.target.value)
                }
                inputProps={{style: {textTransform: 'capitalize'}}}
                variant="outlined"
                type="textarea"
                name="cdescription"
                value={cdescription}
              /> */}
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
            
            {/* <Button
            
              variant="outlined"
              color="primary"
              className="py-2"
              onClick={() => getrow()}
            >
             <Icon>remove_red_eye</Icon> view
            </Button> */}
          
          {/* </div> */}
        </ValidatorForm>
        <Divider className="mb-2" />
        {!isAlive && (
          <MUIDataTable
            title={"PAYMENT ACCOUNT"}
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

export default Addpaidaccount;
