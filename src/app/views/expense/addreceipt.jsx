import React, { useState, useEffect } from "react";
import {
  Dialog,
  Button,
  Grid,
} from "@material-ui/core";
import history from "history.js";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import CurrencyTextField from '@unicef/material-ui-currency-textfield'
import MenuItem from "@material-ui/core/MenuItem";
import { Icon,TextField,FormGroup,FormControlLabel,Checkbox,FormControl,Select,InputLabel,Avatar,CardActionArea} from "@material-ui/core";
import Swal from "sweetalert2";
import url, {getCustomerList,getdivisions,getcompanybank}from "../invoice/InvoiceService"
import useAuth from "app/hooks/useAuth";

const MemberEditorDialog = ({ uid, open, handleClose,catid ,userList,id}) => {
 
  const formData= new FormData();
  const [state, setState] = useState({
    name: "abc",
    email: "",
    phone: "",
    balance: "",
    age: "",
    company: "",
    address: "",
    isActive: false,
    isAlive: true,
  });
  const [party_id, setparty_id] = useState('');
  const [payment_mode, setpayment_mode] = useState('');
  const [check_no, setcheck_no] = useState('');
  const [narration, setnarration] = useState('');
  const [paid_amount, setpaid_amount] = useState();
  const [userList1, setUserList1] = useState([]);
  const [divisions, setdivisions] = useState([]);
  const [div_id, setdiv_id] = useState('');
  const [companybank, setcompanybank] = useState([]);
  const [bank_id, setbank_id] = useState(null);
  const [file, setfile] = useState();
  const [fileurl, setfileurl] = useState();
  const [isAlive, setIsAlive] = useState(true);
  const { user }=useAuth();
 
  
  const option =[
      {
          name:'Cash',
          value:'cash'
      },
      {
        name:'Cheque',
        value:'cheque'
    },
    {
        name:'Bank Transfer',
        value:'banktransfer'
    }
  ]
  

  
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("md");


  useEffect(() => {
    
   console.log(user)
    getCustomerList().then(({ data }) => {
        setUserList1(data)
       

    })
    getdivisions().then(({ data }) => {
      console.log(data)
      setdivisions(data)
     

  })
  getcompanybank().then(({ data }) => {
    setcompanybank(data)
   

})
if(id)
{
  url.get('receipts/'+id).then(({data})=>
  {
    console.log(data.party_id)
    setparty_id(data[0]?.party_id)
    setdiv_id(data[0]?.div_id)
    setpaid_amount(data[0]?.paid_amount)
    setpayment_mode(data[0]?.payment_mode)
    setfileurl(data[0]?.referrenceImgUrl)
  })
}
},[])


const handleFileSelect = (event, f) => {
  let files = event.target.files[0];
  const filename=URL.createObjectURL(event.target.files[0]);
  console.log(filename);
  setfile(files);
  setfileurl(filename)
 

  
  

 
};
  const handleFormSubmit = () => {
    // const formData= new FormData();

   
    formData.append("party_id",party_id)
    formData.append("payment_mode",payment_mode)
    formData.append("check_no",check_no)
    formData.append("narration",narration)
    formData.append("paid_amount",paid_amount.split(",").join(""))
    formData.append("div_id",div_id)
    formData.append("bank_id",bank_id?bank_id:null)
    formData.append("paid_date",new Date())
    formData.append("file",file)
    if(id)
    {
      formData.append("id",id)

      url.post('updateReceipt', formData).then(function (data) {
       
        Swal.fire({
          title: 'Success',
          type: 'success',
          icon: 'success',
          text: 'Data updated successfully.',
        });
       handleClose()
      
      history.push('/transaction') 
     
      })
      .catch(function (error) {
  
      })
    }
    else{
      url.post('receipts', formData)
  
      .then(function (data) {
       
        Swal.fire({
          title: 'Success',
          type: 'success',
          icon: 'success',
          text: 'Data saved successfully.',
        });
       handleClose()
      
      history.push('/transaction') 
     
      })
      .catch(function (error) {
  
      })
    }
   
  }
  
  
  
  return (
    <Dialog onClose={handleClose} open={open} className="px-6 pt-2 pb-4" style={{zIndex:1000}} fullWidth={fullWidth}
    maxWidth={maxWidth}>
      <div className="p-6"  >
       
       
         <h4 className="mb-5">RECEIPT</h4>   
       
        <ValidatorForm onSubmit={handleFormSubmit} autoComplete="off">
          <Grid className="mb-4" container spacing={4}>
            <Grid item sm={6} xs={12}>

            <TextValidator
                className="w-full mb-4"
                label="Division"
                
                variant="outlined"
                onChange={e => setdiv_id(e.target.value)
                  // .log(isAlive)
                }
                type="text"
                name="div_id"
                size="small"
                value={div_id}
                required
                select
              >
               {divisions.map((item, ind) => (
                <MenuItem value={item.id} key={item}>
                  {item.name}
                </MenuItem>
              ))}
              </TextValidator>
              <TextValidator
                className="w-full mb-4"
                label="Name"
                
                variant="outlined"
                onChange={e => setparty_id(e.target.value)
                  // .log(isAlive)
                }
                type="text"
                name="cname"
                size="small"
                value={party_id}
                required
                select
              >
               {userList1.map((item, ind) => (
                <MenuItem value={item.id} key={item}>
                  {item.firm_name}
                </MenuItem>
              ))}
              </TextValidator>
              
              <TextField
                className="w-full mb-4"
                label="Payement Reference"
                variant="outlined"
                onChange={e => setnarration(e.target.value)
                  // .log(isAlive)
                }
                type="textarea"
                name="cname"
                multiline
                rows={6}
               
                value={narration}
               
                
              />
            </Grid>
            

            <Grid item sm={6} xs={12}>
            <CurrencyTextField
                className="w-full mb-4"
                label="Amount"
                size="small"
                variant="outlined"
                required
                onChange={(event, value)=> setpaid_amount(value)}
                name="paid_amount"
                value={paid_amount}
                currencySymbol="SAR"
                
                
              />
             





              <TextValidator
                className="w-full mb-4"
                label="Payment Mode"
                onChange={e => setpayment_mode(e.target.value)
                }
                variant="outlined"
                type="text"
                name="cdescription"
                size="small"
                value={payment_mode}
                required
                select
              >
                  {option.map((item, ind) => (
                <MenuItem value={item.value} key={item}>
                  {item.name}
                </MenuItem>
              ))}
                  </TextValidator>
           {payment_mode==='cheque' &&(<TextValidator
                className="w-full mb-4"
                label="Cheque Number"
                onChange={e => setcheck_no(e.target.value)
                }
                variant="outlined"
                type="text"
                name="cdescription"
                size="small"
                value={check_no}
              
              ></TextValidator>
           )}
             <FormGroup>
          {payment_mode==='banktransfer'&&
                   <FormControl variant="outlined">
        <InputLabel htmlFor="outlined-age-native-simple">Bank</InputLabel>
        <Select
          native
          value={bank_id}
          // onChange={handleChange}
          onChange={e => setbank_id(e.target.value)}
          size="small"
          label="Bank"
          inputProps={{
            name: 'Bank',
            id: 'outlined-age-native-simple',
          }}
        >
         {companybank.map((item, ind) => (
          <option value={item.id}>{item.name}-{item.ac_no}</option>
         ))}
        </Select>
      </FormControl>
          }
       </FormGroup>
       <label htmlFor="upload-multiple-file">
                                 Upload File
                                </label>
                                <TextField
                                  //  className="hidden"
                                  className="mb-4 w-full"
                                  onChange={(e) => handleFileSelect(e)}
                                  id="upload-multiple-file"
                                  type="file"
                                  variant="outlined"
                                  name="file"
                                  size="small"
                                  autoComplete="none"
                                  label="Upload File"
                                  //  value={item.name}
                                />
                                <div
        onClick={()=>{setfileurl(null);setfile(null)}}
        style={{
          padding: "5px 5px 5px 5px",
          cursor: "pointer"
        }}
      >
        <CardActionArea >
          <img
            width="100%"
            // className={classes.media}
            src={fileurl}
          />
        </CardActionArea>
      </div>
              
            </Grid>
          </Grid>
          
          <div className="flex  items-center ">
            
            <Button variant="outlined" color="primary" type="submit">
             <Icon>save</Icon> SAVE
            </Button>
           
           
            <Button
              variant="outlined"
              color="secondary"
              onClick={handleClose}
              className="ml-4"
            >
              <Icon>cancel</Icon>CANCEL
            </Button>
            
           
            
          </div>
          
        </ValidatorForm>
       
      </div>
    </Dialog>
    
  );
};

export default MemberEditorDialog;
