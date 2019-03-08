getParksUrl = () => 'http://web.sit.kmutt.ac.th/sanit/int493/parks/'

getParksImageThumbUrl = () => getParksUrl()+'img/thumbs/'

getParksImageHeaderUrl = () => getParksUrl() + 'img/headers/'

function getParksData() {
    return  fetch(getParksUrl()+'parksall.php')
    .then(response => response.json())
    .then(responseJson => {
        return responseJson.parks
      })
    .catch((error)=> {console.log(error)})

}

export default { getParksUrl , getParksImageThumbUrl , getParksImageHeaderUrl , getParksData }