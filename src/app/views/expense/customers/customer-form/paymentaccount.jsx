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
// import { getUserById, updateUser, addNewUser } from "../CRUD/TableService";
import { generateRandomId } from "utils";
import { withStyles } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import { Icon } from "@material-ui/core";
import { Link } from "react-router-dom";
import Axios from "axios";
import Swal from "sweetalert2";
import url, {getcategories,getpaymentaccount,getpaymentaccountcategory}from "../../../../views/invoice/InvoiceService"

const MemberEditorDialog = ({ uid, open, handleClose,accounttype,catid,catname,setcat}) => {
  
  const [name, setname] = useState('');
  const [cdescription, setcdescription] = useState('');
  const [catList, setcatList] = useState([]);
  const [isAlive, setIsAlive] = useState(true);
  const styles = {
    customMaxWidth: {
      maxWidth: "900px" // arbitrary value
    }
  };

  
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("sm");



  const handleFormSubmit = () => {
    
    const frmdetails = {

      name: name,
      parent_id:catid

    }
    
   

    url.post('account-categories ', frmdetails)
      .then(function (response) {
        Swal.fire({
          title: 'Success',
          type: 'success',
          icon:'success',
          text: 'Data saved successfully.',
        });
        getpaymentaccount().then(({ data }) => {
          accounttype(data)
  
        });
        getpaymentaccountcategory().then(({ data }) => {
          setcat(data)
  
        });
        handleClose()
      })
      .catch(function (error) {
       
      })
    setcdescription('')
    setname('')
    

  };
  const removeData = (id) => {
    Swal.fire({
      text: 'Are you sure you want to delete this Subcategory?',
      // text: 'Any products, services, or categories in it will be uncategorised.',
      icon: 'warning',
      showCancelButton: true,
      customClass: {
        zIndex: 1000
      },
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {
      if (result.value) {
        url.delete(`account-categories/${id}`)
          .then(res => {
            getrow()
            getpaymentaccountcategory().then(({ data }) => {
              setcat(data)
      
            });

            Swal.fire(
              'Deleted!',
              'Category or Subcategory has been deleted.',
              'success'
            )

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
    
    
    
  })
  function getrow(e) {
    if(catid)
    {
    url.get(`account-subcategories/${catid}`)
      .then(function (response) {
        console.log(response.data)
        setcatList(response.data)
        setcat(response.data)

      })
    }
    else
    {
    url.get(`account-subcategories/0`)
      .then(function (response) {
        console.log(response.data)
        setcatList(response.data)

    })
    }
    
  }
  const columns = [
    {
      name: "id", // field name in the row object
      label: "S.No.", // column title that will be shown in table
      options: {
        filter: true,
      },
    },
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
        <h4 className="mb-5">{!catid && ("Category")} {catid &&(' Subcategory For')} {catname }</h4>
        <ValidatorForm onSubmit={handleFormSubmit} autoComplete="off">
          <Grid className="mb-4" container spacing={4}>
            <Grid item sm={6} xs={12}>
              <TextValidator
                className="w-full mb-4"
                label="Enter Account Name"
                
                variant="outlined"
                onChange={e => setname(e.target.value)
                  // .log(isAlive)
                }
                type="text"
                name="name"
                value={name}
                validators={["required"]}
                errorMessages={["this field is required"]}
              />
              
            </Grid>

            
          </Grid>

          <div className="flex justify-between items-center">
            <Button variant="outlined" color="primary" type="submit">
              <Icon>save</Icon>Save
            </Button>
            <div className="flex justify-between items-center">
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => handleClose()}
            >
              <Icon>cancel</Icon>Cancel
            </Button>
            
            <Button
            
              variant="outlined"
              color="primary"
              onClick={() => getrow()}
            >
              <Icon>remove_red_eye</Icon>view
            </Button>
            </div>
          </div>
        </ValidatorForm>
        <Divider className="mb-2" />
        {isAlive && (
          <MUIDataTable
            // title={catid &&("Subcategory List")|| (Category  Li)}
            columns={columns}
            data={
                 
              catList.map((item, index) => {
                // console.log(item)
               
                  return [
      
                    ++index,
                    item.name,
                    item.id
                    
                  ]
                
              })
              
            }
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

export default MemberEditorDialog;
