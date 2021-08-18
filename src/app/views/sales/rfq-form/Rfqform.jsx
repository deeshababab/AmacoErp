import React, { useState, useEffect, useRef } from "react";
import { Formik } from "formik";
import moment from "moment";
import history from "history.js";
import url, { getrfq, getVendorList } from "../../invoice/InvoiceService";
import clsx from "clsx";

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
  Tooltip,
} from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import InvoiceItemTable from "./Rfqformtable";
import { calculateAmount } from "./Rfqformservice";
import { Breadcrumb } from "matx";
import Swal from "sweetalert2";

const InvoiceForm = ({}) => {
  const [files, setFiles] = useState([]);
  const formData = new FormData();
  const arr = [];

  const [CustomerList, setCustomerList] = useState([]);
  const [state, setState] = useState([]);
  const [rfqFiles, setrfqFiles] = useState([]);
  const [upload, setupload] = useState([]);
  const [message, setmessage] = useState(false);
  const [queProgress, setQueProgress] = useState(0);
  const [party_id, setparty_id] = useState("");
  const [status, setstatus] = useState(false);
  const [rfqstatus, setrfqstatus] = useState(false);
  const [customercontact, setcustomercontact] = useState([]);
  const el = useRef();

  let listrfq = [];
  let { loading } = state;

  let isEmpty = !!!files.length;
  const handleSingleRemove = (index) => {
    let tempList = [...rfqFiles];
    tempList.splice(index, 1);
    setFiles([...tempList]);
    setrfqFiles([...tempList]);
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

    setQueProgress(35);
  };

  const handleFileSelect = (event) => {
    setrfqFiles(listrfq);
    setupload(event.target.files);
    let files = event.target.files;
    let filesd = event.target.files;

    for (let iterator of filesd) {
      listrfq.push({
        src: URL.createObjectURL(iterator),
        name: iterator.name,
      });
    }
    setrfqFiles(listrfq);
  };

  useEffect(() => {
    getVendorList().then(({ data }) => {
      setCustomerList(data);
    });
  }, []);

  const setrfq = (event) => {
    setparty_id(event.target.value);

    url.get("parties/" + event.target.value).then(({ data }) => {
      setcustomercontact(data[0].contacts);

      setrfqstatus(true);
    });
  };

  const handleSubmit = async (values, { isSubmitting, resetForm }) => {
    for (let a = 0; a < upload.length; a++) {
      formData.append("myFile" + a, upload[a], upload[a].name);
    }
    values.party_id = party_id;

    for (const [key, value] of Object.entries(values)) {
      let list = [];
      if (`${key}` === "rfq_details") {
        for (const iterator of values.rfq_details) {
          list.push({
            file: iterator,
          });

          formData.append("rfq_details", JSON.stringify(values.rfq_details));
        }
      } else {
        formData.append(`${key}`, `${value}`);
      }
    }

    setState({ ...state, loading: true });
    if (values.rfq_details) {
      url
        .post("rfq", formData)
        .then(function (response) {
          Swal.fire({
            title: "Success",
            type: "success",
            icon: "success",
            text: "Data saved successfully.",
          }).then((result) => {
            getrfq();
            history.push("/sales/rfq-form/rfqview");
          });
        })

        .catch(function (error) {});
      resetForm({ values: "" });
    } else {
      setmessage(true);
    }
  };

  return (
    <div className="m-sm-30">
      <div className="mb-sm-30">
        <Breadcrumb
          routeSegments={[
            { name: "VIEW", path: "/sales/rfq-form/rfqview" },
            { name: "RFQ" },
          ]}
        />
      </div>

      <Card elevation={3}>
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
            <div>
              <form
                className="p-4"
                onSubmit={handleSubmit}
                encType="multipart/form-data"
              >
                <div className="flex justify-between">
                  <div className="flex p-4">
                    <h5 className="m-0">NEW RFQ</h5>
                  </div>
                  <div className="">
                    <Button
                      color="primary"
                      className="mt-2 py-2 mb-2"
                      variant="outlined"
                      type="submit"
                      disabled={loading}
                      fullWidth
                    >
                      <Icon>save</Icon> SAVE
                    </Button>
                  </div>
                </div>
                <Divider className="mb-2" />
                <Grid container spacing={3} alignItems="center">
                  <Grid item xs={6}>
                    <div className="flex justify-between">
                      <div className="flex">
                        <TextField
                          label="Supplier Name"
                          style={{ minWidth: 200, maxWidth: "250px" }}
                          name="party_id"
                          size="small"
                          variant="outlined"
                          value={values.party_id}
                          select
                          onClick={(event) => setrfq(event)}
                          required
                        >
                          <MenuItem
                            onClick={() => {
                              history.push("/party/addparty");
                            }}
                          >
                            <Icon>add</Icon>new
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
                        format="dd MMMM yyyy"
                        selected={values.requested_date}
                        value={values.requested_date}
                        onChange={(date) => {
                          setFieldValue(
                            "requested_date",
                            moment(date).format("YYYY-MM-DD")
                          );
                        }}
                      />
                    </MuiPickersUtilsProvider>
                  </Grid>

                  <Grid item xs>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                        className="m-2"
                        margin="none"
                        label="Bid Closing Date"
                        inputVariant="outlined"
                        format="dd MMMM yyyy"
                        type="text"
                        size="small"
                        autoOk={true}
                        value={values.require_date}
                        onChange={(date) =>
                          setFieldValue(
                            "require_date",
                            moment(date).format("YYYY-MM-DD")
                          )
                        }
                      />
                    </MuiPickersUtilsProvider>
                  </Grid>
                  <Grid item xs={4}>
                    <div className="flex">
                      {rfqstatus && (
                        <TextField
                          label="Contact Person"
                          style={{ minWidth: 200, maxWidth: "250px" }}
                          name="contact_id"
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
                      )}
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
                  <h6 style={{ color: "red" }}>Please Enter RFQ Details</h6>
                )}
                <div className="mt-6 px-4 mb-5 flex items-center justify-between">
                  <label htmlFor="upload-multiple-file">
                    <Button
                      className="capitalize"
                      className="py-2"
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

                <Card className="mb-6" elevation={2}>
                  <div className="p-4">
                    <Grid
                      container
                      spacing={2}
                      justify="center"
                      alignItems="center"
                      direction="row"
                    ></Grid>
                  </div>
                  <Divider></Divider>

                  <div className="flex flex-wrap justify-center items-center m--2">
                    {rfqFiles.map((item, index) => {
                      return (
                        <Card
                          elevation={6}
                          className={clsx({
                            "flex-column justify-center items-center py-6 px-8 m-2 cursor-pointer": true,
                          })}
                        >
                          <Tooltip title="Remove">
                            <span style={{ paddingRight: 0 }}>
                              <Icon
                                color="error"
                                className=""
                                onClick={(event) => handleSingleRemove(index)}
                              >
                                close
                              </Icon>
                            </span>
                          </Tooltip>
                          {item.name.split(".")[1] !== "pdf" ? (
                            <img
                              src={item.src}
                              style={{ width: "100px", height: "100px" }}
                            />
                          ) : (
                            <Icon
                              className="bg-error"
                              style={{ width: "100px", height: "100px" }}
                            >
                              picture_as_pdf
                            </Icon>
                          )}
                        </Card>
                      );
                    })}
                  </div>
                </Card>
              </form>
            </div>
          )}
        </Formik>
      </Card>
    </div>
  );
};

const initialValues = {};

export default InvoiceForm;
