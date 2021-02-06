import React, { useState, useEffect, useRef } from "react";
import { Formik } from "formik";
import axios from "axios";
import moment from "moment";
import history from "history.js";
import url, { getrfq,getVendorList } from "../../invoice/InvoiceService"



// import { Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Grid,
  Card,
  Divider,
  TextField,
  MenuItem,
  Icon,
  Button,
  Fab
} from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import InvoiceItemTable from "./Rfqformtable";
import { calculateAmount, getCustomerList } from "./Rfqformservice";
import { Breadcrumb, MatxProgressBar } from "matx";
import Swal from "sweetalert2";
import ImageUploading from "react-images-uploading";
import { values } from "lodash";


// { ImageUploadingPropsType, ImageListType, ImageType } is type for typescript
//image uploading limit
const maxNumber = 3;

const InvoiceForm = ({ }) => {
  const formData = new FormData();
  const arr = [];
  const onChange = (imageList) => {
    // data for submit
    //Getting total number of images
    // console.log(imageList)
    var images = imageList.length
    // console.log(imageList)
    // Create an object of formData 
    // const formData = new FormData();
    // console.log(imageList)


    //Saving multiple images in formadta varibale
    for (var a = 0; a < images; a++) {
      formData.append(
        "myFile" + a,
        imageList[a].file,
        imageList[a].file.name
      );

    }
    for (const iterator of imageList) {
      arr.push({
        file: iterator,
        uploading: false,
        error: false,
        progress: 0,
      });

    }

    // axios.post("http://localhost/file/controller/post.php", formData);
  };



  const [CustomerList, setCustomerList] = useState([]);
  const [CustomerName, setooptions] = useState([]);
  const [state, setState] = useState([]);
  const [inputValue, setInputValue] = useState(moment().format("YYYY-MM-DD"));
  const [date, setDate] = useState(new Date());
  const open = false;
  const [files, setFiles] = useState([]);
  const [rfqfiles, setrfqFiles] = useState([]);
  const [message, setmessage] = useState(false);
  const [queProgress, setQueProgress] = useState(0);
  const [dargClass, setDragClass] = useState("");
  const [status, setstatus] = useState(false);
  const [contactstatus, setcontactstatus] = useState(false);
  const [rfqstatus, setrfqstatus] = useState(false);
  const [customercontact, setcustomercontact] = useState([]);
  const el = useRef();
  var count=1;
  var sum=0;
  let listrfq = [];


  let isEmpty = !!!files.length;
  const handleSingleRemove = (index) => {
    let tempList = [...files];
    tempList.splice(index, 1);
    setFiles([...tempList]);
  };
  const handleAllRemove = () => {
    setFiles([]);
    setQueProgress(0);
  };
  const uploadAllFile = () => {
    let allFiles = [];

    files.map((item) => {
      allFiles.push({
        ...item,

      });
      return item;
    });
    setFiles([...allFiles]);
    // console.log(files)
    const config = {
      headers: {
        "content-type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*",
      },
    };
    
    setQueProgress(35);
  };

  const handleSingleCancel = (index) => {
    let allFiles = [...files];
    let file = files[index];

    allFiles[index] = { ...file, uploading: false, error: true };

    setFiles([...allFiles]);
  };
  const uploadSingleFile = (index) => {
    let allFiles = [...files];
    let file = files[index];

    allFiles[index] = { ...file, uploading: true, error: false };

    setFiles([...allFiles]);
  };
  const handleFileSelect = (event) => {
    let files = event.target.files;
    let filesd = event.target.files;
   
    

   
    for (var a = 0; a < files.length; a++) {
      formData.append(
        "myFile" + a,
        files[a],
        files[a].name,
      );

    
         
    }
    
  
  
    for (const iterator of filesd) {
      
      listrfq.push({
        file: iterator,
        uploading: false,
        error: false,
        progress: 0,
      });
 

     
 
    
  }
  // setrfq()
  


    // setstatus(true)
  };
  useEffect(() => {
    getVendorList().then(({ data }) => {
      setCustomerList(data);
      // console.log(data)

    });
  }, []);
  const calculateSubTotal = (itemList = []) => {
    let subTotal = 0;
    itemList.forEach((item) => {
      subTotal += calculateAmount(item);
    });

    return subTotal;
  };
  const setrfq= (event) => {
    
   
    axios.get(url+"parties/" + event.target.value).then(({ data }) => {
      setcustomercontact(data[0].contacts);
      
   

      setrfqstatus(true);
      
      
    });
  }

  const calculateTotal = (values) => {
    let total = 0;
    total += calculateSubTotal(values.items);
    total += values.shippingCharge || 0;
    total += values[values.otherField] || 0;

    return total;
  };

  const handleSubmit = async (values, { isSubmitting, resetForm }) => {
    const myObjStr = JSON.stringify(values);
    console.log(values)
    for (var pair of formData.entries()) {
      console.log(pair[0]+ ' - ' + pair[1]);
    }
    
    for (const [key, value] of Object.entries(values)) {
      // console.log(`${key}: ${value}`);
      let list = [];
      if (`${key}` === "rfq_details") {
        for (const iterator of values.rfq_details) {
          list.push({
            file: iterator,
          });
          // console.log(JSON.stringify(values.rfq_details))

          formData.append('tags', JSON.stringify(values.rfq_details));
        }
      }
      else {
        formData.append(`${key}`, `${value}`)
      }
    }




   
    const res = { ...values, arr }

    
    const config = {
      headers: {
        "content-type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*",
      },
    };
    if (values.rfq_details) {

    // axios.post('http://www.dataqueuesystems.com/amaco/amaco/php_file/controller/post.php',formData)

    axios.post('http://www.amacoerp.com/amaco/php_file/controller/post.php', formData)
        .then(function (response) {
          // console.log(response);

          Swal.fire({
            title: 'Success',
            type: 'success',
            icon: 'success',
            text: 'Data saved successfully.',
          });
          getrfq()
          // window.location.href = "/sales/rfq-form/rfqview"
          history.push("/sales/rfq-form/rfqview")
        })

        .catch(function (error) {
          // console.log(error)
        })
      resetForm({ values: '' })
    }
    else {

      setmessage(true)
    }

  };

  return (
    <div className="m-sm-30">
      <div className="mb-sm-30">
        <Breadcrumb
          routeSegments={[
            { name: "View", path: "/sales/rfq-form/rfqview" },
            { name: "RFQ" },
          ]}
        />
      </div>

      <Card elevation={3}>
        <div className="flex p-4">
          <h4 className="m-0">New RFQ</h4>
        </div>
        <Divider className="mb-2" />

        <Formik
          className=".bg-green"
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
            <form className="p-4" onSubmit={handleSubmit} encType="multipart/form-data">
              <Grid container spacing={3} alignItems="center">
                {/* <Grid item md={2} sm={4} xs={12}>
                                    customer name
                                    </Grid> */}
                <Grid item xs={6}>
                <div className="flex justify-between">
                  <div className="flex">
                  <TextField
                    
                    label="Supplier Name"
                    style={{minWidth:200,maxWidth:'250px'}}
                    name="party_id"
                    size="small"
                    variant="outlined"
                    select
                    
                    value={values.CustomerList}
                    // onChange={handleChange}
                    onClick={(event)=>setrfq(event)}
                    required
                  >
                    <MenuItem onClick={() => {
                          history.push("/party/addparty");
                        }}>
                      
                        <Icon>add</Icon>new
                {/* </Button> */}
                    </MenuItem>
                    {CustomerList.map((item) => (
                      <MenuItem value={item.id} key={item.id}>
                        {item.firm_name}
                      </MenuItem>
                    ))}
                  </TextField>
                  
                  </div>
                  </div>

                </Grid>
                <Grid item xs>

                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      className="m-2"
                      margin="none"
                      label="RFQ Date"
                      inputVariant="outlined"
                      type="text"
                      size="small"
                      selected={values.requested_date}
                      value={values.requested_date}
                      onChange={(date) => {
                        setFieldValue("requested_date", moment(date).format('YYYY-MM-DD'))
                        // return date
                      }}
                    />
                  </MuiPickersUtilsProvider>



                </Grid>
                {/* <Grid item md={2}>
                                    Due date
                                    </Grid> */}
                <Grid item xs>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      className="m-2"
                      margin="none"
                      label="Bid Closing Date"
                      inputVariant="outlined"
                      type="text"
                      size="small"
                      autoOk={true}
                      value={values.require_date}
                      onChange={(date) => setFieldValue("require_date", moment(date).format('YYYY-MM-DD'))}
                    />
                  </MuiPickersUtilsProvider>



                </Grid>
                <Grid item xs={4}>
                <div className="flex">
                {rfqstatus &&
                  <TextField
                    
                    label="Contact Person"
                    style={{minWidth:200,maxWidth:'250px'}}
                    name="party_id"
                    size="small"
                    variant="outlined"
                    select
                    value={values.contact_id}
                    onChange={handleChange}
                    required
                   
                  >
                    
                    {customercontact.map((item) => (
                      <MenuItem value={item.id} key={item.id}>
                        {item.fname}
                      </MenuItem>
                    ))}

                  </TextField>
                  }
                  </div>
                  </Grid>





                <Grid item xs={12}>
                  <Divider />
                </Grid>
              </Grid>
              


              <div className="mb-8">
                <InvoiceItemTable
                  values={values}
                  setFieldValue={setFieldValue}
                  handleChange={handleChange}

                />
              </div>
              {message && (
                <h6 style={{ color: 'red' }}>Please Enter RFQ Details</h6>
              )}
              <div className="mt-6 px-4 mb-5 flex items-center justify-between">

                <label htmlFor="upload-multiple-file">
                  <Button
                    className="capitalize"
                    color="primary"
                    component="span"
                    variant="contained"
                    size="small"
                  >

                    <Icon className="pr-8">cloud_upload</Icon>
                    <span>Attach File</span>

                  </Button>
                </label>
                <input
                  className="hidden"
                  onChange={handleFileSelect}
                  id="upload-multiple-file"
                  ref={el}
                  type="file"
                  multiple
                  name="myFile[]"
                />

                {/* <ImageUploading
                  onChange={onChange}
                  maxNumber={maxNumber}
                  multiple
                >
                  {({ imageList, onImageUpload }) => (
                    // write your building UI
                    <div className="imageuploader">
                      <div className="mainBtns">
                        <Button className="mt-4"
                          color="primary"
                          variant="contained"
                          size="small" onClick={onImageUpload}>Attach File</Button>

                      </div>
                      {imageList.map((image) => (
                        <div className="imagecontainer" key={image.key}>
                          <img src={image.dataURL} />

                        </div>
                      ))}
                    </div>
                  )}
                </ImageUploading>
                 */}

                {status && (
                  <span>
                    <Button
                      color="primary"
                      variant="contained"
                      size="small"
                      className="py-2"
                      onClick={handleAllRemove}
                    >
                      Remove All
              </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      disabled={isEmpty}
                      onClick={uploadAllFile}
                    >
                      Upload All
            </Button>
                  </span>
                )}
              </div>
              {status && (
                <Card className="mb-6" elevation={2}>
                  <div className="p-4">
                    <Grid
                      container
                      spacing={2}
                      justify="center"
                      alignItems="center"
                      direction="row"
                    >
                      {/* <Grid item lg={4} md={4}>
                        Name
              </Grid>
                      <Grid item lg={1} md={1}>
                        Size
              </Grid> */}
                      {/* <Grid item lg={2} md={2}>
                Progress
              </Grid>
              <Grid item lg={1} md={1}>
                Status
              </Grid>
              <Grid item lg={4} md={4}>
                Actions
              </Grid> */}
                    </Grid>
                  </div>
                  <Divider></Divider>
 
                  <p className="px-4">{sum} File Selected</p>} 

                  {rfqfiles.map((item, index) => {
                   
                  //  let { filerfq, uploading, error, progress } = item;
                    return (
                      <div className="px-4 py-4" key={item.file.name}>
                        <Grid
                          container
                          spacing={2}
                          justify="center"
                          alignItems="center"
                          direction="row"
                        >
                          <Grid item lg={4} md={4} sm={12} xs={12}>
                           {item.file.name} 
                          </Grid>
                          <Grid item lg={1} md={1} sm={12} xs={12}>
                           {(item.file.size / 1024 / 1024).toFixed(1)} MB 
                  </Grid>
                      
                        </Grid>
                      </div>
                    );
                  })}
                </Card>
              )}
              <div className="mt-8">
                <Button color="primary" variant="outlined" type="submit">
                  <Icon>save</Icon>Save
                                </Button>

              </div>
            </form>
          )}
        </Formik>
      </Card>
    </div>
  );
};

const paymentTermList = [
  "NET 15",
  "NET 30",
  "NET 45",
  "NET 60",
  "Due end of the month",
  "Due on receive",
];

// const customerList = [
//     "customer 1",
//     "customer 2",
//     "customer 3",
//     "customer 4",
//     "customer 5",
//     "customer 6",
//     "customer 7",
//     "customer 8",
// ];

const initialValues = {


};

export default InvoiceForm;
