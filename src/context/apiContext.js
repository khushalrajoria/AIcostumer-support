const url=`${import.meta.env.VITE_API_URL}/api`

console.log(url)

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