const express = require("express");
const authRoute = require("./auth.route");
const dashboardRoute = require("./dashboard.route");

//  create a express router
const router = express.Router();

// defining default routes and paths
const defaultRoutes = [
  {
    path: "/login",
    route: authRoute,
  },
  {
    path: "/dashboard",
    route: dashboardRoute,
  },
];

// using router
defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
