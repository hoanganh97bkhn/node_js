let getLoginRegister = (req,res) => {
  return res.render("auth/loginRegister")
};

let getLogout = (req, res) => {
  //todo something
}

module.exports = {
  getLoginRegister,
  getLogout
};
