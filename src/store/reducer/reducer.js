const initialState ={
    orders: [],
    products : [ 
        {name:"Guns'n'Roses torba", category:'woman', descr:"unisex Guns'n'Roses ruksak-tamno siva-30x60cm", price: 30, stars:'⭐⭐⭐⭐', img:'https://assets.bigcartel.com/product_images/239941916/guns+n+roses+drawstring+bag+stokedville.jpg?auto=format&fit=max&w=900'},
        {name:"Metallica prsten", category:'men', descr:'prsten unisex-Metallica-veličina medium', price: 10, stars:'⭐⭐⭐⭐⭐', img:'https://i.pinimg.com/originals/ab/f3/0f/abf30f5179745126cb2955332682e751.jpg'},
        {name:"AC/DC lančić", category:'men', descr:"unisex AC/DC lančić-crvena-veličina 19cm", price: 12, stars:'⭐⭐⭐⭐', img:'http://sc01.alicdn.com/kf/HTB1FJVQKVXXXXXxapXXq6xXFXXXX.jpg'},
        {name:"Misfits majica", category:'men', descr:"muška Misfits majica-crna-veličina large", price: 30, stars:'⭐⭐⭐⭐', img:'http://images.backstreetmerch.com/images/products/bands/clothing/misf/bsi_misf491.jpg'},
        {name:"Misfits majica 2", category:'woman', descr:"muška Misfits majica-crna-veličina large", price: 30, stars:'⭐⭐⭐⭐', img:'http://images.backstreetmerch.com/images/products/bands/clothing/misf/bsi_misf491.jpg'},
        {name:"Misfits majica 3", category:'men', descr:"muška Misfits majica-crna-veličina large", price: 30, stars:'⭐⭐⭐⭐', img:'http://images.backstreetmerch.com/images/products/bands/clothing/misf/bsi_misf491.jpg'}
    ]



}
 

const reducer = (state=initialState, action) =>{
    switch (action.type) {
        case ('ADD_ORDER'):
           
            return {
                ...state,
                orders: [...state.orders, state.products[action.orderInd]]
            }
        case ('DELETE_ITEM'):
            const copyOrders= [...state.orders]
            copyOrders.splice(action.ind, 1)
            return {
                ...state,
                orders: copyOrders
            }
    
        default:
           return state
    }
}


export default reducer