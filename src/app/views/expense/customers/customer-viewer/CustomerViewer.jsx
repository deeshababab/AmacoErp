import React, { useState } from "react";
import { Divider, Tab, Tabs,Button,Icon } from "@material-ui/core";
import { Breadcrumb } from "matx";
import CustomerDetails from "./CustomerDetails";
import CustomerInvoice from "./CustomerInvoice";
import CustomerLogs from "./CustomerLogs";
import { Link } from "react-router-dom";

const CustomerViewer = () => {
  
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (e, value) => {
    setTabIndex(value);
  };

  return (
    <div className="m-sm-30">
      <div className="mb-sm-30">
        <Breadcrumb
          routeSegments={[
            { name: "Add Expense", path: "/addexpense" },
            { name: "Expenses" },
          ]}
        />
        <div className="text-right">
                <Link to={"/addexpense"}>
                <Button
            className="py-2"
            color="primary"
            variant="outlined"
          >
          <Icon>add</Icon>
          Add new
          </Button>
          </Link>
          </div>
        
      </div>
      <Tabs
        className="mt-4"
        value={tabIndex}
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="primary"
      >
        {tabList.map((item, ind) => (
          <Tab className="capitalize" value={ind} label={item} key={ind} />
        ))}
      </Tabs>
      <Divider className="mb-6" />
{/* 
      {tabIndex === 0 && <CustomerDetails />} */}
      {tabIndex === 0 && <CustomerInvoice />}
      {tabIndex === 1 && <CustomerLogs />}
    </div>
  );
};

const tabList = ["New", "Verified"];

export default CustomerViewer;
