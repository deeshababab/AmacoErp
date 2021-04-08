import React, { useState, useEffect ,useRef} from "react";
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
import { IntlProvider,FormattedNumber } from 'react-intl';
import { FormattedMessage } from 'react-intl';
import Swal from "sweetalert2";
import Axios from "axios";
import history from "history.js";
import moment from "moment";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { ToWords } from 'to-words';
import { useReactToPrint } from 'react-to-print';
const locale = navigator.language;


// import Image from 'react-image-resizer';

const i=0;
  function counter() {
    
    return i+1;
  }
const useStyles = makeStyles(({ palette, ...theme }) => ({
 
  "@global": {
    
   
    
    "@media print": {
      
      
      "body, html": {
        visibility: "hidden",
        size: "auto",
        counterReset:i,
        // content: 'none !important',
        "-webkit-print-color-adjust": "exact !important",
        marginTop:'10px'
    
       
        
      

      
       
      },
      "h3":{
        counterIncrement:i,
        content: "Section " 
      },
      
     
      "#header": {
        // padding: "10px",

        /* These do the magic */
        position: "fixed",
        //top: '1em',
        left: 0,
        // paddingBottom:130
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
  const componentRef = useRef();
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
  const [res, setres] = useState("");
  const [ress, setress] = useState("");
  const toWords = new ToWords({
    localeCode: 'en-IN',
    converterOptions: {
      currency: true,
      ignoreDecimal: false,
      ignoreZeroCurrency: false,
    }
  });
  function handleClose() {
    setAnchorEl(null);
  }
  
  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }
  const handlePrinting = useReactToPrint({
    content: () => componentRef.current,
    header:()=> componentRef.current
    
   
    
  });
  

  useEffect(() => {
   
    // updateSidebarMode({ mode: "close" })
    document.title="Purchase Order - Amaco"
    url.get("purchase-quotation/"+id).then(({ data }) => {
    //  console.log(data[0].rfq.id)
    // setcname(data[0].party.fname)
      setpo_number(data[0].po_number)

      setqid(data[0].id)
      setrno(data[0].rfq.id)
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
    window.location.href=`../Newinvoiceview`
    history.push("/Newinvoiceview")
    // let activeLayoutSettingsName = settings.activeLayout + "Settings";
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
     
  }

  }
  const editpurchase =() =>{
    
    // window.location.href=`../purchaseedit/${id}`
    history.push(`/purchaseedit/${id}`)
    
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
      
      history.push("/Newinvoiceview")
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
    <Card elevation={6} className="m-sm-30">
    <div className={clsx("invoice-viewer py-4", classes.invoiceViewer)}>
      <div className="viewer_actions px-4 mb-5 flex items-center justify-between">
        <Link to="/Newinvoiceview"> 
          <IconButton >
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
                    Genrate Purchase Order
                      </MenuItem> */}
                      
                      <MenuItem  onClick={() => deletepo()}>
                      Delete PurchaseOrder
                      </MenuItem>
                      <MenuItem  onClick={() => handlePrinting()}>
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

       <div id="print-area" ref={componentRef} style={{fontFamily: "Calibri",fontSize: 16}}> 
      
       {/* <header id="header"> */}
       <table >
        <thead style={{display:"table-header-group"}} >
            <tr>
              
              <td>
              <div class="empty-header">

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
    <div className="viewer__order-info px-4 mb-4 flex justify-between">
    </div>
  </div>
  <div className="flex">
  <div>
    <h2 style={{color:'#1d2257',textAlign:'right'}}>
      {/* <IntlProvider locale={locale} messages={Arabic}> */}
       {/* <strong><FormattedMessage
          id="app.channel.plug"
          defaultMessage="Amaco Arabia Contracting Company"
          values="Amaco Arabia Contracting Company"
        />
        </strong> */}
      {/* </IntlProvider></h2> */}
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



        <hr></hr>
        <tbody style={{marginBottom:'50px'}}>
            <tr>
              <td>
        <div className="viewer__order-info px-4 mb-4 pt-5 flex justify-between">
          <div className="ml-2">
          <h3 style={{fontSize:20}}><strong>PURCHASE ORDER</strong></h3>
            
          </div>
          <div className="text-center">
         
           
          </div>
          <div className="text-right">
           
          </div>
        </div>
        <div className="px-2 flex justify-between">
          
          
        </div>
        <div className="px-2 flex justify-between">
          
          
        </div>
        <div className="px-2 flex justify-between">
          
         
          
        </div>

       



        <div className="px-2 flex justify-between">
            <div className="px-2 flex justify-end">
              <div className="flex " >
              <div className="">
              <div className="pl-2 pb-4">
              <span style={{fontWeight:1000}}>Supplier Name</span><br></br>
            {company}
        
            </div>
            <div className="pl-2 pb-4">
              <span style={{fontWeight:1000}}>Attention</span><br></br>
              {contactperson}
             
             
            </div>
            <div className="pl-2 ">
            <span style={{fontWeight:1000}}>Email ID</span><br></br>
              {contactpersonemail}
              
            
            </div>
            </div>
            <div>
              </div>
              </div>
            </div>
            <div className="px-2 flex justify-end">
              <div className="flex " >
              <div className="">
              <div className="pl-2 pb-4">
              <span style={{fontWeight:1000}}>P.O. Date</span><br></br>
              {moment(rdate).format('DD MMM YYYY')}
        
            </div>
            <div className="pl-2 pb-4">
              <span style={{fontWeight:1000}}>P.O. Number</span><br></br>
              {po_number}
             
             
            </div>
            <div className="pl-2 ">
          
            <span style={{fontWeight:1000}}>RFQ ID</span><br></br>
              {rno}
            
            </div>
            </div>
            <div>
              </div>
              </div>
            </div>
            <div className="px-2 flex justify-end">
              <div className="flex " >
              <div className="">
              <div className="pl-2">
              <h5 style={{fontWeight:1000}}></h5>
           
        
            </div>
            <div className="pl-2 ">
              <h5 style={{fontWeight:1000}}></h5>
             
             
             
            </div>
            <div className="pl-2 ">
          
              <h5 style={{fontWeight:1000}}></h5>
             
            
            </div>
            </div>
            <div>
              </div>
              </div>
            </div>
          </div>
        
      <br></br>
        <Card className="mb-4" elevation={0} title="Rfq Details" borderRadius="borderRadius" >
        

        
        <div className="viewer__order-info px-2 mb-4 flex justify-between">
          <Table>  
          <TableHead style={{backgroundColor:'#1d2257',display:'table-row-group'}}>
              <TableRow>
                <TableCell className="pl-0" colspan={2} style={{border: "1px solid #ccc",width:"50px",fontFamily: "Calibri",color:"#fff",fontWeight:'1000',fontSize: 16}} align="center">S.No.</TableCell>
                
        
                <TableCell className="px-0" colspan={3} style={{border: "1px solid #ccc",fontFamily: "Calibri",color:"#fff",fontWeight:'1000',fontSize: 16 }}width="0px" align="center">RFQ DESCRIPTION</TableCell>
        
                <TableCell className="px-0" colspan={3} style={{border: "1px solid #ccc",fontFamily: "Calibri",color:"#fff",fontWeight:'1000',fontSize: 16}} width="300px" align="center">QUOTATION DESCRIPTION</TableCell>
                <TableCell className="px-0" colspan={3} style={{border: "1px solid #ccc",fontFamily: "Calibri",width:200,color:"#fff",fontWeight:'1000',fontSize: 16}}  align="center">REMARK</TableCell>
                <TableCell className="px-0" style={{border: "1px solid #ccc",fontFamily: "Calibri",width:90,color:"#fff",fontWeight:'1000',fontSize: 16}} align="center">QTY</TableCell>
                <TableCell className="px-0"style={{border: "1px solid #ccc",fontFamily: "Calibri",color:"#fff",fontWeight:'1000',fontSize: 16}}  align="center">UOM</TableCell>
                
                <TableCell className="px-0"style={{border: "1px solid #ccc",width:100,fontFamily: "Calibri",color:"#fff",fontWeight:'1000',fontSize: 16}}  align="center">UNIT PRICE</TableCell> 
                <TableCell className="px-0"style={{border: "1px solid #ccc",width:100,fontFamily: "Calibri",color:"#fff",fontWeight:'1000',fontSize: 16}}  align="center">TOTAL</TableCell>
              </TableRow>
            </TableHead>
            <TableBody >
              {qdetails.map((item, index) => {

                 
                
                return (
                  <TableRow key={index} style={{border: "1px solid #ccc"}}>
                    <TableCell className="pr-0" align="center" colspan={2} style={{border: "1px solid #ccc",fontFamily: "Calibri",fontSize: 16}} >
                      {index + 1}
                    </TableCell>
                    

                    <TableCell className="pl-2 capitalize" align="left" colspan={3}  style={{border: "1px solid #ccc",wordBreak:'break-word',fontFamily: "Calibri",fontSize: 16}}>
                     {item.description}

                    </TableCell>
                    <TableCell className="pl-2 capitalize" align="left" colspan={3}  style={{border: "1px solid #ccc",wordBreak:'break-word',fontFamily: "Calibri",fontSize: 16}}>
                     {item.product.description}

                    </TableCell>
                    <TableCell className="pl-0 capitalize" colspan={3} align="center"  style={{border: "1px solid #ccc",fontFamily: "Calibri",fontSize: 16}}>
                     {item.remark}

                    </TableCell>
                    
                    <TableCell className="pr-0 capitalize" align="center"  style={{border: "1px solid #ccc",fontFamily: "Calibri",fontSize: 16}}>
                    {parseInt(item.quantity).toLocaleString()}

                    
                      
                    </TableCell>
                    <TableCell className="pr-0 capitalize" align="center" style={{border: "1px solid #ccc",fontFamily: "Calibri",fontSize: 16}}>
                    {item.product.unit_of_measure}
                    </TableCell>
                    <TableCell className="pl-0 capitalize" style={{textAlign: "right",border: "1px solid #ccc",fontFamily: "Calibri",fontSize: 16}} >
                   
                    {parseFloat(item.purchase_price).toLocaleString(undefined, {minimumFractionDigits:2})}
                    </TableCell>
                    <TableCell className="pl-0 capitalize" style={{textAlign: "right",border: "1px solid #ccc",fontFamily: "Calibri",fontSize: 16}}>
                   
                   {parseFloat(item.total_amount).toLocaleString(undefined, {minimumFractionDigits:2})}
          
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
              <TableRow style={{border: "1px solid #ccc"}}>
              <TableCell className="pl-0 capitalize" colspan={11} style={{ border: "1px solid #ccc",fontFamily: "Calibri",width:200 }}>
              </TableCell>
            <TableCell style={{textAlign: "right",border: "1px solid #ccc",fontFamily: "Calibri"}} colspan={2}>SUB TOTAL</TableCell>
            {/* <TableCell style={{textAlign: "right",border: "1px solid #ccc",fontFamily: "Calibri",borderRight:"1px solid #fff"}}>
                SAR
                </TableCell> */}
              <TableCell style={{textAlign: "right",border: "1px solid #ccc",fontFamily: "Calibri"}} colspan={2}
                >
                   
                   {/* <IntlProvider locale='en-US' style={{wordBreak:'break-word',fontFamily: "Calibri"}}>
                    <FormattedNumber value={total_value} currency={"SAR"} style="currency" />
                    </IntlProvider> */}
                    {parseFloat(total_value).toLocaleString(undefined, {minimumFractionDigits:2})}  SAR
                    
                </TableCell>
                  
                 
              </TableRow>
              <TableRow style={{border: "1px solid #ccc"}}>

              <TableCell className="pr-0 capitalize" colspan={11} style={{ border: "1px solid #ccc",fontFamily: "Calibri",width:200 }}>
                </TableCell>
      
                  <TableCell style={{textAlign: "right",border: "1px solid #ccc",fontFamily: "Calibri"}} width="130px" colspan={2}>TOTAL VAT AMOUNT (15%)</TableCell>
                  {/* <TableCell style={{textAlign: "right",border: "1px solid #ccc",fontFamily: "Calibri",width:"130px",borderRight:"1px solid #fff"}}>
                SAR
                </TableCell> */}
                 <TableCell style={{textAlign: "right",border: "1px solid #ccc",fontFamily: "Calibri"}} width="130px" colspan={2}
                
                 >

                  {/* <IntlProvider locale='en-US' style={{wordBreak:'break-word'}}>
                    <FormattedNumber value={vat_in_value} currency={"SAR"} style="currency" />
                    </IntlProvider> */}
                    {parseFloat(vat_in_value).toLocaleString(undefined, {minimumFractionDigits:2})} SAR
                </TableCell> 
              </TableRow>
              <TableRow style={{border: "1px solid #ccc"}}>
              <TableCell className="pl-0 capitalize" colspan={11} style={{ border: "1px solid #ccc",fontFamily: "Calibri",width:200,fontSize: 16}}>
                    <div className="px-4 flex justify-between">
                      <div className="flex">
                        <div className="pr-12" style={{wordBreak:'break-word'}}>

                          <strong>TOTAL IN WORDS</strong><br></br>{ress}
                          
                        </div>
                      </div>
                    </div>
                  </TableCell>
                 <TableCell style={{textAlign: "right",border: "1px solid #ccc",fontFamily: "Calibri"}}
                 colspan={2}
                 >
                     <span>GRAND TOTAL</span> 
                </TableCell> 
                
                {/* <TableCell style={{textAlign: "right",border: "1px solid #ccc",fontFamily: "Calibri",width:"130px",borderRight:"1px solid #fff"}}>
                SAR
                </TableCell> */}
                <TableCell style={{textAlign: "right",border: "1px solid #ccc",fontFamily: "Calibri",width:"130px"}} colspan={2}>
                {parseFloat(net_amount).toLocaleString(undefined, {minimumFractionDigits:2})} SAR
          
    
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          </div>
          <br></br>
          <div className="viewer__order-info px-4 mb-4 flex justify-between">
          <div className="ml-24" style={{fontWeight:1000}}>
              <h5 className="font-normal t-4 capitalize">
                <IntlProvider locale={locale} messages={Arabic}>
                  <FormattedMessage
                    id="preparedby"

                  />
                </IntlProvider>
              </h5 >
                 Prepared by
              </div>
            <div style={{fontWeight:1000}}>
              <h5 className="font-normal t-4 capitalize">
                <IntlProvider locale={locale} messages={Arabic}>
                  <FormattedMessage
                    id="approvedby"

                  />
                </IntlProvider>
              </h5>
                 Approved by
              </div>
              <div className="mr-24" style={{fontWeight:1000}}>
              <h5 className="font-normal t-4 capitalize">
                <IntlProvider locale={locale} messages={Arabic}>
                  <FormattedMessage
                    id="receivedby"

                  />
                </IntlProvider>
              </h5>
                 Received by
              </div>
          </div>

          
        </Card>
        <div className="viewer__order-info px-4 mb-4 flex justify-between">
          {/* <div>
          <td style={{color:"red"}} colspan={2}>Notes </td>
        <tr style={{ height: 5, fontSize: 14,textAlign: 'left'}}>
              
              <td colspan={2}><li>Quoted Prices are for Complete lot, any paritial order is subject to reconfirmation</li></td>
            </tr>
      <tr style={{ height: 5, fontSize: 14,textAlign: 'left'}}>
              <td colspan={2}><li>This is a system Generated Quote and hence does not Required any Signature</li></td>
        </tr>
        <td style={{color:"red"}} colspan={2}>Terms</td>
        <tr style={{ height: 5, fontSize: 14,textAlign: 'left' }}>
              <td ><Icon style={{fontSize:13,color:'blue'}}>timelapse</Icon> Quoatation Validity  </td>
              <td>{validity}</td>
        </tr>
        <tr style={{ height: 5, fontSize: 14,textAlign: 'left' }}>
              <td ><Icon style={{fontSize:13,color:'blue'}}>monetization_on</Icon> Payment Terms  </td>
              <td>{payment_terms}</td>
        </tr>
        <tr style={{ height: 5, fontSize: 14,textAlign: 'left' }}>
              <td ><Icon style={{fontSize:13,color:'blue'}}>verified_user</Icon> Warranty </td>
              <td>{warranty}</td>
        </tr>
        <tr style={{ height: 5, fontSize: 14,textAlign: 'left' }}>
              <td ><Icon style={{fontSize:13,color:'blue'}}>local_shipping</Icon> Delivery Time </td>
              <td>{delivery_time}</td>
        </tr>
          
        <tr style={{ height: 5, fontSize: 14,textAlign: 'left' }}>
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
        <tr style={{ height: 5, fontSize: 14, textAlign: 'left'}}>
              <td style={{ height: 'auto !important' }}><strong>Bank Name:</strong></td>
              <td style={{ height: 'auto !important' }}>National Commerical Bank</td>
            </tr>
        <tr style={{ height: 5, fontSize: 14, textAlign: 'left'}}>
              <td style={{ height: 'auto !important' }}><strong>Account No:</strong></td>
              <td style={{ height: 'auto !important' }}>6000000242200</td>
        </tr>
        <tr style={{ height: 5, fontSize: 14, textAlign: 'left'}}>
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
      */}
      </div>
      </td>
      </tr>
      </tbody>
      <tfoot><div class="empty-footer"></div></tfoot>
      </table>

        
      <div class="footer">
             <footer   style={{visibility: "hidden" }}>
             {/* <div style={{visibility: "hidden" }} style={{'borderBottom': '30px solid #c1c1c1','borderLeft': '50px solid transparent','height': 0,'width': '100%',paddingLeft:'0'}}>
          
          <p style={{color:'#fff',paddingTop:5,paddingBottom:5}} align="center"> Tel.: +966 13 363 2387| Fax: +966 13 363 2387 | P.O.Box 9290 | Jubail 31951 | Kingdom of Saudi Arabia</p>
                
        </div>
         <div class="main" style={{width:'100%'}} > 
       <div  class="right" style={{width: '90px',height: '10ex',backgroundColor: '#fff',shapeOutside: 'polygon(100% 0, 100% 100%, 0 100%)',float: 'right',webkitClipPath: 'polygon(100% 0, 100% 100%, 0 100%)'}}></div>           
        <p   style={{textAlign: 'center',backgroundColor: '#1d2257',color:'white',fontFamily: "Calibri",paddingTop:5,paddingBottom:5}}>E-mail: sales@amaco.com.sa | Website: www.amaco.com.sa</p>
        </div>
        
        <h3 style={{textAlign:"center"}} ></h3> */}
         <div >
        <div id="outer" style={{"position": "relative", width:'1050px', backgroundColor:'#c1c1c1',"transform": "skew(-20deg)",marginLeft:'40px',marginRight:'50px'}}>
        <p style={{color:'#fff',paddingTop:5,paddingBottom:5,"transform": "skew(20deg)"}} align="center"> Tel.: +966 13 363 2387| Fax: +966 13 363 2387 | P.O.Box 9290 | Jubail 31951 | Kingdom of Saudi Arabia</p>
        <div id="spacer" style={{width: "200px", height: "10px", marginRight:0,}}></div>
        <div style={{"position": "fixed", bottom: 0, width: "100%", height: 30, backgroundColor:"#1d2257",}}> <p   style={{textAlign: 'center',color:'white',fontFamily: "Calibri",paddingTop:5,paddingBottom:10,"transform": "skew(20deg)"}}>E-mail: sales@amaco.com.sa | Website: www.amaco.com.sa</p></div>
    </div> 
           </div>
        
        
        </footer>
        </div>
    
      </div>
      
      
  
    </div>
    </Card>
   
    
  );
};

export default InvoiceViewer;
