import React, { useState, useEffect,useRef  } from "react";
import { borders } from '@material-ui/system';
import Box from '@material-ui/core/Box';

import {
  Icon,
  Divider,
   Grid,
   Avatar,
  Table,
  TextField,
  ClickAwayListener,
  InputAdornment,
  TableHead,
  TableFooter,
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
import { useReactToPrint } from 'react-to-print';
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
const locale = navigator.language;


// import Image from 'react-image-resizer';



const useStyles = makeStyles(({ palette, ...theme }) => ({
 
  "@global": {
    
   
    
    "@media print": {
      
      
      "body, html": {
        visibility: "hidden",
        size: "auto",
      
        content: 'none !important',
        "-webkit-print-color-adjust": "exact !important",
        marginTop:'10px'
       
        
      

      
       
      },
      
     
      "#header": {
        // padding: "10px",

        /* These do the magic */
        position: "fixed",
        marginTop: '100px',
        left: 0,
        paddingTop:130,
        justifySelf:"end"
       
      },
      ".empty-header": {
        height:"100px",
        marginTop:'10px',
        
        
        },
        ".empty-footer": {
          height:"100px",
          marginTop:'10px',
         
          
          },
        ".header": {
        position: "fixed",
        height:"100px",
        top:0,
        
        
        },
        ".footer": {
          position: "fixed",
          height:"100px",
          bottom:0,
          width: "100%",

        },

        
        "#footer": {
          
          backgroundColor: "#F8F8F8",
          borderTop: "1px solid #E7E7E7",
          textAlign: "center",
          
          bottom: "0",
          position:'fixed',
          width: "100%",
          justifySelf:"end"
        },
    
      "#table": {
        display: "-webkit-box",
        display: "-ms-flexbox",
        // display: "right",
        width: "650px",
        margin: "15px",
        position: "absolute",



        // top: "38.9cm !important",
        // paddingRight: "24cm !important"
      },
      //   "#footer": {
      //     display:"-webkit-box",
      // display: "-ms-flexbox",
      // display: "center",
      // width: "100%",
      // position: "absolute",

      // top: "38.9cm !important",
      // paddingRight: "12cm !important"
      //    },
      "#print-area": {
        // top: 10,
        left: 0,
        right: 0,
       
        // height: "100%",
        // marginTop: "10px",
        // marginBottom:'30px',
        boxDecorationBreak:'clone',
        position:'relative',
        
        

        "& *": {
          visibility: "visible",
        },
      },
    },
  },
  invoiceViewer: {
   
    
  },
}));


const InvoiceViewer = ({ toggleInvoiceEditor,list = [],
  handleAddList,
  handleAddNewCard, }) => {
  // let search = window.location.search;
  // let params = new URLSearchParams(search);
  // const foo =parseInt(params.get('s'));
  // const [state, setState] = useState({});
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
  const [is_revised, setis_revised] = useState('');
  const [designation, setdesignation] = useState('')
  const [vendor_id,setvendor_id]=useState('')
  const { id,s } = useParams();
  const classes = useStyles();
  const componentRef = useRef();
  const [shouldOpenDialog, setShouldOpenDialog] = useState(false);
  const [shouldOpenAddList, setShouldOpenAddList] = useState(false);
  const [columnTitle, setColumnTitle] = useState("");
  const [prefix, setprefix] = useState("");
  const [srcfile, setsrcfile] = useState("");
  const [message, setmessage] = useState(false);
  const [state, setState] = React.useState({
    
    open: false,
    vertical: "top",
    horizontal: "center"
  });

  const { vertical, horizontal, open } = state;

  const handleClicks = newState => () => {
    setState({ open: true, ...newState });
  };

  function handleClose() {
    setState({ ...state, open: false });
  }
  const handleDialogClose = () => {
    setShouldOpenDialog(false);
  };

  const handleAddListToggle = (value) => {
    setShouldOpenAddList(value);
  };
  const handlePrinting = useReactToPrint({
    content: () => componentRef.current,
    header:()=> componentRef.current
    
   
    
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
  const [po_no, setpo_no] = useState("");
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
      setis_revised(data[0].is_revised)
      setpayment_terms(data[0].payment_terms)
      setdelivery_time(data[0].delivery_time)
      if(data[0].contact!==null)
      {
        setcontactperson(data[0].contact.fname)
        setprefix(data[0].contact.prefix)
        setdesignation(data[0].contact.designation)
        setcontactpersonemail(data[0].contact.email)
      }
    
      setcontactpersoncontact(data[0].party.contact)
     
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
    handleClose()
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
        url.delete(`sale-quotation/${id}`)
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
const reviseqoute = () => {

  // window.location.href = `/Quoteedit/${id}`
  history.push(`/revisequote/${id}`)
}

function PrintMe(DivID) {
  var disp_setting="toolbar=yes,location=no,";
  disp_setting+="directories=yes,menubar=yes,";
  disp_setting+="scrollbars=yes,width=2000, height=1000, left=100, top=25";
     var content_vlue = document.getElementById('print-area').innerHTML;
     var docprint=window.open("","",disp_setting);
     docprint.document.open();
     docprint.document.write('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"');
     docprint.document.write('"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">');
     docprint.document.write('<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">');
     docprint.document.write('<head><title>My Title</title>');
     docprint.document.write('<style type="text/css">body{ margin:0px;');
     docprint.document.write('font-family:verdana,Arial;color:#000;');
     docprint.document.write('font-family:Verdana, Geneva, sans-serif; font-size:12px;}');
     docprint.document.write('a{color:#000;text-decoration:none;} </style>');
     docprint.document.write('</head><body onLoad="self.print()"><center>');
     docprint.document.write(content_vlue);
     docprint.document.write('</center></body></html>');
     docprint.document.close();
     docprint.focus();
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
//             var content = document.getElementById("print-area");
// var pri = document.getElementById("ifmcontentstoprint").contentWindow;
// pri.document.open();
// pri.document.write(content.innerHTML);
// pri.document.close();
// pri.focus();
// pri.print();
    
    window.print()

  };
  window.onafterprint = function(){ window.close()
    window.location.href = ``
  };
  const statuschange = (status) => {
    const json ={
      status:status,
      po_number:po_no
    }
    
    // Swal.fire({
    //   // title: 'Are you sure?',
    //   text: `Are you sure want to ${status} the Quotation!`,
    //   icon: 'danger',
    //   showCancelButton: true,
    //   confirmButtonText: 'Yes,',
    //   icon: 'warning',
    //   cancelButtonText: 'No, keep it'
    // }).then((result) => {
    //   if (result.value) {
     url.put(`update-quotation/${id}`,json)
    .then(res => {
        
      
       if(res.data.msg)
       {
          setmessage(true)
          handleClicks({ vertical: "top", horizontal: "center" })
       }
       else
       {
       Swal.fire({
        title: 'Success',
        type: 'success',
        icon:'success',
        text:`Quotation has been ${status}.`,
      })
      history.push('/quoateview') 
      }
    })
       
       
        
      
        
    // })
    


      // } else if (result.dismiss === Swal.DismissReason.cancel) {
        
      // }
    // })
    
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
                     {s!=="accept"?!is_revised &&<MenuItem  onClick={() => reviseqoute()}>
                      Revise Quotaion
                      </MenuItem>:''}
                    
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
            style={{border:'1px solid #ff3d57',color:'#ff3d57'}}
            variant="outlined"
            onClick={() => statuschange('reject')}
          >
            <Icon>cancel</Icon> Rejected
          </Button>
          }
          
        {shouldOpenAddList ? (
          <ClickAwayListener onClickAway={() => handleAddListToggle(false)}>
            <Card
              className="mx-3 border-radius-0 cursor-pointer p-4 min-w-288"
              elevation={3}
            >
              <TextField
                size="small"
                className="mb-3"
                variant="outlined"
                name="po_no"
                value={po_no}
                fullWidth
                onChange={e => setpo_no(e.target.value)}
                label="Enter P.O. Number"
                onKeyDown={e => setpo_no(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        size="small"
                        onClick={() => handleAddListToggle(false)}
                      >
                        <Icon fontSize="small">clear</Icon>
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            
              <div className="flex justify-end">
                <Button
                  onClick={() => {
                    // handleAddList(columnTitle);
                    // setColumnTitle("");
                  statuschange('accept')
                  }}
                  variant="outlined"
                  color="primary"
                >
                 <Icon>add</Icon> Add
                </Button>
                <Button
                  onClick={() => {
                    // handleAddList(columnTitle);
                    // setColumnTitle("");
                  statuschange('accept')
                  }}
                  variant="outlined"
                  color="secondary"
                  className="ml-2"
                >
                  <Icon>cancel</Icon>Skip
                </Button>
                {message&&
                <h6 color="error">P.O. Number already exits</h6>
                }
                
              </div>
            </Card>
          </ClickAwayListener>
        ) : (
          <span>
            
         {s==="new" &&
          !is_revised &&<Button
          className="mr-4 py-2"
          variant="outlined"
          onClick={() => handleAddListToggle(true)}
          style={{border:'1px solid #119144',color:'#119144'}}
        >
          <Icon>check_circle</Icon> Accepted
        </Button>
        
        }
        </span>
        )}
        
      

          
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

    <div  id="print-area" ref={componentRef} style={{fontFamily: "Calibri",fontSize: 16}} > 
      <table >
        <thead   style={{display:"table-header-group",marginTop:'20px'}} >
            <tr>
              
              <td>
              <div class="empty-header"> 
{/* <header> */}
<div className="px-2 flex justify-between">
  <div className="flex">
    <div className="pr-12">
      <img src={logo} alt="this is car image" style={{ marginLeft: '15px', width: 237 }} />

    </div>
   
    <div className="viewer__order-info px-4 mb-4 flex justify-between">
    </div>
  </div>
  <div className="flex">
  <div style={{marginLeft:'50px'}}>
    <h2 style={{color:'#1d2257',textAlign:'right'}}>
      
    شركة أماكو العربية للمقاولات</h2>

      <h3 style={{color:'#1d2257',textAlign:'right',fontSize:20}}>
        AMACO ARABIA CONTRACTING COMPANY
        
      </h3>
      <h5 style={{color:'#555',textAlign:'right',fontSize:17}} className="font-normal b-4 capitalize">
       C.R No. 2055003404 | VAT No. 310398615200003


      </h5>
      
    </div>
  </div>
</div>
{/* </header> */}
</div>
    </td>
    
    
  </tr>
</thead>

          <tbody style={{marginBottom:'50px'}}>
            <tr>
              <td>
        <div>
        <div className="pl-2 pt-5 flex justify-between" style={{borderTop:'1px solid #ccc',}}>
        
          <div className="flex">
            <div className="pl-2 px-4 mb-4">
              <h3 style={{fontSize:20}}><strong>SALES QUOTATION</strong></h3>
              {vat}
            </div>
          </div>
          </div>
{/* 
         <div className="px-2 flex justify-between justify-content">
          <div className="flex-start">
            <div className="pl-2 px-4 mb-4">
              <h5 style={{fontWeight:1000}}>Customer Name</h5>
              {company}
            </div>
          </div>
          <div className="flex justify-center item-center">
            <div className="justify-center">
              <h5 style={{fontWeight:1000,textAlign:'center'}}>Attention</h5>
              {contactperson}
            </div>
          </div>
          <div className="flex">
            <div className="mr-4" align="right">
              <h5 style={{fontWeight:1000}}>
               Quotation Date
              </h5>
              {moment(psdate).format('DD MMM YYYY')}
            </div>
          </div>
        </div>
      
        <div className="px-2 flex justify-between space-between">
          <div className="flex">
            <div className="pr-12 px-4 mb-4">
              <h5 style={{fontWeight:1000}}>Customer Address</h5>
              {street},{city},{zipcode}
            </div>
          </div>
          <div className="flex">
          <div className="justify-center">
              <h5 style={{fontWeight:1000}}>Designation</h5>
              {designation}
            </div>
          </div>
          <div className="flex">
            <div className="mr-4" align="right">
              <h5 style={{fontWeight:1000}}>
              Quotation Number
              </h5>
             
              {qid}
            </div>
          </div>
        </div>
        <div className="px-2 flex justify-between">
          <div className="flex">
            <div className="pr-12 px-4 mb-4">
              <h5 style={{fontWeight:1000}}>Vendor Id</h5>
              {vendor_id}
            </div>
          </div>
          <div className="flex">
            <div className="">
              <h5 style={{fontWeight:1000}}>Email Id</h5>
              {contactpersonemail}
            </div>
          </div>
          <div className="flex">
            <div className="mr-4" align="right">
              <h5 style={{fontWeight:1000}}>
             RFQ Number
              </h5>
             
              {qid}
            </div>
          </div>
        </div> */}
        <div className="px-2 flex justify-between">
            <div className="px-2 flex justify-end">
              <div className="flex " >
              <div className="">
              <div className="pl-2 pb-4">
              <span style={{fontWeight:1000}}>Customer Name</span>
              <br></br>
            {company}
        
            </div>
            <div className="pl-2 pb-4">
              <span style={{fontWeight:1000}}>Customer Address</span>
              <br></br>
              {street},{city},{zipcode}
             
             
            </div>
            <div className="pl-2 ">
          
              <span style={{fontWeight:1000}}>Vendor ID</span>
              <br></br>
              {vendor_id}
            
            </div>
            </div>
            <div>
              </div>
              </div>
            </div>
            <div className="px-2 flex justify-center">
          <div className="flex " >
              <div className="pb-2">
              <div className="pb-4">
              <span style={{fontWeight:1000,paddingBottom:0}}>Attention</span>
              <br></br>
              {contactperson?contactperson:'--'}
             
             
            </div>
            <div className="justify-center pb-4">
              <span style={{fontWeight:1000}}>Designation</span>
              <br></br>
              {designation?designation:'--'}
          
            </div>
            <div className="">
              <span style={{fontWeight:1000}}>Email ID</span>
              <br></br>
              {contactpersonemail?contactpersonemail:'--'}
           
            </div>
            </div>
            <div>
              </div>
              </div>
            </div>
            <div className="px-2 mr-1 flex justify-end">
          <div className="flex " >
              <div className="">
              <div className="mr-1 pb-4" align="left">
              <span style={{fontWeight:1000}}>
               Quotation Date
              </span>
              <br></br>
              {moment(psdate).format('DD MMM YYYY')}
             
             
            </div>
            <div className="mr-1 pb-4" align="left">
              <span style={{fontWeight:1000}}>
              Quotation Number
              </span>
              <br></br>
             
              {qid}
            
            </div>
            <div className="mr-1 " align="left">
              <span style={{fontWeight:1000}}>
             {/* RFQ Number */}
              </span>
               
              {/* {rfq} */}
            </div>
            </div>
            <div>
              </div>
              </div>
            </div>
            </div>

       
       
      <hr></hr>  
      <div className="viewer__order-info px-4 mb-4 flex justify-between" >
        <Table>  
          <TableRow style={{marginBottom:200}} >
            Subject: Quotation for General Items
          </TableRow>
        </Table>
      </div>
      <div className="viewer__order-info px-4 flex justify-between">
        <Table> 
          <TableRow className="pl-4"> 
            {prefix?(prefix==="Mr"?"Dear Sir,":"Dear Madam,"):'Dear Sir/Madam,'}
            <br></br>
            Thank you for requesting us for the quotation of below mentioned items, please find our best price for the supply of requested 
            items.<br></br>
             We look forward for our valued P.O.
          </TableRow>
        </Table>
      </div>
      <div className="px-4 mb-2 pl-4 pt-4 flex justify-between">
        <Table style={{width: "100%", fontSize: 12, border: "none",}} className="pl-4" >  
          <TableHead style={{backgroundColor:'#1d2257',display:'table-row-group'}}>
            <TableRow  style={{pageBreakInside:'avoid'}}> 
              <TableCell className="pr-0" colspan={1} style={{border: "1px solid #ccc",width:"50px",fontFamily: "Calibri",color:'#fff',fontWeight:1000,fontSize: 16}} align="center">S.No.</TableCell>
              <TableCell className="px-0" colspan={2} style={{border: "1px solid #ccc",fontFamily: "Calibri",color:'#fff',fontColor:'#fff',fontWeight:1000,fontSize: 16}}  align="center">ITEM</TableCell>
                <TableCell className="px-0" colspan={5} style={{border: "1px solid #ccc",fontFamily: "Calibri",color:'#fff',fontColor:'#fff',fontWeight:1000,fontSize: 16}}  align="center">RFQ DESCRIPTION</TableCell>
        
                <TableCell className="px-0" colspan={4} style={{border: "1px solid #ccc",fontFamily: "Calibri",color:'#fff',fontColor:'#fff',fontWeight:1000,fontSize: 16}}  align="center">AMACO DESCRIPTION</TableCell>
                <TableCell className="px-0" style={{border: "1px solid #ccc",fontFamily: "Calibri",width:80,color:'#fff',fontWeight:1000,fontSize: 16}}  align="center">QTY</TableCell>
                <TableCell className="px-0"style={{border: "1px solid #ccc",fontFamily: "Calibri",color:'#fff',fontWeight:1000,fontSize: 16}}  align="center">UOM</TableCell>
                
                <TableCell className="px-0"style={{border: "1px solid #ccc",fontFamily: "Calibri",width:110,color:'#fff',fontWeight:1000,fontSize: 16}}  align="center">UNIT PRICE</TableCell> 
                <TableCell className="px-0"style={{border: "1px solid #ccc",fontFamily: "Calibri",width:110,color:'#fff',fontWeight:1000,fontSize: 16}}  align="center">TOTAL</TableCell>
              </TableRow>
            </TableHead>
            <TableBody >
              {qdetails.map((item, index) => {
                return (
                  <TableRow key={index} style={{border: "1px solid #ccc", pageBreakInside: 'avoid'}}>
                    <TableCell className="pr-0" align="center" colspan={1} style={{border: "1px solid #ccc",fontFamily: "Calibri",fontSize: 16}} >
                      {index + 1}
                    </TableCell>
                   
                    <TableCell className="pr-0 capitalize" align="center"  style={{border: "1px solid #ccc",fontFamily: "Calibri",fontSize: 16}} colspan={2}>
                   
                    {item.file?<img className="w-48" src={item.file} alt="" />:''}
                      
                    </TableCell>
                    <TableCell className="pl-2 capitalize" align="left" colspan={5}  style={{border: "1px solid #ccc",wordBreak:'break-word',fontFamily: "Calibri",fontSize: 16}}>
                     {item.description}
                    </TableCell>
                    <TableCell className="pl-2 capitalize" align="left" colspan={4}  style={{border: "1px solid #ccc",wordBreak:'break-word',fontFamily: "Calibri",fontSize: 16}}>
                     {item.product.description}
                    </TableCell>
                    {/* <TableCell className="pl-0 capitalize" align="center"  colspan={3}  style={{border: "1px solid #ccc",fontFamily: "Calibri",}}>
                     {item.remark}

                    </TableCell> */}
                    
                    <TableCell className="pr-0 capitalize" align="center"  style={{border: "1px solid #ccc",fontFamily: "Calibri",fontSize: 16}}>
                    {nf.format(item.quantity)}
                  
                      
                    </TableCell>
                    <TableCell className="pr-0 capitalize" align="center" style={{border: "1px solid #ccc",fontFamily: "Calibri",fontSize: 16}}>
                    {item.product.unit_of_measure}
                    </TableCell>
                    <TableCell className="pl-0 capitalize" style={{textAlign: "right",border: "1px solid #ccc",fontFamily: "Calibri",fontSize: 16}} >
                    {parseFloat(item.sell_price).toLocaleString(undefined, {minimumFractionDigits:2})}
                    </TableCell>
                    <TableCell className="pl-0 capitalize" style={{textAlign: "right",border: "1px solid #ccc",fontFamily: "Calibri",fontSize: 16}}>
                  
                    {parseFloat(item.total_amount).toLocaleString(undefined, {minimumFractionDigits:2})}
                   
                    

                    </TableCell>
                    
                   
                    
                  </TableRow>
                );
              })}
   
              <TableRow style={{ border: "1px solid #ccc",pageBreakInside:'avoid',pageBreakAfter:'always',pageBreakBefore:'always' }}>
                  <TableCell className="pl-0 capitalize" align="center" style={{ border: "1px solid #ccc",fontFamily: "Calibri" }} rowspan={2} colspan={12}>
                    <div className="px-4 flex justify-between" style={{ fontFamily: "Calibri" }}>
                      <div className="flex">
                        <div className="pr-12">
                          <TableRow>
                            <td>
                              <h5 className="font-normal capitalize">
                                <strong>BANK DETAILS</strong>{" "}
                              </h5>
                            </td>
                          </TableRow>
                          <tr style={{fontSize: 16, textAlign: 'left' }} >
                            <td><strong>Bank Name</strong></td>
                            <td >National Commercial Bank</td>
                          </tr>
                          <tr style={{fontSize: 16, textAlign: 'left' }}>
                            <td ><strong>Account No</strong></td>
                            <td >6000000242200</td>
                          </tr>
                          <tr style={{ height: 5, fontSize: 16, textAlign: 'left' }}>
                            <td ><strong>IBAN No</strong></td>
                            <td >SA3610000006000000242200</td>
                          </tr>
                        </div>
                      </div>
                    </div>

                  </TableCell>
                  <TableCell className="pr-0 capitalize" align="center" style={{ border: "1px solid #ccc",wordBreak:'break-word',fontFamily: "Calibri" }} colspan={2}>
                   
                    SUB TOTAL 

                  </TableCell>
                  {/* <TableCell className="pl-0 capitalize" align="center" style={{ border: "1px solid #ccc",width: "500px",fontFamily: "Calibri",borderRight:"1px solid #fff"}}>
                    SAR
                  </TableCell> */}
                  <TableCell className="pl-0 capitalize" align="right" style={{ border: "1px solid #ccc",wordBreak:'break-word',fontFamily: "Calibri" }} colspan={2}>
                  {/* <IntlProvider locale='en-US'>
                  <FormattedNumber value={total_value} currency={"SAR"} style="currency" />
                  </IntlProvider> */}
                  {parseFloat(total_value).toLocaleString(undefined, {minimumFractionDigits:2})}  SAR
                  </TableCell>

                </TableRow>
                
                <TableRow style={{ border: "1px solid #ccc",pageBreakInside:'avoid' }}>
                  <TableCell className="pr-0 capitalize" align="center" style={{ border: "1px solid #ccc",wordBreak:'break-word',fontFamily: "Calibri" }} colspan={2}>
                  
                 TOTAL VAT AMOUNT (15%)
                  </TableCell>
                  {/* <TableCell className="pl-0 capitalize" align="center" style={{ border: "1px solid #ccc",width: "500px",fontFamily: "Calibri",borderRight:"1px solid #fff" }}>
                    SAR
                  </TableCell> */}
                  <TableCell className="pl-0 capitalize" align="right" style={{ border: "1px solid #ccc",fontFamily: "Calibri" }} colspan={2}>
                  {parseFloat(vat_in_value).toLocaleString(undefined, {minimumFractionDigits:2})} SAR
                  </TableCell>
                </TableRow>
             
                <TableRow style={{ border: "1px solid #ccc",pageBreakInside:'avoid' }}>
                  <TableCell className="pl-0 capitalize" colspan={12} style={{ border: "1px solid #ccc",fontFamily: "Calibri" }}>
                    <div className="px-4 flex justify-between">
                      <div className="flex">
                        <div className="pr-12" style={{wordBreak:'break-word',fontSize: 16}}>

                          <strong>TOTAL IN WORDS</strong><br></br>{ress}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  
                  <TableCell className="pr-0 capitalize" align="center" style={{ border: "1px solid #ccc",fontFamily: "Calibri",wordBreak:'break-word' }} colspan={2}>
                  
                 
                   GRAND TOTAL
                  </TableCell>
                  {/* <TableCell className="pl-0 capitalize" align="center" style={{ border: "1px solid #ccc",width: "50px",fontFamily: "Calibri",borderRight:"1px solid #fff" }}>
                    SAR
                  </TableCell> */}
                  <TableCell className="pl-0 capitalize" align="right" style={{ border: "1px solid #ccc",width: "500px",fontFamily: "Calibri" }} colspan={2}>
                   
                    {/* <IntlProvider locale='en-US' style={{wordBreak:'break-word'}}>
                    <FormattedNumber value={net_amount} currency={"SAR"} style="currency" />
                    </IntlProvider> */}
                    {parseFloat(net_amount).toLocaleString(undefined, {minimumFractionDigits:2})} SAR
              
                  </TableCell>
                </TableRow>
                
               

              
              
            </TableBody>
          </Table>
          </div>
          <br></br>
          
        
        <div className="viewer__order-info px-4 mb-4 flex justify-between">
          <div>
          {/* <td style={{color:"red"}} colspan={2}>NOTES</td>
          <tr style={{ height: 5, fontSize: 16,textAlign: 'left'}}>
              
              <td colspan={2}><li>Quoted prices are for complete lot, any partial order is subject to reconfirmation.</li></td>
            </tr>
      <tr style={{ height: 5, fontSize: 16,textAlign: 'left'}}>
              <td colspan={2}><li>This is a system generated quote and hence does not required any signature.</li></td>
        </tr> */}
        <td style={{color:"red"}} colspan={2}>TERMS</td>
        <tr style={{ height: 5, fontSize: 16,textAlign: 'left' }}>
              
              <td style={{fontSize: 16,color:'#1d2257',height:20}}>
                <Icon style={{fontSize:16,color:'#1d2257',paddingTop:2}} >timelapse</Icon> Quoatation Validity 
              </td>
              <td>{validity}</td>
        </tr>
        <tr style={{ height: 5, fontSize: 16,textAlign: 'left' }}>
              <td ><Icon style={{fontSize:16,color:'#1d2257',paddingTop:2}}>monetization_on</Icon> Payment Terms  </td>
              <td>{payment_terms}</td>
        </tr>
        <tr style={{ height: 5, fontSize: 16,textAlign: 'left' }}>
              <td><Icon style={{fontSize:16,color:'#1d2257',paddingTop:2}} >verified_user</Icon> Warranty </td>
              <td>{warranty}</td>
        </tr>
        <tr style={{ height: 5, fontSize: 16,textAlign: 'left' }}>
              <td ><Icon style={{fontSize:16,color:'#1d2257',paddingTop:2}} >watch_later</Icon> Delivery Time </td>
              <td>{delivery_time}</td>
        </tr>
          
        <tr style={{ height: 5, fontSize: 16,textAlign: 'left' }}>
              <td ><Icon style={{fontSize: 16,color:'#1d2257'}} className="pt-1">local_shipping</Icon> Inco-Term </td>
              <td>{inco_terms}</td>
        </tr>
        <br></br>
        <td style={{color:"red"}} colspan={2}>NOTES</td>
          <tr style={{ height: 5, fontSize: 16,textAlign: 'left'}}>
              
              <td colspan={2}><li style={{fontSize: 16,}}>Quoted prices are for complete lot, any partial order is subject to reconfirmation.</li></td>
            </tr>
      <tr style={{ height: 5, fontSize: 16,textAlign: 'left'}}>
              <td colspan={2}><li style={{fontSize: 16,}}>This is a system generated quote and hence does not required any signature.</li></td>
        </tr>
            
            
            {/* <p style={{fontSize: 16}}>
             Inco-Term {inco_terms}
            </p> */}
        
       </div>
       <div>
        
        
       </div>
      </div>
      <br></br>
      <div className="viewer__order-info px-4 mb-4 flex justify-between">
      <div >
            <h5>We trust our offer falls in line with your requirements. For any clarification please contact under signed.</h5>
            <br></br>
            <h5>Best Regards,</h5>
            <tr style={{ height: 5, fontSize: 16, textAlign: 'left'}}>
            <td style={{ height: 'auto !important',fontWeight:1000 }}>Mr. Abbas Ahamed Shazli</td>
            </tr>
            <tr style={{ height: 5, fontSize: 16, textAlign: 'left'}}>
            <td >Business Development Manager - ISD Division</td>
            </tr>
            <tr style={{ height: 5, fontSize: 16, textAlign: 'left'}}>
            <td>abbas@amaco.com.sa | +966 535515212 </td>
            </tr>
            <tr style={{ height: 5, fontSize: 16, textAlign: 'left'}}>
            <td>Amaco Arabia Contracting Company</td>
            </tr>
            <tr style={{ height: 5, fontSize: 16, textAlign: 'left'}}>
            <td>P.O. Box 9290, AI Jubail 31951, KSA  </td>
            </tr>
            
            {/* <tr style={{ height: 5, fontSize: 16, textAlign: 'left'}}>
            <td>535515212</td>
            </tr> */}
      </div>
      
        
      </div>
      <br></br>
          
          </div>
        </td>
        </tr>
        </tbody>
        <tfoot><div class="empty-footer"></div></tfoot>
        </table>
        <div class="footer">
         <footer style={{visibility: "hidden" }}>
             {/* <div style={{visibility: "hidden" }} style={{'borderBottom': '30px solid #c1c1c1','borderLeft': '50px solid transparent','height': 0,'width': '100%',paddingLeft:'0'}}>
          
          <p style={{color:'#fff',paddingTop:5,paddingBottom:5}} align="center"> Tel.: +966 13 363 2387| Fax: +966 13 363 2387 | P.O.Box 9290 | Jubail 31951 | Kingdom of Saudi Arabia</p>
                
        </div>
         <div class="main" style={{width:'100%'}} > 
       <div  class="right" style={{width: '60px',height: '5ex',backgroundColor: '#fff',shapeOutside: 'polygon(100% 0, 100% 100%, 0 100%)',float: 'right',webkitClipPath: 'polygon(100% 0, 100% 100%, 0 100%)'}}></div>           
        <p   style={{textAlign: 'center',backgroundColor: '#1d2257',color:'white',fontFamily: "Calibri",paddingTop:5,paddingBottom:5}}>E-mail: sales@amaco.com.sa | Website: www.amaco.com.sa</p>
        </div>
         */}
          <div >
        <div id="outer" style={{"position": "relative", width:'1050px', backgroundColor:'#c1c1c1',"transform": "skew(-20deg)",marginLeft:'40px',marginRight:'50px'}}>
        <p style={{color:'#fff',paddingTop:5,paddingBottom:5,"transform": "skew(20deg)"}} align="center"> Tel.: +966 13 363 2387| Fax: +966 13 363 2387 | P.O.Box 9290 | Jubail 31951 | Kingdom of Saudi Arabia</p>
        <div id="spacer" style={{width: "200px", height: "10px", marginRight:0,}}></div>
        <div style={{"position": "fixed", bottom: 0, width: "100%", height: 30, backgroundColor:"#1d2257",}}> <p   style={{textAlign: 'center',color:'white',fontFamily: "Calibri",paddingTop:5,paddingBottom:10,"transform": "skew(20deg)"}}>E-mail: sales@amaco.com.sa | Website: www.amaco.com.sa</p></div>
    </div> 
           </div>
        {/* <h6 style={{textAlign:"center"}}>page 1 of 1</h6> */}
            </footer>
            </div>
        
       
    

      </div>
  
      </div>
   
    
  );
};


export default InvoiceViewer;
