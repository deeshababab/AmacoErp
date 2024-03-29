import React from "react";
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

} from "@material-ui/core";
import clsx from "clsx";
import StatCard3 from "./shared/StatCard3";
import url from "../../views/invoice/InvoiceService";
import ComparisonChart2 from "../charts/echarts/ComparisonChart2";
import StatCard4 from "./shared/StatCard4";
import GaugeProgressCard from "./shared/GuageProgressCard";
import FollowerCard from "./shared/FollowerCard";
import FollowerCard2 from "./shared/FollowerCard2";
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

const Analytics2 = () => {
  const classes = useStyles();
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

      <StatCard3 />
         
            <Grid container spacing={3} alignItems="center">
         
            <Grid item sm={6} xs={3}>

      
<Card elevation={3} className="pt-5 mb-6">
<div className="flex justify-between items-center px-6 mb-3">
  <span className="card-title">Due Invoices</span>
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
        <TableCell className="px-6" colSpan={4}>
          Name
        </TableCell>
        <TableCell className="px-0" colSpan={2}>
          Revenue
        </TableCell>
        <TableCell className="px-0" colSpan={2}>
          Stock Status
        </TableCell>
        <TableCell className="px-0" colSpan={1}>
          Action
        </TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {productList.map((product, index) => (
        <TableRow key={index} hover>
          <TableCell className="px-0 capitalize" colSpan={4} align="left">
            <div className="flex items-center">
           
              <p className="m-0 ml-8">{product.name}</p>
            </div>
          </TableCell>
          <TableCell className="px-0 capitalize" align="left" colSpan={2}>
            $
            {product.price > 999
              ? (product.price / 1000).toFixed(1) + "k"
              : product.price}
          </TableCell>

          <TableCell className="px-0" align="left" colSpan={2}>
            {product.available ? (
              product.available < 20 ? (
                <small className="border-radius-4 bg-secondary text-white px-2 py-2px">
                  {product.available} available
                </small>
              ) : (
                <small className="border-radius-4 bg-primary text-white px-2 py-2px">
                  in stock
                </small>
              )
            ) : (
              <small className="border-radius-4 bg-error text-white px-2 py-2px">
                out of stock
              </small>
            )}
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







      <Grid item sm={6} xs={12}>

      
      <Card elevation={3} className="pt-5 mb-6">
      <div className="flex justify-between items-center px-6 mb-3">
        <span className="card-title">Account Statements</span>
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
              <TableCell className="px-11" colSpan={4}>
                Name
              </TableCell>
              <TableCell className="px-0" colSpan={2}>
                Revenue
              </TableCell>
              <TableCell className="px-0" colSpan={2}>
                Stock Status
              </TableCell>
              <TableCell className="px-0" colSpan={1}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productList.map((product, index) => (
              <TableRow key={index} hover>
                <TableCell className="px-0 capitalize" colSpan={4} align="left">
                  <div className="flex items-center">
                   
                    <p className="m-0 ml-8">{product.name}</p>
                  </div>
                </TableCell>
                <TableCell className="px-0 capitalize" align="left" colSpan={2}>
                  $
                  {product.price > 999
                    ? (product.price / 1000).toFixed(1) + "k"
                    : product.price}
                </TableCell>

                <TableCell className="px-0" align="left" colSpan={2}>
                  {product.available ? (
                    product.available < 20 ? (
                      <small className="border-radius-4 bg-secondary text-white px-2 py-2px">
                        {product.available} available
                      </small>
                    ) : (
                      <small className="border-radius-4 bg-primary text-white px-2 py-2px">
                        in stock
                      </small>
                    )
                  ) : (
                    <small className="border-radius-4 bg-error text-white px-2 py-2px">
                      out of stock
                    </small>
                  )}
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





      <Card className="mt-5 mb-6" elevation={3}>
        <div className=" px-4 py-3 mb-6 flex justify-between items-center bg-light-gray">
          <span className="font-medium text-muted">EXPENSE STATISTICS</span>
          <IconButton size="small">
            <Icon>more_horiz</Icon>
          </IconButton>
        </div>
        <ComparisonChart2 height={400} />
      </Card>
     

      {/* <Grid container spacing={3}>
        <Grid item md={4} xs={12}>
          <StatCard4 />
        </Grid>
        <Grid item md={4} xs={12}>
          <GaugeProgressCard />
        </Grid>
        <Grid item md={4} xs={12}>
          <FollowerCard />
          <FollowerCard2 />
        </Grid>
      </Grid> */}
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

export default Analytics2;
