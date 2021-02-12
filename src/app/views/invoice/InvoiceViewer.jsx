import React, { useState, useEffect } from "react";
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
import { getInvoiceById } from "./InvoiceService";
import { format } from "date-fns";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import axios from "axios";
// import Rfqprint from "./Rfqprint"
import 'bootstrap/dist/css/bootstrap.min.css';
import { cond, identity } from "lodash";
import logo from './amaco-logo.png';
import logos from './vision2030.png';
import useSettings from '../../hooks/useSettings';
import history from "history.js";
import url from "../invoice/InvoiceService";
import Arabic from '../../../lang/ar.json';
import { IntlProvider } from 'react-intl';
import { FormattedMessage } from 'react-intl';
import Swal from "sweetalert2";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import moment from "moment"
const locale = navigator.language;




// import Image from 'react-image-resizer';


const useStyles = makeStyles(({ palette, ...theme }) => ({
  coloredBorder: {
    border: "1px solid rgba(var(--primary), 1)",
  },
  "@global": {
    "@media print": {
      "@page": { size: 'letter', marginTop: '4mm',marginBottom: '1mm' },
      "body, *, html": {

        visibility: "hidden",
        "-webkit-print-color-adjust": "exact !important",
        marginTop:'0 auto !imporant',
        fontFamily: "Calibri",
       
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
        padding: "0",
        position: "fixed",
        left: "0",
        bottom: "0",
        height: "auto",
        width: "100%",
      },
      //  "#grid":{
      //   position: "absolute",
      //  },
      
      "#print-area": {
        // size: "auto",
        // margin: "20mm",
        // position: "absolute",
        
        position: "fixed",
        top: 45,
        left: 0,
        right: 0,
        height: "100%",
        marginTop: "45px",

        // width:"100%",
        // margin: "50px",
        // // background:"#333",
        // padding:"8px",
        
        "& *": {
          visibility: "visible",
        },
        "filearea":{
          visibility: "hidden",
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
  const [rfq, setrfq] = useState([]);
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
  const [rfq_details, setrfqdetails] = useState([]);
  const [files, setfiles] = useState([]);
  const [images, setimages] = useState([]);
  const [pdf, setpdf] = useState([]);
  const [contact, setcontact] = useState('');
  const [firm_name, setfirm_name] = useState('');
  const [contactperson, setcontactperson] = useState('');
  const [contactpersonemail, setcontactpersonemail] = useState('');
  const [contactpersoncontact, setcontactpersoncontact] = useState('');
  const [vendor_id,setvendor_id]=useState('')
  const [designation, setdesignation] = useState('');
  const { id } = useParams();
  const classes = useStyles();
  const { settings, updateSettings } = useSettings();
  // Menu Button function
  const [anchorEl, setAnchorEl] = React.useState(null);
  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }
  const updateSidebarMode = (sidebarSettings) => {
    if (sidebarSettings.mode == "close") {
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
    else {
      window.location.href = "../sales/rfq-form/rfqview"
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

  useEffect(() => {
    updateSidebarMode({ mode: "close" })

    document.title = "Request for quoatation - Amaco"
    url.get("rfq/" + id).then(({ data }) => {
      console.log(data[0])

      setrdate(moment(data[0].requested_date).format('DD MMM YYYY')
      )
      setddate(moment(data[0].require_date).format('DD MMM YYYY'))
      setcname(data[0].party[0].fname)
      setcompany(data[0].party[0].firm_name)
      setfirm_name(data[0].party[0].firm_name_in_ar)
      setcity(data[0].party[0].city)
      setstreet(data[0].party[0].street)
      setzipcode(data[0].party[0].zip_code)
      setpo(data[0].party[0].post_box_no)
      setvatno(data[0].party[0].vat_no)
      setregno(data[0].party[0].registration_no)
      setcontactperson(data[0].contact.fname)
      setcontactpersonemail(data[0].contact.email)
      setcontactpersoncontact(data[0].contact.mobno)
      setdesignation(data[0].contact.designation)
     
      setrfqdetails(data[0].rfq_details)
     
      setfiles(data[0].files)
      setcontact(data[0].party[0].contact)
      setvendor_id(data[0].party[0].vendor_id)
      // for (var a = 0; a < data[0].files.length; a++) {
      //  
      //   var words = data[0].files[a].file_name.split('.');
     

      // }


    });
    url.get("rfq/" + id).then(({ data }) => {
    });

    // if (id !== "add")
    //   getInvoiceById(id).then((res) => {
    //     setState({ ...res.data });
    //   });
  }, [id]);
  const deleteRfq = ()=>{
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this RFQ!',
      icon: 'danger',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      icon: 'warning',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        url.delete(`rfq/${id}`)
    .then(res => {
        
       
        Swal.fire(
          'Deleted!',
          ' RFQ has been deleted.',
          'success'
        )
        updateSidebarMode({ mode: "on" })
        history.push('/sales/rfq-form/rfqview')
        
    })
    
        

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your RFQ is safe :)',
          'error'
        )
      }
    })
    
    // url.delete(url + "rfq/" + id).then(({ data }) => {
     
    // })
  }
  const handlePrint = () => window.print();
  window.onafterprint = function(){ window.close()
    window.location.href = ``
  };
  const updateRfq = () => {
    updateSidebarMode({ mode: "close" })
    window.location.href = `../edit/${id}`
  }
  const quoteView = (sidebarSettings) => {
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

    // history.push('/quoteedit/'+id)
    window.location.href = `/purchaseanalysis/${id}`
  }

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

        <IconButton onClick={() => updateSidebarMode({ mode: "on" })}>
          <Icon>arrow_back</Icon>
        </IconButton>

        <div>
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
                   
                      
                      <MenuItem  onClick={() => deleteRfq()}>
                      Delete RFQ
                      </MenuItem>
                      <MenuItem  onClick={handlePrint}>
                      Print RFQ
                      </MenuItem>
                      <MenuItem  onClick={() => updateRfq()}>
                      Edit RFQ
                      </MenuItem>
                    
          </Menu>
     
          <Button
            className="mr-4 py-2"
            color="warnning"
            variant="outlined"
            onClick={() => quoteView({ mode: "on" })}
          >
            Genrate Purchase Order
          </Button>
          
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
              <div className="viewer__order-info px-4 mb-4 flex justify-between">
              </div>
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
      <h4 style={{color:'#1d2257',textAlign:'right'}}>
        AMACO ARABIA CONTRACTING COMPANY
    
      </h4>
      <h6 style={{color:'#555',textAlign:'right'}} className="font-normal b-4 capitalize">
       C.R No 205500334 | VAT 810398615200003


      </h6>
      
    </div>
            </div>
          </div>


        </header>

        <hr></hr>
        {/* <Divider  style={{marginBottom: '15px'}}/> */}
        <div className="text-center">
            <h4><u>REQUEST FOR QUOTATION</u></h4>

          </div>
        <div className="viewer__order-info px-4 mb-4 flex justify-between">
          
          <div>
          <div>
        <tr style={{ height: 5, fontSize: 13, textAlign: 'right'}}>
            <h5 className="font-normal t-4 capitalize">
              <strong>Buyer Details</strong>{" "}
            </h5>
            </tr>
        </div>
            <tr style={{ height: 5, fontSize: 13, textAlign: 'left'}}>
              <td style={{ height: 'auto !important' }}><strong>Attn.</strong></td>
              <td style={{ height: 'auto !important' }}>{contactperson}</td>
            </tr>
            <tr style={{ height: 5, fontSize: 13, textAlign: 'left'}}>
              <td style={{ height: 'auto !important' }}><strong>Designation</strong>&nbsp;</td>
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
            <tr style={{ height: 5, fontSize: 13, textAlign: 'left'}}>
              <td style={{ height: 'auto !important' }}><strong>Email-Id</strong></td>
              <td style={{ height: 'auto !important' }}>{contactpersonemail}</td>
            </tr>
            <tr style={{ height: 5, fontSize: 13, textAlign: 'left'}}>
              <td style={{ height: 'auto !important' }}><strong>Contact</strong></td>
              <td style={{ height: 'auto !important' }}>{contactpersoncontact}</td>
            </tr>
            
            
            <tr style={{ height: 5, fontSize: 13, textAlign: 'left'}}>
              <td style={{ height: 'auto !important' }}><strong>C.R No</strong></td>
              <td style={{ height: 'auto !important' }}>{regno}</td>
            </tr>
            <tr style={{ height: 5, fontSize: 13, textAlign: 'left'}}>
              <td style={{ height: 'auto !important' }}><strong>VAT No</strong></td>
              <td style={{ height: 'auto !important' }}>{vatno}</td>
            </tr>
            
            
            
            
            
        



          </div>
          {/* <div className="text-center">
            <h4><u>REQUEST FOR QUOTATION</u></h4>

          </div> */}

          <div className="text-right">
          <div>
            <tr>
              <td>
                <h5 className="font-normal capitalize">
                  <strong>Supplier Details </strong>{" "}
                </h5>
              </td>
            </tr>
            </div>
            <tr style={{ height: 5, fontSize: 13, textAlign: 'left'}}>
              <td><strong>Submitted By</strong>&nbsp;</td>
              <td >Mr.Abbas Ahamed Shazli</td>
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
              <td><strong>Mob/Tel</strong></td>
              <td>535515212</td>
            </tr>
            <tr style={{ height: 5, fontSize: 13,textAlign: 'left' }}>
              <td><strong>Vendor Id.</strong></td>
              <td>{vendor_id}</td>
            </tr>

            
          </div>
        </div>

        
        <div className="viewer_actions px-4  flex items-center justify-between">
          <div>
            <h5>RFQ No. : {id}</h5>
         </div>
         <div>
            <h5>RFQ DATE: {rdate}</h5>
            </div>
         <div>
         
            <h5>BID CLOSING DATE: {ddate}</h5>
        </div>
      </div>
      <div className="mb-4 px-4"  style={{border:"1px solid #000"}}></div>
        <Card className="mb-4" elevation={0} title="Rfq Details">
        <div className="viewer_actions px-4 mb-5 flex items-center justify-between">
          <Table>
            <TableHead  >
              <TableRow style={{backgroundColor:'#00000026'}}>
                <TableCell className="pl-0" colspan={1} align="center">S.No.</TableCell>
                <TableCell className="px-0" colspan={3}>DESCRIPTION</TableCell>
                <TableCell className="px-0">Qty</TableCell>
                <TableCell className="px-0">UOM</TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {rfq_details.map((item, index) => {


               
                subTotalCost += item.unit * item.price;

                return (
                  <TableRow key={index}>
                    <TableCell className="pl-0 capitalize" align="left" colspan={1} align="center">
                      {index + 1}
                    </TableCell>


                    <TableCell className="pl-0 capitalize" align="left" colspan={3}>
                      <strong>{item.product[0].name}</strong>({item.product[0].description})

                    </TableCell>

                    <TableCell className="pl-0 capitalize" align="left">
                     {item.quantity} 
                     

                    </TableCell>
                    <TableCell className="pl-0 capitalize">
                      {item.product[0].unit_of_measure}
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
            </TableBody>
          </Table>
          </div>
        </Card>
        {/* <footer id="footer" style={{ visibility: "hidden" }}>
        <div style={{ fontSize: '8px', visibility: "hidden" }} style={{'borderBottom': '25px solid #555','borderLeft': '50px solid transparent','height': 0,'width': '100%',marginLeft:'10%'}}>
          
          <span style={{color:'#fff'}}>Tel: +966 1336323871 | P.O.Box 7452 | Jubail 31951 | Kingdom of Saudi Arabia</span>
                
        </div>
        <div style={{ fontSize: '8px', visibility: "hidden" }} style={{'borderBottom': '25px solid #00008B','height': 0,'width': '100%',alignItems:'center'}}>
          
          <span style={{color:'#fff'}}>Tel: +966 1336323871 | P.O.Box 7452 | Jubail 31951 | Kingdom of Saudi Arabia</span>
                
        </div>
        
      </footer> */}
      <footer id="footer" style={{ visibility: "hidden" }}>
        <div style={{visibility: "hidden" }} style={{'borderBottom': '25px solid #555','borderLeft': '50px solid transparent','height': 0,'width': '100%',marginLeft:'100px'}}>
          
          <span style={{color:'#fff'}}> Tel.: +966 13 363 2387| Fax: +966 13 363 2387 | P.O.Box 7452 | Jubail 31951 | Kingdom of Saudi Arabia</span>
                
        </div>
         <div class="main" style={{width:'100%',paddingRight:'50px'}}> 
       <div  class="right" style={{width: '120px',height: '10ex',backgroundColor: '#fff',shapeOutside: 'polygon(100% 0, 100% 100%, 0 100%)',float: 'right',webkitClipPath: 'polygon(100% 0, 100% 100%, 0 100%)'}}></div>           
        <p  id="foot" style={{textAlign: 'center',backgroundColor: '#1d2257',color:'white'}}>E-mail: sales@amaco.com.sa | Website: www.amaco.com.sa</p>
        </div>
        
        
        </footer>
    
        </div>

        <div className="mb-8">
          <div className="flex flex-wrap justify-center items-center m--2">
           
            
            {files.map((item, index) => (
              <Card
                elevation={6}
                className={clsx({
                  "flex-column justify-center items-center py-6 px-8 m-2 cursor-pointer": true,
                })}
              >
                <Icon
                >
                  photo_library
              </Icon>

                {/* <h5 className="m-0">{item.file_name}</h5> */}

                <a href={"http://www.amacoerp.com/amaco/php_file/images/" + id + "/" + item.file_name} target="_blank">{item.file_name}</a>
              </Card>
            ))}
            
          </div>
              </div>
       

       
        
  
    </div>


  );
};

export default InvoiceViewer;
