import React from "react";
import { Redirect } from "react-router-dom";

import dashboardRoutes from "./views/dashboard/DashboardRoutes";
import utilitiesRoutes from "./views/utilities/UtilitiesRoutes";

import materialRoutes from "./views/material-kit/MaterialRoutes";
import chartsRoute from "./views/charts/ChartsRoute";
import dragAndDropRoute from "./views/Drag&Drop/DragAndDropRoute";
import invoiceRoutes from "./views/invoice/InvoioceRoutes";
import QuoteRoute from "./views/Quoteinvoice/QuoteRoute";
import NewinvoiceRoutes from "./views/Newinvoice/NewinvoviceRoutes"
import calendarRoutes from "./views/calendar/CalendarRoutes";
import crudRoute from "./views/CRUD/CrudRoutes";
import inboxRoute from "./views/inbox/InboxRoutes";
import demoRoutes from "./views/demo/demoRoutes"
import formsRoutes from "./views/forms/FormsRoutes";
import partyRoutes from "./views/party/PartyRoutes";
import productRoutes from "./views/product/productRoutes";
import salesRoutes from "./views/sales/SalesRoutes";
import mapRoutes from "./views/map/MapRoutes";
import chatRoutes from "./views/chat-box/ChatRoutes";
import todoRoutes from "./views/todo/TodoRoutes";
import pageLayoutRoutes from "./views/page-layouts/PageLayoutRoutees";
import ListRoute from "./views/list/ListRoute";

import pricingRoutes from "./views/pricing/PricingRoutes";
import scrumBoardRoutes from "./views/scrum-board/ScrumBoardRoutes";
import ecommerceRoutes from "./views/ecommerce/EcommerceRoutes";
import pagesRoutes from "./views/pages/pagesRoutes";
import dataTableRoutes from "./views/data-table/dataTableRoutes";
import invRoutes from "./views/inv/invRoutes";
import ExpenseRoutes from "./views/expense/ExpenseRoutes";
const redirectRoute = [
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/ " />,
  },
];

// const errorRoute = [
//   {
//     component: () => <Redirect to="/session/404" />,
//   },
// ];

const routes = [
  ...dashboardRoutes,
  ...ExpenseRoutes,
  ...invRoutes,
  ...QuoteRoute,
  ...NewinvoiceRoutes,
  ...demoRoutes,
  ...partyRoutes,
  ...productRoutes,
  ...salesRoutes,
  ...materialRoutes,
  ...utilitiesRoutes,
  ...chartsRoute,
  ...dragAndDropRoute,
  ...calendarRoutes,
  ...invoiceRoutes,
  ...crudRoute,
  ...inboxRoute,
  ...formsRoutes,
  ...mapRoutes,
  ...chatRoutes,
  ...todoRoutes,
  ...scrumBoardRoutes,
  ...ecommerceRoutes,
  ...pageLayoutRoutes,
  ...pricingRoutes,
  ...ListRoute,
  ...pagesRoutes,
  ...dataTableRoutes,
  ...redirectRoute,
  // ...errorRoute,
];

export default routes;
