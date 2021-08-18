import React, { useState, useEffect } from "react";
import {
  Button,
  Divider,
  Card,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Icon,
} from "@material-ui/core";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { useParams, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { useCallback } from "react";
import url from "../invoice/InvoiceService";
// expandable table
import Swal from "sweetalert2";
import moment from "moment";
import CurrencyTextField from "@unicef/material-ui-currency-textfield/dist/CurrencyTextField";


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
  const [cname, setcname] = useState('');
  var tempDate = new Date();
  const [qno, setqno] = useState('');
  const[pono,setpono]=useState('');
  const [party_id, setparty_id] = useState('');
  const [discounts, setdiscounts] = useState('0');
  const [proList, setproList] = useState([]);
  const [ProductList, setProductList] = useState([]);
  const [discount,setdiscount] =useState('0')
  const [dstatus, setdstatus] = useState(false);
  const history = useHistory();
  const { id } = useParams();
  const classes = useStyles();

  const generateRandomId = useCallback(() => {
    let tempId = Math.random().toString();
    let id = tempId.substr(2, tempId.length - 1);
    setState((state) => ({ ...state, id }));
  }, []);

 
  

  

  const handleIvoiceListChange = (event, index) => {
    event.persist()
    let tempItemList = [...state.item];
    
    tempItemList.map((element, i) => {
      let sum=0;
      
    
      if (index === i) 
      {
        
        element['total_amount']=(parseInt(element.sell_price)*event.target.value).toFixed(2);
        element[event.target.name] = event.target.value;
      

      }
      return element;
      
    });

    setState({
      ...state,
      item: tempItemList,
    });
   
     
   
  };

  

  

  
  

  const handleSubmit = () => {
    
    // setState({ ...state, ['subTotalCost']: subTotalCost });
    setState({ ...state, loading: true });
    
    let tempState = { ...state };
    let arr = []
    delete tempState.loading;
    let tempItemList =[...state.item];

    // arr.push({
    //   invoice_details:tempItemList,
    // });
    arr.invoice_details=tempItemList
    arr.quotation_id=parseInt(id)
    arr.discount_in_percentage=discount
    arr.total_value=parseFloat(subTotalCost).toFixed(2)
    arr.grand_total=GTotal
    arr.vat_in_value=parseFloat(vat).toFixed(2)
    arr.party_id=party_id
   
    const json = Object.assign({}, arr);
  
    
    
    url.post('invoice',json)
      .then(function (response) {
        
         
        Swal.fire({
          title: 'Success',
          type: 'success',
          icon:'success',
          text: 'Data saved successfully.',
        });
        history.push("/inv")
      //  window.location.href="../quoateview"
      })
      .catch(function (error) {
        
      })
  };
  function cancelform() {
    history.push(`/quote/${id}/accept`)
  }

  useEffect(() => {
   
    url.get("products").then(({ data }) => {
      setproList(data)
    // setState({
    //     ...state,
    //     item: data,
    //   }); 
    });
    url.get("sale-quotation/"+ id).then(({ data }) => {
     
      setcname(data[0].party.firm_name)
      setqno(data[0].quotation_no)
      setpono(data[0].po_number)
      // setrdate(data[0].requested_date)
      setparty_id(data[0].party.id)
      setdiscount(data[0].discount_in_p)
   
     setState({
      ...state,
      item: data[0].quotation_details,
    });
   });
  }, [id, isNewInvoice, isAlive, generateRandomId]);

  
  // handleChange(evt) {
  //   this.setState({
  //     [evt.target.name]: evt.target.value,
  //   });
  // }

  // useEffect(() => {
  //   return () => setIsAlive(false);
  // }, []);

  let subTotalCost = 0;
  let GTotal = 0;
  let discount1=0;
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
          <h3 align="left">SALES INVOICE</h3>
          </div>
          <div className="mb-6">
         
            <Button
              className="mr-4 py-2"
              variant="outlined"
              color="secondary"
              onClick={cancelform}
            >
              <Icon>cancel</Icon> CANCEL
            </Button>
           

            <Button
              type="submit"
              className="py-2"
              variant="outlined"
              color="primary"
              disabled={loading}
            >
              <Icon>save</Icon> SAVE & PRINT INVOICE
            </Button>
          </div>
        </div>

        <div className="viewer__order-info px-4 mb-4 flex justify-between">
          <div>
          <h5 className="font-normal capitalize">
              <strong>Quotation Number: </strong>{" "}
              <span>
                {qno}
              </span>
            </h5>
            {/* <p className="mb-4">Order Number</p> */}
            {/* <TextValidator
              label="Customer Name."
              type="text"
              size="small"
              variant="outlined"
              fullWidth
              name="cname"
              value={cname}
              onChange={handleChange}
              validators={["required"]}
              errorMessages={["this field is required"]}
            /> */}
           <h5 className="font-normal capitalize">
              <strong>Company Name: </strong>{" "}
              <span>
                {cname}
              </span>
            </h5>
            
            {/* <TextValidator
                label="Buyer Address"
                onChange={(event) => handleSellerBuyerChange(event, "buyer")}
                type="text"
                name="address"
                size="small"
                fullWidth
                multiline={true}
                rowsMax={4}
                variant="outlined"
                value={buyer ? buyer.address : null}
                validators={["required"]}
                errorMessages={["this field is required"]}
              /> */}
          </div>
          <div>
           
            {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                // id="mui-pickers-date"
                label="Requested Date"
                inputVariant="outlined"
                type="text"
                name="rdate"
                value={rdate}
                size="small"
                fullWidth
                onChange={rdate => setrdate(rdate)} 
                
              /> */}
            {/* </MuiPickersUtilsProvider> */}
            <div className="text-right">
              <h5 className="font-normal">
                <strong>Due date: </strong>
                <span>
                  {moment(tempDate).format('DD MMM YYYY')}
                  </span>
              </h5>
            </div>
            <div className="text-right">
              <h5 className="font-normal">
                <strong>P.O Number: </strong>
                <span>
                  {pono}
                  </span>
              </h5>
              {/* <TextField
                    
                    label="PO Number"
                    style={{minWidth:200,maxWidth:'250px'}}
                    name="party_id"
                    size="small"
                    variant="outlined"
                    
                    value={ponum}
                    // onChange={handleChange}
                    onChange={(event)=>setponum(event.target.value)}
                    required
                    
                  >
                    
        </TextField> */}
            </div>
            {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                margin="none"
                // id="mui-pickers-date"
                label="Due Date"
                inputVariant="outlined"
                type="text"
                autoOk={true}
                variant="outlined"
                value={date}
                size="small"
                fullWidth
                format="MMMM dd, yyyy"
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </MuiPickersUtilsProvider> */}
          </div>
        </div>

        <Divider />

          <Table className="mb-4">
          <TableHead>
            <TableRow className="bg-default">
              <TableCell className="pl-2" width={80}>S.NO.</TableCell>
              <TableCell className="px-0">ITEM NAME</TableCell>
              <TableCell className="px-0">RFQ DESCRIPTION</TableCell> 
              <TableCell className="px-0" width={100}>UOM</TableCell>
              <TableCell className="px-0" style={{width:'80px'}}>QUANTITY</TableCell>
              <TableCell className="px-0" style={{width:'150px'}}>UNIT PRICE</TableCell>
              <TableCell className="px-0">TOTAL</TableCell>
              {/* <TableCell className="px-0">Action</TableCell> */}
            </TableRow>
          </TableHead>

          <TableBody>
            {invoiceItemList.map((item, index) => {
             
              if(!dstatus)
              {
                
              // subTotalCost=parseInt(subTotalCost)+(parseInt(item.product[0].unit_price) * parseInt(item.quantity_required))
  
              subTotalCost += parseFloat(item.total_amount) 
            
              vat= ((subTotalCost * 15) / 100).toFixed(2)
              GTotal=(subTotalCost+(subTotalCost * 15) / 100).toFixed(2)
              }
              else
              {
                
                subTotalCost += parseFloat(item.total_amount)
                // discount=subTotalCost-parseFloat(discounts * subTotalCost/100);
                vat= (((subTotalCost-parseFloat(discounts * subTotalCost/100)) * 15) / 100).toFixed(2)
                GTotal=((subTotalCost-parseFloat(discounts * subTotalCost/100))+ parseFloat(vat)).toFixed(2);
              }
              // vat= (discount * 15) / 100
              // GTotal=item.discount + item.vat;
              
              return (
                <TableRow key={index}>
                  
                  {/* <div className={classes.root}> */}
                  
      {/* <ExpansionPanel>
     
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          onClick={() => expandData(item.product_id)}
        >
          <Typography className={classes.heading}></Typography>
        </ExpansionPanelSummary>
     
        <ExpansionPanelDetails
         <TableRow>
            <span>
            {ProductList.map((item, index) => {
              return (
                <span>
                <h6>{item.name}</h6>
                <h6>{item.name}</h6>
                <h6>{item.name}</h6>
                <h6>{item.name}</h6>
                </span>
              )
            })}
            </span>
          </TableRow>
        </ExpansionPanelDetails>
      </ExpansionPanel>
     */}
      
    {/* </div> */}
                
                  <TableCell className="pl-2 capitalize" align="left">
                    {index + 1}
                    {/* <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton> */}
                  </TableCell>
                  {/* <Select
                menuPortalTarget={document.body}
                menuPosition={'fixed'}
        placeholder="Select Option"
        value={proList.find(obj => obj.value === item.product[0].name)} // set selected value
        options={proList
         
         } 
         onChange={(event) => handleIvoiceListChange(event, index)}
          
      /> */}
                  <TableCell className="pl-0 capitalize" align="left">
                    
                  
                    <TextValidator
                      label="Item Name"
                      variant="outlined"
                      size="small"
                      // onChange={(event) => handleIvoiceListChange(event, index)}
                      type="text"
                      name="name"
                      fullWidth
                      value={item? item.product.name : null}
                      validators={["required"]}
                      multiline
                      errorMessages={["this field is required"]}
                      
                      
                    >
                      
                       {/* {proList.map((item) => (
                                            <MenuItem value={item.name} key={item.id}>
                                                {item.name}
                                            </MenuItem>
                                        ))} */}
                    </TextValidator>
                  </TableCell>

                  <TableCell className="pl-0 capitalize" align="left">
                    <TextValidator
                      label="description"
                      // onChange={(event) => handleIvoiceListChange(event, index)}
                      type="text"
                      name="description"
                      fullWidth
                      variant="outlined"
                      size="small"
                      inputProps={{style: {textTransform: 'capitalize'}}}
                      value={item? item.description: null}
                      validators={["required"]}
                      multiline
                      errorMessages={["this field is required"]}
                    />
                  </TableCell>
                  <TableCell className="pl-0 capitalize" align="left">
                    <TextValidator
                      label="UOM"
                      // onChange={(event) => handleIvoiceListChange(event, index)}
                      type="text"
                      variant="outlined"
                      size="small"
                      name="uom"
                      inputProps={{min: 0, style: { textAlign: 'center' }}}
                      fullWidth
                      value={item ?item.product.unit_of_measure :null }
              
                    />
                  </TableCell>
                  <TableCell className="pl-0 capitalize"  align="left" style={{width:'60px'}}>
                    <TextValidator
                      label="Quantity"
                      onChange={(event) => handleIvoiceListChange(event, index)}
                      type="number"
                      variant="outlined"
                      size="small"
                      fullWidth
                      name="quantity"
                      min="1"
                      max={item.quantity}
                      inputProps={{min: 0, style: { textAlign: 'center' }}}
                      value={item.quantity}
                      validators={["required"]}
                      errorMessages={["this field is required"]}
                    />
                  </TableCell>
                  
                  <TableCell className="pl-0 capitalize" align="left" style={{width:'80px'}}>
                    {/* <TextValidator
                      label="Unit_Price"
                      // onChange={(event) => handleIvoiceListChange(event, index)}
                      type="text"
                      name="sell_price"
                      fullWidth
                      variant="outlined"
                      size="small"
                      value={item? item.sell_price: null}
                      inputProps={{min: 0, style: { textAlign: 'right' }}}
                      validators={["required"]}
                      errorMessages={["this field is required"]}
                    /> */}
                    <CurrencyTextField
                className="w-full"
                label="Unit Price"
			          variant="outlined"
                fullWidth
                size="small"
			          currencySymbol="SAR"
                name="sell_price"
                value={item? item.sell_price: null}
              />
                  </TableCell>

                  
                  
                  
                  <TableCell className="pl-0 capitalize" align="left">
                    {/* <TextValidator
                      label="QTotal"
                      // onChange={(event) => handleIvoiceListChange(event, index)}
                      type="text"
                      variant="outlined"
                      size="small"
                      name="total_amount"
                      inputProps={{min: 0, style: { textAlign: 'right' }}}
                      fullWidth
                      value={item.total_amount}
                      
                    /> */}
                    <CurrencyTextField
                className="w-full"
                label="Total"
			          variant="outlined"
                fullWidth
                size="small"
			          currencySymbol="SAR"
                name="total_amount"
                value={item.total_amount}
              />
                  </TableCell>
                  

                  {/* <TableCell className="pl-0 capitalize" align="left">
                    {item.unit * item.price}
                  </TableCell> */}
       
                  {/* <TableCell className="pl-0 capitalize" align="left">
                    <Button onClick={() => deleteItemFromInvoiceList(index)}>
                    <Icon color="error" fontSize="small">
                        delete
                      </Icon>
                    </Button>
                  </TableCell> */}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        {/* <div className="flex justify-end px-4 mb-4">
          <Button  className="mt-4"
            color="primary"
            variant="contained"
            size="small" onClick={addItemToInvoiceList}>Add Item</Button>
        </div> */}
     
     <div className="flex justify-end px-4 mb-4">
     <div className="flex ">
            <div className="pr-12">
              </div>
              </div>

          <div className="flex ">
            <div className="pr-12">
              <p className="mb-8">Sub Total:</p>
              <p className="mb-8">Discount:</p>
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
                className="mb-4"
                label="Discount"
                type="text"
                variant="outlined"
                size="small"
                inputProps={{min: 0, style: { textAlign: 'right' }}}
                value={discount}
              /> */}
              <CurrencyTextField
                className="w-full mb-4"
                label="Discount"
                style={{width:'250px'}}
			          variant="outlined"
                fullWidth
                size="small"
			          currencySymbol="SAR"
                name="vat"
                value={discount}
              />
              {/* <TextValidator
                className="mb-4"
                label="Vat"
                // onChange={handleChange}
                type="text"
                variant="outlined"
                size="small"
                name="vat"
                value={subTotalCost?vat:0}
                inputProps={{min: 0, style: { textAlign: 'right' }}}
                validators={["required"]}
                errorMessages={["this field is required"]}
              /> */}
              <div>

             
               <CurrencyTextField
                className="w-full mb-4"
                label="Vat"
			          variant="outlined"
                fullWidth
                size="small"
                style={{width:'250px'}}
			          currencySymbol="SAR"
                name="vat"
                value={subTotalCost?vat:0}
              />
              </div>
              {/* <TextValidator
                label="Grand Total"
                // onChange={handleChange}
                type="text"
                className="mb-4"
                variant="outlined"
                size="small"
                name="net_amount"
                value={subTotalCost?GTotal:0.00}
                inputProps={{min: 0, style: { textAlign: 'right' }}}
                validators={["required"]}
                errorMessages={["this field is required"]}
              /> */}
              <div>
              <CurrencyTextField
                className="w-full"
                label="Grand Total"
			          variant="outlined"
                style={{width:'250px'}}
                size="small"
			          currencySymbol="SAR"
                name="net_amount"
                value={subTotalCost?GTotal:0.00}
              />
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
