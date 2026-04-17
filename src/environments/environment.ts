export const environment = {
  production: false,
  gatewayBaseUrl: '/api',
  apiUrl: '/api',
  authEndpoints: {
    login: '/auth/login',
    register: '/auth/register',
    refresh: '/auth/refresh',
    logout: '/auth/logout',
    forgotPassword: '/auth/forgot-password',
    resetPassword: '/auth/reset-password'
  },
  oauth: {
    googleAuthorizeUrl: '/oauth2/authorize/google?redirect_uri=http://56.228.52.104/oauth2/redirect'
  },
  storage: {
    authSessionKey: 'qm_auth_session'
  }
};

