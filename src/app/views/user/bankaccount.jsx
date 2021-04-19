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


const Bank_Account = () => {
  const [isAlive, setIsAlive] = useState(true);
  const [userList, setUserList] = useState([]);
  const [qdetails, setqdetails] = useState([]);
  const [shouldOpenEditorDialog, setShouldOpenEditorDialog] = useState(false);

  const columnStyleWithWidth1 = {
    top: "0px",
    left: "0px",
    zIndex: "100",
    position: "sticky",
    backgroundColor: "#fff",
    width: "580px",
    wordBreak: "break-all",
    
  }
  const columnStyleWithWidth = {
    top: "0px",
    left: "0px",
    zIndex: "100",
    position: "sticky",
    backgroundColor: "#fff",
    width: "140px",
    wordBreak: "break-word",
    
  }
  useEffect(() => {
    url.get("quotations-rejected-list ").then(({ data }) => {
      // if (isAlive) setUserList(data);
      // var myJSON = JSON.stringify(data.id);
      
      // if(data.length)
      // {
        setUserList(data);
     
       setqdetails(data);
      // }
    });
    return () => setIsAlive(false);
  }, []);
  const [count, setCount] = useState(0);
  const history = useHistory();
  const handeViewClick = (invoiceId) => {
   
    history.push(`/rfqanalysis/${invoiceId}`);
  };

  function getrow(id) {
    url.get("rfq/" + id).then(({ data }) => {
      if (isAlive) setqdetails(data[0].qdetails);
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
        url.delete(`products/${id}`)
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
    
    // })
  }
  const columns = [
    {
      name: "id", // field name in the row object
      label: "S.No.", 
     // column title that will be shown in table
      options: {
        filter: true,
       
        // cellStyle: {
        //   width: 20,
        //   maxWidth: 20
        // },
        
      },
     
    },
    {
      name: "quotation_no", // field name in the row object
      label: "Quotation No", // column title that will be shown in table
      options: {
        filter: true,
        wordBreak:'break-word',
        customHeadRender: ({index, ...column}) =>{
          return (
            <TableCell key={index} style={columnStyleWithWidth} >  
              <span style={{marginLeft:18}}>Quotation No</span> 
            </TableCell>
          )
       }
        
      },
    },
    {
      name: "fname", // field name in the row object
      label: "Company Name", // column title that will be shown in table
      options: {
        customHeadRender: ({index, ...column}) =>{
          return (
            <TableCell key={index} style={columnStyleWithWidth1} >  
              <span style={{marginLeft:18}}>Company Name</span> 
            </TableCell>
          )
       }
      },
    },
    {
      name: "name",
      label: "Quote Date",
      options: {
        filter: true,
      },
    },
    {
      name: "require_date",
      label: "Amount",
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
      label: "Action",
      options: {
        filter: true,
        customBodyRender: (value, tableMeta, updateValue) => {
         
          return (
            <span>
            <Link to={`/quote/${tableMeta.rowData[5]}/reject`}>
              <Tooltip title="View More">
                <Icon color="primary">remove_red_eye</Icon>
           </Tooltip>
            </Link>
            {/* <Link to={"/sales/rfq-form/rfqanalysis?id=" + tableMeta.rowData[0]}>
            <IconButton>
              <Icon color="secondary">find_in_page</Icon>
            </IconButton>
          </Link> */}
          </span>

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
        {/* <Breadcrumb
          routeSegments={[
            // { name: "Add new", path: "/sales/rfq-form/Rfqform" },
            { name: "Sales Quotation" },
          ]}
        />

        <div className="text-right">
          <Link to={"/Newquoteanalysis"}>
            <Button
              className="py-2"
              variant="outlined"
              color="primary"
            >
              <Icon>add</Icon> Add New 
          </Button>
          </Link>
        </div> */}
      </div>
      
            </div>
          
            <div className="mb-8">
              
              <Button variant="text" className="w-full justify-start px-5">
                <Icon color="primary">open_with</Icon>
                <span className="ml-8">Bank Name</span>
              </Button>
              <Button variant="text" className="w-full justify-start px-5">
                <Icon color="primary">open_with</Icon>
                <span className="ml-8">Account Number</span>
              </Button>
              <Button variant="text" className="w-full justify-start px-5">
                <Icon color="primary">open_with</Icon>
                <span className="ml-8">IBAN Number</span>
              </Button>
              <Button variant="text" className="w-full justify-start px-5">
                <Icon color="primary">open_with</Icon>
                <span className="ml-8">Bank Address</span>
              </Button>
              

    </div>
    </div>
  );
}


export default Bank_Account;
