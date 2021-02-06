import React, { useState, useEffect } from "react";
import { borders } from '@material-ui/system';
import converter from 'number-to-words';
import Arabic from '../../../lang/ar.json';
import { IntlProvider } from 'react-intl';
import { FormattedMessage } from 'react-intl';
import moment from "moment";
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
import { format, setDate } from "date-fns";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import axios from "axios";
import { cond } from "lodash";
import 'bootstrap/dist/css/bootstrap.min.css';
import url from "../invoice/InvoiceService";
import logo from './../invoice/amaco-logo.png';
import logos from './../invoice/vision2030.png';
import Swal from "sweetalert2";
import useSettings from '../../hooks/useSettings';
const locale = navigator.language;

// import Image from 'react-image-resizer';


const useStyles = makeStyles(({ palette, ...theme }) => ({
  "@global": {
    "@media print": {
      "body, *, html": {
        visibility: "hidden",
        size: "auto",
        margin: "0mm",
        "-webkit-print-color-adjust": "exact !important",
        fontFamily: "Calibri",
      },
      "#header": {
        // padding: "10px",
        // background: "#000",
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
        position: "fixed",
        top: 45,
        left: 0,
        right: 0,
        height: "100%",
        marginTop: "60px",

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
  const [createdate, setcreatedate] = useState('');
  const [podetails, setpodetails] = useState([]);
  const [company, setcompany] = useState([]);
  const [po, setpo] = useState('');
  const [deliveryno, setdeliveryno] = useState('');
  const { id } = useParams();
  const classes = useStyles();
  const { settings, updateSettings } = useSettings();
  let fval;

  useEffect(() => {
    updateSidebarMode({ mode: "close" })
    document.title = "Delivery Note - Amaco"
    axios.get(url + "invoice/" + id).then(({ data }) => {
     
    
      setcreatedate(data[0].issue_date)
      setpodetails(data[0].invoice_detail)
      setcompany(data[0].quotation.party.firm_name)
      setpodetails(data[0].invoice_detail)
      setdeliveryno(data[0].delivery_no)
      setpo(data[0].quotation.quotation_no)

    });

  }, [id]);
  const invoicegenrate = (sidebarSettings) => {
    // alert(id)
    const postatus = {
      status: "po"
    }
    // let url = `https://jsonplaceholder.typicode.com/users/${id}`
    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to convert this quotation into Purchase Order !',
      icon: 'danger',
      showCancelButton: true,
      confirmButtonText: 'Yes,!',
      icon: 'warning',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
       
        axios.put(url + '/' + id, postatus)
          .then(res => {
           
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

            window.location.href = "../Newinvoiceview"
            Swal.fire(
              'Invoice!',
              ' has been generated.',
              'success'
            )

          })



      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          '........:)',
          'error'
        )
      }
    })

  }



  const handlePrint = () => window.print();
  window.onafterprint = function(){ window.close()
    window.location.href = ``
  };
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
      window.location.href = "../inv"
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
        <Link onClick={() =>  updateSidebarMode({ mode: "on" })}>
          <IconButton>
            <Icon>arrow_back</Icon>
          </IconButton>
        </Link>
        <div>
          {/* <Button
            className="mr-4 py-2"
            color="primary"
            variant="outlined"
            onClick={() => invoicegenrate({ mode: "on" })}
          >
            Genrate Invoice
          </Button> */}
          <Button
            onClick={handlePrint}
            className="py-2"
            color="secondary"
            variant="outlined"
          >
            Print DeliveryNote
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
        <div className="px-4 flex justify-between">
          <div className="flex">
            <div className="pr-12 px-4 mb-4">
              <h4>DELIVERY NOTE</h4>
              {vat}
            </div>
          </div>
        </div>






         <div className="px-4 flex justify-between">
          <div className="flex">
            <div className="pr-12 px-4 mb-4">
              <h5>Customer Name</h5>
              {company}
            </div>
          </div>
          <div className="flex">
            <div className="pr-12">
              <h5 align="right">

               Date
              </h5>
             
              {moment(createdate).format('DD MMM YYYY')}
            </div>
          </div>
        </div>
        <div className="px-4 flex justify-between">
          <div className="flex">
            <div className="pr-12 px-4 mb-4">
              <h5>P.O.NUMBER</h5>
              {po}
            </div>
            
          </div>
          <div className="flex">
            <div className="pr-12">


              <h5 align="right">
                Delivery Number
              </h5>
              {deliveryno}

</div>
           
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

        <Card className="mb-4" elevation={0} title="Rfq Details" borderRadius="borderRadius">
          <div className="viewer__order-info px-4 mb-4 flex justify-between">
            <Table style={{ border: "1px solid rgb(0, 0, 0)" }}>
              <TableHead>
                <TableRow style={{ border: "1px solid rgb(0, 0, 0)" }}>
                  <TableCell className="pl-0" colspan={1} style={{ border: "1px solid rgb(0, 0, 0)", width: "50px" }} align="center">S.No.</TableCell>
                  <TableCell className="px-0" colspan={3} style={{ border: "1px solid rgb(0, 0, 0)" }} align="center">DESCRIPTION</TableCell>

                  <TableCell className="px-0" style={{ border: "1px solid rgb(0, 0, 0)", width: "70px" }} align="center">UOM</TableCell>
                  <TableCell className="px-0" style={{ border: "1px solid rgb(0, 0, 0)" }} align="center">Qty</TableCell>
                  <TableCell className="px-0" style={{ border: "1px solid rgb(0, 0, 0)" }} align="center">DELIVERY QTY</TableCell>
                  <TableCell className="px-0" style={{ border: "1px solid rgb(0, 0, 0)" }} align="center">BALANCE QTY</TableCell>

                </TableRow>
              </TableHead>
              <TableBody >
                
                {podetails.map((item, index) => {
                  
                 

                  return (

                    <TableRow key={index} style={{ border: "1px solid rgb(0, 0, 0)" }}>
                      <TableCell className="pl-0" align="center" colspan={1} style={{ border: "1px solid rgb(0, 0, 0)" }}>
                        {index + 1}
                      </TableCell>


                      <TableCell className="pl-0 capitalize" align="center" colspan={3} style={{ border: "1px solid rgb(0, 0, 0)" }}>
                         
                      {item.product.description} 
                      </TableCell>


                      <TableCell className="pl-0 capitalize" align="center" style={{ border: "1px solid rgb(0, 0, 0)" }}>
                      {item.product.unit_of_measure}
                      </TableCell>
                      <TableCell className="pl-0 capitalize" align="center" style={{ border: "1px solid rgb(0, 0, 0)" }} >
                      {item.quotation_detail.quantity}  

                      </TableCell>
                      <TableCell className="pl-0 capitalize" style={{ textAlign: "right", border: "1px solid rgb(0, 0, 0)" }} >
                      {item.quantity} 
                      </TableCell>
                      <TableCell className="pl-0 capitalize" style={{ textAlign: "right", border: "1px solid rgb(0, 0, 0)" }} >
                        {parseInt(item.quotation_detail.quantity)-parseInt(item.quantity)} 
                      </TableCell>


                    </TableRow>

                  );
                })}
                </TableBody>
                </Table>
          </div>

          <br></br>
          <div className="viewer__order-info px-4 mb-4 flex justify-between">
            <div className="ml-4">
              
                 DELIVERED BY,
              </div>
           
            <div className="mr-4">
              <h5 className="font-normal t-4 capitalize">
              RECEIVED BY,
              </h5>
                
              </div>
          </div>

        </Card>
        <div >

        </div>

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
