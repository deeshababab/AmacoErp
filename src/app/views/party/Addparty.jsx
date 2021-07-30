import React, { Component } from "react";
import { Breadcrumb } from "matx";
import Addparty from "../material-kit/forms/addparty";
import { Card } from "@material-ui/core";


class BasicForm extends Component {
  render() {
    return (
      <div className="m-sm-30">
        <div  className="mb-sm-30">
          <Breadcrumb
            routeSegments={[
              { name: "PARTY", path: "./Viewparty" },
              { name: "PARTY ENTRY" }
            ]}
          />
        </div>
        <Card className="p-4" elevation={3}><Addparty /></Card>
      </div>
    );
  }
}

export default BasicForm;
