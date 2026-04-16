export const environment = {
  production: true,
  gatewayBaseUrl: 'http://56.228.52.104:8080',
  apiUrl: 'http://56.228.52.104:8080/api',
  authEndpoints: {
    login: '/auth/login',
    register: '/auth/register',
    refresh: '/auth/refresh',
    logout: '/auth/logout',
    forgotPassword: '/auth/forgot-password',
    resetPassword: '/auth/reset-password'
  },
  oauth: {
    googleAuthorizeUrl: 'http://56.228.52.104:8080/oauth2/authorize/google?redirect_uri=https://your-render-app.onrender.com/oauth2/redirect'
  },
  storage: {
    authSessionKey: 'qm_auth_session'
  }
};
