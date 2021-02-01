import React, { useState, useEffect } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TextField,
  Button,
  IconButton,
  Icon,
  Select,
  MenuItem,
} from "@material-ui/core";
import { FieldArray } from "formik";
import { Autocomplete } from "@material-ui/lab";
import { calculateAmount ,getCustomerList} from "./Rfqformservice";
import {getProductList} from "../../../../app/views/invoice/InvoiceService"

const InvoiceItemTable = ({ values, handleChange, setFieldValue,CustomerList }) => {
  const [isAlive, setIsAlive] = useState(true);
  const [productList, setProductList] = useState([]);
  // const [customerList, setCustomerList] = useState([]);
  useEffect(() => {
    getProductList().then(({ data }) => {
      // console.log(data.value)
      if (isAlive) setProductList(data)
      // arrayHelpers.push({})
      // console.log(data);
    });
   
    return () => setIsAlive(false);
  }, [isAlive]);

  return (
    <FieldArray name="rfq_details" >
      {(arrayHelpers) => (
       
        <div className="overflow-auto">
          <Table className="whitespace-pre min-w-750">
            <TableHead>
              <TableRow>
              <TableCell colSpan={2}>S.No.</TableCell>
                <TableCell colSpan={4}>Item Details</TableCell>
                <TableCell colSpan={2}>Quantity </TableCell>
                <TableCell colSpan={5}>Description</TableCell>
                <TableCell colSpan={1} className="p-0" align="center" />
              </TableRow>
            </TableHead>
            <TableBody> 
           
              {values.rfq_details?.map((item, ind) => (
                
                <TableRow className="position-relative" key={ind}>
                  <TableCell className="p-0" align="left">
                  {ind+1}
                  </TableCell>
                  <TableCell colSpan={4} className="p-0" align="left">
                    <div className="flex rfq_details-center">
                     
                      <Autocomplete
                        className="w-full"
                        size="small"
                        options={productList}
                        getOptionLabel={(option) => option.name}
                        renderInput={(params) => (
                          <TextField {...params} variant="outlined" fullWidth />
                        )}
                        onChange={(event, newValue) => {
                          
                          handleChange({
                            target: {
                              name: `rfq_details[${ind}]`,
                              value: newValue
                            },
                          });
                          // console.log(`rfq_details[${ind}]`)
                        }}
                        required
                      />
                    </div>
                  </TableCell>

                  <TableCell colSpan={2} className="p-0" align="left">
                    <TextField
                      name={`rfq_details[${ind}].quantity`}
                      size="small"
                      variant="outlined"
                      type="number"
                      fullWidth
                      defaultValue={item.quantity || ""}
                      onChange={handleChange}
                      required
                    />
                  </TableCell>
                  <TableCell colSpan={5} className="p-0" align="left">
                    <TextField
                      name={`rfq_details[${ind}].descriptionss`}
                      size="small"
                      variant="outlined"
                      type="textarea"
                      fullWidth
                      value={item.descriptionss || ""}
                      onChange={handleChange}
                      required
                    />
                  </TableCell>
                  <TableCell colSpan={2} className="p-0" align="left">
                    {/* <TextField
                      name={`rfq_details[${ind}].discount`}
                      size="small"
                      variant="outlined"
                      type="number"
                      fullWidth
                      value={item.discount || ""}
                      onChange={handleChange}
                      InputProps={{
                        style: {
                          paddingRight: 0,
                        },
                        endAdornment: (
                          <Select
                            name={`rfq_details[${ind}].discountType`}
                            margin="none"
                            variant="standard"
                            disableUnderline
                            value={item.discountType || "%"}
                            onChange={handleChange}
                          >
                            <MenuItem value="$">$</MenuItem>
                            <MenuItem value="%">%</MenuItem>
                          </Select>
                        ),
                      }}
                    /> */}
                  </TableCell>
                  {/* <TableCell colSpan={2} className="p-0" align="center">
                    {calculateAmount(item).toFixed(2)}
                  </TableCell> */}
                  <TableCell colSpan={1} className="p-0" align="center">
                    <IconButton
                      size="small"
                      onClick={() => arrayHelpers.remove(ind)}
                    >
                      <Icon color="error" fontSize="small">
                        delete
                      </Icon>
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Button
            className="mt-4"
            color="primary"
            variant="contained"
            size="small"
            onClick={() => arrayHelpers.push({})
            }
          >
            + Add New 
          </Button>
        </div>
      )}
    </FieldArray>
  );
};

export default InvoiceItemTable;
