import React, { useState, useEffect } from "react";
import { Breadcrumb } from "matx";
import Axios from "axios";
import MUIDataTable from "mui-datatables";
import { Icon } from "@material-ui/core";
import { Link,useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import url from "../../invoice/InvoiceService"
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
  Button,
  Typography,
  Tooltip
} from "@material-ui/core";
const columnStyleWithWidth = {
  top: "0px",
  left: "0px",
  zIndex: "100",
  position: "sticky",
  backgroundColor: "#fff",
  width: "80px",
  wordBreak: "break-all",
  textAlign:"center"
}
const columnStyleWithWidth1 = {
  top: "0px",
  left: "0px",
  zIndex: "100",
  textAlign:"center",
  position: "sticky",
  backgroundColor: "#fff",
  width: "500px",
  wordBreak: "break-all",
}

const SimpleMuiTable = () => {
  const [isAlive, setIsAlive] = useState(true);
  const [userList, setUserList] = useState([]);
  const [rfq_details, setrfq_details] = useState([]);
  const [shouldOpenEditorDialog, setShouldOpenEditorDialog] = useState(false);

  useEffect(() => {
    url.get("rfq").then(({ data }) => {
      // if (isAlive) setUserList(data);
      // var myJSON = JSON.stringify(data.id);
      
     
      if (data.length!==0){
        setUserList(data);
      
        setrfq_details(data[0].rfq_details);
      }
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
      if (isAlive) setrfq_details(data[0].rfq_details);
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


        
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
    
  }
  const columns = [
    {
      name: "id", // field name in the row object
      label: "S.NO.", // column title that will be shown in table
      options: {
       
        customHeadRender: ({index, ...column}) =>{
          return (
            <TableCell key={index} style={columnStyleWithWidth} className="pr-0">  
              <span >S.NO.</span> 
            </TableCell>
          )
       },
       setCellProps:()=>({
         align:"center"
       })
      }
    },
    {
      name: "fname", // field name in the row object
      label: "COMPANY NAME", // column title that will be shown in table
      options : {
				customHeadRender: ({index, ...column}) =>{
          return (
            <TableCell key={index} style={columnStyleWithWidth1}>  
              <span style={{marginLeft:18,align:"center"}}>COMPANY NAME</span> 
            </TableCell>
          )
       },
       setCellProps:()=>({
         align:"center"
       })
			}
    },
    {
      name: "name",
      label: "RFQ DATE",
      options : {
				customHeadRender : (value, tableMeta, updateValue) => {
					return (
						<TableCell   style={{textAlign:"center"}}> <span style={{align:"center"}}>RFQ DATE</span>  </TableCell> )
				},
        setCellProps:()=>({
          align:"center"
        })
			}
    },
    {
      name: "require_date",
      label: "BID CLOSING DATE",
      options: {
        filter: true,
        customHeadRender : (value, tableMeta, updateValue) => {
					return (
						<TableCell   style={{textAlign:"center"}}> <span style={{align:"center"}}>RFQ DATE</span>  </TableCell> )
				},
        setCellProps:()=>({
          align:"center"
        })
      },
    },
    {
      name: "id",
      label: "ACTION",
      options: {
        filter: true,
        customHeadRender: ({index, ...column}) =>{
          return (
            <TableCell key={index} style={{textAlign:'right'}} className="pr-8">  
              <span style={{marginLeft:18}}>ACTION</span> 
            </TableCell>
          )
       },
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
           <div style={{textAlign:'right'}} className="pr-8">
            <Link to={"/invoice/" + tableMeta.rowData[4]}>
              <Tooltip title="View More">
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
      <div className="flex flex-wrap justify-between">
        <Breadcrumb
          routeSegments={[
            { name: "ADD NEW", path: "/sales/rfq-form/Rfqform" },
            { name: "RFQ" },
          ]}
        />

        <div className="text-right">
          <Link to={"/sales/rfq-form/Rfqform"}>
            <Button
              className="mt-2 py-2"
              variant="outlined"
              color="primary"
            >
              <Icon>add</Icon> ADD NEW 
          </Button>
          </Link>
        </div>
        </div>
      </div>
      <MUIDataTable
        title={"RFQ"}
        data={userList.map((item, index) => {
       
         
            return [

              ++index,
              item.party[0].firm_name,
              // ++index,
              moment(item.requested_date).format('DD MMM YYYY'),
              moment(item.require_date).format('DD MMM YYYY'),
              item.id,
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
          // filterType: "dropdown",
          rowsPerPage: 10,
          // expandableRows: true,
          // expandableRowsOnClick: true,
          renderExpandableRow: (rowData, rowMeta) => {
            
            return (
              <tr>
                <td colSpan={6}>
                  <Table style={{ minWidth: "650" }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>product Name</TableCell>
                        <TableCell>description</TableCell>
                        <TableCell>Quantity</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                    {/* {userList.map((item, index) => {
                        if(rowData[0]===item.id)
                      {
                      {item.rfq_details.map((row,index) => {
                      
                       return(<TableRow key={row.product[0].id}>

                          <TableCell>{row.description}</TableCell>
                          <TableCell>{row.product[0].name}</TableCell>
                          <TableCell>{row.product[0].id}</TableCell>
                        </TableRow>
                       )
                      })}
                      } */}
                      {userList.map((item, index) => {
                        
                        {item.rfq_details.map(row => (
                          <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                              {row.id}
                            </TableCell>
                            <TableCell align="right">{row.product[0].name}</TableCell>
                            <TableCell align="right">{row.product[0].name}</TableCell>
                            <TableCell align="right">{row.product[0].name}</TableCell>
                            <TableCell align="right">{row.product[0].name}</TableCell>
                          </TableRow>
                        ))}
                      
                      })}
                      
                    {/* })} */}
                   
                    </TableBody>
                  </Table>
                </td>
              </tr>
            )
          }
        }}
      />
    </div>
    </div>
  );
}


export default SimpleMuiTable;
