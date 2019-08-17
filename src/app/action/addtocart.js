export function addtocart(prodID) {
	return {
		type: "ADD_TO_CART",
		payload: prodID
	}
}