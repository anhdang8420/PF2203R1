const EMAIL = "anhdang8420@gmail.com";
const PASSWORD = "123456";
function validateFormLogin() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if (email !== EMAIL || password !== PASSWORD) {
        alert("Email hoặc mật khẩu đăng nhập không hợp lệ!");
        return false;
    } else if (email === EMAIL && password === PASSWORD) {
        localStorage.setItem("username",EMAIL)
        alert("Đăng nhập thành công!")
    }
}
