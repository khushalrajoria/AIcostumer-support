const url=`${import.meta.env.API_URL}/api`

export const apiContext = {
  getChatsUrl: `${url}/chatbot/getallchats`,
  chatUrl:`${url}/chatbot/chat`,
  registerUrl: `${url}/auth/signup`,
  signInUrl:`${url}/auth/loginwithpassword`,
  tokenUrl:`${url}/auth/loginwithtoken`,
  forgotPasswordUrl:`${url}/auth/forgotpassword`,
  logoutUrl:`${url}/auth/logout`

};

export default apiContext