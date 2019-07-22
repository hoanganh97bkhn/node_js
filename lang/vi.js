export const transValidation = {
  email_incorrect: "Email phải có dạng exmaple@abc.com!",
  gender_incorrect: "Ủa, tại sao trường giới tính lại bị sai?",
  password_incorrect: "Mật khẩu chứ ít nhất 8 ký tự, bao gổm kí tự và số",
  password_confirmation_incorrect: "Nhập lại mật khẩu chưa chính xác",
};

export const transErrors = {
  account_in_use : "Email này đã được sử dụng",
  account_removed : "Tài khoản này đã bị gỡ khỏi hệ thống, nếu tin rằng điều này là hiểu nhầm vui lòng liên hệ lại với bộ phận hỗ trợ",
  account_not_active : "Email này đã đăng ký, nhưng chưa active tài khoản, vui lòng kiểm tra email của bạn hoặc liên hệ với bộ phận hỗ trợ"
}

export const transSuccess = {
  userCreated : (userEmail) => {
    return `Tài khoản <strong>${userEmail}</strong> đã được tạo, vui lòng kiểm tra lại email của bạn để kích hoạt tài khoản trước khi đăng nhập. Xin cảm ơn!`
  }
}