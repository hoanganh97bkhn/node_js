export const transValidation = {
  email_incorrect: "Email phải có dạng exmaple@abc.com!",
  gender_incorrect: "Ủa, tại sao trường giới tính lại bị sai?",
  password_incorrect: "Mật khẩu chứ ít nhất 8 ký tự, bao gổm kí tự và số",
  password_confirmation_incorrect: "Nhập lại mật khẩu chưa chính xác",
};

export const transErrors = {
  account_in_use : "Email này đã được sử dụng",
  account_removed : "Tài khoản này đã bị gỡ khỏi hệ thống, nếu tin rằng điều này là hiểu nhầm vui lòng liên hệ lại với bộ phận hỗ trợ",
  account_not_active : "Email này đã đăng ký, nhưng chưa active tài khoản, vui lòng kiểm tra email của bạn hoặc liên hệ với bộ phận hỗ trợ",
  token_undefined : "Token không tồn tại",
  login_failed : "Sai tài khoản hoặc mật khẩu!",
  server_error : "Có lỗi ở phía server, vui lòng liên hệ với bộ phận hỗ trỡ của chúng tối để báo cáo về lỗi này"
}

export const transSuccess = {
  userCreated : (userEmail) => {
    return `Tài khoản <strong>${userEmail}</strong> đã được tạo, vui lòng kiểm tra lại email của bạn để kích hoạt tài khoản trước khi đăng nhập. Xin cảm ơn!`
  },
  account_actived: "Kích hoạt tài khoản thành công, bạn đã có thể đăng nhập vào ứng dụng",
  loginSuccess: (username) => {
    return `Xin chào ${username}, chúc vui vẻ !`
  }
}

export const transMail = {
  subject: "Awesome Chat:  Xác nhận kích hoạt tài khoản",
  template: (linkVerify) => {
    return `
      <h2>Bạn nhận được email này vì đã đăng ký tài khoản trên ứng dụng Awesome Chat. </h2>
      <h3>Vui lòng click vào liên kết bên dưỡi để xác nhận kích hoạt tài khoản </h3>
      <h3><a href = ${linkVerify}>${linkVerify}</a></h3>
    `
  },
  send_failed: "Có lỗi trong quá trình gửi email, vui lòng làm lại"
}