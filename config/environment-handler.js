const credentials = require('./dev-credentials.json')

exports.getEnv = function(envSelected){

    let environmentList = {
        'dev': credentials
    }
    return (environmentList[envSelected] || environmentList['dev'])
}