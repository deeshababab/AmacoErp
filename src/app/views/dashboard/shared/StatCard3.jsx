import React from "react";
import { Grid, Card, IconButton, Icon } from "@material-ui/core";

const StatCard3 = () => {
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
    <div>
      <Grid container spacing={3}>
        {statList.map((item, ind) => (
          <Grid key={item.title} item md={3} sm={6} xs={12}>
            <Card elevation={3} className="p-5 flex">
              <div>
                <IconButton size="small" className="p-2 bg-light-gray">
                  <Icon className="text-muted">{item.icon}</Icon>
                </IconButton>
              </div>
              <div className="ml-4">
                <h3 className="mt-1 text-32">{item.amount.toLocaleString()}</h3>
                <p className="m-0 text-muted">{item.title}</p>
              </div>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default StatCard3;
