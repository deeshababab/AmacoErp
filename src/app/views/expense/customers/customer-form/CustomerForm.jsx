import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import Axios from "axios";
import Swal from "sweetalert2";
import NestedMenuItem from "material-ui-nested-menu-item";
import moment from "moment";
import CurrencyTextField from '@unicef/material-ui-currency-textfield'

import history from "history.js";
import { useDropzone } from "react-dropzone";
import clsx from "clsx";
import ReactImageMagnify from 'react-image-magnify';


import {
  Grid,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Fab,
  Card,
  Divider,
  TextField,
  MenuItem,
  Tabs,
  Tab,
  Button,
  Icon,
  Menu
} from "@material-ui/core";
import OtherDetailsForm from "./OtherDetailsForm";
import AddressForm from "./AddressForm";
import ContactPersonForm from "./ContactPersonForm";
import { Breadcrumb, ConfirmationDialog } from "matx";
import FormDialog from "./paymentaccount"
import MemberEditorDialog from "./paymentaccount";
import FormDialog1 from "./AddField"
import MemberEditorDialog1 from "./AddField";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import url,{ getpaymentaccount } from "../../../../views/invoice/InvoiceService";
import FormLabel from "@material-ui/core/FormLabel";
import { now } from "lodash";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../../pdf.png"

const usestyles = makeStyles(({ palette, ...theme }) => ({
  dropZone: {
    transition: "all 350ms ease-in-out",
    border: "2px dashed rgba(var(--body),0.3)",
    "&:hover": {
      background: "rgba(var(--body), 0.2) !important",
    },
  },
}));
const role=localStorage.getItem('role')

