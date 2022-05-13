const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserEmail = state => state.auth.user.email;
const getUsername = state => state.auth.user.name;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getUserEmail
};
export default authSelectors;