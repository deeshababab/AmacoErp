import {
  Card,
  Fade,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Icon,
  IconButton,
  TableHead,
} from "@material-ui/core";
import clsx from "clsx";
import { format } from "date-fns";
import React, { useState, useEffect } from "react";
import url from "../../../../views/invoice/InvoiceService";
import Axios from "axios";
import moment from "moment";

const CustomerLogs = () => {
  const [expenseList, setexpenseList] = useState([]);
  useEffect(() => {
    Axios.get(url+"expense-paid").then(({ data }) => {
      console.log(data)
       setexpenseList(data);
       
    });
 
}, []);
const setstatus=(id)=>{

  Axios.put(url+`expense/${id}`).then(({ data }) => {
    console.log(data)
  
    
 });
}
  return (
    <Fade in timeout={300}>
      <Card elevation={3} className="w-full overflow-auto">
        <h5 className="p-4 mt-0 mb-2">Verified Expense List</h5>

        <Table className="min-w-1050">
          <TableHead>
            <TableRow>
              <TableCell className="pl-4" colSpan={2}>
                No.
              </TableCell>
              <TableCell colSpan={2}>Date</TableCell>
              <TableCell colSpan={2}>Account Type</TableCell>
              <TableCell colSpan={3}>Referrence Bill Number</TableCell>
              <TableCell colSpan={1}>Paid To</TableCell>
              <TableCell colSpan={1}>Amount</TableCell>
              <TableCell colSpan={1}>Tax Amount</TableCell>
      
            </TableRow>
          </TableHead>
          <TableBody>
            {expenseList.map((invoice, index) => (
              
              <TableRow key={invoice.id}>
                <TableCell
                  className="pl-4 py-2 capitalize"
                  align="left"
                  colSpan={2}
                >
                
                  {index+1}
                </TableCell>
                
                <TableCell className="py-2 capitalize" align="left" colSpan={2}>
                   {moment(invoice.paid_date).format('DD  MMM, YYYY ')} 
                </TableCell>
                <TableCell className="py-2 capitalize" align="left" colSpan={2}>
                  Purchase
                </TableCell>
                <TableCell className="py-2 capitalize" align="left" colSpan={3}>
                  {invoice.referrence_bill_no}
                </TableCell>
                <TableCell className="py-2 capitalize" align="left" colSpan={1}>
                  {invoice.paid_to}
                </TableCell>
                <TableCell className="py-2 capitalize" align="left" colSpan={1}>
                  {invoice.amount} SAR
                </TableCell>
                <TableCell className="py-2 capitalize" align="left" colSpan={1}>
                  {invoice.tax} SAR
                </TableCell>
                
                {/* <TableCell className="py-2" colSpan={1}>
                  <IconButton>
                    <Icon>arrow_right_alt</Icon>
                  </IconButton>
                </TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </Fade>
  );
};

const logList = [
  {
    type: "POST",
    date: new Date(),
    description: "/api/shop",
    method: "PayPal",
    ip: "110.145.15.25",
    status: 200,
  },
  {
    type: "POST",
    date: new Date(),
    description: "/api/customer",
    method: "Visa Card",
    ip: "110.145.75.25",
    status: 401,
  },
  {
    type: "GET",
    date: new Date(),
    description: "/api/get-customer-details",
    method: "Master Card",
    ip: "110.145.45.25",
    status: 200,
  },
  {
    type: "DELETE",
    date: new Date(),
    description: "/api/delete-customer",
    method: "Master Card",
    ip: "110.145.45.25",
    status: 200,
  },
];
export default CustomerLogs;
