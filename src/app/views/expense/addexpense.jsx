import React, { useState, useEffect } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Breadcrumb, ConfirmationDialog } from "matx";
import Select from 'react-select';
import { useParams } from "react-router-dom";
import { MDBSelect } from "mdbreact";
import Swal from "sweetalert2";
import useAuth from "app/hooks/useAuth";


import {
    Dialog,
    Divider,
    Switch,
    IconButton,
} from "@material-ui/core";

import history from "history.js";
import url,{ getVendorList, getcategories } from "../../views/invoice/InvoiceService"


import {
    Icon,
    Grid,
    Radio,
    RadioGroup,
    TextField,
    FormControlLabel,
    Checkbox,
    MenuItem,
    Link,
    Button
} from "@material-ui/core";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from "@material-ui/pickers";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import ReactSelectMaterialUi from "react-select-material-ui";
import Axios from "axios";


const ooptions = [
    {
        id: 3,
        name: "lucy brown",
        date: "1 january, 2019",

    },
    {
        id: 4,
        name: "lucy brown",
        date: "1 january, 2019",

    },

];

const options = [
    { value: '1', label: 'Chocolate' },
    { value: '2', label: 'Strawberry' },
    { value: '3', label: 'Vanilla' },
];

const SimpleForm = ({ open, handleClose }) => {
    const [state, setState] = useState({
        date: new Date(),
    });
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

    const [shouldOpenEditorDialog, setShouldOpenEditorDialog] = useState(false);
    const [
        shouldOpenConfirmationDialog,
        setShouldOpenConfirmationDialog,
    ] = useState(false);
    const [selectedValue, setSelectedValue] = useState('');
    const [selectedValue1, setSelectedValue1] = useState('');
    const [product, setproduct] = useState('');
    const [description, setdescription] = useState('');
    const [unit_of_measue, setunit_of_measue] = useState('');
    const [unit_Price, setunit_Price] = useState('');
    const [selectedOption, setselectedOption] = useState('');
    const [selectedOption1, setselectedOption1] = useState('');
    const [mrp, setmrp] = useState('');
    const [real_price, setreal_price] = useState('');
    const [category_id, setcategory_id] = useState('');
    const [subcategory, setsubcategory] = useState('');
    const [ptype, setptype] = useState('');
    const [hsn, sethsn] = useState('');
    const [iq, setiq] = useState(0);
    const [mq, setmq] = useState(0);
    const [manid, setmanid] = useState('');
    const [modelno, setmodelno] = useState('');
    const [ooptions1, setooptions] = useState([]);
    const [vendors, setvendors] = useState([]);
    const [customerList, setCustomerList] = useState([]);
    const { id } = useParams();
    const {user} = useAuth()
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
    const product_type = [
        "noninventory",
        "inventory",
        "service"
    ];
    const styles = {
        fontSize: 14,
        color: 'blue',
        width: 200
    }
    const handleChange = e => {
        setSelectedValue(e.value);

    }
    const handleChange1 = e => {
        setSelectedValue1(e.value);

    }
    const handleDialogClose = () => {
        setShouldOpenEditorDialog(false);
        getcategory()

    };
    const pushData = () => {
        history.push("/party/addparty")
    }

    const handleDeleteUser = (user) => {

        setShouldOpenConfirmationDialog(true);
    };

    useEffect(() => {
        getVendorList().then(({ data }) => {

            setCustomerList(data)
            getcategory()

        });

        url.get("products-in-category").then(({ data }) => {
            setooptions(data);



        });
        url.get("categories/" + id).then(({ data }) => {
           
            setsubcategory(data.name)



        });


    }, [state.password]);

    const submitValue = () => {
        const frmdetails = {
            party_id: vendors,
            name: product,
            description: description,
            unit_price: unit_Price,
            unit_of_measure: unit_of_measue,
            category_id: id,
            division_id: selectedValue,
            type: ptype,
            hsn_code: hsn,
            initial_quantity: iq,
            minimum_quantity: mq,
            maufacturer_id: manid,
            model_no: modelno

        }


        url.post('products', frmdetails)
            .then(function (response) {

               
                Swal.fire({
                    title: 'Success',
                    icon:'success',
                    type: 'success',
                    text: 'Data saved successfully.',
                });
                history.push(`/product/viewproduct/${id}`)
            })
            .catch(function (error) {

            })
        resetform()


    }
    function cancelform() {
        // window.location.href="./Viewproduct"
        getcategories().then(({ data }) => {


        });
        history.push(`/product/Viewproduct/${id}`)
    }

    function getcategory(e) {
        url.get("products-in-category").then(({ data }) => {
            setooptions(data);
        });
    }

    const handleDateChange = (date) => {
        setState({ ...state, date });
    };
    const resetform = () => {
        setunit_Price('');
        setunit_of_measue('');
        setreal_price('');
        setiq('');
        setmq('');
        sethsn('');
        setproduct('');
        setselectedOption1('');
        setptype('');
        setdescription('');

    };



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
        <div className="m-sm-30">
        <div  className="mb-sm-30">
          <Breadcrumb
            routeSegments={[
              { name: "View", path: "./Viewparty" },
              { name: "Expense Entry" }
            ]}
          />
        </div>
        <div>
            <ValidatorForm onSubmit={submitValue} onError={() => null}>
                <Grid container spacing={6}>
                    <Grid item lg={6} md={6} sm={12} xs={12}>

                        <TextValidator
                            className="mb-4 w-full"
                            label="Paid By"
                            variant="outlined"
                            size="small"
                            value={product}
                            onChange={e => setproduct(e.target.value)}
                            type="text"
                            name="product"
                            validators={[
                                "required",
                            ]}
                            errorMessages={["this field is required"]}

                        />
                        <TextValidator
                            className="mb-4 w-full"
                            label="Paid To"
                            autoComplete="off"
                            value={description}
                            onChange={e => setdescription(e.target.value)}
                            type="textarea"
                            size="small"
                            name="description"
                            variant="outlined"
                            validators={[
                                "required",
                            ]}
                            errorMessages={["this field is required"]}

                        // validators={["required"]}
                        // errorMessages={["this field is required"]}
                        />
                        <TextValidator
                            className="mb-4 w-full"
                            label="Amount"
                            onChange={e => setunit_of_measue(e.target.value)}
                            type="text"
                            size="small"
                            value={unit_of_measue}
                            name="unit_of_measue"
                            variant="outlined"
                            validators={[
                                "required",
                            ]}
                            errorMessages={["this field is required"]}
                            select
                        // validators={["required"]}
                        // errorMessages={["this field is required"]}
                        >
                            {data.map((item, ind) => (
                                <MenuItem value={item.value} key={item}>
                                    {item.label}
                                </MenuItem>
                            ))}
                        </TextValidator>

                        <TextValidator
                            className="mb-4 w-full"
                            label="Unit price"
                            size="small"
                            variant="outlined"
                            value={unit_Price}
                            onChange={e => setunit_Price(e.target.value)}
                            type="text"
                            name="unit_Price"
                            validators={[
                                "required",
                            ]}
                            errorMessages={["this field is required"]}

                        // validators={["required"]}
                        // errorMessages={["this field is required"]}
                        />

                    </Grid>

                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <div className="flex mb-4">
                            {/* <TextValidator
              className="mr-2"
              label="category type"
              name="selectedvalue"
              size="small"
              variant="outlined"
              select
              value={selectedOption1 || ""}
              onChange={e => setselectedOption1(e.target.value)
              }
              validators={[
                "required",
              ]}
              errorMessages={["this field is required"]}

            >
              <MenuItem>
                <Button
                  onClick={() => {
                    setShouldOpenEditorDialog(true);
                  }}
                >
                  <Icon>add</Icon>category
                </Button>
              </MenuItem>
              {ooptions1.map((item, ind) => (
                <MenuItem value={item.id} key={item}>
                  {item.name}
                </MenuItem>
              ))}
            </TextValidator> */}
                            {/* <TextField
                className="mr-2"
                label="category type"
                name="selectedvalue"
                size="small"
                variant="outlined"
                errorMessages={["this field is required"]}
                value={selectedOption1 || ""}
                onChange={e => setselectedOption1(e.target.value)}
                fullWidth
                
              />   */}
                            <TextField
                                className="mr-2"
                                label="Sub Category"
                                variant="outlined"
                                value={subcategory}
                                size="small"
                                validators={[
                                    "required",
                                ]}
                                errorMessages={["this field is required"]}

                                onChange={e => setmq(e.target.value)}
                                fullWidth
                            />
                            <TextField
                                className="ml-2"
                                label="Manufacturer"
                                variant="outlined"
                                onChange={e => setmanid(e.target.value)}
                                value={manid}
                                size="small"
                                validators={[
                                    "required",
                                ]}
                                errorMessages={["this field is required"]}

                                fullWidth
                            />
                        </div>
                        <div className="flex mb-4">
                            <TextField
                                className="mb-4 w-full"
                                label="product type"
                                name="selectedvalue"
                                size="small"
                                fullWidth
                                variant="outlined"
                                select
                                validators={[
                                    "required",
                                ]}
                                errorMessages={["this field is required"]}

                                value={ptype}
                                onChange={e => setptype(e.target.value)
                                }
                            >
                                {product_type.map((item, ind) => (
                                    <MenuItem value={item} key={item}>
                                        {item}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField
                                className="ml-2"
                                label="Vendors"
                                name="vendors"
                                size="small"
                                variant="outlined"
                                select
                                fullWidth
                                validators={[
                                    "required",
                                ]}
                                errorMessages={["this field is required"]}

                                value={vendors}
                                onChange={e => setvendors(e.target.value)
                                }
                            >
                                <MenuItem>
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
                                ))}
                            </TextField>

                        </div>
                        <div className="flex mb-4">
                            <TextField
                                className="mr-2"
                                label="Initial quantity"
                                variant="outlined"
                                onChange={e => setiq(e.target.value)}
                                value={iq}
                                size="small"
                                type="number"
                                validators={[
                                    "required",
                                ]}
                                errorMessages={["this field is required"]}

                                fullWidth
                            />
                            <TextField
                                className="ml-2"
                                label="Minimum Quantity"
                                variant="outlined"
                                value={mq}
                                type="number"
                                size="small"
                                validators={[
                                    "required",
                                ]}
                                errorMessages={["this field is required"]}

                                onChange={e => setmq(e.target.value)}
                                fullWidth
                            />
                        </div>
                        <div className="flex mb-4">
                            <TextField
                                className="mr-2"
                                label="HSN number"
                                size="small"
                                variant="outlined"
                                value={hsn}
                                onChange={e => sethsn(e.target.value)}
                                type="text"
                                name="hsn"
                                validators={[
                                    "required",
                                ]}
                                errorMessages={["this field is required"]}
                                fullWidth

                            // validators={["required"]}
                            // errorMessages={["this field is required"]}
                            />
                            <TextField
                                className="ml-2"
                                label="Modal Number"
                                variant="outlined"
                                value={modelno}
                                size="small"
                                validators={[
                                    "required",
                                ]}
                                errorMessages={["this field is required"]}

                                onChange={e => setmodelno(e.target.value)}
                                fullWidth
                            />



                        </div>



                    </Grid>
                </Grid>

                <Button className="mr-4 py-2" color="primary" variant="outlined" type="submit">
                    <Icon>save</Icon>
                    <span className="pl-2 capitalize">Save</span>
                </Button>

                <Button className="mr-4 py-2" color="secondary" variant="outlined" onClick={cancelform}>
                    <Icon>cancel</Icon>
                    <span className="pl-2 capitalize">cancel</span>
                </Button>
                <Button color=".bg-green" variant="outlined" type="submit" onClick={resetform}>
                    <Icon>loop</Icon>
                    <span className="pl-2 capitalize">reset</span>
                </Button>
            </ValidatorForm>
            
        </div>
        </div>

    );
};

export default SimpleForm;
