import axios from 'axios';
import useSettings from '../../hooks/useSettings';

export const getAllInvoice = () => {
    return url.get("/api/invoices/all")
}
export const getInvoiceById = (id) => {
    return url.get("/api/invoices", { data: id })
}
export const deleteInvoice = (invoice) => {
    return url.post("/api/invoices/delete", invoice)
}
export const addInvoice = (invoice) => {
    return url.post("/api/invoices/add", invoice)
}
export const updateInvoice = (invoice) => {
    return url.post("/api/invoices/update", invoice)
}


export const getInvoice = () => {
    return url.get("http://dataqueuesystems.com/amaco/amaco/public/api/parties/1")
}
// const  url = "http://www.amacoerp.com/amaco/public/api/";
 const url = axios.create({
    baseURL: 'http://www.amacoerp.com/amaco/public/api/',
    // timeout: 1000,
    
    // headers: {'Authorization': 'Bearer '+localStorage.getItem('rememberMe')}
  });


// const  url = "http://dataqueuesystems.com/amaco/amaco/public/api/";
const  phpurl = "http://www.amacoerp.com/amaco/public/api/";
// const  phpurl = "http://dataqueuesystems.com/amaco/amaco/public/api/";
export const getparties= () => {
    return url.get(url+"parties")
}
export const getcategories= () => {
    return url.get("categories")
}
export const getrfq= () => {
    return url.get("rfq")
}
export const getProductList = () => {
    return url.get("products");
};
export const getVendorList = () => {
    return url.get("parties-vendor");
  };
export const getCustomerList = () => {
    return url.get("customer-list");
  };
  
export const getmanufacturer = () => {
    return url.get(url+"manufacturer");
};
export const getpaymentaccount = () => {
    return url.get(url+"payment-account");
};
  

export default url;