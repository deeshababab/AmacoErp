import React, { useState, useEffect } from "react";
import {
  Grid,
  Card,
  Avatar,
  Divider,
  Button,
  Icon,
  Tab,
  Tabs,
  TablePagination,
} from "@material-ui/core";
import { Breadcrumb } from "matx";
import Axios from "axios";
import logo from "../../../matx/components/logo.png"
// import ProfileCard2 from "./ProfileCard2";
import Bank_Account from "./bankaccount";
import CompanyInfo from "./companyInfo";
import useAuth from "../../../app/hooks/useAuth";

const UserList4 = () => {
  const [isAlive, setIsAlive] = useState(true);
  const [userList, setUserList] = useState([]);
  const [tabIndex, setTabIndex] = useState(0);
  const {
    isAuthenticated,
     user
  } = useAuth();

  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleTabChange = (e, value) => {
    setTabIndex(value);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    // Axios.get("/api/user/all").then(({ data }) => {
    //   if (isAlive) setUserList(data);
    // });
    // return () => setIsAlive(false);
  
      
    
  }, [isAlive]);

  return (
    <div className="m-sm-30">
      <div className="mb-sm-30">
        <Breadcrumb
          routeSegments={[
            // { name: "Pages", path: "/pages" },
            { name: "Profile" },
          ]}
        />
      </div>
      <Grid container spacing={2}>
        <Grid item md={4} sm={12} xs={12}>
          <Card className="pb-8" elevation={6}>
            <div className="p-8 flex-column items-center" style={{backgroundColor:"#222a45f5"}}>
              <Avatar
                className="h-100 w-100 mb-1"
                
                
              >
                  <Icon>people</Icon>
                  </Avatar>
              {/* <img src={logo} width={200} height={200}></img> */}
              
            </div>
            <Divider className="mb-8" />
            <div className="mb-8">
              
                <>
              <Button variant="text" className="w-full justify-start px-3">
                
               <span className="ml-2">Name: <strong>{user.name}</strong></span>
              </Button>
              <Button variant="text" className="w-full justify-start px-3">
                
              <span className="ml-2">Email: <strong>{user.email}</strong></span>
              </Button>
              <Button variant="text" className="w-full justify-start px-3">
                
              <span className="ml-2">Contact: <strong>{user.contact}</strong></span>
              </Button>
              </>
              
              
            </div>
            
          </Card>
        </Grid>
        <Grid item md={8} sm={12} xs={12}>
          {/* {userList
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((user, ind) => (
              <ProfileCard2 key={user.id} user={user} />
            ))} */}
        
            <Card elevation={3}>
            <Tabs
        className="mt-4"
        value={tabIndex}
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="primary"
      >
        {tabList.map((item, ind) => (
          <Tab className="capitalize"   value={ind} label={item} key={ind} />
        ))}
      </Tabs>
      <Divider className="mb-6" />

       {tabIndex === 0 && <CompanyInfo />}
      {tabIndex === 1 && <Bank_Account />}
      
    
            </Card>
         
        </Grid>
      </Grid>
    </div>
  );
};

export default UserList4;
const tabList = ["Company", "Account"];