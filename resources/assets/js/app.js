//need to run the command: npm run dev
//Passport clients
Vue.component(
  'passport-clients',
  require('./components/passport/Clients.vue')
);

//Passport authorized clients
Vue.component(
  'passport-authorized-clients',
  require('./components/passport/AuthorizedClients.vue')
);

//Passport personal tokens access
Vue.component(
  'passport-personal-access-tokens',
  require('./components/passport/PersonalAccessTokens.vue')
);
