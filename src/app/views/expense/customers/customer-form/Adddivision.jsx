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
import url, {getmanufacturer,capitalize_arr}from "../../../invoice/InvoiceService";
import CurrencyTextField from "@unicef/material-ui-currency-textfield";

const Adddivision = ({ uid, open, handleClose, division,divid}) => {
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
  const [opening_balance, setopening_balance] = useState('');
  const [userList, setUserList] = useState([]);
  const [isAlive, setIsAlive] = useState(true);
 

 
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("sm");



  const handleFormSubmit = () => {
    
    const frmdetails = {

      name: name?capitalize_arr(name):'',
      opening_bal:opening_balance,
      id:divid

    }
    const formData=new FormData()
    // setcdescription('')
    // setcname('')
    formData.append("name",name)
    formData.append("opening_balance",opening_balance)
   
   if(divid)
   {
     console.log(frmdetails);
    url.put(`division/${divid}`,frmdetails)
      .then(function (response) {
      
        Swal.fire({
          icon: 'success',
          type: 'success',
          text: 'Data updated successfully.',
        });

       url.get("division").then(({ data }) => {
          
          division(data);
          
  
        });
      })
   } 
   else
   {
    url.post('division', formData)
    .then(function (response) {
    
      Swal.fire({
        icon: 'success',
        type: 'success',
        text: 'Data saved successfully.',
      });

     url.get("division").then(({ data }) => {
        
        division(data);
        

      });
    })
   }   
       
       
         handleClose()

      
    // setopening_balance('')
    // setname('')
    

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
    if(divid)
    {
      url.get(`singleDivision/${divid}`).then(({ data }) => {
       
        setname(data[0].name);
        setopening_balance(data[0].opening_bal);
       
      
  
     
  
  
      });
    }
    url.get('payment-account').then(({ data }) => {
      setUserList(data);
     
    

   


    });
   
  },[])
  function getrow(e) {
    setIsAlive(false)
    url.get("payment-account").then(({ data }) => {
      
      division(data);

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
        {divid?(<h4 className="mb-5">EDIT DIVISION</h4>):(<h4 className="mb-5">ADD DIVISION</h4>)}
        <ValidatorForm onSubmit={handleFormSubmit} autoComplete="off">
          <Grid className="mb-4" container spacing={4}>
            <Grid item sm={6} xs={12}>
              <TextValidator
                className="w-full mb-4"
                label="Name"
                autoComplete="none"
                variant="outlined"
                onChange={e => setname(e.target.value)
                  // .log(isAlive)
                }
                type="text"
                name="name"
                autoComplete="none"
                value={name}
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
              
              <CurrencyTextField
                    className="mb-4 w-full"
                    label="Amount"
                    name="Amount"
                    variant="outlined"
                    value={opening_balance}
                    currencySymbol="SAR"
                    autoComplete="none"
                    required
                    onChange={(event, value) => setopening_balance(value)}
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

export default Adddivision;
