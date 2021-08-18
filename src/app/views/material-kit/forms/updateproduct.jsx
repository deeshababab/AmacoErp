import React, { useState, useEffect, setState } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Select from 'react-select';
// import Select from "@material-ui/core/Select";
import { MDBSelect } from "mdbreact";
import history from "history.js";
import { Autocomplete } from "@material-ui/lab";
import InputLabel from "@material-ui/core/InputLabel";
import {
  Button,
  Icon,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  FormControlLabel,
  Checkbox,
  MenuItem,
  Fab
} from "@material-ui/core";
import Swal from "sweetalert2";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import ReactSelectMaterialUi from "react-select-material-ui";
import Axios from "axios";
import { useParams, matchPath } from "react-router-dom";
import { database } from "firebase/app";
import url,{ApiKey} from "../../invoice/InvoiceService"




const SimpleForm = () => {
  const [state, setState] = useState({
    date: new Date(),
  });
  const product_type = [
    "Non Inventory",
    "Inventory",
    "Service",
  ];
  const data = [
    {
      value: "TON",
      label: "TON-TONNES"
    },
    {
      value: "TUB",
      label: "TUB-TUBES"
    },
    {
      value: "UNT",
      label: "UNT-UNITS"
    },

    {
      value: "YDS",
      label: "YDS-YARDS"
    },
    {
      value: "SET",
      label: "SET-SETS"
    },
    {
      value: "SQF",
      label: "SQF-SQUARE FEET"
    },
    {
      value: "SQY",
      label: "SQY-SQUAREYARDS"
    },
    {
      value: "THD",
      label: "THD-THOUSANDS"
    },

    {
      value: "KLR",
      label: "KLR-KILOLITER"
    },
    {
      value: "KME",
      label: "KME-KILOMETRE"
    },
    {
      value: "MLT",
      label: "MLT-MILLILITRE"
    },
    {
      value: "MTR",
      label: "MTR-METERS"
    },
    {
      value: "NOS",
      label: "NOS-NUMBERS"
    },
    {
      value: "PAC",
      label: "PAC-PACKS"
    },
    {
      value: "PCS",
      label: "PCS-PACKS"
    },
    {
      value: "PRS",
      label: "PAIRS"
    },
    {
      value: "QTL",
      label: "QTL-QUINTAL"
    },
    {
      value: "ROL",
      label: "ROLLS"
    },
    {
      value: "CMS",
      label: "CENTIMETER"
    },
    {
      value: "CTN",
      label: "CTN-CARTONS"
    },
    {
      value: "DOZ",
      label: "DOZ-DOZEN"
    },
    {
      value: "DRM",
      label: "DRM-DRUM"
    },
    {
      value: "GMS",
      label: "GRAMS"
    },
    {
      value: "GMS",
      label: "GRAMS"
    },
    {
      value: "GRS",
      label: "GRS-GROSS"
    },

  ];
  // const [selectedOption, setSelectedOption] = useState(data);


  const [selectedValue, setSelectedValue] = useState(1);
  const [selectedValue1, setSelectedValue1] = useState('');
  const [vendors, setvendors] = useState('');
  const [product, setproduct] = useState('');
  const [description, setdescription] = useState('');
  const [unit_of_measure, setunit_of_measure] = useState('');
  const [unit_Price, setunit_Price] = useState('');
  const [selectedOption, setselectedOption] = useState('');
  const [selectedOption1, setselectedOption1] = useState('1');
  const [mrp, setmrp] = useState('');
  const [real_price, setreal_price] = useState('');
  const [category_id, setcategory_id] = useState('');
  const [ptype, setptype] = useState('');
  const [hsn, sethsn] = useState('');
  const [iq, setiq] = useState('');
  const [mq, setmq] = useState('');
  const [modelno, setmodelno] = useState('');
  const [manid, setmanid] = useState('');
  const [name_in_ar, setname_in_ar] = useState('');
  const [firm, setfirm] = useState([]);
  const [manuarr, setmanuarr] = useState([]);

  const ooptions = [
    {
      id: 1,
      name: "lucy brown",
      date: "1 january, 2019",

    },
    {
      id: 2,
      name: "lucy brown",
      date: "1 january, 2019",

    },
  ]
  const [, updateData] = useState([
    { id: 1, name: "Pankaj 1" },
    { id: 2, name: "Pankaj 2" },
    { id: 3, name: "Pankaj 3" },
    { id: 4, name: "Pankaj 4" }
  ]);
  const [division_id, setdivision_id] = useState([
    { value: '1', label: 'Chocolate' },
    { value: '2', label: 'Strawberry' },
    { value: '3', label: 'Vanilla' },
  ]);
  const styles = {
    fontSize: 14,
    color: 'blue',
    width: 200
  }
  const andleChange = (event) => {
    event.persist();
    setState({ ...state, [event.target.name]: event.target.value });
  };
  const handleChange1 = e => {
    setSelectedValue1(e.value);

  }
  const handleChange = e => {
    setSelectedValue1(e.value);

  }

  const [isAlive, setIsAlive] = useState(true);
  const [userList, setUserList] = useState([]);
  const [ooptions1, setooptions] = useState([]);
  const [categoryid, setcategoryid] = useState();
  const [partyid, setpartyid] = useState('');
  // const [id,setId]=useParams()
  let search = window.location.search;
  let params = new URLSearchParams(search);
  const foo = parseInt(params.get('id'));


  useEffect(() => {


    url.get("products/" + foo).then(({ data }) => {
      if (isAlive) setUserList(data);

      setdescription(data.product[0].description)
      setname_in_ar(data.product[0].name_in_ar)
      setunit_of_measure(data.product[0].unit_of_measure)
      setunit_Price(data.product[0].unit_price)
      setcategoryid(data.product[0].category_id)
      setreal_price(data.product[0].real_price)
      setproduct(data.product[0].name)
      setmrp(data.product[0].mrp)
      setselectedOption(data.product[0].category_name)
      setselectedOption1(data.product[0].category_id)
      setmanid(data.product[0].manufacturer_id)
      setmodelno(data.product[0].modelno)
      sethsn(data.product[0].hsn_code)
      setptype(data.product[0].type)
      setiq(data.product[0].initial_quantity)
      setmq(data.product[0].minimum_quantity)
      setvendors(data.product[0].id)
      setpartyid(data.product[0].id)
      setpartyid(data.product[0].party_id)
      setmodelno(data.product[0].model_no)

    });
    url.get("products-in-category").then(({ data }) => {
      setooptions(data);

    });
    url.get(url + "parties-vendor").then(({ data }) => {

      setfirm(data)


    });
    url.get("manufacturer").then(({ data }) => {

      setmanuarr(data)


    });
    return () => setIsAlive(false);
  }, []);

  const submitValue = () => {

   
    const frmdetails = {
      name: product?(product):'',
      description: description?(description):'',
      // unit_price: unit_Price,
      unit_of_measure: unit_of_measure,
      division_id: selectedValue,
      type: ptype,
      hsn_code: hsn,
      initial_quantity: iq,
      minimum_quantity: mq,
      category_id: selectedOption1,
      // party_id: vendors,
      model_no:modelno,
      manufacturer_id:manid,
      name_in_ar:name_in_ar

    }


    url.put("products/" + foo, frmdetails)
      .then(function (response) {

        Swal.fire({
          title: 'Success',
          type: 'success',
          icon:'success',
          text: 'Data saved successfully.',
        })
        .then((result) => {
        history.push(`/product/Viewproduct/${selectedOption1}`)
        })
      })
      .catch(function (error) {

      })


  }

  function Increment(e) {
    setState({ description });


  }

  function handleChanges(evt) {
    const value = evt.target.value;
    setpartyid(value);
    setvendors(value)
  }
  const options = ooptions1.map((guest, index) => {
    return {
      label: guest.name,
      value: guest.id,
      key: index
    }
  })
  const company = firm.map((guest, index) => {
    return {
      label: guest.firm_name,
      value: guest.id,
      key: index
    }
  })
  const manufacture = manuarr.map((guest, index) => {
    return {
      label: guest.name,
      value: guest.id,
      key: index
    }
  })


  const {
    username,
    firstName,
    creditCard,
    mobile,
    password,
    confirmPassword,
    gender,
    date,
    email,
    Firm_Name,
    optionss,
  } = state;

  return (
    <div>
      <ValidatorForm onSubmit={submitValue} onError={() => null}>
        <Grid container spacing={6}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
          <h6>Update Product Details</h6>
            <TextValidator
              className="mb-4 mt-2 w-full"
              label="Product Name"
              variant="outlined"
              size="small"
              value={product}
              onChange={e => setproduct(e.target.value)}
              type="text"
              name="product"
              inputProps={{style: {textTransform: 'capitalize'}}}

            />
            <TextValidator
              className="mb-4 w-full"
              label="اسم المنتج"
              variant="outlined"
              size="small"
              
              value={name_in_ar}
              onChange={e => setname_in_ar(e.target.value)}
              type="text"
              name="product"
              validators={[
                "required",
              ]}
              errorMessages={["this field is required"]}

            />
            <TextValidator
              className="mb-4 w-full"
              label="description"
              type="text"
              size="small"
              value={description}
              onChange={e => setdescription(e.target.value)}
              name="description"
              variant="outlined"
              inputProps={{style: {textTransform: 'capitalize'}}}
            // validators={["required"]}
            // errorMessages={["this field is required"]}
            />
            {/* <TextValidator
                className="mb-4 w-full"
                label="Unit of measure"
                value={unit_of_measure}
                onChange={e => setunit_of_measure(e.target.value)}
                type="text"
                size="small"
                name="unit_of_measure"
                variant="outlined"
                // validators={["required"]}
                // errorMessages={["this field is required"]}
              /> */}

        <div className="flex mb-4">
        <div style={{ width: '300px' }} className="mr-2">
        <InputLabel htmlFor="UOM" style={{fontSize:10}}>UOM</InputLabel>
            <Select
              menuPortalTarget={document.body}
              menuPosition={'fixed'}
              label="UOM"
              name="UOM"
              placeholder="Select Option"
              value={data.find(obj => obj.value === unit_of_measure)} // set selected value
              options={data

              }
              onChange={e => setunit_of_measure(e.value)
              }
            />
            </div>
            <div style={{ width: '350px' }} className="ml-2">
            <InputLabel  style={{fontSize:10}}>Manufacture</InputLabel>
                <Select
                  
                  name="Manufacture"
                  menuPortalTarget={document.body}
                  size="small"
                  fullWidth
                  InputLabel="Manufacture"
                  onChange={e => setmanid(e.value)
                  }
                  variant="contained"
                  value={manufacture.find(obj => obj.value === manid)}
                  options={manufacture}
                />
              </div>
            
              </div>
          </Grid>

          <Grid item lg={6} md={6} sm={12} xs={12}>

            <div className="flex mb-4 mt-8">
              <TextField
                className="mr-2"
                variant="outlined"
                label="Product Type"
                size="small"
                value={ptype}
                fullWidth
                onChange={e => setptype(e.target.value)}
                select
              >
                {product_type.map((item) => (
                  <MenuItem value={item} key={item}>
                    {item}
                  </MenuItem>
                ))}
              </TextField>


              <TextField
                className="ml-2"
                label="HSN number"
                size="small"
                variant="outlined"
                onChange={e => sethsn(e.target.value)}
                type="text"
                name="hsn"
                value={hsn}
                fullWidth
              // validators={["required"]}
              // errorMessages={["this field is required"]}
              />
              {/* <MenuItem>
               <Button
                  onClick={() => {
                    pushData();
                  }}
                >
                  <Icon>add</Icon>Vendor
                </Button>
               </MenuItem>
              {customerList.map((item, ind) => (
                
                <MenuItem value={item.id} key={item}>
                  {item.firm_name}
                </MenuItem>
              ))} */}

            </div>


            <div className="flex mb-4">
              <TextField
                className="mr-2"
                label="Initial quantity"
                variant="outlined"
                onChange={e => setiq(e.target.value)}
                value={iq}
                size="small"
                fullWidth
              />
              <TextField
                className="ml-2"
                label="Minimum Quantity"
                variant="outlined"
                value={mq}
                size="small"
                onChange={e => setmq(e.target.value)}
                fullWidth
              />
            </div>

            {/* <TextField
                    
                    className="mb-4 w-full"
                    name="selectedOption1"
                    size="small"
                    label="category"
                    variant="outlined"
                    value={selectedOption1}
                    select
                    onChange={e => setselectedOption1(e.target.value)
                    }
                  >
                    {ooptions1.map((item, ind) => (
                      <MenuItem value={item.name} key={item.id}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </TextField> */}

            {/* <Select
                   className="mb-4 w-full"
   value={options.find(obj => obj.value === selectedOption1)}
   onChange={e => setselectedOption1(e.value)
   }
   options={options}
/> */}
            <div className="flex mb-4">
              <TextField
                className="mr-2"
                label="Sub Category"
                variant="outlined"
                onChange={e => setselectedOption(e.value)
                }
                value={selectedOption}
                fullWidth
                size="small"
                readonly
              />
              {/* <TextField
                className="ml-2"
                label="maufacturer"
                variant="outlined"
                value={manid}
                size="small"
                onChange={e => setmanid(e.target.value)}
                fullWidth
              /> */}
              <TextField
                className="ml-2"
                label="Model number"
                size="small"
                variant="outlined"
                onChange={e => setmodelno(e.target.value)}
                type="text"
                name="hsn"
                value={modelno}
                fullWidth
              // validators={["required"]}
              // errorMessages={["this field is required"]}
              />
            </div>
            <div className="flex mb-4">
            
              
            </div>


          </Grid>
        </Grid>
        <div className="flex mb-4">
        <Button color="primary" className="mr-4 py-2" variant="outlined" type="submit">
          <Icon>save</Icon>
          <span className="pl-2 capitalize">Submit</span>
        </Button>
        <Button  className="mr-4 py-2" color="secondary" variant="outlined" type="submit" onClick={() => history.push(`../singleproduct?id=${foo}`)}>
        <Icon>cancel</Icon>
          <span className="pl-2 capitalize">cancel</span>
        </Button>
        </div>
      </ValidatorForm>
    </div>
  );
};

export default SimpleForm;
