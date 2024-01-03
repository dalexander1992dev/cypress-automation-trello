const { defineConfig } = require('cypress');
const { getEnv } = require('./config/environment-handler')
const {
  beforeRunHook,
  afterRunHook,
} = require('cypress-mochawesome-reporter/lib')


module.exports = defineConfig({
 reporter: 'cypress-mochawesome-reporter',

  e2e: {
    experimentalModifyObstructiveThirdPartyCode: true,
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
      config.env.envCredentials = getEnv(config.env.envSelected)

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
