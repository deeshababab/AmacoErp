import React from "react";
import { Button, Card, Divider, Icon } from "@material-ui/core";
import { GetApp } from "@material-ui/icons";
import Swal from "sweetalert2";
import history from "history.js"
import Axios from "axios";
import url from "../../../invoice/InvoiceService"

const CustomerActions = () => {
  let search = window.location.search;
  let params = new URLSearchParams(search);
  const foo =parseInt(params.get('id'));
  const pushdata = (id) => {
    history.push(`/party/updateparty?id=${id}`)

  }
  
  const removeData = (id) => {
    // alert(id)
    // let url = `https://jsonplaceholder.typicode.com/users/${id}`
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this contact details!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        url.delete(`parties/${id}`)
    .then(res => {
        
        Swal.fire(
          'Deleted!',
          'Your contact details has been deleted.',
          'success'
        )
        history.push('/party/viewparty')
        
    })
    
        
      // For more information about handling dismissals please visit
      // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your Contact Detail is safe :)',
          'error'
        )
      }
    })
    
}
  return (
    <Card elevation={3}>
      <h5 className="p-4 m-0">ACTIONS</h5>

      <Divider className="mb-4" />

      <div className="flex-column items-start px-4 mb-4">
      <div className="flex items-center mb-4">
          <Icon className="mr-2" fontSize="small" color="error">
            info
          </Icon>
          <small className="text-muted">
            Once you delete Party, data will be lost forever.
          </small>
        </div>
        
        <span>
        <Button className="mr-4 py-2" variant="outlined" style={{border:'1px solid #379c60',color:'#379c60'}} onClick={() => pushdata(foo)}>
          <Icon className="mr-2" fontSize="small">
            edit
          </Icon>{" "}
          EDIT PARTY
        </Button>
        <Button className="py-2 " variant="outlined" onClick={() => removeData(foo)} style={{border:'1px solid #ff3d57',color:'#ff3d57'}}>
          <Icon className="mr-2" fontSize="small">
            delete
          </Icon>{" "}
          DELETE PARTY
        </Button>
        </span>
        
      </div>
    </Card>
  );
};

export default CustomerActions;
