import React, { Component } from "react";
import { Breadcrumb } from "matx";
import SimpleForm from "../material-kit/forms/addproduct";
import { Card } from "@material-ui/core";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";



class BasicForm extends Component {

  
  render() {
    return (
      <div className="m-sm-30">
        <div className="mb-sm-30">
          <Breadcrumb
            routeSegments={[

              { name: "PRODUCT CATEGORY", path: `/product/viewsubcategory` },
              { name: "NEW PRODUCT" }
            ]}
          />
        </div>

        <Card className="px-6 pt-2 pb-4"><SimpleForm /></Card>
      </div>
    );
  }
}

export default BasicForm;
