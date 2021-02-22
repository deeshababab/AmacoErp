import React, { useState, useEffect } from "react";
import {
  Dialog,
  Button,
  Grid,
  FormControlLabel,
  Divider,
  Switch,
  IconButton,
  Fab,
  Tooltip
} from "@material-ui/core";
import history from "history.js";


import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { getUserById, updateUser, addNewUser } from "../CRUD/TableService";
import { generateRandomId } from "utils";
import { withStyles } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import { Icon } from "@material-ui/core";
import { Link } from "react-router-dom";
import Axios from "axios";
import Swal from "sweetalert2";
import url, {getcategories}from "../invoice/InvoiceService"

const MemberEditorDialog = ({ uid, open, handleClose,productid,margin,pprice,marginprice,calcualteprice,productname }) => {
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
  const [marginList, setmarginList] = useState([]);
  const [isAlive, setIsAlive] = useState(true);
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
  const [maxWidth, setMaxWidth] = React.useState("md");



  const handleFormSubmit = () => {
    
    const frmdetails = {

      name: cname,
      description: cdescription


    }
    // setcdescription('')
    // setcname('')
   

    url.post('categories', frmdetails)
      .then(function (response) {
        Swal.fire({
          title: 'Success',
          type: 'success',
          icon:'success',
          text: 'Data saved successfully.',
        });
        getcategories()
        history.push('/product/viewproduct');
      })
      .catch(function (error) {
       
      })
    setcdescription('')
    setcname('')
    

  };
  const setmargin = (m,p,s) => {
    // marginprice(m)
    // pprice(p)
    calcualteprice(p,m)
    handleClose()
      
  }
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
        url.delete(`categories/${id}`)
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
    
    url.get(`product-quotation-detail/${productid}`).then(({ data }) => {
    if (isAlive) setmarginList(data);
      console.log(data)

    });
    
  },[])
  function getrow(e) {
    url.get("products-in-category").then(({ data }) => {
      if (isAlive) setmarginList(data);

    });
    // return () => setIsAlive(true);
  }
  const columns = [
    {
      name: "firm_name", // field name in the row object
      label: "Company Name", // column title that will be shown in table
      options: {
        filter: true,
      },
    },
    {
      name: "purchase_price",
      label: "Purchase Price",
      options: {
        filter: true,
      },
    },
    {
        name: "margin",
        label: "Margin",
        options: {
          filter: true,
        },
      },
      {
        name: "sellprice",
        label: "Sell Price",
        options: {
          filter: true,
        },
      },
    {
      name: "id",
      label: "Select",
      options: {
        filter: true,
        customBodyRender: (value, tableMeta, updateValue) => {

        console.log(tableMeta.rowData)
          return (
            <Tooltip title="Select">
              <Icon color="primary" onClick={() => setmargin(tableMeta.rowData[2],tableMeta.rowData[1],tableMeta.rowData[3])
            }>check_circle</Icon>
           </Tooltip> 



          )

        },
      },
    },
  ];


  return (
    <Dialog onClose={handleClose} open={open} className="px-6 pt-2 pb-4" style={{zIndex:1000}} fullWidth={fullWidth}
    maxWidth={maxWidth}>
      <div className="p-6"  >
        <ValidatorForm onSubmit={handleFormSubmit} autoComplete="off">

          
            <div className="flex justify-end">
            
         
        
              <Icon  onClick={() => handleClose()} style={{cursor:'pointer'}}>close</Icon>
           
            </div>
         
        </ValidatorForm>
     
        {isAlive && (
          <MUIDataTable
            title={`Quotation Reference For ${productname}`}
            columns={columns}
            data={marginList}
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
