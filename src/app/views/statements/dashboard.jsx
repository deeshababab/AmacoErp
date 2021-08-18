import React,{useState,useEffect} from "react";
import {
  Card,
  TextField,
  MenuItem,
  IconButton,
  Icon,
  Grid,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Select,
  Tooltip

} from "@material-ui/core";
import clsx from "clsx";
import { useTheme } from "@material-ui/styles";
import ReactEcharts from "echarts-for-react";
// import StatCard3 from "./shared/StatCard3";
import url from "../../views/invoice/InvoiceService";
import DoughnutChart from "../charts/echarts/Doughnut";
// import ComparisonChart2 from "../charts/echarts/ComparisonChart2";
// import StatCard4 from "./shared/StatCard4";
// import GaugeProgressCard from "./shared/GuageProgressCard";
// import FollowerCard from "./shared/FollowerCard";
// import FollowerCard2 from "./shared/FollowerCard2";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(({ palette, ...theme }) => ({
  productTable: {
    "& small": {
      height: 15,
      width: 50,
      borderRadius: 500,
      boxShadow:
        "0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)",
    },
    "& td": {
      borderBottom: "none",
    },
    "& td:first-child": {
      paddingLeft: "16px !important",
    },
  },
}));


const Dashbard = () => {
  const classes = useStyles();
  const [Division,setDivision]=useState([]);
  const [PaymentAccount,setPaymentAccount]=useState([]);
  const theme = useTheme();
  useEffect(() => {
  // updateSidebarMode({ mode: "close" })
  document.title = "Request for quoatation - Amaco";
  url.get("division").then(({ data }) => {
     
    setDivision(data);
  });
  url.get("payment-account").then(({ data }) => {
     
    setPaymentAccount(data);
  });
},[])
  const statList = [
    {
      icon: "receipt",
      amount: 23,
      title: "New Quotation Request",
    },
    {
      icon: "hourglass_empty",
      amount: 12,
      title: "Pending Quotation",
    },
    {
      icon: "shopping_cart",
      amount: 10,
      title: "Sales Orders",
    },
    {
      icon: "dvr",
      amount: 30,
      title: "Todays Sale",
    },
  ];
  return (
    <div className="analytics m-sm-30">
      <div className="flex justify-between items-center items-center mb-6">

        <h3 className="m-0">Overview</h3>
        {/* <TextField defaultValue="1" variant="outlined" size="small" select>
          <MenuItem value="1">This Month</MenuItem>
          <MenuItem value="2">Last Month</MenuItem>
          <MenuItem value="3">Six Month</MenuItem>
          <MenuItem value="4">Last Year</MenuItem>
        </TextField> */}
      </div>
      <div className="m-4">
     
          
            <Card elevation={3} style={{ border: "1px solid #34314c" }}>
             
             
                
              <p  style={{textAlign:"center"}} className="pb-4 pt-4"><Icon className="justify-center pt-1">account_balance</Icon>TOTAL BALANCE:
              </p>
           
            </Card>
    
    </div>
    
    <div className="analytics m-sm-30 pl-4 ">
        <Grid container spacing={2}>
          
        <Grid item lg={6} md={4} sm={12} xs={12}>
        <Grid container spacing={3}>
        {Division.map((item, ind) => (
        
        <Card
      className="flex flex-wrap justify-between items-center  p-sm-24 mt-4 mr-4 bg-paper"
      elevation={6}
     style={{width:300,border:"1px solid #1976d2"}}
      
    >
      <div className="flex items-center">
        {/* <Icon className={classes.icon}>group</Icon> */}
        <div className="ml-3">
          <h5 className="">
            {item.name}
            </h5>
          <h6 className="m-0 mt-1 text-primary font-medium">
            {item.opening_bal} SAR
            </h6>
        </div>
      </div>
      <Tooltip title="View Details" placement="top">
        <IconButton>
          <Icon color="primary">arrow_right_alt</Icon>
        </IconButton>
      </Tooltip>

    </Card>

        ))}
        
</Grid>
<Card className="mt-5 mb-6 pl-0" elevation={3}>
<Card className="px-6">
              <div className="card-title">Traffic Sources</div>
              <div className="card-subtitle">Last 30 days</div>
              <DoughnutChart
                height="300px"
                color={[
                  theme.palette.primary.dark,
                  theme.palette.primary.main,
                  theme.palette.primary.light,
                ]}
              />
    </Card>
  </Card>

            
          </Grid>
          
          <Grid item lg={6} md={6} sm={6} xs={10}>
          <Card elevation={3} className="pt-5 mb-6" style={{border:"1px solid #1976d2"}}>
<div className="flex justify-between items-center px-6 mb-3">
  {/* <span className="card-title">Due Invoices</span> */}
  <Select size="small" defaultValue="this_month" disableUnderline>
    <MenuItem value="this_month">This Month</MenuItem>
    <MenuItem value="last_month">Last Month</MenuItem>
  </Select>
</div>
<div className="overflow-auto">
  <Table
    className={clsx("whitespace-pre min-w-400", classes.productTable)}
  >
    <TableHead>
      <TableRow>
        <TableCell className="pl-10" colSpan={4}>
          NAME
        </TableCell>
        <TableCell className="px-0" colSpan={2}>
          BALANCE
        </TableCell>
        
        <TableCell className="px-0" colSpan={1}>
          ACTION
        </TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {PaymentAccount.map((product, index) => (
        <TableRow key={index} hover>
          <TableCell className="px-0 capitalize" colSpan={4} align="left">
            <div className="flex items-center">
           
              <p className="m-0 ml-8" >{product.name}</p>
            </div>
          </TableCell>
          <TableCell className="px-0 capitalize" align="left" colSpan={2}>
            
            {product.opening_bal} SAR
          </TableCell>

          
          <TableCell className="px-0" colSpan={1}>
            <IconButton>
              <Icon color="primary">remove_red_eye</Icon>
            </IconButton>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</div>

</Card>

          </Grid>

         
        </Grid>
      </div>







            





   





      
     

    
    </div>
  );
};

const productList = [
  {
    imgUrl: "/assets/images/products/headphone-2.jpg",
    name: "earphone",
    price: 100,
    available: 15,
  },
  {
    imgUrl: "/assets/images/products/headphone-3.jpg",
    name: "earphone",
    price: 1500,
    available: 30,
  },
  {
    imgUrl: "/assets/images/products/iphone-2.jpg",
    name: "iPhone x",
    price: 1900,
    available: 35,
  },
  {
    imgUrl: "/assets/images/products/iphone-1.jpg",
    name: "iPhone x",
    price: 100,
    available: 0,
  },
  {
    imgUrl: "/assets/images/products/headphone-3.jpg",
    name: "Head phone",
    price: 1190,
    available: 5,
  },
];

export default Dashbard;
