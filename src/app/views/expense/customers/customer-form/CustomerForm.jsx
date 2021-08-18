import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import Swal from "sweetalert2";
import NestedMenuItem from "material-ui-nested-menu-item";
import CurrencyTextField from "@unicef/material-ui-currency-textfield";
import history from "history.js";
// import { useDropzone } from "react-dropzone";
// import clsx from "clsx";
import axios from "axios";
import moment from "moment";
// import ImageZoom from "react-medium-image-zoom";
import {
  Grid,
  RadioGroup,
  FormControlLabel,
  Radio,
  Card,
  Divider,
  TextField,
  MenuItem,
  Button,
  Icon,
  Menu,
} from "@material-ui/core";
import { Breadcrumb, ConfirmationDialog } from "matx";

import MemberEditorDialog from "./paymentaccount";
import Addpaidaccount from "./Addpaidaccount";
import Adddivision from "./Adddivision";

import MemberEditorDialog1 from "./AddField";
import Checkbox from "@material-ui/core/Checkbox";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import url, {
  getpaymentaccount,
} from "../../../../views/invoice/InvoiceService";
import FormLabel from "@material-ui/core/FormLabel";
// import { makeStyles } from "@material-ui/core/styles";

// const usestyles = makeStyles(({ palette, ...theme }) => ({
//   dropZone: {
//     transition: "all 350ms ease-in-out",
//     border: "2px dashed rgba(var(--body),0.3)",
//     "&:hover": {
//       background: "rgba(var(--body), 0.2) !important",
//     },
//   },
// }));
const role = localStorage.getItem("role");

