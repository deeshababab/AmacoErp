import React, { useState, useEffect } from "react";
import {
  Button,
  Radio,
  FormControl,
  FormControlLabel,
  Divider,
  RadioGroup,
  Grid,
  MenuItem,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TextField,
  Icon,
  Card,
  IconButton,
  Tooltip
} from "@material-ui/core";
import { format } from 'date-fns';
import Swal from "sweetalert2";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { getInvoiceById, addInvoice, updateInvoice } from "./InvoiceService";
import { useParams, useHistory,Link,Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { useCallback } from "react";
import axios from "axios";
import url, { getProductList } from "../invoice/InvoiceService";
import Select from 'react-select';
import dateFormat from 'dateformat';
import moment from "moment";
import { Breadcrumb, MatxProgressBar } from "matx";
import useSettings from '../../hooks/useSettings';

const useStyles = makeStyles(({ palette, ...theme }) => ({
  invoiceEditor: {
    "& h5": {
      fontSize: 15,
    },
  },
}));

const InvoiceEditor = ({ isNewInvoice, toggleInvoiceEditor }) => {
  const [isAlive, setIsAlive] = useState(true);
  const [state, setState] = useState(initialValues);
  const [rfq, setrfq] = useState([]);
  const [rdate, setrdate] = useState(new Date());
  const [ddate, setddate] = useState(new Date());
  const [cname, setcname] = useState([]);
  const [rfq_details, setrfqdetails] = useState([]);
  const [CustomerList, setCustomerList] = useState([]);
  const [ProductList, setProductList] = useState([]);
  const [listrfq, setlistrfq] = useState([]);
  const [files, setfiles] = useState([]);
  const history = useHistory();
  const { id } = useParams();
  const classes = useStyles();
  const { settings, updateSettings } = useSettings();
  const formData = new FormData()
  const updateSidebarMode = (sidebarSettings) => {
    if (sidebarSettings.mode == "close") {
      let activeLayoutSettingsName = settings.activeLayout + "Settings";
      let activeLayoutSettings = settings[activeLayoutSettingsName];
      updateSettings({
        ...settings,
        [activeLayoutSettingsName]: {
          ...activeLayoutSettings,
          leftSidebar: {
            ...activeLayoutSettings.leftSidebar,
            ...sidebarSettings,
          },
        },
      });
    }
    else {
      window.location.href = "../sales/rfq-form/rfqview"
      let activeLayoutSettingsName = settings.activeLayout + "Settings";
      let activeLayoutSettings = settings[activeLayoutSettingsName];
      updateSettings({
        ...settings,
        [activeLayoutSettingsName]: {
          ...activeLayoutSettings,
          leftSidebar: {
            ...activeLayoutSettings.leftSidebar,
            ...sidebarSettings,
          },
        },
      });

    }

  }


  // File Select 
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

  };

  const generateRandomId = useCallback(() => {
    let tempId = Math.random().toString();
    let id = tempId.substr(2, tempId.length - 1);
    setState((state) => ({ ...state, id }));
  }, []);

  const handleChange = (event) => {
    event.persist();
    console.log(event.target.value)
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSellerBuyerChange = (event, fieldName) => {
    event.persist();
    setState({
      ...state,
      [fieldName]: {
        ...state[fieldName],
        [event.target.name]: event.target.value,
      },
    });
  };

  const handleIvoiceListChange = (event, index) => {
    event.persist();

    let tempItemList = [...state.item];
    console.log(event.target.value)
    console.log(event.target.name)
    tempItemList.map((element, i) => {
      if (index === i) element[event.target.name] = event.target.value;

      return element;
    });


    setState({
      ...state,
      item: tempItemList,
    });
  };

  const addItemToInvoiceList = () => {
    let tempItemList = [...state.item];
    console.log(tempItemList)
    tempItemList.push({
      created_at: "",
      description: "",
      id: "",
      party: [],
      prices: [],
      product: [{
        name: ""
      }],
      product_id: "",
      product_name: "",
      quantity: "",
      updated_at: "2021-01-22T09:51:20.000000Z",

    });
    setState({
      ...state,
      item: tempItemList,
    });


  };

  const deleteItemFromInvoiceList = (index) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to Delete this RFQ Details!',
      icon: 'danger',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      icon: 'warning',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
    let tempItemList = [...state.item];
    tempItemList.splice(index, 1);
    
    setState({
      ...state,
      item: tempItemList,
    });
  }
  else if (result.dismiss === Swal.DismissReason.cancel) {
    Swal.fire(
      'Cancelled',
      'Your RFQ Details is safe :)',
      'error'
    )
  }
  })
  };

  const handleDateChange = (rdate) => {

    setrdate(moment(rdate).format("MMMM DD, YYYY"))

  };
  const Rfqpush = () => {

    updateSidebarMode({ mode: "close" })
    history.push(`/invoice/${id}`)

  };
  const handleRDateChange = (ddate) => {

    setddate(moment(ddate).format("MMMM DD, YYYY"))

  };
  const deleterfqfile = (id) => {

    
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this File!',
      icon: 'danger',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      icon: 'warning',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        axios.get(`http://www.amacoerp.com/amaco/php_file/controller/deleterfqfile.php?id=${id}`)
        // axios.get(`http://www.dataqueuesystems.com/amaco/amaco/php_file/controller/deleterfqfile.php?id=${id}`)
          .then(res => {


            Swal.fire(
              'Deleted!',
              'File has been deleted.',
              'success'
            )

          })
          getrfq()


        // For more information about handling dismissals please visit
        // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your File is safe :)',
          'error'
        )
      }
    })

  };
  const setproduct = (v, index) => {

    let tempItemList = [...state.item];

    tempItemList.map((element, i) => {
      if (index === i) {
        // element['name'] = v.value;
        element['product_id'] = v.target.value;
      }

      return element;
    });


    setState({
      ...state,
      item: tempItemList,
    });


  };

  const handleSubmit = () => {
    let arr = []
    setState({ ...state, loading: true });
    let tempState = { ...state };
    console.log(tempState.item)
    delete tempState.loading;
    arr.rfq = tempState.item
    arr.requested_date = rdate
    arr.require_date = ddate
    arr.rfqid = id


    const json = Object.assign({}, arr);
   
    console.log(arr.rfq.length)
    if(arr.rfq.length!==0)
    {
    formData.append('rfq', JSON.stringify(json))
    axios.post('http://www.amacoerp.com/amaco/php_file/controller/rfqupdate.php', formData)

    // axios.post('http://www.dataqueuesystems.com/amaco/amaco/php_file/controller/rfqupdate.php', formData)
    .then(({ data }) => {
        
      Swal.fire({
        title: 'Success',
        type: 'success',
        icon:'success',
        text: 'Data saved successfully.',
      })
      .then((result) => {
        updateSidebarMode({ mode: "close" })
          history.push(`/invoice/${id}`)
       
      })
        getrfq()
    })
      .catch(function (error) {
        console.log(error)
      })
    }
    else
    {
      Swal.fire({
        
        title: 'Warning',
        type: 'warning',
        icon: 'warning',
        text: 'Please Enter RFQ Details to Update :)',
      })
      getrfq()
    }


  };
  const getrfq =() =>{
    url.get("rfq/" + id).then(({ data }) => {
      setcname(data[0].party[0].firm_name)
      setrdate(moment(data[0].requested_date).format("MMMM DD, YYYY"))
      setfiles(data[0].files)

      setddate(moment(data[0].require_date).format("MMMM DD, YYYY"))
      // console.log(dateFormat(data[0].requested_date, "mmmm dS, yyyy"))
      console.log(moment(data[0].requested_date).format("MMMM DD, YYYY"))
      // console.log(moment(data[0].requested_date).format("MMMM dd, yyyy").toLocaleString())
      //  setrfqdetails(data[0].rfq_details)
      setState({
        ...state,
        item: data[0].rfq_details,
      });
      console.log(data[0].rfq_details)
    });

    url.get("products").then(({ data }) => {

      setProductList(data)
    })
  }
  const product = ProductList.map((guest, index) => {
    return {
      label: guest.name,
      value: guest.id,
      key: index,
      name: "name",
    }
  })

  useEffect(() => {



    url.get("rfq/" + id).then(({ data }) => {
      setcname(data[0].party[0].firm_name)
      setrdate(moment(data[0].requested_date).format("MMMM DD, YYYY"))
      setfiles(data[0].files)

      setddate(moment(data[0].require_date).format("MMMM DD, YYYY"))
      // console.log(dateFormat(data[0].requested_date, "mmmm dS, yyyy"))
      console.log(moment(data[0].requested_date).format("MMMM DD, YYYY"))
      // console.log(moment(data[0].requested_date).format("MMMM dd, yyyy").toLocaleString())
      //  setrfqdetails(data[0].rfq_details)
      setState({
        ...state,
        item: data[0].rfq_details,
      });
      console.log(data[0].rfq_details)
    });

    url.get("products").then(({ data }) => {

      setProductList(data)
    })
  }, [id, isNewInvoice, isAlive, generateRandomId]);
  const data = ProductList.map((guest, index) => {
    return {
      label: guest.name,
      value: guest.id,
      key: index
    }
  })


  let subTotalCost = 0;
  let {
    orderNo,
    buyer,
    seller,
    item: invoiceItemList = [],
    status,
    vat,
    date,
    currency,
    loading,
  } = state;


  return (
    <div className="m-sm-30">
      
      <div className="mb-sm-30">
        <Breadcrumb
          routeSegments={[
            { name: "RFQ", path: '../sales/rfq-form/rfqview' },
            { name: "RFQ View", path: `/invoice/${id}` },
            { name: "Update RFQ" },
          ]}
        />
      </div>
      <div className={clsx("invoice-viewer py-4", classes.invoiceEditor)}>
        <ValidatorForm onSubmit={handleSubmit} onError={(errors) => null}>
          <div className="viewer_actions px-4 flex justify-end">
            <div className="mb-6">
              <Button
                type="button"
                className="mr-4 py-2"
                variant="text"
                onClick={() => Rfqpush()}
              >
                Cancel
            </Button>
              <Button
                type="submit"
                className="py-2"
                variant="outlined"
                color="primary"
                disabled={loading}
              >
               <Icon>save</Icon> Save
            </Button>
            </div>
          </div>

          <div className="viewer__order-info px-4 mb-4 flex justify-between">
            <div>
              <h5 className="mb-2">Customer Name</h5>
              {/* <p className="mb-4">Order Number</p> */}
              <TextValidator
                label="Customer Name."
                type="text"
                size="small"
                variant="outlined"
                fullWidth
                name="cname"
                value={cname}
                onChange={handleChange}
                validators={["required"]}
                errorMessages={["this field is required"]}
              />

            </div>
            <div className="flex justify-between px-4 mb-4">
              <div className="flex">

                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    margin="none"
                    label="RFQ Date"
                    id="mui-pickers-date"
                    inputVariant="outlined"
                    type="text"
                    size="small"
                    fullWidth
                    autoOk={true}
                    value={rdate}
                    format="MMMM dd, yyyy"
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </MuiPickersUtilsProvider>

                {/* </MuiPickersUtilsProvider> */}

              </div>
              <div>

                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    margin="none"
                    className="ml-2"
                    id="mui-pickers-date"
                    label="Bit Closing Date"
                    inputVariant="outlined"
                    type="text"
                    autoOk={true}
                    variant="outlined"
                    value={ddate}
                    size="small"
                    fullWidth
                    format="MMMM dd, yyyy"
                    onChange={handleRDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </MuiPickersUtilsProvider>
              </div>
            </div>
          </div>

          <Divider />

          <Table className="mb-4">
            <TableHead>
              <TableRow className="bg-default">
                <TableCell className="pl-sm-24">#</TableCell>
                <TableCell className="px-0">Item Name</TableCell>

                <TableCell className="px-0">Quantity</TableCell>
                <TableCell className="px-0">description</TableCell>
                {/* <TableCell className="px-0">Cost</TableCell> */}
                <TableCell className="px-0">Action</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {invoiceItemList.map((item, index) => {

                const id = item.product[0].id
                console.log(item)
                return (
                  <TableRow key={index}>
                    <TableCell className="pl-sm-24 capitalize" align="left">
                      {index + 1}
                    </TableCell>

                    <TableCell className="pl-0 capitalize" align="left">
                      {/* <Select
                   className="mb-4 w-full"
                    name="name"
                    value={product.find(obj => obj.value === item.product[0].id)}
                    onChange={(event) => handleIvoiceListChange(event, index)}
                    options={product}
                  /> */}
                      {/* <TextValidator
                        label="Item Name"
                        variant="outlined"
                        size="small"
                        type="text"
                        name="name"
                        fullWidth
                        value={item ? item.product[0].name : null}
                        onChange={(event) => handleIvoiceListChange(event, index)}
                        
                      >

                      </TextValidator> */}
                      {/* <Select
                        menuPortalTarget={document.body}
                        menuPosition={'fixed'}
                        label="name"
                        name="name"
                        placeholder="Select Option"
                        value={data.find(obj => obj.value === id)} // set selected value
                        options={data}
                        onChange={e => setproduct(e, index)
                        }
                      /> */}
                      <TextValidator
                        label="Name"
                        type="text"
                        variant="outlined"
                        size="small"
                        name="product_id"
                        value={item.product_id}
                        onChange={(event) => setproduct(event, index)}
                        fullWidth
                        select

                      >
                      {ProductList.map((item) => (
                      <MenuItem value={item.id} key={item.id}>
                        {item.name}
                      </MenuItem>
                    ))}
                    </TextValidator>
                    
                    </TableCell>



                    <TableCell className="pl-0 capitalize" align="left">
                      <TextValidator
                        label="Quantity"
                        type="text"
                        variant="outlined"
                        size="small"
                        name="quantity"
                        value={item.quantity}
                        onChange={(event) => handleIvoiceListChange(event, index)}
                        fullWidth


                      />
                    </TableCell>
                    <TableCell className="pl-0 capitalize" align="left">
                      <TextValidator
                        label="Description"

                        type="text"
                        name="description"
                        fullWidth
                        variant="outlined"
                        size="small"
                        value={item ? item.description : null}
                        onChange={(event) => handleIvoiceListChange(event, index)}

                      />
                    </TableCell>

                    {/* <TableCell className="pl-0 capitalize" align="left">
                    {item.unit * item.price}
                  </TableCell> */}

                    <TableCell className="pl-0 capitalize" align="left">
                      <Button onClick={() => deleteItemFromInvoiceList(index)}>
                        <Icon color="error" fontSize="small">
                          delete
                      </Icon>
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
          <div className="flex justify-end px-4 mb-4">
            <Button className="mt-4"
              color="primary"
              variant="contained"
              size="small" onClick={addItemToInvoiceList}>Add Item</Button>
          </div>
        </ValidatorForm>
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
          type="file"
          multiple
          name="myFile[]"
        />
        <div className="mb-8">
          <div className="flex flex-wrap justify-center items-center m--2">
            {files.map((item, index) => (
              <Card
                elevation={6}
                className={clsx({
                  "flex-column justify-center items-center  px-8 m-2 cursor-pointer": true,
                })}
              >

                <Icon
                >
                  photo_library
              </Icon>

                {/* <h5 className="m-0">{item.file_name}</h5> */}


                <a href={"http://www.amacoerp.com/amaco/php_file/images/" + id + "/" + item.file_name} target="_blank">{item.file_name}</a>
                <IconButton onClick={() => deleterfqfile(item.id)}>
                  <Tooltip title="Delete File">
                    <Icon color="error">close</Icon>
                  </Tooltip>
                </IconButton>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

const initialValues = {
  id: "",
  orderNo: "",
  buyer: {
    name: "",
    address: "",
  },
  seller: {
    name: "",
    address: "",
  },
  item: [],
  status: "",
  vat: "",
  date: new Date(),
  currency: "",
  loading: false,
};

export default InvoiceEditor;
