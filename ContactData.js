// let fetch = require('node-fetch')

function getUrl() {
    return "http://web.sit.kmutt.ac.th/sanit/int493/"
  }

function fetchContacts(){
  let url = getUrl()+'contacts.php'

  return  fetch(url)
          .then(response => response.json())
          .then(responseJson => responseJson.contacts)
          .catch((error)=> {console.log(error)})
}


fetchContacts().then(contacts=>{console.log(contacts)})

export default {getUrl:getUrl,fetchContacts:fetchContacts}