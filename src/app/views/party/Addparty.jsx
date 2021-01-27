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
              { name: "Party", path: "./Viewparty" },
              { name: "Party Entry" }
            ]}
          />
        </div>
        <Card className="px-6 pt-2 pb-4"><Addparty /></Card>
      </div>
    );
  }
}

export default BasicForm;
