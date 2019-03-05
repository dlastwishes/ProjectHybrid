getUrl = () => "https://web.sit.kmutt.ac.th/sanit/int493/";

getImageUrl = () => getUrl()+"products/images/"

fetchProducts = () => {
    return fetch(getUrl()+"/products.php").then((res) => res.json).then((response) => {
        return response.products
    })
}

export default {getUrl , getImageUrl , fetchProducts}