const initState = {
	addedProductCount: 0,
	addedProducts: []
}

const cartreducer = (state=initState, action) => {
	switch(action.type){
		case "ADD_TO_CART":
			return {
				...state,
				addedProductCount:action.payload.cartCount,
				addedProducts:action.payload.prodList
			}
		case "REMOVE_FROM_CART":
			return {
				...state,
				addedProductCount: action.payload.cartCount-1
			}
		default:
			return state;
	}
};

export default cartreducer;