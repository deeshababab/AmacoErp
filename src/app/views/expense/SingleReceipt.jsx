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
  Circular
} from "@material-ui/core";
import url, { urlphp } from "../invoice/InvoiceService";
// import pdf from "../../pdf.png";
// import excel from "../../excel.png";
// import doc from "../../doc.jpg";
// import zip from "../../zipp.png";

const SingleReceipt = () => {
  const { id } = useParams();
  const [ReceiptList, setReceiptList] = useState([]);
  const [accountname, setaccountname] = useState("");
  const [img, setimg] = useState("");
  const [ref_img, setref_img] = useState("");
  const [columndata, setcolumndata] = useState([]);
  
  useEffect(() => {
    url.get("receipts/" + id).then(({ data }) => {
      setReceiptList(data);

    
      setimg(data[0].referrenceImgUrl);
      setref_img(data.referrenceImgUrl);
    })
  }, []);

  return (
    <div className="m-sm-30">
      <div className="mb-sm-30">
        <Breadcrumb
          routeSegments={[
            { name: "VIEW RECEIPT", path: "/expenseview" },
            { name: "RECEIPT" },
          ]}
        />
      </div>
    
        <small className="text-muted pl-4">
          <h5 className="pl-4">
            <strong>RECEIPT:</strong>
            {ReceiptList.registration_no}
          </h5>
        </small>
        <Divider></Divider>
        <Grid container spacing={2}>
          <Grid item lg={6} md={6} xs={12}>
          <Card className="pt-6" elevation={3}>
            <Table className="mb-4">
              <TableBody>
              {ReceiptList?.map((item, index) => (
                  <>
                <TableRow>
                  <TableCell className="pl-4">Division</TableCell>
                  <TableCell>{item.div_name}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="pl-4">Payment Mode</TableCell>
                  <TableCell>{item.payment_mode}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="pl-4">Paid Amount</TableCell>
                  <TableCell>
                    {item.paid_amount !== null
                      ? parseFloat(item.paid_amount).toLocaleString(undefined, {
                          minimumFractionDigits: 2,
                        })
                      : "0.00"}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="pl-4">Paid Date</TableCell>
                  <TableCell>
                    {moment(item.paid_date).format("DD MMM YYYY")}
                  </TableCell>
                </TableRow>
                {item.file !== null && (
                  <TableRow>
                    <TableCell className="pl-4">Bank Slip</TableCell>
                    <TableCell>
                      <Tooltip title="View">
                        <a >
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
                </>
               
              ))

            }
                  
              </TableBody>
            </Table>
            </Card>
          </Grid>
        
        

          <Grid item lg={6} md={6} xs={12}>


              </Grid>
              </Grid>
   
    </div>
  );
};



export default SingleReceipt;
