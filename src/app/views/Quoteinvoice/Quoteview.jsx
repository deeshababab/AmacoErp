import React, { useState, useEffect,useRef  } from "react";
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
import { Link, useParams } from "react-router-dom";
import { getInvoiceById } from "../invoice/InvoiceService";
import { format } from "date-fns";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import axios from "axios";
import { cond } from "lodash";
import logo from './../invoice/amaco-logo.png';
import logos from './../invoice/vision2030.png';
// import 'bootstrap/dist/css/bootstrap.min.css';
import useSettings from '../../hooks/useSettings';
import apiurl from '../../../config';
import url from "../invoice/InvoiceService";
import Arabic from '../../../lang/ar.json';
import { IntlProvider,FormattedNumber } from 'react-intl';
import { FormattedMessage } from 'react-intl';
import Swal from "sweetalert2";
import Axios from "axios";
import history from "history.js";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import moment from "moment";
import { ToWords } from 'to-words';
import { useReactToPrint } from 'react-to-print'
const locale = navigator.language;


// import Image from 'react-image-resizer';


const useStyles = makeStyles(({ palette, ...theme }) => ({
  
  "@global": {
    
    
   
    "@media print": {
      
    
      
      "body,html": {
        visibility: "hidden",
    
        content: 'none !important',
        "-webkit-print-color-adjust": "exact !important",
        display:'block',
        
        
        // overflow: "scroll !important",
        // "overflow-anchor": "none",
        // "-ms-overflow-style": "none",
        // "touch-action": "auto",
        // "-ms-touch-action": "auto" ,
        //  iframe:{
        //   height: "400mm",
        //   width: "300mm",
        //   "page-break-after": "always"
        //  }
          
        // "overflow-x": "visible !important",
       
      
       
        
       
       
           
        
       
      },
      
      
      
      "#header": {
        position: "fixed",
        top: 30,
        left: 30,
        width: "100%",
        // paddingBottom:100
        
        
        
       
      },
      "#footer": {
        breakInside:'avoid',
        borderTop: "1px solid #E7E7E7",
        textAlign: "center",
        position: "static",
        left: "0",
        bottom: -30,
        height: "auto",
        width: "100%",
        fontSize:18,
        fontFamily: "Calibri",

        
      },
   
     
     
      "#print-area": {
        // position: "fixed",
        // display:'block',
        top: 45,
        left: 0,
        right: 0,
        marginTop:100,
        marginBottom:200,
        Bottom:45,
        overflowX:'visible',
        // paddingTop:40,
        // paddingBottom:40,

        

        "& *": {
          visibility: "visible",
        },
      },
    },
  },
  invoiceViewer: {
   
    
  },
}));


