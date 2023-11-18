const express = require("express");
const authRoute = require("./auth.route");

//  create a express router
const router = express.Router();

// defining default routes and paths
const defaultRoutes = [
  {
    path: "/login",
    route: authRoute,
  },
];

// using router
defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
