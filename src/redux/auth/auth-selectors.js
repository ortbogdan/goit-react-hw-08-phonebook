const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserEmail = state => state.auth.user.email;
const getUsername = state => state.auth.user.name;
const getUserToken = state => state.auth.token;
const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getUserEmail,
  getUserToken
};
export default authSelectors;