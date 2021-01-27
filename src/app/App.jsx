import "../fake-db";
import React from "react";
import { Provider } from "react-redux";
import { Router, Switch, Route } from "react-router-dom";
import AppContext from "./contexts/AppContext";
import history from "history.js";
import routes from "./RootRoutes";
import { Store } from "./redux/Store";
import { GlobalCss, MatxSuspense, MatxTheme, MatxLayout } from "matx";
import sessionRoutes from "./views/sessions/SessionRoutes";
import AuthGuard from "./auth/AuthGuard";
import { AuthProvider } from "app/contexts/FirebaseAuthContext";
import { SettingsProvider } from "app/contexts/SettingsContext";

const App = () => {
  return (
    <AppContext.Provider value={{ routes }}>
      <Provider store={Store}>
        <SettingsProvider>
          <MatxTheme>
            <GlobalCss />
            <Router history={history}>
               {/* <AuthProvider> */}
                <MatxSuspense>
                  <Switch> 
                    {/* AUTHENTICATION PAGES (SIGNIN, SIGNUP ETC.) */}
                    {sessionRoutes.map((item, i) => (
                      <Route
                        key={indexedDB}
                        path={item.path}
                        component={item.component}
                      />
                    ))}
                    {/* AUTH PROTECTED DASHBOARD PAGES */}
                    {/* <AuthGuard> */}
                      <MatxLayout />
                    {/* </AuthGuard> */}
                  </Switch> 
                </MatxSuspense>
              {/* </AuthProvider>  */}
            </Router>
          </MatxTheme>
        </SettingsProvider>
      </Provider>
    </AppContext.Provider>
  );
};

export default App;
