import React, { useState, useEffect,useRef } from "react";
import { borders } from '@material-ui/system';
import converter from 'number-to-words';
import Arabic from '../../../lang/ar.json';
import { IntlProvider } from 'react-intl';
import { FormattedMessage } from 'react-intl';
import history from "history.js";
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
import { useReactToPrint } from 'react-to-print';
const locale = navigator.language;

// import Image from 'react-image-resizer';


const useStyles = makeStyles(({ palette, ...theme }) => ({
  // "@page":{
  //   size:'A4',
  //   margin:"11mm 17mm 17mm 17mm"

  // },
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
        // top: '1em',
        left: 0,
        // paddingBottom:130
        justifySelf:"end"
       
      },
      ".empty-header": {
        height:"100px",
        marginTop:'10px',
        
        
        },
        ".empty-footer": {
          height:"150px",
          marginTop:'10px',
       
          
          },
        ".header": {
        position: "fixed",
        height:"100px",
        top:0,
        
        },
        ".footer": {
          position: "fixed",
          height:"150px",
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
  const [createdate, setcreatedate] = useState('');
  const [podetails, setpodetails] = useState([]);
  const [company, setcompany] = useState([]);
  const [attn, setattn] = useState('');
  const [po, setpo] = useState('');
  const [deliveryno, setdeliveryno] = useState('');
  const [quotationno, setquotationno] = useState('');
  const { id } = useParams();
  const classes = useStyles();
  const componentRef = useRef();
  const { settings, updateSettings } = useSettings();
  let fval;
  const handlePrinting = useReactToPrint({
    content: () => componentRef.current,
    header:()=> componentRef.current
    
   
    
  });

  useEffect(() => {
   
    document.title = "Delivery Note - Amaco"
    url.get("delivery-notes/" + id).then(({ data }) => {
     
        
      setcreatedate(data[1].created_at)
      if(data[1].quotation.contact!==null)
      {
      setattn(data[1].quotation.contact.fname)
      }
      // setpodetails(data[1])
      setcompany(data[1].quotation.party.firm_name)
      setpodetails(data[0])
      setdeliveryno(data[1].delivery_number)
      setpo(data[1].po_number)
      setquotationno(data[1].quotation.quotation_no)

    });
    // url.get("invoice/" + id).then(({ data }) => {
     
   
    //      setcreatedate(data[0].issue_date)
    //      setpodetails(data[0].invoice_detail)
    //      setcompany(data[0].quotation.party.firm_name)
    //     setpodetails(data[0].invoice_detail)
    //     setdeliveryno(data[0].delivery_no)
    //     setpo(data[0].quotation.quotation_no)
  
    //   });

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
       
        url.put(+ '/' + id, postatus)
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
    
      history.push("/dnoteview")
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
            onClick={handlePrinting}
            className="py-2"
            color="secondary"
            variant="outlined"
          >
            PRINT DELIVERYNOTE
          </Button>
        </div>
      </div>

      <div id="print-area" ref={componentRef} style={{fontFamily: "Calibri",fontSize: 16}}>
        <table>
          <thead>
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


</div>
</td>
</tr>
</thead>


        <hr></hr>
        <tbody>
          <tr>
            <td>
        <div className="px-4 flex justify-between">
          <div className="flex">
            <div className="pl-2 mb-4">
            <h3 style={{fontSize:20}}><strong>DELIVERY NOTE</strong></h3>
              {/* <h4>DELIVERY NOTE</h4> */}
              {vat}
            </div>
          </div>
        </div>






         <div className="px-4 flex justify-between">
         
          
        
        <div className="px-4 flex justify-between">
          
         
          </div>
          </div>








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
              <span style={{fontWeight:1000}}>Attention</span>
              <br></br>
              {attn?attn:"--"}
             
             
            </div>
            <div className="pl-2 ">
          
              <span style={{fontWeight:1000}}>P.O. Number</span>
              <br></br>
              {po}
            
            </div>
            </div>
            <div>
              </div>
              </div>
            </div>
            <div className="px-2 flex justify-left">
              <div className="flex " >
              <div className="">
              <div className="pl-2 pb-4">
              <span style={{fontWeight:1000}}>Delivery Date</span>
              <br></br>
              {moment(createdate).format('DD MMM YYYY')}
        
            </div>
            <div className="pl-2 pb-4">
              <span style={{fontWeight:1000}}>Delivery Number</span>
              <br></br>
              {deliveryno}
             
             
            </div>
            <div className="pl-2 ">
          
              <span style={{fontWeight:1000}}>Quotation Number</span>
              <br></br>
              {quotationno}
            
            </div>
            </div>
            <div>
              </div>
              </div>
            </div>



            <div className="px-2 flex justify-left">
              <div className="flex " >
              <div className="">
              <div className="pl-2">
              <h5 style={{fontWeight:1000}}></h5>
              {/* {moment(createdate).format('DD MMM YYYY')} */}
        
            </div>
            <div className="pl-2 ">
              <h5 style={{fontWeight:1000}}></h5>
              {/* {deliveryno} */}
             
             
            </div>
            <div className="pl-2 ">
          
              <h5 style={{fontWeight:1000}}></h5>
              {/* {quotationno} */}
            
            </div>
            </div>
            <div>
              </div>
              </div>
              </div>
            </div>

        <Card className="mb-4" elevation={0} title="Rfq Details" borderRadius="borderRadius">
          <div className="viewer__order-info px-4 mb-4 pt-5 flex justify-between">
            <Table style={{ border: "1px solid #ccc",fontSize: 16 }}>
              <TableHead >
                <TableRow style={{ border: "1px solid #ccc" }}>
                  <TableCell className="pr-0" colspan={1} style={{ border: "1px solid #ccc", width: "50px",fontFamily: "Calibri",fontWeight:1000,fontSize: 16 }} align="center">S.No.</TableCell>
                  <TableCell className="px-0" colspan={3} style={{ border: "1px solid #ccc",fontFamily: "Calibri",fontWeight:1000,fontSize: 16 }} align="center">DESCRIPTION</TableCell>

                  <TableCell className="px-0" style={{ border: "1px solid #ccc", width: "70px",fontFamily: "Calibri",fontWeight:1000,fontSize: 16}} align="center">UOM</TableCell>
                  <TableCell className="px-0" style={{ border: "1px solid #ccc",fontFamily: "Calibri",fontWeight:1000,fontSize: 16}} align="center">QTY</TableCell>
                  <TableCell className="px-0" style={{ border: "1px solid #ccc",fontFamily: "Calibri",fontWeight:1000,fontSize: 16}} align="center">DELIVERED QTY</TableCell>
                  <TableCell className="px-0" style={{ border: "1px solid #ccc",fontFamily: "Calibri",fontWeight:1000,fontSize: 16}} align="center">DELIVERING  QTY</TableCell>
                  <TableCell className="px-0" style={{ border: "1px solid #ccc",fontFamily: "Calibri",fontWeight:1000,fontSize: 16}} align="center">BALANCE QTY</TableCell>

                </TableRow>
              </TableHead>
              <TableBody >
                
                {podetails.map((item, index) => {
                 
                 

                  return (

                    <TableRow key={index} style={{ border: "1px solid #ccc" }}>
                      <TableCell className="pr-0" align="center" colspan={1} style={{ border: "1px solid #ccc",fontFamily: "Calibri",fontSize: 16 }}>
                        {index + 1}
                      </TableCell>


                      <TableCell className="pl-2 capitalize" align="left" colspan={3} style={{ border: "1px solid #ccc",fontFamily: "Calibri",fontSize: 16 }}>
                         
                      {item[0].product[0].description} 
                      </TableCell>


                      <TableCell className="pr-0 capitalize" align="center" style={{ border: "1px solid #ccc",fontFamily: "Calibri",fontSize: 16 }}>
                      {item[0].product[0].unit_of_measure}
                      </TableCell>
                      <TableCell className="pr-0 capitalize" align="center" style={{ border: "1px solid #ccc",fontFamily: "Calibri",fontSize: 16 }} >
                      {parseInt(item[0].total_quantity).toLocaleString()}   

                      </TableCell>
                      <TableCell className="pr-0 capitalize" style={{ textAlign: "center", border: "1px solid #ccc",fontFamily: "Calibri",fontSize: 16 }} >
                      {parseInt(item[0].total_delivered_quantity).toLocaleString()} 
                      </TableCell>
                      <TableCell className="pr-0 capitalize" style={{ textAlign: "center", border: "1px solid #ccc",fontFamily: "Calibri",fontSize: 16 }} >
                      {parseInt(item[0].delivering_quantity).toLocaleString()} 
                      </TableCell>
                      <TableCell className="pr-0 capitalize" style={{ textAlign: "center", border: "1px solid #ccc",fontFamily: "Calibri",fontSize: 16 }} >
                       {parseInt(parseInt(item[0].total_quantity)-parseInt(item[0].total_delivered_quantity)-parseInt(item[0].delivering_quantity)).toLocaleString()}  
                      </TableCell>


                    </TableRow>

                  );
                })}
                </TableBody>
                </Table>
          </div>

          <br></br>
          <div className="viewer__order-info px-4 mb-4 flex justify-between">
            <div className="ml-24" style={{fontWeight:1000}}>
              
                  Prepared by
              </div>
              <div className="ml-4" style={{fontWeight:1000}}>
              
              Delivered by
              </div>
           
            <div className="mr-24" style={{fontWeight:1000}}>
              <h5 style={{fontWeight:1000}}>
              Received by
              </h5>
                
              </div>
          </div>
          <div className="viewer__order-info px-4 mb-4  flex justify-between">
            <div className="ml-4">
              
                  
              </div>
          <div className="mr-14">
            
              <h5 className="font-normal  capitalize">
              Employee Name & ID:
               
              </h5>
       
             {/* <h5 align="center"> DIQ 5210 </h5> */}
              </div>
          </div>
          <div className="viewer__order-info px-4 mb-4 pt-20 flex justify-between">
            <div className="ml-4">
              
                  
              </div>
              
              
        
            <div className="mr-4">
              <h5 className="font-normal t-4 capitalize" style={{textAlign:'center'}}>
              --------------------------------------------
              
              </h5>
              <h5 className="t-4 capitalize" style={{textAlign:'center',fontWeight:1000}}>
              
              (Sign & Stamp)
              </h5>
              </div>
          </div>
           {/* <div className="viewer__order-info pt-60 mb-50 pl-4 flex justify-between">
          <div>
          <span style={{color:'red',wordBreak:'break-word'}}>IMPORTANT:</span>
          <br></br>
          <span>Acceptance by the signatory confirms that all goods indicated were received in good condition.</span>
          </div>
          </div> */}
        <div ></div>

        </Card>
        <div >

        </div>
        </td>
        </tr>
        </tbody>
        <tfoot><div class="empty-footer"></div></tfoot>
         </table>

        
        <div class="footer">
        
        <footer  style={{visibility: "hidden" }}>
        
       
        <div  className="ml-4 pt-1800 pb-5 " style={{textAlign:"center"}}>
          <span style={{color:'red',wordBreak:'break-word',textAlign:'center'}}>IMPORTANT:</span>
          <span style={{paddingBottom:'50px',color:'red'}}>Acceptance by the signatory confirms that all goods indicated were received in good condition.</span>
         </div>   
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
    </Card>


  );
};

export default InvoiceViewer;
