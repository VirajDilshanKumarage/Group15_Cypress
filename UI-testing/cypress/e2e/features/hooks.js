import LoginPage from "./login/loginPage";

const username = 'Admin';
const password = 'admin123';

const LoginAsValidUser = () => {
  LoginPage.visit();
  LoginPage.enterUserName(username);
  LoginPage.enterPassword(password);
  LoginPage.submit();
  LoginPage.seeHomePage();
};

export default LoginAsValidUser;



