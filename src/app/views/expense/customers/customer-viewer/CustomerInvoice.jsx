import {
  Card,
  Fade,
  Icon,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import clsx from "clsx";
import { format } from "date-fns";
import React, { useState, useEffect } from "react";
import url from "../../../../views/invoice/InvoiceService";
import Axios from "axios";
import moment from "moment";
import Swal from "sweetalert2";


const CustomerInvoice = () => {
  const [expenseList, setexpenseList] = useState([]);
  useEffect(() => {
    Axios.get(url+"expense").then(({ data }) => {
      console.log(data)
       setexpenseList(data);
       
    });
 
}, []);
const setstatus=(id)=>{

  Axios.put(url+`expense/${id}`).then(({ data }) => {
    Swal.fire({
      title: 'Success',
      type: 'success',
      text: 'Updated successfully.',
    });
    Axios.get(url+"expense").then(({ data }) => {
      console.log(data)
       setexpenseList(data);
       
    });
  
    
 });
}
  return (
    <Fade in timeout={300}>
      <Card elevation={3} className="w-full overflow-auto">
        <h5 className="p-4 mt-0 mb-2">New Expense List</h5>

        <Table className="min-w-1050">
          <TableHead>
            <TableRow>
              <TableCell className="pl-4" colSpan={2}>
                No.
              </TableCell>
              <TableCell colSpan={2}>Date</TableCell>
              <TableCell colSpan={1}>Account</TableCell>
              <TableCell colSpan={2}>Referrence Bill Number</TableCell>
              <TableCell colSpan={1}>Paid To</TableCell>
              <TableCell colSpan={1}>Amount</TableCell>
              <TableCell colSpan={1}>Status</TableCell>
              {/* <TableCell colSpan={1}>Action</TableCell> */}
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
                <TableCell className="py-2 capitalize" align="left" colSpan={1}>
                  {invoice.payment_account_id==1 &&(
                    <p>Purchase</p>
                  )}
                  {invoice.payment_account_id==2 &&(
                    <p>Other</p>
                  )}
                </TableCell>
                <TableCell className="py-2 capitalize" align="left" colSpan={2}>
                  {invoice.referrence_bill_no}
                </TableCell>
                <TableCell className="py-2 capitalize" align="left" colSpan={1}>
                  {invoice.paid_to}
                </TableCell>
                <TableCell className="py-2 capitalize" align="left" colSpan={1}>
                  {invoice.amount} SAR
                </TableCell>
                <TableCell className="py-2 capitalize" colSpan={1}>
                  {/* <small
                    className={clsx({
                      "border-radius-4  text-white px-2 py-2px": true,
                      "bg-green": invoice.status === "paid",
                      "bg-error": invoice.status === "unpaid",
                    })}
                  >
                    {invoice.is_paid}
                  </small> */}
                  <IconButton onClick={e => setstatus(invoice.id)}><Icon>check</Icon></IconButton>
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

const invoiceList = [
  {
    _id: "5ece2cef3e562cbd61996dfds",
    date: new Date(),
    description: "Bit Bass Headphone",
    method: "PayPal",
    total: 15.25,
    status: "paid",
  },
  {
    _id: "5ece2cef3efdsfsdfcbd61996",
    date: new Date(),
    description: "Comlion Watch",
    method: "Visa Card",
    total: 75.25,
    status: "unpaid",
  },
  {
    _id: "5ece2cef3e56dsfdsfds61996",
    date: new Date(),
    description: "Beats Headphone",
    method: "Master Card",
    total: 45.25,
    status: "paid",
  },
];
export default CustomerInvoice;