const CustomerForm = () => {
 
  
  let formData = new FormData();

  const [created_by, setcreated_by] = useState(1);
  const [paid_date, setpaid_date] = useState(new Date());

  const [paid_by, setpaid_by] = useState("");
  const [paid_to, setpaid_to] = useState("");
  const [amount, setamount] = useState("");
  const [payment_account_id, setpayment_account_id] = useState("");
  const [payment_account_name, setpayment_account_name] = useState("");
  const [description, setdescription] = useState("");
  const [taxamount, settaxamount] = useState(0.0);
  const [referrence_bill_no, setreferrence_bill_no] = useState("");
  const [tax, settax] = useState(false);
  const [accounttype, setaccounttype] = useState([]);
  const [shouldOpenEditorDialog, setShouldOpenEditorDialog] = useState(false);
  const [shouldOpenEditorDialog1, setShouldOpenEditorDialog1] = useState(false);
  const [menuPosition, setMenuPosition] = useState(null);
  const [divPosition, setdivPosition] = useState(null);
  const [cat, setcat] = useState([]);
  const [field, setfield] = useState([]);
  const [catid, setcatid] = useState("");
  const [catname, setcatname] = useState("");
  const [index1, setindex1] = useState("");
  const [files, setFiles] = useState([]);
  const [file_path, setfile_path] = useState();
  const [payment_account, setpayment_account] = useState([]);
  const [accountstatus, setaccountstatus] = useState(false);
  const [close, setclose] = useState(false);
  const [list, setList] = useState([]);
  const [bank_ref_no, setbank_ref_no] = useState("");
  const [bank_slip, setbank_slip] = useState();
  const [ref_billno, setref_billno] = useState();
  const [company, setcompany] = useState(false);
  const [isAlive, setisAlive] = useState(false);
  const [billtype, setbilltype] = useState(false);
  const [payee, setpayee] = useState(false);
  const [payeename, setpayeename] = useState();
  const [div_id, setdiv_id] = useState(null);
  const [utilize_id, setutilize_id] = useState(null);
  const [div_name, setdiv_name] = useState(null);
  const [utilize_name, setutilize_name] = useState(null);
  const [divPositionutilize, setdivPositionutilize] = useState(null);
  const [division_account, setdivision_account] = useState([]);
  const [div_company, setdiv_company] = useState('');
  const [vatno, setvatno] = useState('');
  const [inv_no, setinv_no] = useState('');
  const [
    shouldOpenConfirmationDialogbox,
    setShouldOpenConfirmationDialogbox,
  ] = useState(false);
  const [
    DialogAdddivision,
    setDialogAdddivision,
  ] = useState(false);
  const handlebankSelect = (event, f) => {
    setclose(true);
    setindex1(f);
    setbank_slip(event.target.files[0]);
  };
  const handlebillSelect = (event, f) => {
    const src = URL.createObjectURL(event.target.files[0]);

    setfile_path(event.target.files[0]);
    event.target.files[0].type.split('/')[1]!=='pdf'&&setbilltype(true)
    console.log(event.target.files[0].type.split('/')[1]);
    setref_billno(src);
  };
  const deletebillSelect = (event, f) => {
    setbilltype(false)
    console.log(null);
    setref_billno(null);
  };
  const utilizedivisionation = (id,name) => {
    
    setutilize_id(id);
    setutilize_name(name);
    setdivPositionutilize(null)
  };
  const paidivisionation = (id,name) => {
    
    setdiv_id(id);
    setdiv_name(name);
    setdivPosition(null)
  };
  const adddiv =()=>{
    setDialogAdddivision(true);
    setdivPositionutilize(null);
    setdivPosition(null)

  }

  const handleFileSelect = (event, f) => {
    let files = event.target.files;

    setclose(true);
    setindex1(f);

    for (const iterator of files) {
      list.push({
        file: event.target.files[0],
        column_id: f,
        src: URL.createObjectURL(event.target.files[0]),
        progress: f,
      });
    }

    field.map((element, i) => {
      if (element.id === f) {
        element.file = event.target.files[0];
        element.column_id = f;
      }
    });

    setFiles(list);
  };

  const Menu1 = ({ data }) => {
    return (
      <li>
        {data.map((m, ind) => {
          return (
            <NestedMenuItem
              label={m.category.name}
              parentMenuOpen={handleItem}
              value="1"
              disableGutters={true}
              onClick={(e) =>
                searchcat(
                  m.sub_categories.length > 0,
                  m.category.name,
                  m.category.id
                )
              }
              style={{justifyContent: 'space-around'}}
              
            >
              
              <MenuItem
                onClick={(e) => Addnewsubcat(m.category.id, m.category.name)}
              >
                <Icon align="left">add</Icon> Add Subcategory
              </MenuItem>

              {m.sub_categories.length > 0 ? (
                <Menu1 data={m.sub_categories} />
              ) : (
                <MenuItem
                  onClick={(e) => AddField(m.category.id, m.category.name)}
                >
                  <Icon align="left">add</Icon> Add Field
                </MenuItem>
              )}
            </NestedMenuItem>
          );
        })}
      </li>
    );
  };

  const handleRightClick = (event: React.MouseEvent) => {
    if (menuPosition) {
      return;
    }
    event.preventDefault();
    setMenuPosition({
      top: event.pageY,
      left: event.pageX,
      
    });
  };

  const handleRight = (event: React.MouseEvent) => {
    if (divPosition) {
      return;
    }
    event.preventDefault();
    setdivPosition({
      top: event.pageY,
      left: event.pageX,
    });
  };
  const handlePostion = (event: React.MouseEvent) => {
    if (divPositionutilize) {
      return;
    }
    event.preventDefault();
    setdivPositionutilize({
      top: event.pageY,
      left: event.pageX,
    });
  };


  const searchcat = (event, name, i) => {
    if (event) {
      setaccountstatus(false);
    } else {
      url.get(`columns/${i}`).then(({ data }) => {
        setfield(data[0].column);
      });

      setaccountstatus(true);
      setpayment_account_id(i);
      setpayment_account_name(name);
      setMenuPosition(null);
    }
  };
  const Addnewsubcat = (i, n) => {
    setcatid(i);
    setcatname(n);
    setShouldOpenEditorDialog(true);
    setMenuPosition(null);
  };
  const AddField = (i, n) => {
    setcatid(i);
    setcatname(n);
    setShouldOpenEditorDialog1(true);
    setMenuPosition(null);
  };
  const handleItem = (e) => {
    setpayment_account_id(e);
  };

  const [shouldOpenConfirmationDialog, setShouldOpenConfirmationDialog] =
    useState(false);
  const handleDialogClose = () => {
    setShouldOpenEditorDialog(false);
    setisAlive(false);
  };
  const handleDialogDivisionClose = () => {
    setDialogAdddivision(false);
    setisAlive(false);
    setdivPositionutilize(false)
  };
  const [shouldOpenConfirmationDialog1, setShouldOpenConfirmationDialog1] =
    useState(false);
  const handleDialogClose1 = () => {
    setShouldOpenEditorDialog1(false);
    setisAlive(false);
  };
  const handleDialogClosepayee = () => {
    setShouldOpenConfirmationDialogbox(false);
    setisAlive(false);
  };

  useEffect(() => {
    getpaymentaccount().then(({ data }) => {
      setaccounttype(data);
    });
    axios
      .get(
        "http://www.dataqueuesystems.com/amaco/amaco/php_file/controller/post.php"
      )
      .then(({ data }) => {
        console.log(data);
      });

    if (localStorage.getItem("role") !== "SA") {
      setpaid_by(localStorage.getItem("user_id"));
    }
    url.get("account-categories").then(({ data }) => {
      setcat(data);
    });
    url.get("payment-account").then(({ data }) => {
      setpayment_account(data);
    });
    url.get("division").then(({ data }) => {
      setdivision_account(data);
    });
   
    return setisAlive(true);
  }, [isAlive]);

  const resetform = () => {
    setpayment_account_name("");
    setreferrence_bill_no('')
    setpaid_by('')
    setpaid_date(new Date())
    setpaid_to('')
    setdescription('')
    settax(false)
    settaxamount('')
    setcompany(false)
    setref_billno('')
    setaccountstatus(false);
  };

  const handleSubmit = async (values, { isSubmitting, resetForm }) => {
    const newItem = new FormData();
    for (const key of Object.keys(files)) {
      newItem.append("item", files[key].file);
    }
    if (tax) {
      formData.append("tax", (parseFloat(amount)*15)/(100+15).toFixed(2));
      formData.append("company_name", company);
    }
    formData.append("paid_date", paid_date?moment(paid_date).format('Y-MM-DD'):'');
    formData.append("referrence_bill_no", referrence_bill_no);
    formData.append("amount", parseFloat(amount).toFixed(2));
    formData.append("paid_to", paid_to);
    formData.append("description", description);
    formData.append("created_by", created_by);
    formData.append("account_category_id", payment_account_id);

    formData.append("payment_account_id", paid_by);
    formData.append("created_by", created_by);
    formData.append("payeename",payeename)
    formData.append("status", "new");
    formData.append("data", JSON.stringify(field));
    formData.append("bank_ref_no", bank_ref_no);
    formData.append("bank_slip", bank_slip);
    formData.append("file_path", file_path);
    formData.append("company", div_company?div_company:'');
    formData.append("div_id", div_id);
    formData.append("utilize_div_id",utilize_id);

    formData.append("vatno", vatno?vatno:'');
    formData.append("inv_no", inv_no?inv_no:'');

    files.map((answer, i) => {
      formData.append(`file${answer.column_id}`, answer.file);
    });
    console.log(files);

    url
      .post("expense", formData)
      .then(function (response) {
        console.log(response);
        Swal.fire({
          title: "Success",
          type: "success",
          icon: "success",
          text: "Data saved successfully.",
        }).then((result)=>{
          history.push(`/expenseview`);
        });
        
      })
      .catch(function (error) {});
  };

  const handleField_Fileremove = (index) => {
    let tempList = [...files];
    tempList.map((element, i) => {
      let sum = 0;

      if (index === i) {
        element["file"] = null;
        element["progress"] = null;
      }
    });
    setFiles([...tempList]);
  };

  const handleDateChange = (date) => {
    setpaid_date(date);
  };

  const handleComment = (e, item, i) => {
    e.preventDefault();
    let result = field; // copy state
    result = result.map((el) => {
      // map array to replace the old comment with the new one
      if (el.name === item.name) {
        el.text = e.target.value;
        el.column_id = i;
      }
      return el;
    });
    setfield(result);

    // set state with new comment
  };
  const handleCommentdate = (e, item, i) => {
    let result = field; // copy state
    result = result.map((el) => {
      // map array to replace the old comment with the new one
      if (el.name === item.name) {
        el.date = e;
        el.column_id = i;
      } else {
        el.date = new Date();
        el.column_id = i;
      }
      return el;
    });
    setfield(result);
    console.log(field);
    // set state with new comment
  };

  return (
    <div className="m-sm-30">
      <div className="mb-sm-30">
        <Breadcrumb
          routeSegments={[
            { name: "EXPENSE", path: "/expenseview" },
            { name: "EXPENSE ENTRY" },
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

{shouldOpenConfirmationDialogbox && (
        <Addpaidaccount
          // handleClose={handleDialogClose}
          open={shouldOpenConfirmationDialogbox}
          paymentaccount={setpayment_account}
          handleClose={handleDialogClosepayee}
        

        />
      )}
      {DialogAdddivision && (
        <Adddivision
          handleClose={handleDialogDivisionClose}
          open={DialogAdddivision}
          paymentaccount={setpayment_account}
          division={setdivision_account}
         
        

        />
      )}
      

      <Card elevation={3}>
        <div className="flex px-4">
          <h4 className="m-0 mr-4 mt-4 mb-4">EXPENSE ENTRY</h4>
          {/* <Button
                    className="mb-4 ml-4"
                    variant="outlined"
                    size="small"
                    onClick={handleRight}
                  >
                    <span style={{ textAlign: "left" }}>
                      Account Division
                      <Menu
                        open={!!divPosition}
                        onClose={() => setdivPosition(null)}
                        anchorReference="anchorPosition"
                        anchorPosition={divPosition}
                      >
                        
                        
                        {division_account.map((items, index) => (
                          (<MenuItem id={items.id} onClick={(e) => setdiv_id(items.id,setdivPosition(null))}>{items.name} </MenuItem>)
                        ))}
                        
                      </Menu>
                    </span>
                  </Button> */}
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
            resetForm,
          }) => (
            <form className="p-4" onSubmit={handleSubmit} autoComplete="off">
              <Grid container spacing={6}>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                <div className="px-0 flex justify-between">
                  <div>
                <Button
                    className="mb-4 ml-0"
                    variant="outlined"
                    size="small"
                    onClick={handlePostion}
                    style={{width:320,height:37}}
                  >
                    <span style={{ textAlign: "left" }}>
                      Utilized Division
                      <Menu
                        open={!!divPositionutilize}
                        onClose={() => setdivPositionutilize(null)}
                        anchorReference="anchorPosition"
                        anchorPosition={divPositionutilize}
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'center',
                        }}
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'center',
                        }}
                      >
                        
                        <MenuItem  onClick={()=>adddiv()}>
                      <Icon >
                          add
                      </Icon>Add New
                      </MenuItem>
                        {division_account.map((items, index) => (
                          (<MenuItem id={items.id} onClick={(e) => utilizedivisionation(items.id,items.name)}>{items.name} </MenuItem>)
                        ))}
                        
                      </Menu>
                    </span>
                  </Button>
                  </div>
                  <div>
                  <Button
                    className="px-4 mb-4 w-full"
                    variant="outlined"
                    size="small"
                    onClick={handleRightClick}
                    style={{width:320,height:37}}
                  >
                    <span style={{ textAlign: "left" }}>
                      Expenses Category
                      <Menu
                        open={!!menuPosition}
                        onClose={() => setMenuPosition(null)}
                        anchorReference="anchorPosition"
                        anchorPosition={menuPosition}
                      >
                        {" "}
                        <MenuItem onClick={(e) => Addnewsubcat(null)}>
                          <Icon align="left">add</Icon>Add Expenses Category
                        </MenuItem>
                        <Menu1 data={cat} inputProps={{ style: {justifyContent: 'space-between'} }}
                        style={{justifyContent: 'space-between'}}></Menu1>
                      </Menu>
                    </span>
                  </Button>
                  </div>
                  </div>

                
                    <span>
                      <div className="px-0 flex justify-between">
                      <div>
                      {utilize_id&&(<TextField
                        className="mb-4 w-full"
                        label="Utilized Division"
                        name="payment_account_name"
                        inputProps={{style: {textTransform: 'capitalize'}}}
                        size="small"
                        variant="outlined"
                        autoComplete="none"
                        style={{width:320}}
                        value={utilize_name}
                        required
                        // onChange={e => setpayment_account_id(e.target.value)}
                      />)}
                      </div>
                      {accountstatus && (<div>
                      <TextField
                        className="mb-4 w-full "
                        label="Expense category"
                        name="payment_account_name"
                        inputProps={{style: {textTransform: 'capitalize'}}}
                        size="small"
                        variant="outlined"
                        autoComplete="none"
                        style={{width:320}}
                        value={payment_account_name}
                        required
                        // onChange={e => setpayment_account_id(e.target.value)}
                      />
                      </div>)}
                      </div>
                      {field.map((item, index) => {
                        return (
                          <span>
                            {item.type === "file" && (
                              <div>
                                <label htmlFor="upload-multiple-file">
                                  {item.name}
                                </label>
                                <TextField
                                  //  className="hidden"
                                  className="mb-4 w-full"
                                  onChange={(e) => handleFileSelect(e, item.id)}
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
                                      return (
                                        <span>
                                          {items.progress === item.id && (
                                            <span>
                                              <img
                                                src={items.src}
                                                width="50px"
                                                height="50px"
                                              />
                                              <Icon
                                                className="bg-error"
                                                onClick={() =>
                                                  handleField_Fileremove(index)
                                                }
                                              >
                                                cancel
                                              </Icon>
                                            </span>
                                          )}
                                        </span>
                                      );
                                    })}
                                  </span>
                                )}
                              </div>
                            )}
                            {item.type === "text" && (
                              <TextField
                                className="mb-4 w-full"
                                label={item.name}
                                name="payment_account_id"
                                size="small"
                                variant="outlined"
                                inputProps={{style: {textTransform: 'capitalize'}}}
                                name={item.name}
                                value={item.text}
                                autoComplete="none"
                                onChange={(e) => {
                                  handleComment(e, item, item.id);
                                }}
                                required
                                // onChange={(event) => handleIvoiceListChange(event, index)}
                              />
                            )}
                            {item.type === "date" && (
                              <MuiPickersUtilsProvider utils={DateFnsUtils}>
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
                                  value={item.date ? item.date : null}
                                  onChange={(e) => {
                                    handleCommentdate(e, item, item.id);
                                  }}
                                  format="MMMM dd, yyyy"
                                  required
                                  // onChange={handleIvoiceListChange}
                                />
                              </MuiPickersUtilsProvider>
                            )}
                          </span>
                        );
                      })}
                    </span>
                  

                  <TextField
                    className="mb-4 w-full"
                    label="Paid To"
                    inputProps={{ style: { textTransform: "capitalize" } }}
                    name="firstName"
                    size="small"
                    variant="outlined"
                    autoComplete="none"
                    value={paid_to}
                    onChange={(e) => setpaid_to(e.target.value)}
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
                    required
                    onChange={(event, value) => setamount(value)}
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
                  <div className="px-0 flex justify-between">
                  <div>
                <Button
                    className="mb-4 w-full"
                    variant="outlined"
                    size="small"
                    onClick={handleRight}
                    style={{width:320,height:37}}
                  >
                    <span style={{ textAlign: "left" }}>
                      Paid Division
                      <Menu
                        open={!!divPosition}
                        onClose={() => setdivPosition(null)}
                        anchorReference="anchorPosition"
                        anchorPosition={divPosition}
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'center',
                        }}
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'center',
                        }}
                      >
                        
                        <MenuItem  onClick={()=>adddiv()}>
                      <Icon >
                          add
                      </Icon>Add New
                      </MenuItem>
                        {division_account.map((items, index) => (
                          (<MenuItem id={items.id} onClick={(e) => paidivisionation(items.id,items.name)}>{items.name} </MenuItem>)
                        ))}
                        
                      </Menu>
                    </span>
                  </Button>
                  </div>
                  <div>
                  {div_id&&(<TextField
                      className=" w-full"
                      label="Paid Division"
                      name="payeename"
                      size="small"
                      variant="outlined"
                      value={div_name}
                      inputProps={{style: {textTransform: 'capitalize'}}}
                      autoComplete="none"
                      style={{width:320}}
                      onChange={(e) => setdiv_name(e.target.value)}
                    ></TextField>)}
                  </div>
                  </div>
                  {role === "SA" ? (
                    <TextField
                      className="mb-4 w-full"
                      label="Paid Account"
                      style={{"text-transform": 'uppercase'}}
                      name="firstName"
                      size="small"
                      variant="outlined"
                      value={paid_by}
                      autoComplete="off"
                      select
                      required
                      onChange={(e) => setpaid_by(e.target.value)}
                    >
                      <MenuItem  onClick={()=>setShouldOpenConfirmationDialogbox(true)}>
                      <Icon >
                          add
                      </Icon>Add New
                      </MenuItem>
                      {payment_account.map((item, ind) => (
                       
                        <MenuItem value={item.id} key={item}  style={{"text-transform": 'uppercase'}}>
                          {item.name}
                        </MenuItem>
                        
                    
                      ))}
                      {/* </MenuItem> */}
                    </TextField>
                  ) : (
                    <TextField
                      className="mb-4 w-full"
                      label="Paid Account"
                      name="firstName"
                      size="small"
                      variant="outlined"
                      value={localStorage.getItem("user_name")}
                      autoComplete="off"
                      selected
                    >
                      <Button variant="outlined" color="primary" type="submit" className="py-2">
                    <Icon>save</Icon> Save
                  </Button>
                      {payment_account.map((item, ind) => (
                        <MenuItem value={item.id} key={item}>
                          {item.name}
                        </MenuItem>
                      ))}
                    </TextField>
                  )}
                  {payee&&(<TextField
                      className="mb-4 w-full"
                      label="Name"
                      name="payeename"
                      size="small"
                      variant="outlined"
                      inputProps={{style: {textTransform: 'capitalize'}}}
                      value={payeename}
                      autoComplete="none"
                      onChange={(e) => setpayeename(e.target.value)}
                    ></TextField>)}
                  {(paid_by === 11 || paid_by === 12) && (
                    <TextField
                      className="mb-4 w-full"
                      label="Reference Number"
                      name="firstName"
                      size="small"
                      variant="outlined"
                      value={bank_ref_no}
                      autoComplete="none"
                      onChange={(e) => setbank_ref_no(e.target.value)}
                    ></TextField>
                  )}
                  <label for="myfile">Upload Reference Bill :</label>
                  <TextField
                                  //  className="hidden"
                                  className="mb-4 w-full"
                                  id="upload-multiple-file"
                                  type="file"
                                  variant="outlined"
                                  size="small"
                                  autoComplete="none"
                                  onChange={(event) => handlebillSelect(event)}
                                  
                                  
                                />
                                
                                           {billtype&&(<span>
                                              <img
                                                src={ref_billno}
                                                width="50px"
                                                height="50px"
                                              />
                                              <Icon
                                                className="bg-error"
                                                onClick={() =>
                                                  deletebillSelect()
                                                }
                                              >
                                                cancel
                                              </Icon>
                                            </span>)}
                                      
                  {/* <div
                    className={clsx({
                      "border-radius-4 h-160 w-full flex justify-center items-center cursor-pointer mb-4": true,
                      [classes.dropZone]: true,
                      "bg-light-gray": !isDragActive,
                      "bg-gray": isDragActive,
                    })}
                    {...getRootProps()}
                    onChange={(e) => handlebillSelect(e)}
                  >
                    <div className="flex-column items-center">
                      {!ref_billno ? (
                        <Icon
                          variant="contained"
                          component="label"
                          onChange={(event) => handlebillSelect(event)}
                        >
                          file_upload
                          <input type="file" hidden />
                        </Icon>
                      ) : (
                        <>
                          <ImageZoom
                            image={{
                              src: `${ref_billno}`,
                              alt: "Golden Gate Bridge",
                              className: "img",
                              style: { width: "50em" },
                            }}
                            zoomImage={{
                              src: `${ref_billno}`,
                              alt: "Golden Gate Bridge",
                            }}
                          ></ImageZoom>
                          <Icon
                            color="error"
                            style={{ position: "absolute", marginTop: 200 }}
                            onClick={(e) => setref_billno("")}
                          >
                            delete
                          </Icon>
                        </>
                      )}
                    </div>
                  </div> */}

                  {/* <TextField
                    className="mb-4 w-full"
                    label="Referrence Bill No"
                    name="website"
                    size="small"
                    type="text"
                    variant="outlined"
                    autoComplete="none"
                    value={referrence_bill_no}
                    onChange={(e) => setreferrence_bill_no(e.target.value)}
                  /> */}

                  {(paid_by === 11 || paid_by === 12) && (
                    <span>
                      <label for="myfile">Upload Bank Slip :</label>
                      <TextField
                        className="mb-4 w-full"
                        onChange={(e) => handlebankSelect(e)}
                        id="upload-multiple-file"
                        type="file"
                        label=""
                        variant="outlined"
                        autoComplete="none"
                        size="small"
                      />
                    </span>
                  )}

                  <TextField
                    className="mb-4 w-full"
                    label="Description"
                    inputProps={{style: {textTransform: 'capitalize'}}}
                    name="workPhone"
                    size="small"
                    variant="outlined"
                    value={description}
                    inputProps={{ style: { textTransform: "capitalize" } }}
                    autoComplete="Disabled"
                    onChange={(e) => setdescription(e.target.value)}
                  />

                  <FormLabel component="legend" labelPlacement="start">
                    Tax paid?
                  </FormLabel>
                  <RadioGroup
                    className="mb-4"
                    name="gender"
                    onChange={handleChange}
                    row
                  >
                    <FormControlLabel
                      value="yes"
                      control={<Radio color="secondary" />}
                      label="Yes"
                      onChange={() => settax(true)}
                      labelPlacement="end"
                    />
                    <FormControlLabel
                      value="no"
                      control={<Radio color="secondary" />}
                      label="No"
                      onChange={() => settax(false)}
                      labelPlacement="end"
                    />{" "}
                    {tax && (
                      // <CurrencyTextField
                      //   label="Tax Amount"
                      //   name="website"
                      //   size="small"
                      //   type="text"
                      //   variant="outlined"
                      //   fullWidth
                      //   value={taxamount}
                      //   currencySymbol="SAR"
                      //   onChange={(event, value) => settaxamount(value)}
                      // />
                      <TextField
                    className="mb-4 w-full"
                    label="Company Name"
                    name="workPhone"
                    size="small"
                    variant="outlined"
                    value={div_company}
                    inputProps={{ style: { textTransform: "capitalize" } }}
                    autoComplete="Disabled"
                     onChange={(e) => setdiv_company(e.target.value)}
                  />)}
                  {tax && 
                  (<TextField
                    className="mb-4 w-full"
                    label="VAT Number"
                    name="workPhone"
                    type="text"
                    size="small"
                    variant="outlined"
                    value={vatno}
                    onChange={(e) => setvatno(vatno)}
                  />)}
                  {tax && 
                  (<TextField
                    className="mb-4 w-full"
                    label="Invoice Number"
                    name="workPhone"
                    size="small"
                    variant="outlined"
                    value={inv_no}
                    inputProps={{ style: { textTransform: "capitalize" } }}
                    autoComplete="Disabled"
                    onChange={(e) => setinv_no(e.target.value)}
                  />)}
                  </RadioGroup>

                  {tax && (
                    <div className="mb-4">
                      

                      <FormControlLabel
                        style={{ fontWeight: 1000 }}
                        className="block h-32"
                        control={<Checkbox />}
                        label={`I agree The above mentioned`}
                        // The above mentioned company name, invoice number & VAT number is as per the uploaded file.`}
                        value={company}
                        onChange={(e) => setcompany(!company)}
                      />
                      <label>Company name</label><br></br>
                      <label>Invoice Number</label><br></br>
                      <label>VAT Number is as per the uploaded file</label>
                      
                      
                    </div>
                  )}
                </Grid>
              </Grid>


              <div className="mt-6">
                <Button
                  color="primary"
                  variant="outlined"
                  type="submit"
                  className="mr-4 py-2"
                >
                  <Icon>save</Icon> SAVE
                </Button>
                <Button
                  className="mr-4 py-2"
                  color="secondary"
                  variant="outlined"
                  type="submit"
                  onClick={() => history.push("/expenseview")}
                >
                  <Icon>cancel</Icon>
                  <span className="pl-2 capitalize">CANCEL</span>
                </Button>

                <Button
                  color=".bg-green"
                  variant="outlined"
                  type="reset"
                  onClick={resetform}
                  className="mr-4 py-2"
                >
                  <Icon>loop</Icon>
                  <span className="pl-2 capitalize">RESET</span>
                </Button>
              </div>
            </form>
          )}
        </Formik>
      </Card>
    </div>
  );
};

const initialValues = {
  customerType: "",
};

export default CustomerForm;