const InvoiceViewer = ({ toggleInvoiceEditor }) => {
  // let search = window.location.search;
  // let params = new URLSearchParams(search);
  // const foo =parseInt(params.get('s'));
  const [state, setState] = useState({});
  const [rfq, setrfq] = useState();
  const [psdate, setpsdate] = useState([]);
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
  const [inco_terms,setinco_terms] =useState()
  const [contactperson, setcontactperson] = useState('');
  const [contactpersonemail, setcontactpersonemail] = useState('');
  const [contactpersoncontact, setcontactpersoncontact] = useState('');
  const [designation, setdesignation] = useState('')
  const [vendor_id,setvendor_id]=useState('')
  const { id,s } = useParams();
  const classes = useStyles();
  const componentRef = useRef();
  const handlePrinting = useReactToPrint({
    content: () => componentRef.current,
    
   
    
  });
  

  var fval =10;
  const toWords = new ToWords({
    localeCode: 'en-IN',
    converterOptions: {
      currency: true,
      ignoreDecimal: false,
      ignoreZeroCurrency: false,
    }
  });
  const [res, setres] = useState("");
  const [ress, setress] = useState("");
  const { settings, updateSettings } = useSettings();
  var nf = new Intl.NumberFormat();

  // Menu Button function
  const [anchorEl, setAnchorEl] = React.useState(null);
  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }
  

  function handleClose() {
    setAnchorEl(null);
  }

  useEffect(() => {
    // updateSidebarMode({ mode: "close" })
    document.title="Request for quoatation - Amaco"
    url.get("sale-quotation/"+id).then(({ data }) => {
    console.log(s)
    // setcname(data[0].party.fname)
      setrfq(data[0].rfq_id)
      setqid(data[0].quotation_no)
      setpsdate(moment(data[0].ps_date).format('DD MMM YYYY'))
      // setddate(moment(data[0].rfq.require_date).format('DD MMM YYYY'))
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
      setcontactpersoncontact(data[0].party.contact)
      setdesignation(data[0].contact.designation)
      setvendor_id(data[0].party.vendor_id)
      let words = toWords.convert(parseFloat(data[0].net_amount));
      let riyal = words.replace("Rupees", "Riyals");
      let halala =  riyal.replace("Paise", "Halala")
       
      setress(halala);



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
    window.location.href="/quoateview"
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
    // history.push("/quoateview")
     
  }

  }
  const deletequote = ()=>{
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this Quotation!',
      icon: 'danger',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      icon: 'warning',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        url.delete(`quotation/${id}`)
    .then(res => {
        
       
        Swal.fire(
          'Deleted!',
          ' Quotation has been deleted.',
          'success'
        )
        history.push("/quoateview")
        
    })
    
        

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your Quotation is safe :)',
          'error'
        )
      }
    })
  }
  const invoicegenrate= (sidebarSettings) => {
    
  
       history.push(`/Quoteinvoice/${id}`)
        
        
    
    
}
const dnotegenrate= (sidebarSettings) => {
  
 
  history.push(`/dnote/${id}`)

}
const editqoute = () => {

  // window.location.href = `/Quoteedit/${id}`
  history.push(`/Quoteedit/${id}`)
}


  const handlePrint = () =>{ 
    // var prtContent = document.getElementById('print-area');
    // dummyContent.innerHTML = prtContent.contentWindow.document.body.innerHTML
            // var WinPrint = window.open('', '', 'left=0,top=0,width=1800,height=1200,toolbar=1,scrollbars=1,status=0');
            // WinPrint.document.write('<html><head><title></title>');
            // WinPrint.document.write(' <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">');
            // WinPrint.document.write('<head>');
            // WinPrint.document.write('<body>');
            // WinPrint.document.write(prtContent.innerHTML);
            // WinPrint.document.write('</body></html>');
            // WinPrint.document.close();
            // WinPrint.focus();
            // WinPrint.print();
            // WinPrint.close();
            // prtContent.innerHTML = "";
            var content = document.getElementById("print-area");
var pri = document.getElementById("ifmcontentstoprint").contentWindow;
pri.document.open();
pri.document.write(content.innerHTML);
pri.document.close();
pri.focus();
pri.print();
    
    // window.print()

  };
  window.onafterprint = function(){ window.close()
    window.location.href = ``
  };
  const statuschange = (status) => {
    const json ={
      status:status
    }
    Swal.fire({
      // title: 'Are you sure?',
      text: `Are you sure want to ${status} the Quotation!`,
      icon: 'danger',
      showCancelButton: true,
      confirmButtonText: 'Yes,',
      icon: 'warning',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        url.put(`update-quotation/${id}`,json)
    .then(res => {
        
       console.log(res)
       
        Swal.fire({
          title: 'Success',
          type: 'success',
          icon:'success',
          text:`Quotation has been ${status}.`,
        })
        // updateSidebarMode({ mode: "on" })
        // window.location.href = "/quoateview"
        
    })
    
        

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        
      }
    })
    
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
        <Link to="/quoateview">
          <IconButton>
            <Icon>arrow_back</Icon>
          </IconButton>
        </Link>
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
                    Generate Purchase Order
                      </MenuItem> */}
                      
                      <MenuItem  onClick={() => deletequote()}>
                      Delete Quotation
                      </MenuItem>
                      <MenuItem  onClick={() => handlePrinting()}>
                      Print Quotation
                      </MenuItem>
                      <MenuItem  onClick={() => editqoute()}>
                      Edit Quotaion
                      </MenuItem>
                    
          </Menu>
          {s==="accept"&&
          <Button
            className="mr-4 py-2"
            color="primary"
            variant="outlined"
            onClick={() => invoicegenrate({ mode: "on" })}
          >
            Generate Invoice
          </Button>
          }
          {s==="accept"&&
          <Button
            className="mr-4 py-2"
            color="primary"
            variant="outlined"
            onClick={() => dnotegenrate({ mode: "on" })}
          >
            Generate Delivery Note
          </Button>
          }
          {s==="new"&&
           <Button
            className="mr-4 py-2"
            variant="outlined"
            onClick={() => statuschange('accept')}
            style={{border:'1px solid #119144',color:'#119144'}}
          >
            <Icon>check_circle</Icon> Accepted
          </Button>
          }
          {s==="new"&&
          <Button
            className="mr-4 py-2"
            style={{border:'1px solid #ff3d57',color:'#ff3d57'}}
            variant="outlined"
            onClick={() => statuschange('reject')}
          >
            <Icon>cancel</Icon> Rejected
          </Button>
          }
          {/*<Button
            onClick={handlePrint}
            className="py-2"
            color="secondary"
            variant="outlined"
          >
            Print Quotation
          </Button> */}
        </div>
      </div>

    <div  id="print-area" ref={componentRef} style={{fontFamily: "Calibri",marginLeft:'10',marginTop:'10'}} class="table-responsive-sm"> 
      
       <header id="header"  >

