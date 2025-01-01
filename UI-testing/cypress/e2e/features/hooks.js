import LoginPage from "./login/loginPage";
require('cypress-xpath');

const username = 'Admin';
const password = 'admin123';

const LoginAsValidUser = (USERNAME, PASSWORD) => {

  if(USERNAME == '' && PASSWORD == '')
  {  LoginPage.visit();
    LoginPage.enterUserName(username);
    LoginPage.enterPassword(password);
    LoginPage.submit();
    LoginPage.seeHomePage();
  }else{
    LoginPage.visit();
    LoginPage.enterUserName(USERNAME);
    LoginPage.enterPassword(PASSWORD);
    LoginPage.submit();
    LoginPage.seeHomePage();
  }

};

export default LoginAsValidUser;



