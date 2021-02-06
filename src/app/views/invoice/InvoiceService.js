import axios from 'axios';
import useSettings from '../../hooks/useSettings';

export const getAllInvoice = () => {
    return axios.get("/api/invoices/all")
}
export const getInvoiceById = (id) => {
    return axios.get("/api/invoices", { data: id })
}
export const deleteInvoice = (invoice) => {
    return axios.post("/api/invoices/delete", invoice)
}
export const addInvoice = (invoice) => {
    return axios.post("/api/invoices/add", invoice)
}
export const updateInvoice = (invoice) => {
    return axios.post("/api/invoices/update", invoice)
}


export const getInvoice = () => {
    return axios.get("http://dataqueuesystems.com/amaco/amaco/public/api/parties/1")
}
 const  url = "http://www.amacoerp.com/amaco/public/api/";

// const  url = "http://dataqueuesystems.com/amaco/amaco/public/api/";
const  phpurl = "http://www.amacoerp.com/amaco/public/api/";
// const  phpurl = "http://dataqueuesystems.com/amaco/amaco/public/api/";
export const getparties= () => {
    return axios.get(url+"parties")
}
export const getcategories= () => {
    return axios.get(url+"categories")
}
export const getrfq= () => {
    return axios.get(url+"rfq")
}
export const getProductList = () => {
    return axios.get(url+"products");
};
export const getVendorList = () => {
    return axios.get(url+"parties-vendor");
  };
export const getCustomerList = () => {
    return axios.get(url+"customer-list");
  };
  
export const getmanufacturer = () => {
    return axios.get(url+"manufacturer");
};
export const getpaymentaccount = () => {
    return axios.get(url+"payment-account");
};
  

export default url;