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
  TextField
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
  const [discounts, setdiscounts] = useState('0');
  const [proList, setproList] = useState([]);
  const [ProductList, setProductList] = useState([]);
  const [discount,setdiscount] =useState('0')
  const [dstatus, setdstatus] = useState(false);
  const [is_partial, setis_partial] = useState(false);
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
    
      
      
      if (index === i) 
      {
        const res=parseInt(element.quantity)-parseInt(element.delivered_quantity);
        
        if(parseInt(event.target.value)>=parseInt(res))
        {
         
              element[event.target.name] = parseInt(element.quantity)-parseInt(element.delivered_quantity);
              element['balance'] =0;
        }
        
       
        
         else if(event.target.value<=0)
          {
         
            element[event.target.name] = res;
            element['balance'] =0;
           
          }
        else
          {
           
            element[event.target.name] = event.target.value;
            element['balance'] =parseInt(element.quantity)-parseInt(element.delivered_quantity)-event.target.value;
           
          }
        
      return element;
      }
      
    });

    setState({
      ...state,
      item: tempItemList,
    });
   
     
   
  };

  
  

  
  

  const handleSubmit = () => {
    
    setState({ ...state, loading: true });
    
    let tempState = { ...state };
    let arr = []
    delete tempState.loading;
    let tempItemList =[...state.item];

    
    
    if(total_balance>0)
   {
     setis_partial(true)
     arr.is_partial=true
   }
   else
   {
    arr.is_partial=false
    arr.is_completed=true
   }
  
    arr.delivery_note_details=tempItemList
    arr.quotation_id=parseInt(id)
    arr.discount_in_percentage=discount
    arr.total_value=parseFloat(subTotalCost).toFixed(2)
    arr.grand_total=GTotal
    arr.vat_in_value=parseFloat(vat).toFixed(2)

    const json = Object.assign({}, arr);
    
   
  
    
    url.post('delivery-notes',json)
      .then(function (response) {
        
        
        Swal.fire({
          title: 'Success',
          type: 'success',
          icon:'success',
          text: 'Data saved successfully.',
        });
        history.push("/dnoteview")
     
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
    
    });
    
    url.get("sale-quotation/"+ id).then(({ data }) => {
     
      setcname(data[0].party.firm_name)
      setqno(data[0].quotation_no)
      setpono(data[0].po_number)
     
      
      setdiscount(data[0].discount_in_p)
     
      
      
     setState({
      ...state,
      item: data[0].quotation_details,
    });
    let tempItemList = [...state.item];
    
    
    
    
   
    
    
   });
   
  }, [id, isNewInvoice, isAlive, generateRandomId]);

  
  

  let subTotalCost = 0;
  let GTotal = 0;
  let total_balance=0;
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
          <h3 align="left">DELIVERY NOTE</h3>
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
              <Icon>save</Icon> SAVE 
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
            
           <h5 className="font-normal capitalize">
              <strong>Company Name: </strong>{" "}
              <span>
                {cname}
              </span>
            </h5>
            
            
          </div>
          <div>
           
            
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

            </div>
            
          </div>
        </div>

        <Divider />

          <Table className="mb-4">
          <TableHead>
            <TableRow className="bg-default">
              <TableCell className="pl-sm-24" style={{width:70}} align="left">S.NO.</TableCell>
              <TableCell className="px-0" style={{width:'400px'}}>RFQ DESCRIPTION</TableCell> 
              <TableCell className="px-0" style={{width:70}}>UOM</TableCell>
              <TableCell className="px-0" style={{width:'150px'}}>QUANTITY</TableCell>
              <TableCell className="px-0" style={{width:'150px'}}>DELIVERED QTY</TableCell>
              <TableCell className="px-0" style={{width:'150px'}}>DELIVERING QTY</TableCell>
              <TableCell className="px-0" style={{width:'150px'}}>BALANCE QTY</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {invoiceItemList.map((item, index) => {
            
             total_balance+=(parseInt(item.balance))
             
              if(!dstatus)
              {
                
              
  
              subTotalCost += parseFloat(item.total_amount) 
            
              vat= ((subTotalCost * 15) / 100).toFixed(2)
              GTotal=(subTotalCost+(subTotalCost * 15) / 100).toFixed(2)
              }
              else
              {
                
                subTotalCost += parseFloat(item.total_amount)
                vat= (((subTotalCost-parseFloat(discounts * subTotalCost/100)) * 15) / 100).toFixed(2)
                GTotal=((subTotalCost-parseFloat(discounts * subTotalCost/100))+ parseFloat(vat)).toFixed(2);
              }
              
              return (
                <TableRow key={index}>
                  
                 
                
                  <TableCell className="pl-sm-24 capitalize" align="left" style={{width:50}}>
                    {index + 1}
                   
                  </TableCell>
                  
                  <TableCell className="pl-0 mr-2 capitalize" align="left" style={{width:'300px'}}>
                    <TextValidator
                      label="description"
                     
                    
                      type="text"
                      name="description"
                      variant="outlined"
                      size="small"
                      fullWidth
                      value={item? item.description: null}
                      validators={["required"]}
                      errorMessages={["this field is required"]}
                    />
                  </TableCell>
                  <TableCell className="pl-0 capitalize" align="left" style={{width:70}}>
                    <TextValidator
                      label="UOM"
                      type="text"
                      variant="outlined"
                      inputProps={{min: 0, style: { textAlign: 'center' }}}
                      size="small"
                      name="uom"
                      value={item?item.product.unit_of_measure:""}
              
                    />
                  </TableCell>
                  <TableCell className="pl-0 capitalize"  align="center" style={{width:'150px'}}>
                    <TextValidator
                      label="Quantity"
                      type="number"
                      variant="outlined"
                      inputProps={{min: 0, style: { textAlign: 'center' }}}
                      size="small"
                      fullWidth
                      name="quantity"
                      align="center"
                      min="1"
                      max={item.quantity}
                      value={item?item.quantity:""}
                      validators={["required"]}
                      errorMessages={["this field is required"]}
                    />
                  </TableCell>
                  
                  <TableCell className="pl-0 capitalize" align="center" style={{width:'150px'}}>
                    <TextValidator
                      label="delivered quantity"
                      type="number"
                      name="delivered_quantity"
                      align="center"
                      inputProps={{min: 0, style: { textAlign: 'center' }}}
                      fullWidth
                      variant="outlined"
                      size="small"
                      value={item? item.delivered_quantity: item.delivered_quantity}
                      validators={[
                        "required",
                        
                      ]}
                      errorMessages={["this field is required"]}
                    />
                  </TableCell>
                  <TableCell className="pl-0 capitalize" align="center" style={{width:'150px'}}>
                    <TextValidator
                      label="delivery quantity"
                      onChange={(event) => handleIvoiceListChange(event, index)}
                      type="number"
                      inputProps={{min: 0, style: { textAlign: 'center' }}}
                      name="delivering_quantity"
                      fullWidth
                      required
                      variant="outlined"
                      size="small"
                      value={item? item.delivering_quantity: item.delivering_quantity}
                      
                    />
                  </TableCell>

                  
                  
                  
                  <TableCell className="pl-0 capitalize" align="left">
                    <TextField
                      label="Balance Qty"
                      type="text"
                      variant="outlined"
                      size="small"
                      name="balance"
                      fullWidth
                      value={item.balance?item.balance:0}
                      
                    />
                  </TableCell>
                  

                 
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        
     
     <div className="flex justify-end px-4 mb-4">
    

          <div className="flex ">
           
            <div>
              
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
