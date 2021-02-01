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
import { Icon,MenuItem } from "@material-ui/core";
import { Link,useParams } from "react-router-dom";
import Axios from "axios";
import Swal from "sweetalert2";
import url, {getcategories,getProductList,getVendorList}from "../invoice/InvoiceService"

const MemberEditorDialog = ({ uid, open, handleClose,catid,catList,productprice }) => {
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
  const [cprice, setcprice] = useState('');
  const [arr, setarr] = useState([]);
  const [userList, setUserList] = useState([]);
  const [customerList, setcustomerList] = useState([]);
  const [isAlive, setIsAlive] = useState(true);
  const [isAlivecat, setIsAlivecat] = useState('');
  const { id } = useParams();
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
  const [maxWidth, setMaxWidth] = React.useState("md");



  const handleFormSubmit = () => {
       
       
       
        const frmdetails = {

          product_id:catid, 
          party_id: cname,
          price: cprice,
          
    
    
        }
      console.log(frmdetails)
        Axios.post(url+'product-price', frmdetails)
          .then(function (response) {
            getcategories()
            Swal.fire({
              title: 'Success',
              type: 'success',
              text: 'Data saved successfully.',
            });
            Axios.get(url+"products/" + catid).then(({ data }) => {
              productprice(data.prices);
              handleClose()
              
             
            });
            
          setcname('');
          setcprice('')
           
         
       
    
    
        
  
     })

    
  
  
  };
  const removeData = (id) => {
    Swal.fire({
      title: 'Are you sure you want to delete?',
      text: 'Any products, services will be uncategorised.',
      icon: 'warning',
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
            
            getcategories().then(({ data }) => {
              catList(data)
      
              });
          })
          handleClose()
          Swal.fire({
            customClass:{
              zIndex: 1000
            },
             text:'Category Deleted Successfully',
             icon: "success"
            // 'Cancelled',
            // 'Your imaginary file is safe :)',
            // 'error',
            
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
    console.log(catid)
    Axios.get(url+"parties-except/"+catid).then(({ data }) => {
        console.log(data)
        setcustomerList(data)
    })
   
  },[])
  function getrow() {
    if(!catid)
    {
    
  
  }
  else
  {
   
    Axios.get(url+`product-price/${catid}`).then(({ data }) => {
    //   setcname(data.name)
      setcprice(data.price)
      console.log(data)
    });
  }
    // return () => setIsAlive(false);
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
      name: "price",
      label: "price",
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
        
       
         <h4 className="mb-5">Product Price</h4>   
    
        <ValidatorForm onSubmit={handleFormSubmit} autoComplete="off">
          <Grid className="mb-4" container spacing={4}>
            <Grid item sm={6} xs={12}>
              <TextValidator
                className="w-full mb-4"
                label="Vendor"
                
                variant="outlined"
                onChange={e => setcname(e.target.value)
                  // .log(isAlive)
                }
                type="text"
                name="cname"
                value={cname}
                validators={["required"]}
                errorMessages={["This field is required"]}
                select
              >
                {customerList.map((item, ind) => (
                
                <MenuItem value={item.id} key={item}>
                  {item.firm_name}
                </MenuItem>
              ))}
                  
            </TextValidator>
              {isAlivecat &&(
            
            <span><Icon className="mr-2" fontSize="small" color="error">
              info
            </Icon>
            <small style={{color:"red"}}>
              Category already Exists
            </small>
            </span>
         
              )}
             
            </Grid>
            

            <Grid item sm={6} xs={12}>
              <TextValidator
                className="w-full mb-4"
                label="price"
                onChange={e => setcprice(e.target.value)
                }
                variant="outlined"
                type="textarea"
                name="cprice"
                value={cprice}
              />
              
            </Grid>
          </Grid>
          
          <div className="flex justify-between items-center">
            <Button variant="outlined" color="primary" type="submit">
              Save
            </Button>
            <div className="flex justify-between items-center">
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => handleClose()}
            >
              Cancel
            </Button>
            
            {/* <Button
            
              variant="outlined"
              color="primary"
              onClick={() => getrow()}
            >
              view
            </Button> */}
            </div>
          </div>
          
        </ValidatorForm>
        <Divider className="mb-2" />
        {!isAlive &&
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
          }
     
      </div>
    </Dialog>
    
  );
};

export default MemberEditorDialog;
