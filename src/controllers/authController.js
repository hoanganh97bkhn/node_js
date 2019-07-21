import {validationResult} from "express-validator/check";

let getLoginRegister = (req,res) => {
  return res.render("auth/master")
};

let postRegister = (req, res) => {
  let errorArr = [];

  let validationErrors = validationResult(req);
  if(!validationErrors.isEmpty()){
    let erros = Object.values(validationErrors.mapped());
    erros.forEach(item => {
      errorArr.push(item.msg)
    });
  }
  console.log(req.body);
}

module.exports = {
  getLoginRegister,
  postRegister
};
