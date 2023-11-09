const baseUrl = Cypress.env('envCredentials').baseUrl
const apiKey = Cypress.env('envCredentials').apiKey
const apiToken = Cypress.env('envCredentials').apiToken

export default class ApiCalls {

    post(endpoint, body) {
        return this.#sendRequest({
            apiOperation: 'POST',
            endpoint: endpoint,
            body: body,
            alias: 'postResponse',
        })
    }

    get(endpoint){
        return this.#sendRequest({
            apiRequestType: 'GET',
            endpoint: endpoint,
            body: null,
            alias: 'getReponse'
        })
    }

    delete(endpoint) {
        return this.#sendRequest({
            apiOperation: 'DELETE',
            endpoint: endpoint,
            body: null,
            alias: 'deleteResponse',
        })
    }

    put(endpoint, body) {
        return this.#sendRequest({
            apiOperation:'PUT',
            endpoint: endpoint,
            body: body,
            alias: 'putResponse',
        })
    }

    #sendRequest(requestData){
        let urlPath = '/1/'

        return cy.request({
            method: requestData.apiOperation,
            url: `${baseUrl}${urlPath}/${requestData.endpoint}?key=${apiKey}&token=${apiToken}`,
            failOnStatusCode: false,
            body: requestData.body,
            headers: {}, 
        }).as(requestData.alias)
    }
}