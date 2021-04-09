import React, { useState } from "react";
import { Divider, Tab, Tabs} from "@material-ui/core";
import { Breadcrumb,ConfirmationDialog } from "matx";
import CustomerDetails from "./CustomerDetails";
import CustomerInvoice from "./CustomerInvoice";
import CustomerLogs from "./CustomerLogs";
import MemberEditorDialog from "../../partycontact"
import FormDialog from "../../partycontact"
import CustomerBillings from "./CustomerBillings";
import CustomerInfo from "./CustomerInfo";
import BankDetails from "./BankDetails";

const CustomerViewer = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [shouldOpenEditorDialog, setShouldOpenEditorDialog] = useState(false);
  
  const [
    shouldOpenConfirmationDialog,
    setShouldOpenConfirmationDialog,
  ] = useState(false);
  
  const handleDialogClose = () => {
    setShouldOpenEditorDialog(false);
   
  };

  const handleDeleteUser = (user) => {
    
    setShouldOpenConfirmationDialog(true);
  };

  const handleTabChange = (e, value) => {
    setTabIndex(value);
  };

  return (
    <div className="m-sm-30">
      <div className="mb-sm-30">
        <Breadcrumb
          routeSegments={[
            { name: "Party", path: "/party/viewparty" },
            { name: "Party Details" },
          ]}
        />
      </div>
      <div>
      {shouldOpenEditorDialog && (
          <MemberEditorDialog
            handleClose={handleDialogClose}
            open={shouldOpenEditorDialog}
          />
        )}
        {shouldOpenConfirmationDialog && (
          <ConfirmationDialog
            open={shouldOpenConfirmationDialog}
            onConfirmDialogClose={handleDialogClose}
            text="Are you sure to delete?"
          />
        )}
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

       {tabIndex === 0 && <CustomerDetails />}
       {tabIndex === 1 && <CustomerBillings />}
      {tabIndex === 2 && <BankDetails />}  
    </div>
  );
};

const tabList = ["Company Details", "Contact Details", "Bank Details","Invoices"];

export default CustomerViewer;
