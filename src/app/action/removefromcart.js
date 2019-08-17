export function removefromcart(prodID) {
	return {
		type: "REMOVE_FROM_CART",
		payload: prodID
	}
}