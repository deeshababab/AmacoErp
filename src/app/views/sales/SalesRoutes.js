import React from "react";

const salesRoutes = [
    {
        path: "/sales/rfq-form/rfqview",
        component: React.lazy(() => import("./rfq-form/rfqview")),
    },
    {
        path: "/sales/rfq-form/analysisform",
        component: React.lazy(() => import("./rfq-form/analysisform")),
    },
    {
        path: "/sales/rfq-form/rfqanalysis",
        component: React.lazy(() => import("./rfq-form/rfqanalysis"))
    },
    {
        path: "/sales/rfq-form/rfqform",
        component: React.lazy(() => import("./rfq-form/Rfqform")),
    },
    {
        path: "/sales/Viewanalysis",
        component: React.lazy(() => import("./Viewanalysis")),
    },
    {
        path: "/sales/rfq-form/rfqview",
        component: React.lazy(() => import("./rfq-form/rfqview")),
    },
    {
        path: "/sales/quoate-form",
        component: React.lazy(() => import("./quoate-form/Quoateform")),
    },
    {
        path: "/quoateview",
        component: React.lazy(() => import("./quoate-form/Quoateview")),
    },
    {
        path: "/Newinvoiceview",
        component: React.lazy(() => import("./Newinvoiceview")),
    },
    {
        path: "/rfqproductview",
        component: React.lazy(() => import("./rfq-form/rfqproductview")),
    },

    {
        path: "/sales/invoice",
        component: React.lazy(() => import("./Invoice")),
    },
    {
        path: "/sales/quoatation",
        component: React.lazy(() => import("./Quoatation")),
    },
    {
        path: "/sales/salesreturn",
        component: React.lazy(() => import("./Salesreturn")),
    },
    {
        path: "/inv",
        component: React.lazy(() => import("./inv")),
    },
    {
        path: "/updatesidebar",
        component: React.lazy(() => import("./updatesidebar")),
    },
    


];

export default salesRoutes;
