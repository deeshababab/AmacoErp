import React, { useState, useEffect } from "react";
import { borders } from '@material-ui/system';
import converter from 'number-to-words';
import Arabic from '../../../lang/ar.json';
import { IntlProvider } from 'react-intl';
import { FormattedMessage } from 'react-intl';
import moment from "moment";
// import translate from 'google-translate-api';
import {Translator, Translate} from 'react-auto-translate';
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
import { cond, result } from "lodash";
import 'bootstrap/dist/css/bootstrap.min.css';
import url from "../invoice/InvoiceService";
import logo from './../invoice/amaco-logo.png';
import logos from './../invoice/vision2030.png';
import Swal from "sweetalert2";
import useSettings from '../../hooks/useSettings';
import { setCORS } from "google-translate-api-browser";
import { ToWords } from 'to-words';
import translate from 'translate-google-api';


// import translate from 'google-translate-api'
// const translate = require('google-translate-api');
const locale = navigator.language;
// const translate = require('google-translate-api');
const config = {
  headers: {
    "content-type": "multipart/form-data",
    "Access-Control-Allow-Origin": "*",
    "method":"GET"
  },
};
// const translate = require('google-translate-open-api').default;








// import Image from 'react-image-resizer';


const useStyles = makeStyles(({ palette, ...theme }) => ({
  
  "@global": {
    // "@page": {
    //   "marginTop": 0, 
    //     "marginBottom": 0, 
    // },
    
    
    
    "@media print": {
      "@page": { size: 'auto', margin: 0 ,
      "@top-left": {
        content: "Hamlet"
      },
    },
     
      "body, *, html": {
        visibility: "hidden",
        size: "auto",
        marginBottom: "0mm",
        content: 'none !important',
        "-webkit-print-color-adjust": "exact !important",
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
        // backgroundColor: "#F8F8F8",
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
        marginTop: "45px",
        marginBottom:0,

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
  const [podetails, setpodetails] = useState([]);
  const [quoteno, setquoteno] = useState("");
  const [vat_in_value, setvat_in_value] = useState("");
  const [total_value, settotal_value] = useState("");
  const [net_amount, setnet_amount] = useState(0);
  const [firm_name_in_ar, setfirm_name_in_ar] = useState("");
  const [invoiceno, setinvoiceno] = useState("");
  const [issue_date, setissue_date] = useState("");
  const [dis_per, setdis_per] = useState(0);
  const [res, setres] = useState("");
  const [ress, setress] = useState("");
  const { id } = useParams();
  const classes = useStyles();
  const { settings, updateSettings } = useSettings();
  const [arcompany, setarcompany] = useState("");
  const [araddress, setaraddress] = useState("");
  const toWords = new ToWords({
    localeCode: 'en-IN',
    converterOptions: {
      currency: true,
      ignoreDecimal: false,
      ignoreZeroCurrency: false,
    }
  });
  let fval;
  const myFunction = async () => {
    const result = await translate(`I'm fine.`, {
      tld: "cn",
      to: "ar",
      proxy: {
        host: '127.0.0.1',
        port: 9000,
        auth: {
          username: 'mikeymike',
          password: 'rapunz3l'
        }
      }
    });
    console.log(result)
   
  }
  

  useEffect(() => {


   

    updateSidebarMode({ mode: "close" })
    myFunction()
    // translate('Ik spreek Engels', {to: 'en'}).then(res => {
    //   console.log(res);
    //   //=> I speak English
   
    //   //=> nl
    //   }).catch(err => {
    //   console.error(err);
    //   });
   
    
  // axios.get(`https://api.mymemory.translated.net/get?q=Hello%20World!&langpair=en|ar`).then(({ data }) => {
  //   console.log(data)
  // })
    
    document.title = "VAT Invoice - Amaco"
    axios.get(url + "invoice/" + id).then(({ data }) => {
      if (data) {
        console.log(data)
        setdis_per(data[0].discount_in_percentage)
        setpodetails(data[0].invoice_detail)
        setcompany(data[0].quotation.party.firm_name)
        setcity(data[0].quotation.party.city)
        setstreet(data[0].quotation.party.street)
        setzipcode(data[0].quotation.party.zip_code)
        setpo(data[0].quotation.quotation_no)
        setvatno(data[0].quotation.party.vat_no)
        setinvoiceno(data[0].invoice_no)
        setissue_date(data[0].issue_date)
        setvat_in_value(data[0].vat_in_value)
        setnet_amount(data[0].grand_total)
        settotal_value(data[0].total_value)
        setfirm_name_in_ar(data[0].quotation.party.firm_name_in_ar)
        let words = toWords.convert(parseFloat(data[0].grand_total));
        let riyal = words.replace("Rupees", "Riyals");
        let halala =  riyal.replace("Paise", "Halala")
         
        setress(halala);
        // axios.get(`https://api.mymemory.translated.net/get?q=${data[0].quotation.party.firm_name}!&langpair=en|ar`).then(({ data }) => {
        // setarcompany(data)
        // })
        // let city1=data[0].quotation.party.city;
        // let street1=data[0].quotation.party.street;
        // let zipcode1=data[0].quotation.party.zipcode;
        // let res1=city1.concat(street1,zipcode1);
        // console.log(res1)
        // axios.get(`https://api.mymemory.translated.net/get?q=${res1}!&langpair=en|ar`).then(({ data }) => {
        // setaraddress(data.responseData.translatedText)
        // })
      
        

      
      }

    })
    
  }, [id]);
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


  const invoicegenrate = (sidebarSettings) => {
    // alert(id)
    const postatus = {
      status: "po"
    }
    // let url = `https://jsonplaceholder.typicode.com/users/${id}`
    // Swal.fire({
    //   title: 'Are you sure?',
    //   text: 'You want to convert this quotation into Purchase Order !',
    //   icon: 'danger',
    //   showCancelButton: true,
    //   confirmButtonText: 'Yes,!',
    //   icon: 'warning',
    //   cancelButtonText: 'No, keep it'
    // }).then((result) => {
    //   if (result.value) {

    //     axios.put(url + '/' + id, postatus)
    //       .then(res => {

    //  let activeLayoutSettingsName = settings.activeLayout + "Settings";
    //         let activeLayoutSettings = settings[activeLayoutSettingsName];
    //         updateSettings({
    //           ...settings,
    //           [activeLayoutSettingsName]: {
    //             ...activeLayoutSettings,
    //             leftSidebar: {
    //               ...activeLayoutSettings.leftSidebar,
    //               ...sidebarSettings,
    //             },
    //           },
    //         });
    axios.put(url + 'invoice/' + id)
      .then(res => {

        window.location.href = `../invview/${id}`
        //   Swal.fire(
        //     'PO!',
        //     ' has been generated.',
        //     'success'
        //   )

      })



    // } else if (result.dismiss === Swal.DismissReason.cancel) {
    //   Swal.fire(
    //     'Cancelled',
    //     '........:)',
    //     'error'
    //   )
    // }
    // })

  }


  const deleteinvoice = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this Invoice!',
      icon: 'danger',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      icon: 'warning',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        axios.delete(url + `invoice/${id}`)
          .then(res => {


            Swal.fire(
              'Deleted!',
              'Invoice has been deleted.',
              'success'
            )
            updateSidebarMode({ mode: "on" })
            window.location.href = "../inv"

          })



      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your Invoice is safe :)',
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
        <Link onClick={() => updateSidebarMode({ mode: "on" })}>
          <IconButton>
            <Icon>arrow_back</Icon>
          </IconButton>
        </Link>
        <div>
          <Button
            className="mr-4 py-2"
            color="primary"
            variant="outlined"
            onClick={() => invoicegenrate({ mode: "on" })}
          >
            Delivery Note
          </Button>
          <Button
            className="mr-4 py-2"
            style={{ color: 'red' }}
            variant="outlined"
            onClick={() => deleteinvoice()}
          >
            Delete Invoice
          </Button>
          <Button
            onClick={handlePrint}
            className="py-2"
            color="secondary"
            variant="outlined"
          >
            Print Invoice
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
              <h4>VAT INVOICE</h4>
              {vat}
            </div>
          </div>
          <div className="flex">
            <div className="pr-12 px-4 mb-4">
              <h4>
                <IntlProvider locale={locale} messages={Arabic}>
                  <FormattedMessage
                    id="vatinvoice"

                  />
                </IntlProvider>
              </h4>
            </div>
          </div>
        </div>






        <div className="px-4 flex justify-between">
          <div className="flex">
            <div className="pr-12 px-4 mb-4">
              <h5>ISSUE DATE</h5>
              {moment(issue_date).format('DD MMM YYYY')}
            </div>
            <div className="pl-24 px-26 mb-4">
              <h5>INVOICE NUMBER</h5>
              {invoiceno}
            </div>
          </div>
          <div className="flex">
          <div className="pr-25">


              <h5 align="right">
                <IntlProvider locale={locale} messages={Arabic}>
                  <FormattedMessage
                    id="pono"

                  />
                </IntlProvider>
              </h5>
              {invoiceno}

            </div>
            <div className="pr-12">

              <h5 align="right">
                <IntlProvider locale={locale} messages={Arabic}>
                  <FormattedMessage
                    id="podate"
                    
                  />
                </IntlProvider></h5>
              {moment(issue_date).format('DD MMM YYYY')}
            </div>
          </div>
        </div>
        <div className="px-4 flex justify-between">
          <div className="flex">
            <div className="pr-12 px-4 mb-4">
              <h5>COMPANY NAME & ADDRESS</h5>
              {company}<br></br>
              {street}-{city},{pono} {zipcode}
            </div>
          </div>
          <div className="flex">
            <div className="pr-12 px-4 mb-4">
              <h5>
                <IntlProvider locale={locale} messages={Arabic}>
                  <FormattedMessage
                    id="companyname"

                  />
                </IntlProvider>
              </h5>
              {arcompany}<br></br>
              {araddress}

            </div>
          </div>
        </div>
        <div className="px-4 flex justify-between">
          <div className="flex">
            <div className="pr-12 px-4 mb-4">
              <h5>P.O. NUMBER</h5>
              {/* {pono} */}
              SVBC-PO-2010007
            </div>
            <div className="pl-24 px-26 mb-4">
              <h5>VAT NUMBER</h5>
              {vatno}
            </div>
          </div>
          <div className="flex">
          <div className="pr-25">


              <h5 align="right">
                <IntlProvider locale={locale} messages={Arabic}>
                  <FormattedMessage
                    id="po_no"

                  />
                </IntlProvider>
              </h5>
              {/* {pono} */}
              SVBC-PO-2010007
            </div>
            <div className="pr-12">

              <h5 align="right">
                <IntlProvider locale={locale} messages={Arabic}>
                  <FormattedMessage
                    id="vatno"

                  />
                </IntlProvider></h5>
              {vatno}
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
                  <TableCell className="pl-0" colspan={1} style={{ border: "1px solid rgb(0, 0, 0)", width: "50px" }} align="center">رقم<br></br> S.No.</TableCell>
                  <TableCell className="px-0" colspan={3} style={{ border: "1px solid rgb(0, 0, 0)" }} align="center">وصف<br></br> DESCRIPTION</TableCell>

                  <TableCell className="px-0" style={{ border: "1px solid rgb(0, 0, 0)", width: "70px" }} align="center">وحدة<br></br> UOM</TableCell>
                  <TableCell className="px-0" style={{ border: "1px solid rgb(0, 0, 0)" }} align="center">كمية<br></br>QTY</TableCell>
                  <TableCell className="px-0" style={{ border: "1px solid rgb(0, 0, 0)" }} align="center">سعر الوحدة<br></br> UNIT PRICE</TableCell>
                  <TableCell className="px-0" style={{ border: "1px solid rgb(0, 0, 0)",wordBreak:'break-word' }} align="center">المبلغ الخاضع للضريبة<br></br> TAXABLE AMOUNT</TableCell>
                  <TableCell className="px-0" style={{ border: "1px solid rgb(0, 0, 0)",wordBreak:'break-word' }} align="center">القيمة الضريبية<br></br> TAX VALUE (15%)</TableCell>
                  <TableCell className="px-0" style={{ border: "1px solid rgb(0, 0, 0)",wordBreak:'break-word'}} align="center">مجموع<br></br> TOTAL</TableCell>
  
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
                        {item.quotation_detail.sell_price}
                      </TableCell>
                      <TableCell className="pl-0 capitalize" style={{ textAlign: "right", border: "1px solid rgb(0, 0, 0)" }} >
                        {item.quotation_detail.total_amount}
                      </TableCell>
                      <TableCell className="pl-0 capitalize" style={{ textAlign: "right", border: "1px solid rgb(0, 0, 0)" }} >
                        {/* {item.total_amount} */}
                        {((item.quotation_detail.total_amount * 15) / 100).toFixed(2)}
                      </TableCell>
                      <TableCell className="pl-0 capitalize" style={{ textAlign: "right", border: "1px solid rgb(0, 0, 0)" }} >
                     {(parseFloat(item.quotation_detail.total_amount)+(item.quotation_detail.total_amount * 15) / 100).toFixed(2)}
                      </TableCell>


                    </TableRow>

                  );
                })}
                <TableRow style={{ border: "1px solid rgb(0, 0, 0)" }}>
                  <TableCell className="pl-0 capitalize" align="center" style={{ border: "1px solid rgb(0, 0, 0)" }} rowspan={2} colspan={8}>
                    <div className="px-4 flex justify-between">
                      <div className="flex">
                        <div className="pr-12">
                          <tr>
                            <td>
                              <h5 className="font-normal capitalize">
                                <strong>BANK DETAILS</strong>{" "}
                              </h5>
                            </td>
                          </tr>
                          <tr style={{ height: 5, fontSize: 13, textAlign: 'left' }}>
                            <td style={{ height: 'auto !important' }}><strong>Bank Name</strong></td>
                            <td style={{ height: 'auto !important' }}>National Commerical Bank</td>
                          </tr>
                          <tr style={{ height: 5, fontSize: 13, textAlign: 'left' }}>
                            <td style={{ height: 'auto !important' }}><strong>Account No</strong></td>
                            <td style={{ height: 'auto !important' }}>6000000242200</td>
                          </tr>
                          <tr style={{ height: 5, fontSize: 13, textAlign: 'left' }}>
                            <td style={{ height: 'auto !important' }}><strong>IBAN No</strong></td>
                            <td style={{ height: 'auto !important' }}>SA3610000006000000242200</td>
                          </tr>
                        </div>
                      </div>
                    </div>

                  </TableCell>
                  <TableCell className="pl-0 capitalize" align="center" style={{ border: "1px solid rgb(0, 0, 0)",wordBreak:'break-word' }}>
                    المبلغ الخاضع للضريبة
                  <br></br>
                 TAXABLE AMOUNT

                  </TableCell>
                  <TableCell className="pl-0 capitalize" align="right" style={{ border: "1px solid rgb(0, 0, 0)",wordBreak:'break-word' }}>
                    {total_value}
                  </TableCell>

                </TableRow>
                {/* <TableRow style={{ border: "1px solid rgb(0, 0, 0)" }}>
                  <TableCell className="pl-0 capitalize" align="center" style={{ border: "1px solid rgb(0, 0, 0)" }}>
                   
                  <br></br>
                   Discount
                  </TableCell>
                  <TableCell className="pl-0 capitalize" align="right" style={{ border: "1px solid rgb(0, 0, 0)" }}>
                    {vat_in_value}
                  </TableCell>
                </TableRow> */}
                <TableRow style={{ border: "1px solid rgb(0, 0, 0)" }}>
                  <TableCell className="pl-0 capitalize" align="center" style={{ border: "1px solid rgb(0, 0, 0)",wordBreak:'break-word' }}>
                    القيمة الضريبية
                  <br></br>
                  TAX VALUE (15%)
                  </TableCell>
                  <TableCell className="pl-0 capitalize" align="right" style={{ border: "1px solid rgb(0, 0, 0)" }}>
                    {vat_in_value}
                  </TableCell>
                </TableRow>
                <TableRow style={{ border: "1px solid rgb(0, 0, 0)" }}>
                  <TableCell className="pl-0 capitalize" colspan={8} style={{ border: "1px solid rgb(0, 0, 0)" }}>
                    <div className="px-4 flex justify-between">
                      <div className="flex">
                        <div className="pr-12">

                          <strong>TOTAL IN WORDS</strong>  {ress}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="pl-0 capitalize" align="center" style={{ border: "1px solid rgb(0, 0, 0)" }}>
                    TOTAL INC.VAT
                  </TableCell>
                  <TableCell className="pl-0 capitalize" align="right" style={{ border: "1px solid rgb(0, 0, 0)" }}>
                    {net_amount}
                  </TableCell>
                </TableRow>

              </TableBody>
            </Table>
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
              <h5 className="font-normal t-4 capitalize">
                <IntlProvider locale={locale} messages={Arabic}>
                  <FormattedMessage
                    id="approvedby"

                  />
                </IntlProvider>
              </h5>
                 Approved By
              </div>
              <div className="mr-24">
              <h5 className="font-normal t-4 capitalize">
                <IntlProvider locale={locale} messages={Arabic}>
                  <FormattedMessage
                    id="receivedby"

                  />
                </IntlProvider>
              </h5>
                 Received By
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
        
          
        {/* <p>
          <span style={{'borderTop': '25px solid #00008B','borderRight': '50px solid transparent','width': '10%',marginRight:'10%',alignItems:'center',paddingLeft:'auto'}}>E-mail: bsales@amaco.com.sa | website: www.amaco.com.sa</span>
          
        </p> */}
      </div>



    </div>


  );
};

export default InvoiceViewer;
