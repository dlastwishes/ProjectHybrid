
function getUrl() { return 'https://web.sit.kmutt.ac.th/sanit/int493/'}

function fetchContacts() {
        return fetch(getUrl()+'contacts.php')
}

export default { fetchContacts , getUrl};