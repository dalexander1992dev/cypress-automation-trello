const credentials = require('./dev-credentials.json')

exports.getEnv = function(envSelected){

    let environmentList = {
        'dev': credentials
    }
    console.log('env selected: '+ envSelected)
    return (environmentList[envSelected] || environmentList['dev'])
}