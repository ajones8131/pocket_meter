/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'pocket-meter',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV['ember-cli-mirage'] = {
      enabled: false
    }
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV['ember-cli-mirage'] = {
      enabled: false
    }
  }
  //
  ENV.remote_couch = 'http://localhost:5984/pocket_meter_db';
  ENV.local_couch = 'pocket_meter_db';
  if (environment === 'production') {
    ENV.baseURL = '/';
    ENV.remote_couch = 'https://oundishavedlenestandomal:8afb7d44170457e75e12e1f71f33aca55da2b5e4@ajones8131.cloudant.com/pocket_meter_db/_all_docs';
  }
  ENV.contentSecurityPolicy = {
    'connect-src': "'self' " + ENV.remote_couch.substring(0, ENV.remote_couch.indexOf('/', 9))
  };

  return ENV;
};
