
// 1
const joinValuesOfSideBar=(value)=>{
        return value.split(" ").join("")
}
// 2
const shortenText=(text)=>{
        return text.split(" ").slice(0,3).join(" ")
    }
// 3
function filtered(query,products){
        if(!query || query.trim() === '') return products
        const filteredProducts= products.filter(p=>p.title.toLowerCase().trim().includes(query.trim()))
        return filteredProducts
    }




export  default joinValuesOfSideBar
export {shortenText,filtered}