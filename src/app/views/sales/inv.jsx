import React, { useState, useEffect } from "react";
import { Breadcrumb } from "matx";
import Axios from "axios";
import MUIDataTable from "mui-datatables";
import { Icon, Tooltip } from "@material-ui/core";
import { Link,useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import url from "../invoice/InvoiceService";
import moment from "moment";
// import { Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

import {
  Table,
  TableHead,
  TableCell,
  TableBody,
  IconButton,
  TableRow,
  Button
} from "@material-ui/core";


const SimpleMuiTable = () => {
  const [isAlive, setIsAlive] = useState(true);
  const [userList, setUserList] = useState([]);
  const [podetails, setpodetails] = useState([]);
  const [poid, setpoid] = useState("");
  const [shouldOpenEditorDialog, setShouldOpenEditorDialog] = useState(false);

  useEffect(() => {
    url.get("invoice").then(({ data }) => {
      // if (isAlive) setUserList(data);
      // var myJSON = JSON.stringify(data.id);
     
      if (isAlive) setUserList(data);
     
      if(data.length)
      {
     
      setpoid(data[0].id)
      setpodetails(data);
      }
    });
    return () => setIsAlive(false);
  }, [isAlive]);
  const [count, setCount] = useState(0);
  const history = useHistory();
  const handeViewClick = (invoiceId) => {
   
    history.push(`/rfqanalysis/${invoiceId}`);
  };

  function getrow(id) {
    url.get("rfq/" + id).then(({ data }) => {
      if (isAlive) setpodetails(data[0].podetails);
    });
    return () => setIsAlive(false);
  }
  function Increment(e) {
    alert('3')
  }
  function Decrement() {
    setCount(count - 1);
  }
  const [showInvoiceEditor, setShowInvoiceEditor] = useState(false);
  const [isNewInvoice, setIsNewInvoice] = useState(false);

  const [click, setClick] = useState([]);

  const addNumber = () => {
    setClick([
      ...click,
      {
        id: click.length,
        value: Math.random() * 10
      }
    ]);
  };
  const removeData = (id) => {
    // alert(id)
    // let url = `https://jsonplaceholder.typicode.com/users/${id}`
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      icon: 'danger',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        url.delete(`quotation/${id}`)
          .then(res => {
            getrow()
            Swal.fire(
              'Deleted!',
              'Your imaginary file has been deleted.',
              'success'
            )

          })


        // For more information about handling dismissals please visit
        // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
    // url.delete(`http://dataqueuesystems.com/amaco/amaco/public/api/products/${id}`)
    // .then(res => {
   

    // })
    // getrow()
    // url.delete(url).then(res => {
    //     const del = employees.filter(employee => id !== employee.id)
    //     setEmployees(del)
    //     
    // })
  }
  const columns = [
    {
      name: "index", // field name in the row object
      label: "S.NO.", // column title that will be shown in table
      options: {
        filter: true,
        customHeadRender: ({index, ...column}) =>{
          return (
            <TableCell key={index} style={{width:80}}>  
              <span style={{marginLeft:18}}>S.NO.</span> 
            </TableCell>
          )
       }
      },
    },
    {
      name: "id", // field name in the row object
      label: "INVOICE NUMBER", // column title that will be shown in table
      options: {
        filter: true,
      },
    },
    
    {
      name: "issue_date",
      label: "ISSUE DATE",
      options: {
        filter: true,
      },
    },
    {
      name: "grand_total",
      label: "AMOUNT",
      options: {
        filter: true,
      },
    },
    {
      name: "status",
      label: "STATUS",
      options: {
        filter: true,
      },
    },

    //   {
    //     name: "id",
    //     label: "Action",
    //     options: {
    //         filter: true,
    //         customBodyRender: (value, tableMeta, updateValue) => {
    //              
    //             return (
    //             <IconButton onClick={() => removeData(tableMeta.rowData[4])
    //             }
    //             >
    //                     <Icon>close</Icon>
    //             </IconButton>


    //             )

    //         },
    //     },
    // },
    {
      name: "id",
      label: "ACTION",
      options: {
        filter: true,
        customHeadRender: ({index, ...column}) =>{
          return (
            <TableCell key={index} style={{textAlign:"right"}} className="pr-8">  
              <span style={{marginLeft:18}}>ACTION</span> 
            </TableCell>
          )
       },
        customBodyRender: (value, tableMeta, updateValue) => {
      
          return (
            <div style={{textAlign:"right"}} className="pr-8">
            <Link to={"/newinvoice/"+tableMeta.rowData[5]}>
              <Tooltip title="view more">
                <Icon color="primary">remove_red_eye</Icon>
              </Tooltip>
            </Link>
            {/* <Link to={"/sales/rfq-form/rfqanalysis?id=" + tableMeta.rowData[0]}>
            <IconButton>
              <Icon color="secondary">find_in_page</Icon>
            </IconButton>
          </Link> */}
          </div>

          )

        },
      },
    },
    //   {
    //     name: "",
    //     // label: "Action",
    //     options: {
    //       filter: true,
    //       customBodyRender: (value, tableMeta, updateValue) => {
    //         return (
    //           <Link to={"/sales/rfq-form/rfqanalysis?id=" + tableMeta.rowData[0]}>
    //             <IconButton>
    //               <Icon color="secondary">find_in_page</Icon>
    //             </IconButton>
    //           </Link>
  
    //         )
  
    //       },
    //     },
    // },
  ];



  return (
    <div>
      <div className="m-sm-30">
      <div className="mb-sm-30">
        <Breadcrumb
          routeSegments={[
            // { name: "Add new", path: "/sales/rfq-form/Rfqform" },
            { name: "SALES INVOICE" },
          ]}
        />

       <div className="text-right">
           <Link to={"/InvoiceCreate"}>
            <Button
              className="py-2"
              variant="outlined"
              color="primary"
            >
              <Icon>add</Icon> GENERATE INVOICES 
          </Button>
          </Link>
      </div>
      </div>
      <MUIDataTable
        title={"SALES INVOICE"}
        data={podetails.map((item, index) => {
          
            return [
              ++index,
              item.invoice_no,
              moment(item.issue_date).format('DD MMM YYYY'),
              parseFloat(item.grand_total).toLocaleString(undefined, {minimumFractionDigits:2}),
         
              item.status,
              item.id
              // moment(item.created_at).format('DD-MM-YYYY'),
              // (parseFloat(item.net_amount)).toFixed(2),
              // item.id
            ]
          
        })}
        columns={columns}
        options={{
          // filterType: "textField",
          // responsive: "simple",
          // selectableRows: "none", // set checkbox for each row
          // search: false, // set search option
          // filter: false, // set data filter option
          // download: false, // set download option
          // print: false, // set print option
          // pagination: true, //set pagination option
          // viewColumns: false, // set column option
          // elevation: 0,
          rowsPerPageOptions: [10, 20, 40, 80, 100],
          selectableRows: "none",
          filterType: "dropdown",
          responsive: "scrollMaxHeight",
          rowsPerPage: 10,
          
        }}
      />
    </div>
    </div>
  );
}


export default SimpleMuiTable;
