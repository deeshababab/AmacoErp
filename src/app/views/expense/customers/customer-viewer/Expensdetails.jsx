import React, { useState, useEffect } from "react";
import { Breadcrumb } from "matx";
import Tooltip from "@material-ui/core/Tooltip";
import { useParams } from "react-router-dom";
import Axios from "axios";
import moment from "moment";
import {
  Card,
  Divider,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@material-ui/core";
import url, { urlphp } from "../../../invoice/InvoiceService";
import pdf from "../../pdf.png";
import excel from "../../excel.png";
import doc from "../../doc.jpg";
import zip from "../../zipp.png";

const CustomerInfo = () => {
  const { id } = useParams();
  const [ExpenseList, setExpenseList] = useState([]);
  const [accountname, setaccountname] = useState("");
  const [img, setimg] = useState("");
  const [ref_img, setref_img] = useState("");
  const [columndata, setcolumndata] = useState([]);
  const filetype = (type, file_value) => {
    if (type === "jpg") {
      return file_value;
    } else if (type === "png") {
      return file_value;
    } else if (type === "jpeg") {
      return file_value;
    } else if (type === "pdf") {
      return pdf;
    } else if (type === "docx") {
      return doc;
    } else if (type === "exe") {
      return excel;
    } else if (type === "zip") {
      return zip;
    }
  };
  useEffect(() => {
    url.get("expense/" + id).then(({ data }) => {
      setExpenseList(data[0]);

      setcolumndata(data[0].column_data);
      setimg(data.img);
      setref_img(data.referrenceImgUrl);
      Axios.get(
        `${urlphp}/php_file/controller/accountname.php?id=${data[0].account_category_id}`,
        {
          method: "GET",
          headers: {
            "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE",
            "Access-Control-Allow-Headers": "Content-Type, x-requested-with",
            "Access-Control-Max-Age": 86400,
          },
        }
      ).then(({ data }) => {
        setaccountname(data[0].name);
      });
    });
  }, []);

  return (
    <div className="m-sm-30">
      <div className="mb-sm-30">
        <Breadcrumb
          routeSegments={[
            { name: "View Expense", path: "/expenseview" },
            { name: "Expenses" },
          ]}
        />
      </div>
      <Card className="pt-6" elevation={3}>
        <small className="text-muted pl-4">
          <h5 className="pl-4">
            <strong>Expense Details:</strong>
            {ExpenseList.registration_no}
          </h5>
        </small>
        <Divider></Divider>
        <Grid container spacing={2}>
          <Grid item lg={6} md={6} xs={12}>
            <Table className="mb-4">
              <TableBody>
                <TableRow>
                  <TableCell className="pl-4">Payment Account</TableCell>
                  <TableCell>{accountname}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="pl-4">Description</TableCell>
                  <TableCell>{ExpenseList.description}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="pl-4">Tax Amount</TableCell>
                  <TableCell>
                    {ExpenseList.tax !== null
                      ? parseFloat(ExpenseList.tax).toLocaleString(undefined, {
                          minimumFractionDigits: 2,
                        })
                      : "0.00"}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="pl-4">Paid Date</TableCell>
                  <TableCell>
                    {moment(ExpenseList.paid_date).format("DD MMM YYYY")}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="pl-4">Paid To</TableCell>
                  <TableCell>{ExpenseList.paid_to}</TableCell>
                </TableRow>
                {columndata.map((item, index) => {
                  return (
                    <TableRow>
                      <TableCell className="pl-4">{item.column.name}</TableCell>
                      {item.column.type === "file" ? (
                        <TableCell>
                          <Tooltip title="View">
                            <a href={item.file} target="_blank">
                              <img
                                src={filetype(
                                  item.file.split(".")[3],
                                  item.file,
                                  index
                                )}
                                width="100px"
                                height="100px"
                              ></img>
                            </a>
                          </Tooltip>
                        </TableCell>
                      ) : (
                        <TableCell>
                          {item.column.type === "date"
                            ? moment(item.value).format("DD  MMM, YYYY ")
                            : item.value}
                        </TableCell>
                      )}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Grid>

          <Grid item lg={6} md={6} xs={12}>
            <Table className="mb-4">
              <TableBody>
                <TableRow>
                  <TableCell className="pl-4">Amount</TableCell>
                  <TableCell>
                    {parseFloat(ExpenseList.amount).toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                    })}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="pl-4">Reference Bill Number</TableCell>
                  <TableCell>{ExpenseList.referrence_bill_no}</TableCell>
                </TableRow>

                {ref_img === "No file Uploaded" ? (
                  ""
                ) : (
                  <TableRow>
                    <TableCell className="pl-4">Reference Bill</TableCell>
                    <TableCell>
                      <Tooltip title="View">
                        <a href={ref_img} target="_blank">
                          {
                            <img
                              src={filetype(ref_img.split(".")[3], ref_img)}
                              href={ref_img}
                              className="border-radius-4 w-100 mr-3"
                              style={{ width: 100, height: 100 }}
                            ></img>
                          }
                        </a>
                      </Tooltip>
                      
                    </TableCell>
                  </TableRow>
                )}
                {ExpenseList.bank_ref_no !== null && (
                  <TableRow>
                    <TableCell className="pl-4">
                      Bank Reference Number
                    </TableCell>
                    <TableCell>{ExpenseList.bank_ref_no}</TableCell>
                  </TableRow>
                )}
                {ExpenseList.bank_slip !== null && (
                  <TableRow>
                    <TableCell className="pl-4">Bank Slip</TableCell>
                    <TableCell>
                      <Tooltip title="View">
                        <a href={img}>
                          <img
                            src={img}
                            href={img}
                            className="border-radius-4 w-100 mr-3"
                            style={{ width: 100, height: 100 }}
                            target="_blank"
                          ></img>
                        </a>
                      </Tooltip>
                     
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};



export default CustomerInfo;
