import React, { useState, useEffect } from "react";
import { Breadcrumb,ConfirmationDialog } from "matx";
import MUIDataTable from "mui-datatables";
import { Icon } from "@material-ui/core";
import { Link } from "react-router-dom";
import MemberEditorDialog from "./partycontact"
import Tooltip from '@material-ui/core/Tooltip';
import url from "../invoice/InvoiceService";
import {
    TableCell,
    Button
} from "@material-ui/core";
const columnStyleWithWidth = {
  top: "0px",
  left: "0px",
  zIndex: "100",
  position: "sticky",
  backgroundColor: "#fff",
  width: "600px",
  wordBreak: "break-word",
  wordWrap: "break-word",
  overflowWrap:"break-word",
  hyphens:"auto"
}
const columnStyleWithWidthSno = {
  top: "0px",
  left: "0px",
  zIndex: "50",
  position: "sticky",
  backgroundColor: "#fff",
  width: "50px",
}


const SimpleMuiTable = () => {
    const [isAlive, setIsAlive] = useState(true);
    const [userList, setUserList] = useState([]);
   
    const [shouldOpenEditorDialog, setShouldOpenEditorDialog] = useState(false);
    const [
    shouldOpenConfirmationDialog,
    setShouldOpenConfirmationDialog,
  ] = useState(false);
  const handleDialogClose = () => {
    setShouldOpenEditorDialog(false);
   
  };


  
    useEffect(() => {
      // get the party Information
        url.get("parties").then(({ data }) => {
            if (isAlive) setUserList(data);
           
        });
        

        
       
        return () => setIsAlive(false);
    }, [isAlive]);
    
  
      
     
   // get the party Information
    
  
   
  

  

    
  
  

const columns = [
  {
    name: "id",
    label: "S.NO.",
    options: {
    customHeadRender: ({index, ...column}) =>{
      return (
        <TableCell key={index} style={columnStyleWithWidthSno}>  
          <span style={{marginLeft:15}}>S.NO.</span> 
        </TableCell>
      )
   },
  }
},
  {
    name: "firm_name",
    label: "COMPANY NAME",
    options: {
      
      customHeadRender: ({index, ...column}) =>{
        return (
          <TableCell key={index} style={columnStyleWithWidth}>  
            <span style={{paddingLeft:15}}>COMPANY NAME</span>
          </TableCell>
        )
     },
  },
},
{
  name: "vat_no",
  label: "VAT NO",
  options: {
      filter: true,
  },
},
{
  name: "vendor code",
  label: "VENDOR CODE",
  options: {
      filter: true,
  },
}, 


 
  {
    name: "id",
    label: "ACTION",
    options: {
        
        filter: true,
        customHeadRender: ({index, ...column}) =>{
          return (
            <TableCell key={index} style={{textAlign:"right"}}  className="pr-8">  
              <span >ACTION</span>
            </TableCell>
          )
       },
        customBodyRender: (value, tableMeta, updateValue) => {
           
            return (
              
              <div
            style={{
              textAlign: "end",
              
            }}
            className="pr-8"
          >
              
              <Link style={{textAlign:"right",paadingRight:20}} to={"/pages/view-customer?id=" +tableMeta.rowData[4] }>
            
                <Tooltip title="Party contact details">
                <Icon color="primary" style={{transform: "rotate(270deg)",
  transition: "all 0.25s ease-in-out",textAlign:"right"}}>arrow_drop_down_circle</Icon>
                
                </Tooltip>
            
            </Link>
           </div>
         
            
            
            )
            
        },
    },
},
];

    
  
  return ( 
    <div>
       <div className="m-sm-30">
      <div  className="mb-sm-30">
      <div className="flex flex-wrap justify-between">
          <Breadcrumb
            routeSegments={[
              // { name: "", path: "./Addparty" },
              { name: "PARTY" }
            ]}
          />
           {shouldOpenEditorDialog && (
          <MemberEditorDialog
            handleClose={handleDialogClose}
            open={shouldOpenEditorDialog}
          />
        )}
        {shouldOpenConfirmationDialog && (
          <ConfirmationDialog
            open={shouldOpenConfirmationDialog}
            onConfirmDialogClose={handleDialogClose}
            text="Are you sure to delete?"
          />
        )}
      
       
        <div className="text-right">
                <Link to={"./Addparty"}>
                <Button
            className="py-2"
            color="primary"
            variant="outlined"
          >
          <Icon>add</Icon>
          ADD NEW
          </Button>
          </Link>
          
          </div>
          </div>
          </div>
      <MUIDataTable
                title={"PARTY"}
                data={
                  userList.map((item, index) => {
                    console.log(item)
                   
                      return [
          
                        ++index,
                        item.firm_name,
                        // (item.post_box_no?item.post_box_no+",":'')+""+(item.street?item.street+",":'')+""+(item.city?item.city+", \n":'')+""+(item.proviance?item.proviance+",":'')+""+(item.zip_code?item.zip_code:''),
                        item.vat_no,
                        item.party_code,
                        item.id,
                      ]
                    
                  })
                }
                columns={columns}
                options={{
                    filterType: "textField",
                    responsive: "simple",
                    selectableRows: "none", 
                    rowsPerPageOptions: [10, 20, 40, 80, 100],
                }}
            />
    </div> 
    </div>
  ); } 
   

export default SimpleMuiTable;
