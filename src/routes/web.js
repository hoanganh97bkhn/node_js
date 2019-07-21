import express from 'express';
import {home, auth} from './../controllers/index';
import {auValid} from './../validation/index'

let router = express.Router();

/**
 * Init all routers
 * @param app from exactly express module
 */

 let initRoutes = (app) => {
  router.get("/" , home.getHome);
  router.get("/login-register" ,auth.getLoginRegister);
  router.post("/register",auValid.register, auth.postRegister)

  return app.use("/", router);
 };

 module.exports = initRoutes;