const CustomerForm = () => {
  const options = [
    { value: '1', label: 'Ahamad Shazil' },
    { value: '2', label: 'Danish' },

  ];
  const optionss = [
    { value: '1', label: 'Purchase' },
    { value: '2', label: 'Other' },

  ];
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    acceptedFiles,
  } = useDropzone({ accept: "image/*" });
  const classes = usestyles();
  let formData = new FormData();
  const [tabIndex, setTabIndex] = useState(0);
  const [created_by, setcreated_by] = useState(1);
  const [state, setState] = useState(initialValues);
  const [paid_date, setpaid_date] = useState(new Date());
  
  const [paid_by, setpaid_by] = useState('');
  const [paid_to, setpaid_to] = useState('');
  const [amount, setamount] = useState('');
  const [payment_account_id, setpayment_account_id] = useState('');
  const [payment_account_name, setpayment_account_name] = useState('');
  const [description, setdescription] = useState('');
  const [taxamount, settaxamount] = useState(0.00);
  const [referrence_bill_no, setreferrence_bill_no] = useState('');
  const [tax, settax] = useState(false);
  const [accounttype, setaccounttype] = useState([]);
  const [shouldOpenEditorDialog, setShouldOpenEditorDialog] = useState(false);
  const [shouldOpenEditorDialog1, setShouldOpenEditorDialog1] = useState(false);
  const [menuPosition, setMenuPosition] = useState(null);
  const [cat, setcat] = useState([]);
  const [field, setfield] = useState([]);
  const [catid, setcatid] = useState('');
  const [catname, setcatname] = useState('');
  const [index1, setindex1] = useState('');
  const [files, setFiles] = useState([]);
  const [file_path, setfile_path] = useState();
  const [payment_account, setpayment_account] = useState([]);
  const [accountstatus, setaccountstatus] = useState(false);
  const [close, setclose] = useState(false);
  const  [list,setList] = useState([]);
  const [bank_ref_no, setbank_ref_no] = useState('');
  const [bank_slip, setbank_slip] = useState();
  const [ref_billno, setref_billno] = useState();
  const [company, setcompany] = useState(false);
  const [company_name, setcompany_name] = useState('');
  const [isAlive, setisAlive] = useState(false);
  const [message, setmessage] = useState('');
 
  const handlebankSelect = (event,f) => {
   
    let files = event.target.files;
    
    const src = URL.createObjectURL(event.target.files[0]);
    setclose(true)
    setindex1(f)
    setbank_slip(event.target.files[0])
  
    
    
  };
  const handlebillSelect = (event,f) => {
   
    let files = event.target.files;
    
    const src = URL.createObjectURL(event.target.files[0]);
    
    setfile_path(event.target.files[0])
    setref_billno(src)
  
    
    
  };
  
  const handleFileSelect = (event,f) => {
 
    let files = event.target.files;
    
    const src = URL.createObjectURL(event.target.files[0]);
    setclose(true)
    setindex1(f)
   

    for (const iterator of files) {
      list.push({
        file: event.target.files[0],
        column_id:f,
        src:URL.createObjectURL(event.target.files[0]),
        progress: f,
      });
      
    }
    
   
    field.map((element, i) => {
      if(element.id===f)
      {
        element.file=event.target.files[0];
        element.column_id=f
      }

    })

    setFiles(list);
   
   
  };

  const Menu1 = ({data}) => {
    
  return (<li>
      
      
      {data.map((m,ind) => {
       
        return (
           <NestedMenuItem
          label={m.category.name}
          parentMenuOpen={handleItem}
          value="1"
          onClick={e => searchcat(m.sub_categories.length >0,m.category.name,m.category.id)}
        >
            
                 
               
               
       <MenuItem onClick={e=>Addnewsubcat(m.category.id,m.category.name)}>     
      <Icon align="left">add</Icon> Add Subcategory
        </MenuItem>  
          
        {m.sub_categories.length >0 ? <Menu1 data={m.sub_categories}  /> :<MenuItem onClick={e=>AddField(m.category.id,m.category.name)}>     
      <Icon align="left">add</Icon> Add Field
        </MenuItem> }
          {/* { m.sub_categories.length >0 && <Menu1 data={m.sub_categories}  /> } */}
          {/* { m.sub_categories.length === "undefined"  && <Icon>delete</Icon> }        */}
                     
                 
                
                
                
          
         
       </NestedMenuItem>
        
       
        );
       
    })}
    </li>

  );
   
}

  const handleRightClick = (event: React.MouseEvent) => {
    if (menuPosition) {
      return;
    }
    event.preventDefault();
    setMenuPosition({
      top: event.pageY,
      left: event.pageX
    });
  };
  const handleItemClick = (event: React.MouseEvent) => {
    setMenuPosition(null);
  };
  const searchcat = (event,name,i) => {
    
    if(event)
    {
      setaccountstatus(false)
    }
    else{
      url.get(`columns/${i}`).then(({ data }) => {
        
         setfield(data[0].column)
         
       })
      
    
      setaccountstatus(true);
      setpayment_account_id(i)
      setpayment_account_name(name)
      setMenuPosition(null);
      
    }
  };
  const Addnewsubcat = (i,n) => {
 
    setcatid(i)
    setcatname(n)
    setShouldOpenEditorDialog(true);
    setMenuPosition(null)
  };
  const AddField =(i,n)=>{
    setcatid(i)
    setcatname(n)
    setShouldOpenEditorDialog1(true);
    setMenuPosition(null)
  }
  const handleItem = (e) => {

    // setMenuPosition(null);
   
    setpayment_account_id(e)
    
  };

  const [
    shouldOpenConfirmationDialog,
    setShouldOpenConfirmationDialog,
  ] = useState(false);
  const handleDialogClose = () => {
    setShouldOpenEditorDialog(false);
    setisAlive(true)

  };
  const [
    shouldOpenConfirmationDialog1,
    setShouldOpenConfirmationDialog1,
  ] = useState(false);
  const handleDialogClose1 = () => {
    setShouldOpenEditorDialog1(false);
    setisAlive(true)

  };

  const pushData = () => {
    history.push("/payby")
  }
  const handleDeleteUser = (user) => {

    setShouldOpenConfirmationDialog(true);
  };

  useEffect(() => {
    getpaymentaccount().then(({ data }) => {
      setaccounttype(data)

    });
    if(localStorage.getItem('role')!=='SA')
    {
      setpaid_by(localStorage.getItem('user_id'))
    }
    url.get("account-categories").then(({ data }) => {
     
      setcat(data)
    });
    url.get("payment-account").then(({ data }) => {
     
      setpayment_account(data)
    });
    return setisAlive(true)
    

  }, [isAlive])




  const handleSubmit = async (values, { isSubmitting, resetForm }) => {
    // const frmdetails = {
    //   paid_date: paid_date,
    //   referrence_bill_no: parseInt(referrence_bill_no),
    //   description: description,
    //   amount: (parseFloat(amount).toFixed(2)),
    //   paid_to: paid_to,
    //   paid_by: paid_by,
    //   created_by: created_by,
    //   payment_account_id: parseInt(payment_account_id),
    //   created_by: created_by,
    //   tax: (parseFloat(taxamount).toFixed(2)),
    //   status:"new",
    //   data:field,
    //   bank_slip:formData.append('bank_slip',bank_slip),
    //   bank_ref_no:bank_ref_no
    // }
    const newItem = new FormData();
    for (const key of Object.keys(files)) {
      newItem.append('item', files[key].file)
    }
    if(tax)
    {
    formData.append("tax", taxamount)
    formData.append("company_name",company)
    }
    formData.append("paid_date", paid_date)
    formData.append("referrence_bill_no", referrence_bill_no)
    formData.append("amount", amount)
    formData.append("paid_to", paid_to)
    formData.append("description",description)
    formData.append("created_by",created_by)
    formData.append("account_category_id",payment_account_id)
    
    formData.append("payment_account_id",paid_by)
    formData.append("created_by",created_by)
    
    formData.append("status", "new")
    formData.append("data",JSON.stringify(field))
    formData.append("bank_ref_no",bank_ref_no)
    formData.append("bank_slip",bank_slip)
    formData.append("file_path",file_path)
    
    files.map((answer, i) => {  
      // formData.append(`quotation_detail${i}`,JSON.stringify(answer))
      formData.append(`file${answer.column_id}`,answer.file)
     
      // answer.files&& (formData.append(`file${i}`,answer.files))
    })
    
  

    url.post('expense', formData)
      .then(function (response) {
         
       
        Swal.fire({
          title: 'Success',
          type: 'success',
          icon: 'success',
          text: 'Data saved successfully.',
         
        });
      history.push(`/expenseview`)
      })
      .catch(function (error) {

      })

    // setpaid_to('')
    // setpaid_by('')
    // setreferrence_bill_no('')
    // setamount('')
    // setcreated_by('')
    // setdescription('')


  };
  const handleSingleRemove = (index) => {
    let tempList = [...files];
    tempList.splice(index, 1);
    setFiles([...tempList]);
    setclose(false)
  };
  const handleField_Fileremove = (index) => {
    let tempList = [...files];
    // tempList.splice(index, 1);
    tempList.map((element, i) => {
      let sum=0;
    
      if (index === i) 
      {
        element['file']=null;
        element['progress']=null;
      }
    })
    setFiles([...tempList]);
 
  };

  const handleTabChange = (e, value) => {
    setTabIndex(value);
  };
  const handleDateChange = (date) => {
    setpaid_date(date)
  };
  
  const setremark = (event, index) => {
    event.persist()
    let tempItemList = [...state.item];
    
    tempItemList.map((element, i) => {
      let sum=0;
    
      if (index === i) 
      {
        element[event.target.name] = event.target.value;
        
      

      }
      return element;
      
    });

    setState({
      ...state,
      item: tempItemList,
    });
  }
  const handleComment = (e, item,i) => {
    e.preventDefault();
    let result = field;   // copy state
    result = result.map((el) => {  // map array to replace the old comment with the new one
      if (el.name === item.name) 
      {
        el.text = e.target.value;
        el.column_id = i;
      }
      return el;
    });
    setfield(result);
     // set state with new comment
  };
  const handleCommentdate = (e, item,i) => {
   
    let result = field;   // copy state
    result = result.map((el) => {  // map array to replace the old comment with the new one
      if (el.name === item.name)
      { 
        el.date =  e;
        el.column_id = i;
      }
      else
      {
        el.date =  new Date();
        el.column_id = i;
      }
      return el;
    });
    setfield(result);
  
     // set state with new comment
  };
  
  


  return (
    <div className="m-sm-30">
      <div className="mb-sm-30">
        <Breadcrumb
          routeSegments={[
            { name: "Expense", path: "/expenseview" },
            { name: "Expense Entry" },
          ]}
        />
      </div>
      {shouldOpenEditorDialog && (
        <MemberEditorDialog
          handleClose={handleDialogClose}
          open={shouldOpenEditorDialog}
          accounttype={setaccounttype}
          catid={catid}
          catname={catname}
          setcat={setcat}
        />
      )}
      {shouldOpenConfirmationDialog && (
        <ConfirmationDialog
          open={shouldOpenConfirmationDialog}
          onConfirmDialogClose={handleDialogClose}
          text="Are you sure to delete?"
        />
      )}
    {shouldOpenEditorDialog1 && (
        <MemberEditorDialog1
          handleClose={handleDialogClose1}
          open={shouldOpenEditorDialog1}
          accounttype={setaccounttype}
          catid={catid}
          catname={catname}
          setcat={setcat}
        />
      )}
      {shouldOpenConfirmationDialog1 && (
        <ConfirmationDialog
          open={shouldOpenConfirmationDialog1}
          onConfirmDialogClose={handleDialogClose1}
          text="Are you sure to delete?"
        />
      )}


      <Card elevation={3}>
        <div className="flex p-4">
          <h4 className="m-0">Expense Entry</h4>
        </div>
        <Divider className="mb-2" />

        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          enableReinitialize={true}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            setSubmitting,
            setFieldValue,
            resetForm
          }) => (
            <form className="p-4" onSubmit={handleSubmit} autoComplete="off">
              <Grid container spacing={6}>
                <Grid item lg={6} md={6} sm={12} xs={12}>



                <Button className="mb-4 w-full" variant="outlined" size="small" onClick={handleRightClick}>
                 <span style={{textAlign:'left'}}>
                 Choose Expenses Category
                  <Menu
        open={!!menuPosition}
        onClose={() => setMenuPosition(null)}
        anchorReference="anchorPosition"
        anchorPosition={menuPosition}

      >          <MenuItem onClick={e=>Addnewsubcat(null)}>
                  <Icon align="left" >add</Icon>Add Expenses Category
                  </MenuItem> 
                   <Menu1 data={cat} >
                   
                    </Menu1> 
          
          </Menu>
          </span>
        
          </Button>
       


                {accountstatus &&(
                 <span>
                <TextField
                    className="mb-4 w-full"
                    label="Payment Account"
                    name="payment_account_name"
                    size="small"
                    variant="outlined"
                    autoComplete="none"
                    value={payment_account_name}
                    // onChange={e => setpayment_account_id(e.target.value)}
                  />
                {field.map((item, index) => {
                   
                return (
                  <span>
                 {item.type==="file" &&(
                   <div>
                   <label htmlFor="upload-multiple-file" >
                   {item.name}
                 </label>
                 <TextField
                  //  className="hidden"
                  className="mb-4 w-full"
                   onChange={e=>handleFileSelect(e,item.id)}
                   id="upload-multiple-file"
                   type="file"
                   variant="outlined"
                   size="small"
                   autoComplete="none"
                   required
                  //  label={item.name}
                  //  value={item.name}
                 
                   
                 />

                 {close && (
                  <span>
                     {files.map((items, index) => {
                     
                       return(
                        <span>
                {items.progress=== item.id &&
                (
                  <span>
                <img src={items.src} width="50px" height="50px"/>
                 <Icon className="bg-error"
                        onClick={() => handleField_Fileremove(index)}>cancel</Icon>
                  </span>
                )}
                        </span>
                       )}
                     )}
                 </span>
                  )} 
                 </div>   
                 )}
                   {item.type==="text" && (<TextField
                    className="mb-4 w-full"
                    label={item.name}
                    name="payment_account_id"
                    size="small"
                    variant="outlined"
                    name={item.name}
                    value={item.text}
                    autoComplete="none"
                    onChange={(e) => {
                      handleComment(e, item,item.id); 
                    }}
                    required
                    // onChange={(event) => handleIvoiceListChange(event, index)}
                  />)}
                  {item.type==="date" && (<MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      className="mb-4 w-full"
                      margin="none"
                      label={item.name}
                      inputVariant="outlined"
                      name="date"
                      type="text"
                      size="small"
                      autoOk={false}
                      hintText="Portrait Dialog"
                      errorText="This is an error message."
                      value={item.date?item.date:null}
                      onChange={(e) => {
                        
                        handleCommentdate(e,item,item.id); 
                      }}
                      format="MMMM dd, yyyy"
                      required
                      // onChange={handleIvoiceListChange}
                    />
                  </MuiPickersUtilsProvider>
                  )}
                  </span>
                  )}
                )}
                  </span>
                  )
                }


                  <TextField
                    className="mb-4 w-full"
                    label="Paid To"
                    name="firstName"
                    size="small"
                    variant="outlined"
                    autoComplete="none"
                    value={paid_to}
                    onChange={e => setpaid_to(e.target.value)}
                  />



          <CurrencyTextField
                    className="mb-4 w-full"
                    label="Amount"
                    name="Amount"
                    size="small"
                    variant="outlined"
                    value={values.amount}
                    currencySymbol="SAR"
                    autoComplete="none"
                    onChange={(event, value)=> setamount(value)}
                  />




                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      className="mb-4 w-full"
                      margin="none"
                      label="Payment Date"
                      inputVariant="outlined"
                      type="text"
                      size="small"
                      autoOk={true}
                      value={paid_date}
                      format="MMMM dd, yyyy"
                      onChange={handleDateChange}
                    />
                  </MuiPickersUtilsProvider>
                </Grid>



                <Grid item lg={6} md={6} sm={12} xs={12}>
                  {/* <TextField
                    className="mb-4 w-full"
                    label="Payment Account"
                    name="email"
                    size="small"
                    type="text"
                    variant="outlined"
                    value={payment_account_id}
                    onClick={handleRightClick}
                   
                    select
                    
                  >
                      choose categories */}
                    {role==="SA"?(<TextField
                    className="mb-4 w-full"
                    label="Paid By"
                    name="firstName"
                    size="small"
                    variant="outlined"
                    value={paid_by}
                    autoComplete="off"
                    select
                    onChange={e => setpaid_by(e.target.value)}
                  >
                    {/* <MenuItem>
                    {/* <Button
                        
                          onClick={() => {
                            pushData();
                          }}
                        
                    >
                      <Icon>add</Icon>New
                    </Button> */}
                   {payment_account.map((item, ind) => (
                      <MenuItem value={item.id} key={item}>
                        {item.name}
                      </MenuItem>
                    ))}
                    {/* </MenuItem> */}
                  </TextField>):(<TextField
                    className="mb-4 w-full"
                    label="Paid By"
                    name="firstName"
                    size="small"
                    variant="outlined"
                    value={localStorage.getItem('user_name')}
                    autoComplete="off"
                    selected
                  >
                   {payment_account.map((item, ind) => (
                      <MenuItem value={item.id} key={item}>
                        {item.name}
                      </MenuItem>
                    ))} 
                  </TextField>)}
                  {((paid_by === 11)||(paid_by === 12)) &&(<TextField
                    className="mb-4 w-full"
                    label="Reference Number"
                    name="firstName"
                    size="small"
                    variant="outlined"
                    value={bank_ref_no}
                    autoComplete="none"
                    onChange={e => setbank_ref_no(e.target.value)}
                  >
                    </TextField>)
                  }
                  <label for="myfile">Upload Reference Bill :</label>
                  <TextField
                  className="mb-4 w-full"
                   onChange={e=> handlebillSelect(e)}
                   id="upload-multiple-file"
                   type="file"
                   label=""
                   variant="outlined"
                   autoComplete="none"
                   size="small"
                  
                   
                 />
                 {/* <div
                    className={clsx({
                      "border-radius-4 h-160 w-full flex justify-center items-center cursor-pointer mb-4": true,
                      [classes.dropZone]: true,
                      "bg-light-gray": !isDragActive,
                      "bg-gray": isDragActive,
                    })}
                    {...getRootProps()}
                    onChange={(e)=> handlebillSelect(e)}
                  >
                     <input type="file" hidden/>
                    <div className="flex-column items-center" >
                   
                      <Icon >
                      file_upload
                      
                      </Icon>
                      <img src={ref_billno} ></img>
                      {/* {imageList.length ? (
                        <span>{imageList.length} images were selected</span>
                      ) : (
                        <span>Drop product images</span>
                      )} */}
                    {/* </div>
                  </div> */}
                  {/* <div
                    className={clsx({
                      "border-radius-4 h-160 w-full flex justify-center items-center cursor-pointer mb-4": true,
                      [classes.dropZone]: true,
                      "bg-light-gray": !isDragActive,
                      "bg-gray": isDragActive,
                    })}
                    {...getRootProps()}
                    onChange={(e)=> handlebillSelect(e)}
                  >
                  <div className="flex-column items-center" >
                  {!ref_billno?(<Icon
  variant="contained"
  component="label"
  onChange={(event) => handlebillSelect(event)}
>
file_upload
  <input
    type="file"
    hidden
  />
</Icon>):<><img src={ref_billno}  /><Icon color="error">close</Icon></>}
</div>
</div> */}
                
                  
                 <TextField
                    className="mb-4 w-full"
                    label="Referrence Bill No"
                    name="website"
                    size="small"
                    type="text"
                    variant="outlined"
                    autoComplete="none"
                    value={referrence_bill_no}
                    onChange={e => setreferrence_bill_no(e.target.value)}
                  />


{((paid_by === 11) ||(paid_by === 12)) &&( 
  <span>
  <label for="myfile">Upload Bank Slip :</label>
<TextField
                  className="mb-4 w-full"
                   onChange={e=>handlebankSelect(e)}
                   id="upload-multiple-file"
                   type="file"
                   label=""
                   variant="outlined"
                   autoComplete="none"
                   size="small"
                  
                   
                 />
                 </span>)}
         
                    {/* <MenuItem onClick={() => {
                      setShouldOpenEditorDialog(true);
                    }}>

                      <Icon>add</Icon>New

               </MenuItem>
                    {accounttype.map((item, ind) => (
                      <MenuItem value={item.id} key={item}>
                        {item.name}
                        <NestedMenuItem onClick={() => {
                          setShouldOpenEditorDialog(true);
                        }}>
                           <MenuItem >Sub-Sub-Button 1</MenuItem>
                            <MenuItem >Sub-Sub-Button 2</MenuItem>
                    </NestedMenuItem>
                      </MenuItem>
                    ))} */}

                  {/* </TextField> */}
                




                  <TextField
                    className="mb-4 w-full"
                    label="Description"
                    name="workPhone"
                    size="small"
                    variant="outlined"
                    value={description}
                    autoComplete="Disabled"
                    onChange={e => setdescription(e.target.value)}
                  />




                  

                  <FormLabel component="legend" labelPlacement="start">Tax paid?</FormLabel>
                  <RadioGroup
                    className="mb-4"
                    // value={gender || ""}
                    name="gender"
                    onChange={handleChange}
                    row
                  >

                    <FormControlLabel
                      value="yes"
                      control={<Radio color="secondary" />}
                      label="Yes"
                      onChange={() => settax(true)
                      }
                      labelPlacement="end"
                    />
                    <FormControlLabel
                      value="no"
                      control={<Radio color="secondary" />}
                      label="No"
                      onChange={() => settax(false)
                      }
                      labelPlacement="end"
                    />   {tax && (
                      <CurrencyTextField
                        // style={{ width: '430px' }}
                        label="Tax Amount"
                        name="website"
                        size="small"
                        type="text"
                        variant="outlined"
                        fullWidth
                        value={taxamount}
                        currencySymbol="SAR"
                        onChange={(event, value)=> settaxamount(value)}
                      />
                    )}

                  </RadioGroup>
                  {/* <p className="mt-0 mb-1">
          What kind of property are you interested in?
        </p> */}
        {tax&&(<div className="mb-4">
            <FormControlLabel
              style={{fontWeight:1000}}
              className="block h-32"
              control={<Checkbox />}
              label="Is company name mentioned in invoice?"
              value={company}
              onChange={e => setcompany(!company)}
            />
        </div>)}
        {/* {company&& (
                      <TextField
                        // style={{ width: '430px' }}
                        label="Company Name"
                        name="website"
                        size="small"
                        type="text"
                        variant="outlined"
                        fullWidth
                        value={company_name}
                        onChange={e => setcompany_name(e.target.value)}
                      />
                    )} */}



                </Grid>
              </Grid>



              <div className="mt-6">
                <Button color="primary" variant="outlined" type="submit">
                  <Icon>save</Icon> Save
                </Button>
              </div>
            </form>

          )}
        </Formik>
      </Card>
    </div>
  );
};

const salutationList = ["Mr.", "Mrs.", "Ms.", "Miss.", "Dr."];
const tabList = ["Other Details", "Address", "Contact Persons"];

const initialValues = {
  customerType: "",
};

export default CustomerForm;
