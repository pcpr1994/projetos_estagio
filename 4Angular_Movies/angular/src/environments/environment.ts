import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'MvcMovie',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44343/',
    redirectUri: baseUrl,
    clientId: 'MvcMovie_App',
    responseType: 'code',
    scope: 'offline_access MvcMovie',
    requireHttps: true,
  },
  apis: {
    default: {
      url: 'https://localhost:44343',
      rootNamespace: 'MvcMovie',
    },
  },
} as Environment;
