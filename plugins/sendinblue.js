import Vue from 'vue'
import SibApiV3Sdk from 'sib-api-v3-sdk'

const defaultClient = SibApiV3Sdk.ApiClient.instance

const apiKey = defaultClient.authentications['api-key']
apiKey.apiKey = process.env.SIB_API_KEY

const apiInstance = new SibApiV3Sdk.ContactsApi()

Vue.prototype.$postEmailSib = (email) => {
  apiInstance.createContact({ 
    email, 
    listIds: [9] 
  })
}
