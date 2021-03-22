import React,{ useState, useEffect}from "react";
import { Breadcrumb,ConfirmationDialog } from "matx";
import Tooltip from '@material-ui/core/Tooltip';
import { Link, useParams } from "react-router-dom";
import Axios from "axios";
import clsx from "clsx";
import moment from "moment";
import {
  Avatar,
  Button,
  Card,
  Divider,
  Grid,
  Icon,
  Table,
  TableBody,
  IconButton,
  TableCell,
  TableRow,
} from "@material-ui/core";

import url from "../../../invoice/InvoiceService"


const CustomerInfo = () => {
  let search = window.location.search;
  const formData = new FormData();
  let params = new URLSearchParams(search);
  const {id} =useParams();
  const [ExpenseList, setExpenseList] = useState([]);
  const [files, setfiles] = useState([]);
  const [accountname, setaccountname] = useState('');
  const [img, setimg] = useState('');
  const [columndata, setcolumndata] = useState([]);
  useEffect(() => {

   
    url.get("expense/"+id).then(({ data }) => {
          console.log(data[0].payment_account[0].name)
         setExpenseList(data[0]);
         setaccountname(data[0].payment_account[0].name)
         setcolumndata(data[0].column_data)
         setimg(data.img)
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
    <small className="text-muted pl-4"><h5 className="pl-4"><strong>Expense Details:</strong>{ExpenseList.registration_no}</h5></small>
      <Divider></Divider>
      <Grid container spacing={2}>
      {/* <TableRow>
            
            <TableCell colspan={2} className="pl-4"><small className="text-muted"><h5><strong>Expense Details:</strong>{ExpenseList.registration_no}</h5></small>
        
        </TableCell>
          </TableRow>  */}
        <Grid item lg={6} md={6} xs={12}>
      


      <Table className="mb-4">
        <TableBody>
        
          
              
              
        <TableRow>
            <TableCell className="pl-4">Payment Account</TableCell>
            <TableCell>{accountname}</TableCell>
          </TableRow>
              <TableRow>
              <TableCell className="pl-4">Reference Bill Number</TableCell>
              <TableCell>{ExpenseList.referrence_bill_no}</TableCell>
            </TableRow>
            
           
            <TableRow>
              <TableCell className="pl-4">Description</TableCell>
              <TableCell>{ExpenseList.description}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="pl-4">Tax Amount</TableCell>
              <TableCell>{parseFloat(ExpenseList.tax).toLocaleString(undefined, {minimumFractionDigits:2})}
         </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="pl-4">Paid Date</TableCell>
              <TableCell>{moment(ExpenseList.paid_date).format('DD MMM YYYY')}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="pl-4">Paid To</TableCell>
              <TableCell>{ExpenseList.paid_to}</TableCell>
            </TableRow>
            {columndata.map((item, index) => {
              console.log(item.column)
              return (
              <TableRow>
              <TableCell className="pl-4">{item.column.name}</TableCell>
              <TableCell>{item.value}</TableCell>
            </TableRow>
            )
              }
            )}
            
       
        </TableBody>
      </Table>
      </Grid>
    
        <Grid item lg={6} md={6} xs={12}>
        <Table className="mb-4">
        <TableBody>
         
            
          <TableRow>
            <TableCell className="pl-4">Amount</TableCell>
            <TableCell>{parseFloat(ExpenseList.amount).toLocaleString(undefined, {minimumFractionDigits:2})}
         </TableCell>
          </TableRow>
          {ExpenseList.bank_ref_no!==null &&(<TableRow>
            <TableCell className="pl-4">Bank Reference Number</TableCell>
            <TableCell>{ExpenseList.bank_ref_no}</TableCell>
          </TableRow>
          )}
          {ExpenseList.bank_slip!=="No file uploaded"&&(<TableRow>
          <TableCell className="pl-4">Bank Slip</TableCell>
            <TableCell >
            
           
            
            {/* {files.map((item, index) => ( */}
              {/* <Card
                elevation={6}
                className={clsx({
                  "flex-column justify-left items-center pr-4 cursor-pointer": true,
                })}
              > */}
               

                {/* <h5 className="m-0">{item.file_name}</h5> */}
                <Tooltip title="View">
                <a href={img}><img src={img} href={img} className="border-radius-4 w-100 mr-3"  style={{width:100,height:100}} target="_blank">
                 
                </img></a>
                </Tooltip>
              {/* </Card> */}
            {/* ))} */}
                   

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

const customerInfo = [
  {
    title: "Firm Name",
    value: "+1 439 327 546",
  },
  {
    title: "Registration Nubmber",
    value: "USA",
  },
  {
    title: "Vat number",
    value: "New York",
  },
  {
    title: "P.0 Box",
    value: "Street Tailwood, No. 17",
  },
  {
    title: "Address 2",
    value: "House #19",
  },
];

export default CustomerInfo;