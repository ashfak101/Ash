const products =[
    {name:'laptop', price:32000, brand:'lenovo', color: 'silver'},
    {name:'phone', price:7000, brand:'iphone', color: 'silver'},
    {name:'watch', price:3200, brand:'casio', color: 'goloden'},
    {name:'sunglass', price:300, brand:'ribon', color: 'black'},
    {name:'camera', price:52000, brand:'lenovo', color: 'gray'}
    
]
const brands=products.map(product=>product.brand)
// console.log(brands)



// products.forEach(product=>console.log(product))

const cheap =products.filter(product=>product.price <=5000)
// console.log(cheap)

const specificName =products.filter(product=>product.name.includes('n'))
// console.log(specificName)