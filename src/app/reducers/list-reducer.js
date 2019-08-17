const initState = {
	"productsDetails": []
}

const listReducer = (state=initState, action) => {
	switch(action.type){
		case "SET_STATE":
			return Object.assign({}, state, action.payload);
		default:
			return state;
	}
};

export default listReducer;