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

 const url = axios.create({
    baseURL: 'http://www.amacoerp.com/amaco_test/public/api/',
    //  timeout: 1000,
    
    // headers: {'Authorization': 'Bearer '+localStorage.getItem('rememberMe')}
  });
//   const url = axios.create({
//     baseURL: 'http://www.amacoerp.com/amaco/public/api/',
    
//     // timeout: 1000,
    
//     // headers: {'Authorization': 'Bearer '+localStorage.getItem('rememberMe')}
//   });
  export const urlphp="/amaco_test";
export const ApiKey=" ";
// export const ApiKey="";
  const role =localStorage.getItem('role')


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
    return url.get("manufacturer");
};
export const getpaymentaccount = () => {
    return url.get("payment-account");
};
export const getpaymentaccountcategory = () => {
    return url.get("account-categories");
};
export const getdivisions = () => {
    return url.get("division");
};
export const getcompanybank = () => {
    return url.get("company-bank");
};
export const getusers = () => {
    return url.get("users");
};
export const capitalize_arr =(value) =>{
    let wordsArray = value.split(' ')
      let capsArray = []
  
      wordsArray.forEach(word => {
          capsArray.push(word[0].toUpperCase() + word.slice(1).toLowerCase())
      });
  
      return capsArray.join(' ')
  }  
  

export default url;