<div className="px-2 flex justify-between">
  <div className="flex">
    <div className="pr-12">
      <img src={logo} alt="this is car image" style={{ marginLeft: '15px', width: 237 }} />

    </div>
   
    <div className="viewer__order-info px-4 mb-4 flex justify-between">
    </div>
  </div>
  <div className="flex">
  <div>
    <h2 style={{color:'#1d2257',textAlign:'right'}}>
      
    شركة أماكو العربية للمقاولات</h2>

      <h3 style={{color:'#1d2257',textAlign:'right',fontSize:20}}>
        AMACO ARABIA CONTRACTING COMPANY
        
      </h3>
      <h5 style={{color:'#555',textAlign:'right',fontSize:17}} className="font-normal b-4 capitalize">
       C.R No. 205500334 | VAT No. 310398615200003


      </h5>
      
    </div>
  </div>
</div>


</header>


        <hr></hr>
        {/* <Divider  style={{marginBottom: '15px'}}/> */}
       
        <div className="viewer__order-info px-4 mb-4 pt-5 flex justify-between">
          <div>
          <h3 style={{fontSize:20}}><strong>SALES QUOTATION</strong></h3>
          {/* <h5 className="font-normal capitalize">
              <strong>Quotation Number: </strong>{" "}
              <span>
               {qid}
              </span>
            </h5> */}
          </div>
          <div className="text-center">
            {/* <h4 className="text-center"><u>SALES QUOTATION</u></h4> */}
           
          </div>
          <div className="text-right">
            
            {/* <h5 className="font-normal capitalize">
              <strong>Date: </strong>{" "}
              <span>
              {moment(new Date()).format('DD MMM YYYY')}
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
          <tr style={{ height: 5, fontSize: 14, textAlign: 'left'}}>
            <h5 className="font-normal t-4 capitalize">
              <strong>Buyer Details</strong>{" "}
            </h5>
            </tr>
            <tr style={{ height: 5, fontSize: 14, textAlign: 'left'}}>
              <td style={{ height: 'auto !important' }}><strong>Attn.</strong></td>
              <td style={{ height: 'auto !important' }}>{contactperson}</td>
            </tr>
            <tr style={{ height: 5, fontSize: 14, textAlign: 'left'}}>
              <td style={{ height: 'auto !important' }}><strong>Designation</strong></td>
              <td style={{ height: 'auto !important' }}>{designation}</td>
            </tr>
            <tr style={{ height: 5, fontSize: 14, textAlign: 'left'}}>
              <td style={{ height: 'auto !important' }}><strong>Company</strong></td>
              <td style={{ height: 'auto !important' }}>{company}</td>
            </tr>
            <tr style={{ height: 5, fontSize: 14, textAlign: 'left'}}>
              <td style={{ height: 'auto !important' }}><strong>Address</strong></td>
              <td style={{ height: 'auto !important' }}>{street}-{city},{pono} {zipcode}</td>
            </tr>
            <tr style={{ height: 5, fontSize: 14, textAlign: 'left'}}>
              <td style={{ height: 'auto !important' }}><strong>Email-Id</strong></td>
              <td style={{ height: 'auto !important' }}>{contactpersonemail}</td>
            </tr>
            <tr style={{ height: 5, fontSize: 14, textAlign: 'left'}}>
              <td style={{ height: 'auto !important' }}><strong>Contact</strong></td>
              <td style={{ height: 'auto !important' }}>{contactpersoncontact}</td>
            </tr>
            <tr style={{ height: 5, fontSize: 14, textAlign: 'left'}}>
              <td style={{ height: 'auto !important' }}><strong>Quoate Date</strong></td>
              <td style={{ height: 'auto !important' }}>{psdate}</td>
            </tr>
            
            <tr style={{ height: 5, fontSize: 14, textAlign: 'left'}}>
              <td style={{ height: 'auto !important' }}><strong>C.R No</strong></td>
              <td style={{ height: 'auto !important' }}>{regno}</td>
            </tr>
            <tr style={{ height: 5, fontSize: 14, textAlign: 'left'}}>
              <td style={{ height: 'auto !important' }}><strong>VAT No</strong></td>
              <td style={{ height: 'auto !important' }}>{vatno}</td>
            </tr>
            <tr style={{ height: 5, fontSize: 14, textAlign: 'left'}}>
              <td style={{ height: 'auto !important' }}><strong> Quotation No</strong></td>
              <td style={{ height: 'auto !important' }}>{qid}</td>
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
            <tr style={{ height: 5, fontSize: 14, textAlign: 'left'}}>
              <td style={{ height: 'auto !important' }}><strong>Submitted By</strong></td>
              <td style={{ height: 'auto !important' }}>Mr.Abbas Ahamed Shazli</td>
            </tr>
            <tr style={{ height: 5, fontSize: 14,textAlign: 'left' }}>
              <td ><strong>Designation</strong></td>
              <td >Business Development Manager - ISD Division</td>
            </tr>
            <tr style={{ height: 5, fontSize: 14,textAlign: 'left' }}>
              <td><strong>Company</strong></td>
              <td>AMACO ARABIA CONTRACTING COMPANY</td>
            </tr>
            <tr style={{ height: 5, fontSize: 14,textAlign: 'left' }}>
              <td><strong>Address</strong></td>
              <td>PO BOX 7452, AI Jubail 31951, KSA</td>
            </tr>
            <tr style={{ height: 5, fontSize: 14,textAlign: 'left'}}>
              <td><strong>E-mail ID</strong></td>
              <td>ABBAS@AMACO.COM.SA</td>
            </tr>
            <tr style={{ height: 5, fontSize: 14,textAlign: 'left' }}>
              <td><strong>Mob/Tel.</strong></td>
              <td>535515212</td>
            </tr>
            <tr style={{ height: 5, fontSize: 14,textAlign: 'left' }}>
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
          <div className="viewer__order-info px-4 mb-4 flex justify-between" >
        <Table>  
        <TableRow style={{border: "1px solid #ccc",marginBottom:200}} >
        <h6 align="center" style={{marginTop:"5px"}}>SUBJECT : Quotation for General Items</h6>
      </TableRow>
      </Table>
      </div>
      <div className="viewer__order-info px-4 mb-4 flex justify-between">
      <Table> 
      <TableRow> 
        Dear Sir,
        <br></br>
        Thank you for requesting us for the quotation of below mentioned items, Please find our best price for the supply of requested items. We look forward for our valued P.O
      </TableRow>
      </Table>
      </div>
      <br></br>
        <Card className="mb-4" elevation={0} title="Rfq Details" borderRadius="borderRadius" >
        

        
        <div className="px-4 mb-2 flex justify-between" >
          <Table style={{width: "100%", fontSize: 12, border: "none",}} >  
          <TableHead >
              <TableRow > 
                <TableCell className="pl-0" colspan={1} style={{border: "1px solid #ccc",width:"50px",fontFamily: "Calibri",}} align="center">S.No.</TableCell>
                {/* <TableCell className="px-0" colspan={3} style={{border: "1px solid #ccc"}}  align="center">ITEM NAME</TableCell>
         */}
                <TableCell className="px-0" colspan={3} style={{border: "1px solid #ccc",fontFamily: "Calibri",}}  align="center">RFQ DESCRIPTION</TableCell>
        
                <TableCell className="px-0" colspan={3} style={{border: "1px solid #ccc",fontFamily: "Calibri",}}  align="center">AMACO DESCRIPTION</TableCell>
                <TableCell className="px-0" colspan={3}  style={{border: "1px solid #ccc",fontFamily: "Calibri",}}  align="center">REMARK</TableCell>
                <TableCell className="px-0" style={{border: "1px solid #ccc",fontFamily: "Calibri",width:130}}  align="center">QTY</TableCell>
                <TableCell className="px-0"style={{border: "1px solid #ccc",fontFamily: "Calibri"}}  align="center">UOM</TableCell>
                
                <TableCell className="px-0"style={{border: "1px solid #ccc",fontFamily: "Calibri",width:130}}  align="center">UNIT PRICE</TableCell> 
                <TableCell className="px-0"style={{border: "1px solid #ccc",fontFamily: "Calibri",width:130}}  align="center">TOTAL</TableCell>
              </TableRow>
            </TableHead>
            <TableBody >
              {qdetails.map((item, index) => {

               
                
                return (
                  <TableRow key={index} style={{border: "1px solid #ccc"}}>
                    <TableCell className="pl-0" align="center" colspan={1} style={{border: "1px solid #ccc",fontFamily: "Calibri",}} >
                      {index + 1}
                    </TableCell>
                    {/* <TableCell className="pl-0 capitalize" align="center" colspan={3}  style={{border: "1px solid #ccc"}}>
                     {item.product.name}

                    </TableCell> */}

                    <TableCell className="pl-2 capitalize" align="left" colspan={3}  style={{border: "1px solid #ccc",wordBreak:'break-word',fontFamily: "Calibri"}}>
                     {item.description}

                    </TableCell>
                    <TableCell className="pl-2 capitalize" align="left" colspan={3}  style={{border: "1px solid #ccc",wordBreak:'break-word',fontFamily: "Calibri",}}>
                     {item.product.description}

                    </TableCell>
                    <TableCell className="pl-0 capitalize" align="center"  colspan={3}  style={{border: "1px solid #ccc",fontFamily: "Calibri",}}>
                     {item.remark}

                    </TableCell>
                    
                    <TableCell className="pl-0 capitalize" align="center"  style={{border: "1px solid #ccc",fontFamily: "Calibri",}}>
                    
                    
                    {nf.format(item.quantity)}
                      
                    </TableCell>
                    <TableCell className="pl-0 capitalize" align="center" style={{border: "1px solid #ccc",fontFamily: "Calibri",}}>
                    {item.product.unit_of_measure}
                    </TableCell>
                    <TableCell className="pl-0 capitalize" style={{textAlign: "right",border: "1px solid #ccc",fontFamily: "Calibri",}} >
                    {parseFloat(item.sell_price).toLocaleString(undefined, {maximumFractionDigits:2})}
                    </TableCell>
                    <TableCell className="pl-0 capitalize" style={{textAlign: "right",border: "1px solid #ccc",fontFamily: "Calibri",}}>
                  
                    {parseFloat(item.total_amount).toLocaleString(undefined, {maximumFractionDigits:2})}
                   
                    </TableCell>
                    
                   
                    
                  </TableRow>
                );
              })}
              
              <TableRow style={{ border: "1px solid #ccc" }}>
                  <TableCell className="pl-0 capitalize" align="center" style={{ border: "1px solid #ccc",fontFamily: "Calibri" }} rowspan={2} colspan={10}>
                    <div className="px-4 flex justify-between" style={{ fontFamily: "Calibri" }}>
                      <div className="flex">
                        <div className="pr-12">
                          <tr>
                            <td>
                              <h5 className="font-normal capitalize">
                                <strong>BANK DETAILS</strong>{" "}
                              </h5>
                            </td>
                          </tr>
                          <tr style={{fontSize: 14, textAlign: 'left' }} >
                            <td><strong>Bank Name</strong></td>
                            <td >National Commercial Bank</td>
                          </tr>
                          <tr style={{fontSize: 14, textAlign: 'left' }}>
                            <td ><strong>Account No</strong></td>
                            <td >6000000242200</td>
                          </tr>
                          <tr style={{ height: 5, fontSize: 14, textAlign: 'left' }}>
                            <td ><strong>IBAN No</strong></td>
                            <td >SA3610000006000000242200</td>
                          </tr>
                        </div>
                      </div>
                    </div>

                  </TableCell>
                  <TableCell className="pl-0 capitalize" align="center" style={{ border: "1px solid #ccc",wordBreak:'break-word',fontFamily: "Calibri" }} colspan={2}>
                    المبلغ الخاضع للضريبة
                  <br></br>
                    SUB TOTAL 

                  </TableCell>
                  <TableCell className="pl-0 capitalize" align="center" style={{ border: "1px solid #ccc",width: "500px",fontFamily: "Calibri",borderRight:"1px solid #fff"}}>
                    SAR
                  </TableCell>
                  <TableCell className="pl-0 capitalize" align="right" style={{ border: "1px solid #ccc",wordBreak:'break-word',fontFamily: "Calibri" }} >
                  {/* <IntlProvider locale='en-US'>
                  <FormattedNumber value={total_value} currency={"SAR"} style="currency" />
                  </IntlProvider> */}
                  {parseFloat(total_value).toLocaleString(undefined, {maximumFractionDigits:2})}
                  </TableCell>

                </TableRow>
                
                <TableRow style={{ border: "1px solid #ccc" }}>
                  <TableCell className="pl-0 capitalize" align="center" style={{ border: "1px solid #ccc",wordBreak:'break-word',fontFamily: "Calibri" }} colspan={2}>
                    القيمة الضريبية
                  <br></br>
                 TOTAL VAT AMOUNT (15%)
                  </TableCell>
                  <TableCell className="pl-0 capitalize" align="center" style={{ border: "1px solid #ccc",width: "500px",fontFamily: "Calibri",borderRight:"1px solid #fff" }}>
                    SAR
                  </TableCell>
                  <TableCell className="pl-0 capitalize" align="right" style={{ border: "1px solid #ccc",fontFamily: "Calibri" }} >
                  {parseFloat(vat_in_value).toLocaleString(undefined, {maximumFractionDigits:2})}
                  </TableCell>
                </TableRow>
                <TableRow style={{ border: "1px solid #ccc" }}>
                  <TableCell className="pl-0 capitalize" colspan={10} style={{ border: "1px solid #ccc",fontFamily: "Calibri" }}>
                    <div className="px-4 flex justify-between">
                      <div className="flex">
                        <div className="pr-12" style={{wordBreak:'break-word'}}>

                          <strong>TOTAL IN WORDS</strong><br></br>{ress}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  
                  <TableCell className="pl-0 capitalize" align="center" style={{ border: "1px solid #ccc",fontFamily: "Calibri",wordBreak:'break-word' }} colspan={2}>
                  
                  المجموع الكلي
                  <br></br>
                   GRAND TOTAL
                  </TableCell>
                  <TableCell className="pl-0 capitalize" align="center" style={{ border: "1px solid #ccc",width: "500px",fontFamily: "Calibri",borderRight:"1px solid #fff" }}>
                    SAR
                  </TableCell>
                  <TableCell className="pl-0 capitalize" align="right" style={{ border: "1px solid #ccc",width: "500px",fontFamily: "Calibri" }}>
                   
                    {/* <IntlProvider locale='en-US' style={{wordBreak:'break-word'}}>
                    <FormattedNumber value={net_amount} currency={"SAR"} style="currency" />
                    </IntlProvider> */}
                    {parseFloat(net_amount).toLocaleString(undefined, {maximumFractionDigits:2})}
              
                  </TableCell>
                </TableRow>

              
              
            </TableBody>
          </Table>
          </div>
          <br></br>
          
        </Card>
        <div className="viewer__order-info px-4 mb-4 flex justify-between">
          <div>
          <td style={{color:"red"}} colspan={2}>Notes </td>
        <tr style={{ height: 5, fontSize: 14,textAlign: 'left'}}>
              
              <td colspan={2}><li>Quoted Prices are for Complete lot, any paritial order is subject to reconfirmation</li></td>
            </tr>
      <tr style={{ height: 5, fontSize: 14,textAlign: 'left'}}>
              <td colspan={2}><li>This is a system Generated Quote and hence does not Required any Signature</li></td>
        </tr>
        <td style={{color:"red"}} colspan={2}>Terms</td>
        <tr style={{ height: 5, fontSize: 14,textAlign: 'left' }}>
              <td ><Icon style={{fontSize:15,color:'#1d2257'}}>timelapse</Icon> Quoatation Validity  </td>
              <td>{validity}</td>
        </tr>
        <tr style={{ height: 5, fontSize: 14,textAlign: 'left' }}>
              <td ><Icon style={{fontSize:15,color:'#1d2257'}}>monetization_on</Icon> Payment Terms  </td>
              <td>{payment_terms}</td>
        </tr>
        <tr style={{ height: 5, fontSize: 14,textAlign: 'left' }}>
              <td ><Icon style={{fontSize:15,color:'#1d2257'}}>verified_user</Icon> Warranty </td>
              <td>{warranty}</td>
        </tr>
        <tr style={{ height: 5, fontSize: 14,textAlign: 'left' }}>
              <td ><Icon style={{fontSize:15,color:'#1d2257'}}>local_shipping</Icon> Delivery Time </td>
              <td>{delivery_time}</td>
        </tr>
          
        <tr style={{ height: 5, fontSize: 14,textAlign: 'left' }}>
              <td ><Icon style={{fontSize:15,color:'#1d2257'}}>info</Icon> Inco-Term </td>
              <td>{inco_terms}</td>
        </tr>
            
            
            {/* <p style={{fontSize:'14px'}}>
             Inco-Term {inco_terms}
            </p> */}
        
       </div>
       <div>
        
        
       </div>
      </div>
      <br></br>
      <div className="viewer__order-info px-4 mb-4 flex justify-between">
      <div >
            <h6>We trust our offer falls inline with your requirements. For any clarification please contact under signed</h6>
            <h5>Best Regards,</h5>
            <tr style={{ height: 5, fontSize: 14, textAlign: 'left'}}>
            <td style={{ height: 'auto !important' }}>Mr.Abbas Ahamed Shazli</td>

            </tr>
            <tr style={{ height: 5, fontSize: 14, textAlign: 'left'}}>
            <td >Business Development Manager - ISD Division</td>
            </tr>
            <tr style={{ height: 5, fontSize: 14, textAlign: 'left'}}>
            <td>AMACO ARABIA CONTRACTING COMPANY</td>
            </tr>
            <tr style={{ height: 5, fontSize: 14, textAlign: 'left'}}>
            <td>PO BOX 7452, AI Jubail 31951, KSA</td>
            </tr>
            <tr style={{ height: 5, fontSize: 14, textAlign: 'left'}}>
            <td>ABBAS@AMACO.COM.SA</td>
            </tr>
            <tr style={{ height: 5, fontSize: 14, textAlign: 'left'}}>
            <td>535515212</td>
            </tr>
      </div>
      
        
      </div>
      <br></br>
          <div className="viewer__order-info px-4 mb-4 flex justify-between">
          <div className="ml-24">
              <h5 className="font-normal t-4 capitalize">
                <IntlProvider locale={locale} messages={Arabic}>
                  <FormattedMessage
                    id="preparedby"

                  />
                </IntlProvider>
              </h5>
                 Prepared By
              </div>
            <div>
              {/* <h5 className="font-normal t-4 capitalize">
                <IntlProvider locale={locale} messages={Arabic}>
                  <FormattedMessage
                    id="approvedby"

                  />
                </IntlProvider>
              </h5>
                 Approved By */}
              </div>
              <div className="mr-24">
              <h5 className="font-normal t-4 capitalize">
                <IntlProvider locale={locale} messages={Arabic}>
                  <FormattedMessage
                    id="approvedby"

                  />
                </IntlProvider>
              </h5>
                 Approved By
              </div>
          </div>
          
        
        {/* <footer id="footer">
        <div className="text-center" style={{fontSize:'15px',visibility:"hidden"}}>
      <span>we trust our offer falls inline with your Requirement.For any clarifications please contact under signed best regard Shazli</span>
      <p><span>E-mail:sales@amaco.com.sa | website:www.amaco.com.sa</span></p>
      </div>
        </footer> */}
       <div id="footer" style={{ visibility: "hidden",paddingBottom:0 }} >
        
        <div style={{visibility: "hidden" }} style={{'borderBottom': '25px solid #555','borderLeft': '50px solid transparent','height': 0,'width': '100%',marginLeft:'3%'}}>
          
          <span style={{color:'#fff'}}> Tel.: +966 13 363 2387| Fax: +966 13 363 2387 | P.O.Box 7452 | Jubail 31951 | Kingdom of Saudi Arabia</span>
                
        </div>
         <div class="main" style={{width:'100%'}}> 
       <div  class="right" style={{width: '150px',height: '10ex',backgroundColor: '#fff',shapeOutside: 'polygon(100% 0, 100% 100%, 0 100%)',float: 'right',webkitClipPath: 'polygon(100% 0, 100% 100%, 0 100%)'}}></div>           
        <div id="foot" style={{textAlign: 'center',backgroundColor: '#1d2257',color:'white'}}>E-mail: sales@amaco.com.sa | Website: www.amaco.com.sa</div>
        </div>
        <h6 className="align-center mt-0">Page 1 of 1</h6>
        
        
        
      </div>
        
      </div>
      <iframe id="ifmcontentstoprint" style={{useStyles}}></iframe>
      </div>
   
    
  );
};


export default InvoiceViewer;
