import React, { useState, useEffect } from "react";
import { borders } from '@material-ui/system';
import {
  Icon,
  Divider,
   Grid,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Card,
  Button
} from "@material-ui/core";
import { Link, useParams,useHistory } from "react-router-dom";
import { getInvoiceById } from "../invoice/InvoiceService";
import { format } from "date-fns";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import axios from "axios";
import { cond } from "lodash";
import logo from './../invoice/amaco-logo.png';
import logos from './../invoice/vision2030.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import useSettings from '../../hooks/useSettings';
import apiurl from '../../../config';
import url from "../invoice/InvoiceService";
import Arabic from '../../../lang/ar.json';
import { IntlProvider } from 'react-intl';
import { FormattedMessage } from 'react-intl';
import Swal from "sweetalert2";
import Axios from "axios";
import history from "history.js";
import moment from "moment";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
const locale = navigator.language;

// import Image from 'react-image-resizer';


const useStyles = makeStyles(({ palette, ...theme }) => ({
  "@global": {
    "@media print": {
      "body, *, html": {
        visibility: "hidden",
        size: "auto",
        "-webkit-print-color-adjust": "exact !important",
        fontFamily: "Calibri",
       
      },
      "#table": {
        display:"-webkit-box",
    display: "-ms-flexbox",
    display: "right",
    width: "320px",
    margin:"1px",
    position: "absolute",
   
    // top: "38.9cm !important",
    // paddingRight: "24cm !important"
       },
       "#header": {
        // padding: "10px",
       
        /* These do the magic */
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
      },
       
      "#footer": {
        //     display:"-webkit-box",
        // display: "-ms-flexbox",
        // display: "center",
        // width: "100%",
        // position: "absolute",

        // top: "38.9cm !important",
        // paddingRight: "12cm !important"
        backgroundColor: "#F8F8F8",
        borderTop: "1px solid #E7E7E7",
        textAlign: "center",
        padding: "20px",
        position: "fixed",
        left: "0",
        bottom: "0",
        height: "auto",
        width: "100%",
      },
      "#print-area": {
        position: "fixed",
        top: 45,
        marginTop: "45px",
        left: 0,
        right: 0,
        height: "100%",
        border: "5px solid black",

        "& *": {
          visibility: "visible",
        },
      },
    },
  },
  invoiceViewer: {
    "& h5": {
      fontSize: 15,
    },
  },
}));


