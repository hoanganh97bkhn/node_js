import express from 'express';
import {home, auth} from './../controllers/index';
import {authValid} from './../validation/index';
import passPort from 'passport';
import initPassportLocal from './../controllers/passportController/local';

//Init all passPort
initPassportLocal();

let router = express.Router();

/**
 * Init all routers
 * @param app from exactly express module
 */

 let initRoutes = (app) => {
  router.get("/" , home.getHome);
  router.get("/login-register" ,auth.getLoginRegister);
  router.post("/register",authValid.register, auth.postRegister);
  router.get("/verify/:token", auth.verifyAccount);

  router.post("/login", passPort.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login-register",
    successFlash: true,
    failureFlash: true,
  }));

  return app.use("/", router);
 };

 module.exports = initRoutes;