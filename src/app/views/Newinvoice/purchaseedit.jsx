import React, { useState, useEffect } from "react";
import {
  Button,
  Divider,
  MenuItem,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Icon,
  Card
} from "@material-ui/core";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import CurrencyTextField from '@unicef/material-ui-currency-textfield';
import { useParams, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { useCallback } from "react";
import url,{capitalize_arr} from "../invoice/InvoiceService";

import Swal from "sweetalert2";
import moment from "moment";
import { TextField } from "@material-ui/core";


const useStyles = makeStyles(({ palette, ...theme }) => ({
  invoiceEditor: {
    "& h5": {
      fontSize: 15,
    },
  },
  root: {
    width: "100px"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}));

const InvoiceEditor = ({ isNewInvoice, toggleInvoiceEditor }) => {
  const [isAlive, setIsAlive] = useState(true);
  const [state, setState] = useState(initialValues);
  const [rdate, setrdate] = useState([]);
  const [ddate, setddate] = useState([]);
  const [cname, setcname] = useState('abcd');
  const [party_id, setparty_id] = useState('');
  const [discounts, setdiscounts] = useState('0');
  const [proList, setproList] = useState([]);
  const [ProductList, setProductList] = useState([]);
  const [validity,setvalidity] =useState('3 Days')
  const [payment_terms,setpayment_terms] =useState('100% Advance')
  const [warranty,setwarranty] =useState('NA')
  const [delivery_time,setdelivery_time] =useState('Within 2-3 Days from the Date of PO')
  const [inco_terms,setinco_terms] =useState('DDP-Delivery Duty Paid To Customer Office')
  const [discount,setdiscount] =useState('0')
  const [contactid,setcontactid] =useState('')
  const [dstatus, setdstatus] = useState(false);
  const [productid, setproductid] = useState('1');
  const [indexset, setindex] = useState(0);
  const [productname, setproductname] = useState('');
  const [po_number, setpo_number] = useState('');
  const history = useHistory();
  const { id } = useParams();
  const classes = useStyles();
  const [shouldOpenEditorDialog, setShouldOpenEditorDialog] = useState(false);
  const [Quote_date,setQuote_date]=useState(moment(new Date()).format('DD MMM YYYY'))



  const generateRandomId = useCallback(() => {
    let tempId = Math.random().toString();
    let id = tempId.substr(2, tempId.length - 1);
    setState((state) => ({ ...state, id }));
  }, []);

  const handleChange = (event,fieldName) => {
    event.persist();
    let tempItemList = [...state.item];
    setdstatus(true)
    setdiscount(event.target.value)
    setdiscounts(event.target.value)
 
    
    
   

  };
  

 
  const setremark = (event, index) => {
    event.persist()
    let tempItemList = [...state.item];
    
    tempItemList.map((element, i) => {
      let sum=0;
    
      if (index === i) 
      {
        element[event.target.name] = event.target.value;
        
      

      }
      return element;
      
    });

    setState({
      ...state,
      item: tempItemList,
    });
  
     
  }

  const handleIvoiceListChange = (event, index) => {
    event.persist()
    let tempItemList = [...state.item];
    
    tempItemList.map((element, i) => {
      let sum=0;
    
      if (index === i) 
      {
        
        
        element['total_amount']=((event.target.value)*element.quantity).toFixed(2);
        element[event.target.name] = event.target.value;
        element.margin="";
        element.sell_price="";
        
      

      }
      return element;
      
    });

    setState({
      ...state,
      item: tempItemList,
    });
  
     
   
  };

  

  const deleteItemFromInvoiceList = (index) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to Delete this Quotation Details!',
      icon: 'danger',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      icon: 'warning',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
    let tempItemList = [...state.item];
    tempItemList.splice(index, 1);
    
    setState({
      ...state,
      item: tempItemList,
    });
  }
  else if (result.dismiss === Swal.DismissReason.cancel) {
    Swal.fire(
      'Cancelled',
      'Your Quotation Details is safe :)',
      'error'
    )
  }
  })
  };

 
  const calcualteprice = (event,index) => {
    event.persist()
    let tempItemList = [...state.item];
   
    tempItemList.map((element, i) => {
      let sum=0;
    
      if (index === i) 
      {
        
       
        
        element['total_amount']=((event.target.value)*element.purchase_price).toFixed(2);
        element[event.target.name] = event.target.value;
        
      

      }
      
      return element;
      
    });
   

    setState({
      ...state,
      item: tempItemList,
    });
    
  }
  
  
  
  const handleSubmit = () => {
    
    setState({ ...state, loading: true });
    
    let tempState = { ...state };
    let arr = []
    delete tempState.loading;
    let tempItemList =[...state.item];
    

    
    arr.quotation_details=tempItemList
    arr.discount_in_p=0
    arr.total_value=parseFloat(subTotalCost).toFixed(2)
    arr.net_amount=GTotal
    arr.vat_in_value=parseFloat(vat).toFixed(2)
    arr.rfq_id=id
    arr.po_number=po_number
    arr.party_id=party_id
    arr.validity=validity
    arr.warranty=warranty
    arr.delivery_time=delivery_time
    arr.inco_terms=inco_terms
    arr.payment_terms=payment_terms
    arr.contact_id=contactid
    arr.transaction_type="purchase"
    arr.ps_date=Quote_date
    arr.id=id
    const json = Object.assign({}, arr);
    
    url.put(`purchase-quotation/${id}`, json)
      .then(function (response) {
        
         
        Swal.fire({
          title: 'Success',
          type: 'success',
          icon:'success',
          text: 'Data saved successfully.',
        });
        history.push("../Newinvoiceview")
      })
      .catch(function (error) {
        
      })
  };
  function cancelform() {
    history.push(`/poinvoice/${id}`)
  }
  
 

  useEffect(() => {
   
    url.get("products").then(({ data }) => {
      setproList(data)
     
    });
    url.get("purchase-quotation/"+ id).then(({ data }) => {
    
      
      setpo_number(data[0]?.po_number)
      setcontactid(data[0].contact?.id)
      setrdate(moment(data[0]?.created_at).format('DD MMM YYYY'))
      setddate(moment(data[0]?.require_date).format('DD MMM YYYY'))
      setparty_id(data[0]?.party_id)
     setState({
      ...state,
      item: data[0]?.quotation_details,
    });
   });
  }, [id, isNewInvoice, isAlive, generateRandomId]);

  
  const setMargin = (id,index,name)=>{
    
    setproductid(id)
    setproductname(name)
    setindex(index)
    setShouldOpenEditorDialog(true);

  }
  let subTotalCost = 0;
  let GTotal = 0;
  let dis_per = 0;
  let {
    
    item: invoiceItemList = [],
    quote:quoteList = [],
    vat,
    loading,
    
  } = state;
  
  return (
    
  <div className="m-sm-30">
    <Card elevation={3}>
    <div className={clsx("invoice-viewer py-4", classes.invoiceEditor)}>
      <ValidatorForm onSubmit={handleSubmit} onError={(errors) => null}>
        <div className="viewer_actions px-4 flex justify-between">
        <div className="mb-6">
          <h3 align="left">EDIT PURCHASEORDER</h3>
          </div>
          <div className="mb-6">
         
            <Button
              className="mr-4 py-2"
              variant="outlined"
              color="secondary"
              onClick={cancelform}
            >
             <Icon>cancel</Icon> Cancel
            </Button>
           

            <Button
              type="submit"
              className="py-2"
              variant="outlined"
              color="primary"
              disabled={loading}
            >
              <Icon>save</Icon> Save & Print Quotation
            </Button>
          </div>
        </div>

        <div className="viewer__order-info px-4 mb-4 flex justify-between">
          <div>
          <h5 className="font-normal capitalize">
              <strong>RFQ ID: </strong>{" "}
              <span>
                {id}
              </span>
            </h5>
            
           <h5 className="font-normal capitalize">
              <strong>Vendor Name: </strong>{" "}
              <span>
                {cname}
              </span>
            </h5>
            
            
          </div>
          <div>
           
            
            <div className="text-right">
            <h5 className="font-normal">
                <strong>RFQ Date: </strong>
                <span>
                  {rdate}
                  </span>
              </h5>
              <h5 className="font-normal">
                <strong>Bid Closing Date: </strong>
                <span>
                  {ddate}
                  </span>
              </h5>
            </div>
            <div className="flex">       
          <h5 className="font-normal">
                <strong>Purchase Order Date: </strong>
                
          
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
          
                    <KeyboardDatePicker
                      className="ml-2"
                      margin="none"
                      label="Purchase Order Date"
                      inputVariant="outlined"
                      type="text"
                      size="small"
                      selected={Quote_date}
                      value={Quote_date}
                      onChange={(date) => {
                        setQuote_date(moment(date).format('DD MMM YYYY'))
                        // return date
                      }}
                    />
                  </MuiPickersUtilsProvider>
                  </h5>
                </div>
            
            
          </div>
        </div>

        <Divider />

          <Table className="mb-4">
          <TableHead>
            <TableRow className="bg-default">
              <TableCell className="px-2" style={{width:'80px'}} align="left">S.NO.</TableCell>
              <TableCell className="px-0" style={{width:'250px'}} >RFQ DESCRIPTION</TableCell>
              <TableCell className="px-0" style={{width:'250px'}}>OUR DESCRIPTION</TableCell>
              <TableCell className="px-0" style={{width:'80px'}}>QUANTITY</TableCell>
              <TableCell className="px-0" style={{width:'150px'}} >PRICE</TableCell>
              <TableCell className="px-0" style={{width:'150px'}}>TOTAL</TableCell>
              <TableCell className="px-0"style={{width:'200px'}}>REMARK</TableCell>
               <TableCell className="pr-2" style={{width:'50px'}}>ACTION</TableCell> 
            </TableRow>
          </TableHead>

          <TableBody>
            {invoiceItemList.map((item, index) => {

              if(!dstatus)
              {
              subTotalCost += parseFloat(item.total_amount)
              vat= ((subTotalCost * 15) / 100).toFixed(2)
              GTotal=(subTotalCost+(subTotalCost * 15) / 100).toFixed(2)
              }
              else
              {
                
                subTotalCost += parseFloat(item.total_amount)
                dis_per=parseFloat(discounts * subTotalCost/100).toFixed(2)
                vat= (((subTotalCost-parseFloat(discounts * subTotalCost/100)) * 15) / 100).toFixed(2)
                GTotal=((subTotalCost-parseFloat(discounts * subTotalCost/100))+ parseFloat(vat)).toFixed(2);
              }
             
              
              return (
                <TableRow key={index}>
                  
                 
                  <TableCell className="pl-2 capitalize" align="left" style={{width:50}}>
                    {index + 1}
                    
                  </TableCell>
                 
                  

                  <TableCell className="pl-0 capitalize" align="left" style={{width:'250px'}}>
                    <TextValidator
                      label="description"
                      type="text"
                      name="description"
                      fullWidth
                      variant="outlined"
                      
                      size="small"
                      value={item? item.description: null}
                      validators={["required"]}
                      errorMessages={["this field is required"]}
                      multiline
                    />
                  </TableCell>
                  <TableCell className="pl-0 capitalize" align="left" style={{width:'250px'}}>
                    <TextValidator
                      label="Our description"
                      type="text"
                      
                      variant="outlined"
                      size="small"
                      name="quotedescription"
                      fullWidth
                      value={item ?item.descriptionss :null }
                      multiline
              
                    />
                  </TableCell>
                  <TableCell className="pl-0 capitalize"  align="left" style={{width:'80px'}}>
                    <TextValidator
                      label="Quantity"
                      onChange={(event) => calcualteprice(event, index)}
                      type="text"
                      variant="outlined"
                      size="small"
                      fullWidth
            
                      name="quantity"
                      inputProps={{min: 0, style: { textAlign: 'center' }}}
                      value={item.quantity? item.quantity:""}
                      validators={["required"]}
                      errorMessages={["this field is required"]}
                    />
                  </TableCell>
                  <TableCell className="pl-0 capitalize" align="left" >
                  <TextValidator
                      label="Unit Price"
                      variant="outlined"
                      onChange={(event) => handleIvoiceListChange(event, index)}
                      type="text"
                      name="purchase_price"
                      size="small"
                      
                      fullWidth
                      value={item.purchase_price? item.purchase_price:""}
                      select
                      
                      
                    >
                       {item.product_price_list.map((item) => (
                          <MenuItem value={item.price} key={item.price}>
                           {item.price}
                          </MenuItem>
                        ))} 
                    </TextValidator>
                    
                  </TableCell> 

                  
                  
                  
                  
                  <TableCell className="pl-0 capitalize" align="left" style={{width:'80px'}} >
                    {/* <TextValidator
                      label="QTotal"
                      
                      type="text"
                      variant="outlined"
                      size="small"
                      
                      name="total_amount"
                      inputProps={{min: 0, style: { textAlign: 'right' }}}
                     
                      value={item.total_amount ? item.total_amount: ""}
                      
                    /> */}
                    <CurrencyTextField
                className="w-full "
                label="Total"
			          variant="outlined"
                fullWidth
                size="small"
			          currencySymbol="SAR"
                name="total_amount"
                value={item.total_amount ? item.total_amount: ""}
              />
                  </TableCell>
                  <TableCell className="pl-0 capitalize" align="left" style={{width:'200px'}}>
                    <TextField
                      label="Remark"
                      inputProps={{style: {textTransform: 'capitalize'}}}
                      onChange={(event) => setremark(event, index)}
                      type="text"
                      variant="outlined"
                      size="small"
                      name="remark"
                      style={{width:'75%',float:'left'}}
                      fullWidth
                      value={item.remark ?item.remark:"" }
                      
              
                    />
  
                  </TableCell>
                  <TableCell className="pr-2 capitalize" align="left" >
               
                        <Icon color="error" fontSize="small" onClick={() => deleteItemFromInvoiceList(index)}>
                          delete
                      </Icon>
                      
                </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        
        <h6 className="pl-4"><strong>Terms</strong></h6>
        <div className="px-4 flex justify-between">
        <div className="flex">
        
        <div className="pr-12">
        

        
        <p className="mb-8">Quotation Validity:</p>
              <p className="mb-8">payment Terms:</p>
              <p className="mb-8">Waranty:</p>
              <p className="mb-8">Delivery Time:</p>
              <p className="mb-8">Inco-Term:</p>
          </div>
          <div>
          <TextValidator
                label="Quotation Validity"
                className="mb-4"
                type="text"
                variant="outlined"
                size="small"
                style={{width:500}}
                onChange={e => setvalidity(e.target.value)
                }
                value={validity}
                validators={["required"]}
                errorMessages={["this field is required"]}
              />
              <TextValidator
                label="payment Terms"
                className="mb-4"
                onChange={e => setpayment_terms(e.target.value)
                }
                type="text"
                style={{width:500}}
                variant="outlined"
                size="small"
                name="net_amount"
                value={payment_terms}
                validators={["required"]}
                errorMessages={["this field is required"]}
              />
              <TextValidator
                label="Waranty"
                onChange={e => setwarranty(e.target.value)
                }
                className="mb-4"
                type="text"
                variant="outlined"
                size="small"
                name="net_amount"
                style={{width:500}}
                value={warranty}
                validators={["required"]}
                errorMessages={["this field is required"]}
              />
              <TextValidator
                label="Delivery Time"
                className="mb-4"
                onChange={e => setdelivery_time(e.target.value)
                }
                type="text"
                variant="outlined"
                size="small"
                style={{width:500}}
                name="net_amount"
                value={delivery_time}
                validators={["required"]}
                errorMessages={["this field is required"]}
              />
              <TextValidator
                label="Inco-Term"
                onChange={e => setinco_terms(e.target.value)
                }
                type="text"
                className="mb-4"
                variant="outlined"
                size="small"
                name="net_amount"
                style={{width:500}}
                value={inco_terms}
                validators={["required"]}
                errorMessages={["this field is required"]}
              />
          </div>
          
          </div>
          <div className="px-4 flex justify-end">
          <div className="flex " >
              <div className="pr-12">
              <p className="mb-8">Sub Total:</p>
              {/* <p className="mb-8">Discount:</p> */}
              <p className="mb-8">Vat(15%):</p>
              {/* <p className="mb-5">currency:</p> */}
              <strong>
                <p className="mb-8">Grand Total:</p>
              </strong>
            </div>
            <div>
              
              <p className="mb-4" align="right">{subTotalCost?subTotalCost.toLocaleString(undefined,{
                minimumFractionDigits:2
              }):'0.00'}</p>
              
              
              {/* <TextValidator
                className="mb-4 "
                label="Vat"
                inputProps={{min: 0, style: { textAlign: 'right' }}}
                type="text"
                variant="outlined"
                size="small"
                name="vat"
                value={subTotalCost?vat:0}
                validators={["required"]}
                errorMessages={["this field is required"]}
              /> */}
              <CurrencyTextField
                className="w-full mb-4"
                label="Vat"
			          variant="outlined"
                fullWidth
                size="small"
			          currencySymbol="SAR"
                name="vat"
                value={subTotalCost?vat:0}
              />
              {/* <TextValidator
                label="Grand Total"
                onChange={handleChange}
                type="text"
                className="mb-4"
                variant="outlined"
                size="small"
                inputProps={{min: 0, style: { textAlign: 'right' }}}
                name="net_amount"
                value={subTotalCost?GTotal:0.00}
                validators={["required"]}
                errorMessages={["this field is required"]}
              /> */}
              <div>
              <CurrencyTextField
                className="w-full mb-4"
                label="Grand Total"
			          variant="outlined"
                fullWidth
                size="small"
			          currencySymbol="SAR"
                name="net_amount"
                value={subTotalCost?GTotal:0.00}
              />
              </div>
              
               
            </div>
          </div>
          </div>
        </div>
      </ValidatorForm>
      </div>
    </Card>
    </div>
  );
};



const initialValues = {
  id: "",
  orderNo: "",
  buyer: {
    name: "",
    address: "",
  },
  seller: {
    name: "",
    address: "",
  },
  item: [],
  status: "",
  // discount:"",
  date: new Date(),
  currency: "",
  loading: false,
};

export default InvoiceEditor;