const InvoiceViewer = ({ toggleInvoiceEditor }) => {
  const [state, setState] = useState({});
  const [po_number, setpo_number] = useState();
  const [rdate, setrdate] = useState([]);
  const [ddate, setddate] = useState([]);
  const [cname, setcname] = useState([]);
  const [company, setcompany] = useState("");
  const [city, setcity] = useState("");
  const [street, setstreet] = useState("");
  const [pono, setpo] = useState("");
  const [zipcode, setzipcode] = useState("");
  const [vatno, setvatno] = useState("");
  const [regno, setregno] = useState("");
  const [qdetails, setqdetails] = useState([]);
  const [net_amount, setnet_amount] = useState("");
  const [vat_in_value, setvat_in_value] = useState("");
  const [total_value, settotal_value] = useState("");
  const [validity,setvalidity] =useState()
  const [payment_terms,setpayment_terms] =useState('')
  const [warranty,setwarranty] =useState('')
  const [delivery_time,setdelivery_time] =useState()
  const [qid,setqid] =useState()
  const [rno,setrno] =useState()
  const [inco_terms,setinco_terms] =useState()
  const [contactpersoncontact, setcontactpersoncontact] = useState('');
  const [contactpersonemail, setcontactpersonemail] = useState('');
  const [designation, setdesignation] = useState('')
  const [contactperson, setcontactperson] = useState('');
  const [vendor_id, setvendor_id] = useState('');
  const { id } = useParams();
  const classes = useStyles();
  var fval =10;
  const { settings, updateSettings } = useSettings();
  const history = useHistory()
  const [anchorEl, setAnchorEl] = React.useState(null);
  function handleClose() {
    setAnchorEl(null);
  }
  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }
  

  useEffect(() => {
   
    updateSidebarMode({ mode: "close" })
    document.title="Purchase Order - Amaco"
    url.get("purchase-quotation/"+id).then(({ data }) => {
     console.log(moment(data[0].updated_at).format('DD MMM YYYY'))
    // setcname(data[0].party.fname)
      setpo_number(data[0].po_number)

      setqid(data[0].id)
      setrno(data[0].rfq_id)
      setrdate(moment(data[0].updated_at).format('DD MMM YYYY'))
      setcompany(data[0].party.firm_name)
      setcity(data[0].party.city)
      setstreet(data[0].party.street)
      setzipcode(data[0].party.zip_code)
      setpo(data[0].party.post_box_no)
      setregno(data[0].party.registration_no)
      setvatno(data[0].party.vat_no)
      setqdetails(data[0].quotation_details)
      setnet_amount(data[0].net_amount)
      setvat_in_value(data[0].vat_in_value)
      settotal_value(data[0].total_value)
      setvalidity(data[0].validity)
      setwarranty(data[0].warranty)
      setinco_terms(data[0].inco_terms)
      setpayment_terms(data[0].payment_terms)
      setdelivery_time(data[0].delivery_time)
      setcontactperson(data[0].contact.fname)
      setcontactpersonemail(data[0].contact.email)
      setcontactpersoncontact(data[0].contact.mobno)
      setdesignation(data[0].contact.designation)
      setvendor_id(data[0].party.vendor_id)


    });

    // if (id !== "add")
    //   getInvoiceById(id).then((res) => {
    //     setState({ ...res.data });
    //   });
  }, [id]);
  const updateSidebarMode = (sidebarSettings) => {
    if(sidebarSettings.mode=="close")
    {
    let activeLayoutSettingsName = settings.activeLayout + "Settings";
    let activeLayoutSettings = settings[activeLayoutSettingsName];
    updateSettings({
      ...settings,
      [activeLayoutSettingsName]: {
        ...activeLayoutSettings,
        leftSidebar: {
          ...activeLayoutSettings.leftSidebar,
          ...sidebarSettings,
        },
      },
    });
  }
  else
  {
    window.location.href=`../Newinvoiceview`
    let activeLayoutSettingsName = settings.activeLayout + "Settings";
    let activeLayoutSettings = settings[activeLayoutSettingsName];
    updateSettings({
      ...settings,
      [activeLayoutSettingsName]: {
        ...activeLayoutSettings,
        leftSidebar: {
          ...activeLayoutSettings.leftSidebar,
          ...sidebarSettings,
        },
      },
    });
     
  }

  }
  const editpurchase =() =>{
    updateSidebarMode({ mode: "on" })
    window.location.href=`../purchaseedit/${id}`
    
  }
  const invoicegenrate= (sidebarSettings) => {
    // alert(id)
    // const postatus={
    //   status:"po"
    // }
   
    // Swal.fire({
    //   title: 'Are you sure?',
    //   text: 'You want to create Invoice !',
    //   icon: 'danger',
    //   showCancelButton: true,
    //   confirmButtonText: 'Yes,!',
    //   icon: 'warning',
    //   cancelButtonText: 'No, keep it'
    // }).then((result) => {
    //   if (result.value) {
       
    
        
    //     let activeLayoutSettingsName = settings.activeLayout + "Settings";
    // let activeLayoutSettings = settings[activeLayoutSettingsName];
    // updateSettings({
    //   ...settings,
    //   [activeLayoutSettingsName]: {
    //     ...activeLayoutSettings,
    //     leftSidebar: {
    //       ...activeLayoutSettings.leftSidebar,
    //       ...sidebarSettings,
    //     },
    //   },
    // });
     
    
      
     window.location.href=`../poinvoicegenerate/${id}`
        
        
  
    
        

    //   } else if (result.dismiss === Swal.DismissReason.cancel) {
    //     Swal.fire(
    //       'Cancelled',
    //       '........:)',
    //       'error'
    //     )
    //   }
    // })
    
}
const deletepo = ()=>{
  Swal.fire({
    title: 'Are you sure?',
    text: 'You will not be able to recover this Purchase Order!',
    icon: 'danger',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    icon: 'warning',
    cancelButtonText: 'No, keep it'
  }).then((result) => {
    if (result.value) {
      url.delete(`purchase-quotation/${id}`)
  .then(res => {
      
      Swal.fire(
        'Deleted!',
        'Purchase Order has been deleted.',
        'success'
      )
      updateSidebarMode({ mode: "on" })
      // history.push('/quoateview')
      
  })
  
      

    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire(
        'Cancelled',
        'Your Purchase Order is safe :)',
        'error'
      )
    }
  })
}


  const handlePrint = () => window.print();
  window.onafterprint = function(){ window.close()
    window.location.href = ``
  };

  let subTotalCost = 0;
  let {
    orderNo,
    buyer,
    seller,
    item: invoiceItemList = [],
    status,
    vat,
    date,
  } = state;

  return (
    <div className={clsx("invoice-viewer py-4", classes.invoiceViewer)}>
      <div className="viewer_actions px-4 mb-5 flex items-center justify-between">
        {/* <Link to="/sales/rfq-form/rfqview"> */}
          <IconButton onClick={() =>  updateSidebarMode({ mode: "on" })}>
            <Icon>arrow_back</Icon>
          </IconButton>
        {/* </Link> */}
        <div>
          {/* <Button
            className="mr-4 py-2"
            color="primary"
            variant="outlined"
            onClick={() => toggleInvoiceEditor()}
          >
            Edit Quote
          </Button> */}
          <Button
        variant="outlined"
        color="primary"
        className="mr-4 py-2"
        aria-owns={anchorEl ? "simple-menu" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        Action<Icon>expand_more</Icon>
      </Button>
          <Menu
        
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
                    {/* <MenuItem  onClick={() => invoicegenrate({ mode: "on" })}>
                    Genrate Purchase Order
                      </MenuItem> */}
                      
                      <MenuItem  onClick={() => deletepo()}>
                      Delete PurchaseOrder
                      </MenuItem>
                      <MenuItem  onClick={() => handlePrint()}>
                      Print PurchaseOrder
                      </MenuItem>
                      <MenuItem  onClick={() => editpurchase()}>
                      Edit PurchaseOrder
                      </MenuItem>
                    
          </Menu>
     
          {/* <Button
            className="mr-4 py-2"
            color="primary"
            variant="outlined"
            onClick={() => invoicegenrate({ mode: "on" })}
          >
            Genrate Invoice
          </Button> */}
          {/* <Button
            onClick={handlePrint}
            className="py-2"
            color="secondary"
            variant="outlined"
          >
            Print Purchase Order
          </Button> */}
        </div>
      </div>

       <div id="print-area"> 
      
       <header id="header">

          <div className="px-2 flex justify-between">
            <div className="flex">
              <div className="pr-12">
                <img src={logo} alt="this is car image" style={{ marginLeft: '15px', width: 237 }} />

              </div>
              {/* <div className="pr-12">
              <h4><IntlProvider locale={locale} messages={Arabic}>
                  <FormattedMessage
                    id="app.channel.plug"
                    defaultMessage="Amaco Arabia Contracting Company"
                    values="Amaco Arabia Contracting Company"
                  />
                </IntlProvider></h4>
                <h5 className="font-normal b-4 capitalize">
                  <strong>AMACO ARABIA CONTRACTING COMPANY
                
                </strong>
                </h5>
                <h6 className="font-normal b-4 capitalize">
                 C.R No 205500334 | VAT 810398615200003

   
                </h6>
                
              </div> */}
              
            </div>
            <div className="flex">
            <div>
    <h4 style={{color:'#1d2257',textAlign:'right'}}><IntlProvider locale={locale} messages={Arabic}>
        <FormattedMessage
          id="app.channel.plug"
          defaultMessage="Amaco Arabia Contracting Company"
          values="Amaco Arabia Contracting Company"
        />
      </IntlProvider></h4>
      <h5 style={{color:'#1d2257',textAlign:'right'}}>
        AMACO ARABIA CONTRACTING COMPANY
    
      </h5>
      <h6 style={{color:'#555'}} className="font-normal b-4 capitalize">
       C.R No 205500334 | VAT 810398615200003


      </h6>
      
    </div>
            </div>
          </div>


        </header>


        <hr></hr>
        {/* <Divider  style={{marginBottom: '15px'}}/> */}
        <div className="viewer__order-info px-4 mb-4 flex justify-between">
          <div>
            <h5 className="font-normal t-4 capitalize">
              <strong>P.O No: </strong>{" "}
             
                {po_number}
              
            </h5>
          </div>
          <div className="text-center">
            <h4><u>PURCHASE ORDER</u></h4>
           
          </div>
          <div className="text-right">
            <h5 className="font-normal capitalize">
              <strong>RFQ ID: </strong>{" "}
              <span>
              {rno}
              </span>
            </h5>
            {/* <h5 className="font-normal capitalize">
              <strong>Date: </strong>{" "}
              <span>
                2020-12-19
              </span>
            </h5> */}
            {/* <h5 className="font-normal capitalize">
              <strong>Customer Details:</strong>{" "}
            </h5> */}
          </div>
        </div>

        {/* <Grid container spacing={3} >
  <Grid item md={4}>
    </Grid>
    
    <Grid item md={6}>
      <h6>SUBJECT : Quotation for General Items</h6>
    </Grid>
    <Grid item md={2}>
    </Grid>
    
  </Grid> */}
       
        <div className="viewer__order-info px-4 mb-4 flex justify-between">
          <div>
          <tr style={{ height: 5, fontSize: 12, textAlign: 'left'}}>
            <h5 className="font-normal t-4 capitalize">
              <strong>Buyer Details </strong>{" "}
            </h5>
            </tr>
            <tr style={{ height: 5, fontSize: 12, textAlign: 'left'}}>
              <td style={{ height: 'auto !important' }}><strong>Attn.</strong></td>
              <td style={{ height: 'auto !important' }}>{contactperson}</td>
            </tr>
            <tr style={{ height: 5, fontSize: 12, textAlign: 'left'}}>
              <td style={{ height: 'auto !important' }}><strong>Designation</strong></td>
              <td style={{ height: 'auto !important' }}>{designation}</td>
            </tr>
            <tr style={{ height: 5, fontSize: 13, textAlign: 'left'}}>
              <td style={{ height: 'auto !important' }}><strong>Company</strong></td>
              <td style={{ height: 'auto !important' }}>{company}</td>
            </tr>
            <tr style={{ height: 5, fontSize: 13, textAlign: 'left'}}>
              <td style={{ height: 'auto !important' }}><strong>Address</strong></td>
              <td style={{ height: 'auto !important' }}>{street}-{city},{pono} {zipcode}</td>
            </tr>
            <tr style={{ height: 5, fontSize: 12, textAlign: 'left'}}>
              <td style={{ height: 'auto !important' }}><strong>Email-Id</strong></td>
              <td style={{ height: 'auto !important' }}>{contactpersonemail}</td>
            </tr>
            <tr style={{ height: 5, fontSize: 12, textAlign: 'left'}}>
              <td style={{ height: 'auto !important' }}><strong>Contact</strong></td>
              <td style={{ height: 'auto !important' }}>{contactpersoncontact}</td>
            </tr>
            <tr style={{ height: 5, fontSize: 13, textAlign: 'left'}}>
              <td style={{ height: 'auto !important' }}><strong>PO Date</strong></td>
              <td style={{ height: 'auto !important' }}>{rdate}</td>
            </tr>
            <tr style={{ height: 5, fontSize: 13, textAlign: 'left'}}>
              <td style={{ height: 'auto !important' }}><strong>C.R No</strong></td>
              <td style={{ height: 'auto !important' }}>{regno}</td>
            </tr>
            <tr style={{ height: 5, fontSize: 13, textAlign: 'left'}}>
              <td style={{ height: 'auto !important' }}><strong>VAT No</strong></td>
              <td style={{ height: 'auto !important' }}>{vatno}</td>
            </tr>    
            
            
            
                      {/* </Grid>
        </Grid> */}



          </div>
          <div className="text-center">
            {/* <h4><u>REQUEST FOR QUOTATION</u></h4> */}

          </div>
          <div className="text-right">

            <tr>
              <td>
                <h5 className="font-normal capitalize">
                  <strong>Supplier Details </strong>{" "}
                </h5>
              </td>
            </tr>
            <tr style={{ height: 5, fontSize: 13, textAlign: 'left'}}>
              <td style={{ height: 'auto !important' }}><strong>Submitted By</strong></td>
              <td style={{ height: 'auto !important' }}>Mr.Abbas Ahamed Shazli</td>
            </tr>
            <tr style={{ height: 5, fontSize: 13,textAlign: 'left' }}>
              <td ><strong>Designation</strong></td>
              <td >Business Development Manager - ISD Division</td>
            </tr>
            <tr style={{ height: 5, fontSize: 13,textAlign: 'left' }}>
              <td><strong>Company</strong></td>
              <td>AMACO ARABIA CONTRACTING COMPANY</td>
            </tr>
            <tr style={{ height: 5, fontSize: 13,textAlign: 'left' }}>
              <td><strong>Address</strong></td>
              <td>PO BOX 7452, AI Jubail 31951, KSA</td>
            </tr>
            <tr style={{ height: 5, fontSize: 13,textAlign: 'left'}}>
              <td><strong>E-mail ID</strong></td>
              <td>ABBAS@AMACO.COM.SA</td>
            </tr>
            <tr style={{ height: 5, fontSize: 13,textAlign: 'left' }}>
              <td><strong>Mob/Tel.</strong></td>
              <td>535515212</td>
            </tr>
            <tr style={{ height: 5, fontSize: 13,textAlign: 'left' }}>
              <td><strong>Vendor Id.</strong></td>
              <td>{vendor_id}</td>
            </tr>

            {/* <h5 className="font-normal capitalize">
              <strong>Due date: </strong>{" "}
              <span>
                {ddate}
              </span>
            </h5>
            <h5 className="font-normal capitalize">
              <strong> Customer VATNo: </strong>{" "}
              <span>
                {vatno}
              </span>
            </h5> */}
          </div>
        </div>
        {/* <div className="viewer__billing-info px-4 py-5 flex justify-between">
          <div>
            <h5 className="mb-2">Bill From</h5>
            <p className="mb-4">{seller ? seller.name : null}</p>
            <p className="mb-0 whitespace-pre-wrap">
              {seller ? seller.address : null}
            </p>
          </div>
          <div className="text-right w-full">
            <h5 className="mb-2">Bill To</h5>
            <p className="mb-4">{buyer ? buyer.name : null}</p>
            <p className="mb-0 whitespace-pre-wrap">
              {buyer ? buyer.address : null}
            </p>
          </div>
          <div />
        </div> */}
          {/* <div className="viewer__order-info px-4 mb-4 flex justify-between">
        <Table>  
        <TableRow style={{border: "1px solid rgb(0, 0, 0)"}}>
        <h6 align="center" style={{marginTop:"5px"}}>SUBJECT : Quotation for General Items</h6>
      </TableRow>
      </Table>
      </div> */}
      {/* <div className="viewer__order-info px-4 mb-4 flex justify-between">
      <Table> 
      <TableRow> 
        Dear Sir,
        <br></br>
        Thank you for requesting us for the quotation of below mentioned items, Please find our best price for the supply of requested items. We look forward for our valued P.O
      </TableRow>
      </Table>
      </div> */}
      <br></br>
        <Card className="mb-4" elevation={0} title="Rfq Details" borderRadius="borderRadius" >
        

        
        <div className="viewer__order-info px-4 mb-4 flex justify-between">
          <Table>  
          <TableHead>
              <TableRow>
                <TableCell className="pl-0" colspan={1} style={{border: "1px solid rgb(0, 0, 0)",width:"50px"}} align="center">S.No.</TableCell>
                
        
                <TableCell className="px-0" colspan={3} style={{border: "1px solid rgb(0, 0, 0)"}}  align="center">RFQ DESCRIPTION</TableCell>
        
                <TableCell className="px-0" colspan={3} style={{border: "1px solid rgb(0, 0, 0)"}}  align="center">QUOTATION DESCRIPTION</TableCell>
                <TableCell className="px-0" colspan={3} style={{border: "1px solid rgb(0, 0, 0)"}}  align="center">REMARK</TableCell>
                <TableCell className="px-0" style={{border: "1px solid rgb(0, 0, 0)"}}  align="center">QTY</TableCell>
                <TableCell className="px-0"style={{border: "1px solid rgb(0, 0, 0)"}}  align="center">UOM</TableCell>
                
                <TableCell className="px-0"style={{border: "1px solid rgb(0, 0, 0)"}}  align="center">UNIT PRICE</TableCell> 
                <TableCell className="px-0"style={{border: "1px solid rgb(0, 0, 0)"}}  align="center">TOTAL</TableCell>
              </TableRow>
            </TableHead>
            <TableBody >
              {qdetails.map((item, index) => {

                 
                
                return (
                  <TableRow key={index} style={{border: "1px solid rgb(0, 0, 0)"}}>
                    <TableCell className="pl-0" align="center" colspan={1} style={{border: "1px solid rgb(0, 0, 0)"}} >
                      {index + 1}
                    </TableCell>
                    

                    <TableCell className="pl-0 capitalize" align="center" colspan={3}  style={{border: "1px solid rgb(0, 0, 0)",wordBreak:'break-word'}}>
                     {item.description}

                    </TableCell>
                    <TableCell className="pl-0 capitalize" align="center" colspan={3}  style={{border: "1px solid rgb(0, 0, 0)",wordBreak:'break-word'}}>
                     {item.product.description}

                    </TableCell>
                    <TableCell className="pl-0 capitalize" colspan={3} align="center"  style={{border: "1px solid rgb(0, 0, 0)"}}>
                     {item.remark}

                    </TableCell>
                    
                    <TableCell className="pl-0 capitalize" align="center"  style={{border: "1px solid rgb(0, 0, 0)"}}>
                    {item.quantity}
                      
                    </TableCell>
                    <TableCell className="pl-0 capitalize" align="center" style={{border: "1px solid rgb(0, 0, 0)"}}>
                    {item.product.unit_of_measure}
                    </TableCell>
                    <TableCell className="pl-0 capitalize" style={{textAlign: "right",border: "1px solid rgb(0, 0, 0)"}} >
                    {item.purchase_price}
                    </TableCell>
                    <TableCell className="pl-0 capitalize" style={{textAlign: "right",border: "1px solid rgb(0, 0, 0)"}}>
                   {item.total_amount}
                    </TableCell>
                    
                    {/* <TableCell className="pl-0 capitalize" align="left">
                      {item.product[0].unit_price}
                    </TableCell> */}
                    {/* <TableCell className="pl-0">
                      <Link to={"/sales/rfq-form/rfqanalysis"}>
                        <Icon>search</Icon>
                      </Link>
                    </TableCell> */}
                  </TableRow>
                );
              })}
              <TableRow style={{border: "1px solid rgb(0, 0, 0)"}}>
            <TableCell style={{textAlign: "right",border: "1px solid rgb(0, 0, 0)"}} colspan={12}>TOTAL VALUE</TableCell>
            <TableCell style={{textAlign: "right",border: "1px solid rgb(0, 0, 0)"}} >SAR</TableCell>
            <TableCell style={{textAlign: "right",border: "1px solid rgb(0, 0, 0)"}}
                >
                   {total_value}
                    
                </TableCell>
                  
                 
              </TableRow>
              <TableRow style={{border: "1px solid rgb(0, 0, 0)"}}>
             
                  <TableCell style={{textAlign: "right",border: "1px solid rgb(0, 0, 0)"}} colspan={12}>VAT(15%)</TableCell>
                  <TableCell style={{textAlign: "right",border: "1px solid rgb(0, 0, 0)"}} >SAR</TableCell>
                 <TableCell style={{textAlign: "right",border: "1px solid rgb(0, 0, 0)"}}
                 >
                  {vat_in_value}
                </TableCell> 
              </TableRow>
              <TableRow style={{border: "1px solid rgb(0, 0, 0)"}}>
                 <TableCell style={{textAlign: "right",border: "1px solid rgb(0, 0, 0)"}}
                 colspan={12}
                 >
                     <span>TOTAL MATERIAL VALUE INC.VAT</span> 
                </TableCell> 
                <TableCell style={{textAlign: "right",border: "1px solid rgb(0, 0, 0)"}} >SAR</TableCell>
                <TableCell style={{textAlign: "right",border: "1px solid rgb(0, 0, 0)"}}>{net_amount}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          </div>
          <br></br>
          
        </Card>
        <div className="viewer__order-info px-4 mb-4 flex justify-between">
          {/* <div>
          <td style={{color:"red"}} colspan={2}>Notes </td>
        <tr style={{ height: 5, fontSize: 12,textAlign: 'left'}}>
              
              <td colspan={2}><li>Quoted Prices are for Complete lot, any paritial order is subject to reconfirmation</li></td>
            </tr>
      <tr style={{ height: 5, fontSize: 12,textAlign: 'left'}}>
              <td colspan={2}><li>This is a system Generated Quote and hence does not Required any Signature</li></td>
        </tr>
        <td style={{color:"red"}} colspan={2}>Terms</td>
        <tr style={{ height: 5, fontSize: 12,textAlign: 'left' }}>
              <td ><Icon style={{fontSize:13,color:'blue'}}>timelapse</Icon> Quoatation Validity  </td>
              <td>{validity}</td>
        </tr>
        <tr style={{ height: 5, fontSize: 12,textAlign: 'left' }}>
              <td ><Icon style={{fontSize:13,color:'blue'}}>monetization_on</Icon> Payment Terms  </td>
              <td>{payment_terms}</td>
        </tr>
        <tr style={{ height: 5, fontSize: 12,textAlign: 'left' }}>
              <td ><Icon style={{fontSize:13,color:'blue'}}>verified_user</Icon> Warranty </td>
              <td>{warranty}</td>
        </tr>
        <tr style={{ height: 5, fontSize: 12,textAlign: 'left' }}>
              <td ><Icon style={{fontSize:13,color:'blue'}}>local_shipping</Icon> Delivery Time </td>
              <td>{delivery_time}</td>
        </tr>
          
        <tr style={{ height: 5, fontSize: 12,textAlign: 'left' }}>
              <td ><Icon style={{fontSize:13,color:'blue'}}>info</Icon> Inco-Term </td>
              <td>{inco_terms}</td>
        </tr>
        
       </div> */}
       {/* <div>
        <tr>
              <td>
                <h5 className="font-normal capitalize">
                  <strong>BANK DETAILS: </strong>{" "}
                </h5>
              </td>
            </tr>
        <tr style={{ height: 5, fontSize: 13, textAlign: 'left'}}>
              <td style={{ height: 'auto !important' }}><strong>Bank Name:</strong></td>
              <td style={{ height: 'auto !important' }}>National Commerical Bank</td>
            </tr>
        <tr style={{ height: 5, fontSize: 13, textAlign: 'left'}}>
              <td style={{ height: 'auto !important' }}><strong>Account No:</strong></td>
              <td style={{ height: 'auto !important' }}>6000000242200</td>
        </tr>
        <tr style={{ height: 5, fontSize: 13, textAlign: 'left'}}>
              <td style={{ height: 'auto !important' }}><strong>IBAN No:</strong></td>
              <td style={{ height: 'auto !important' }}>SA3610000006000000242200</td>
        </tr>
        
       </div>
      </div> */}
      {/* <br></br>
      <div className="viewer__order-info px-4 mb-4 flex justify-between">
      <div>
            <h6>We trust our offer falls inline with your requirements. For any clarification please contact under signed</h6>
            <h5>Best Regards,</h5>
            <tr style={{ height: 5, fontSize: 12, textAlign: 'left'}}>
            <td style={{ height: 'auto !important' }}>Mr.Abbas Ahamed Shazli</td>

            </tr>
            <tr style={{ height: 5, fontSize: 12, textAlign: 'left'}}>
            <td >Business Development Manager - ISD Division</td>
            </tr>
            <tr style={{ height: 5, fontSize: 12, textAlign: 'left'}}>
            <td>AMACO ARABIA CONTRACTING COMPANY</td>
            </tr>
            <tr style={{ height: 5, fontSize: 12, textAlign: 'left'}}>
            <td>PO BOX 7452, AI Jubail 31951, KSA</td>
            </tr>
            <tr style={{ height: 5, fontSize: 12, textAlign: 'left'}}>
            <td>ABBAS@AMACO.COM.SA</td>
            </tr>
            <tr style={{ height: 5, fontSize: 12, textAlign: 'left'}}>
            <td>535515212</td>
            </tr>
      </div>
      */}
      </div>
 

        
        {/* <footer id="footer">
        <div className="text-center" style={{fontSize:'15px',visibility:"hidden"}}>
      <span>we trust our offer falls inline with your Requirement.For any clarifications please contact under signed best regard Shazli</span>
      <p><span>E-mail:sales@amaco.com.sa | website:www.amaco.com.sa</span></p>
      </div>
        </footer> */}
             <footer id="footer" style={{ visibility: "hidden" }}>
        <div style={{visibility: "hidden" }} style={{'borderBottom': '25px solid #555','borderLeft': '50px solid transparent','height': 0,'width': '100%',marginLeft:'3%'}}>
          
          <span style={{color:'#fff'}}> Tel.: +966 13 363 2387| Fax: +966 13 363 2387 | P.O.Box 7452 | Jubail 31951 | Kingdom of Saudi Arabia</span>
                
        </div>
         <div class="main" style={{width:'100%'}}> 
       <div  class="right" style={{width: '150px',height: '10ex',backgroundColor: '#fff',shapeOutside: 'polygon(100% 0, 100% 100%, 0 100%)',float: 'right',webkitClipPath: 'polygon(100% 0, 100% 100%, 0 100%)'}}></div>           
        <p  id="foot" style={{textAlign: 'center',backgroundColor: '#1d2257',color:'white'}}>E-mail: sales@amaco.com.sa | Website: www.amaco.com.sa</p>
        </div>
        
        
        </footer>
    
      </div>
      
      
  
    </div>
   
    
  );
};

export default InvoiceViewer;
