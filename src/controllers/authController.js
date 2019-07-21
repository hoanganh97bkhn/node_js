let getLoginRegister = (req,res) => {
  return res.render("auth/master")
};

let getLogout = (req, res) => {
  //todo something
}

module.exports = {
  getLoginRegister,
  getLogout
};
