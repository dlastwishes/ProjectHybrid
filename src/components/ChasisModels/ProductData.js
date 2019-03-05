function getUrl () { return "https://web.sit.kmutt.ac.th/sanit/int493/" }

function getImageUrl () { return getUrl()+"products/images/"}

function fetchProducts(){
    return  fetch(getUrl()+'products.php')
          .then(response => response.json())
          .then(responseJson => {
              
              console.log(responseJson.products)
              return responseJson.products
            })
          .catch((error)=> {console.log(error)})
}


export default {getUrl , getImageUrl , fetchProducts}