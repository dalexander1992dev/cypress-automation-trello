const { defineConfig } = require('cypress')

const { getEnv } = require('./config/environment-handler')
const {
  beforeRunHook,
  afterRunHook,
} = require('cypress-mochawesome-reporter/lib')


module.exports = defineConfig({
 reporter: 'cypress-mochawesome-reporter',
 chromeWebSecurity: true,
 viewportWidth: 1440,
 viewportHeight: 900,
  e2e: {
    experimentalOriginDependencies: true,
    experimentalModifyObstructiveThirdPartyCode: true,
    
    setupNodeEvents(on, config) {

      // implement node event listeners here
      console.log('comment from cypress.config.js file: ' + config.env.envSelected)
      
      config.env.envCredentials = getEnv(config.env.envSelected)
      config.env.credentials = getEnv(config.env.envSelected.credentials)
      console.log('Print from cypress.config.js: '+JSON.stringify(config.env.credentials))
      require('@cypress/grep/src/plugin')(config);
      require('cypress-mochawesome-reporter/plugin')(on);

      on('before:run', async (details) => {
        console.log('override before:run')
        await beforeRunHook(details)
      })
      on('after:run', async () => {
          console.log('override after:run')
          await afterRunHook()
      })
      return config
    },
  },
});
